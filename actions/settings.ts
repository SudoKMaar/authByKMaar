"use server";
import * as z from "zod";
import { unstable_update } from "@/auth";
import { db } from "@/lib/db";
import { UpdateProfileSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/authentication";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const settings = async (values: z.infer<typeof UpdateProfileSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized" };
  }
  const dbUser = await getUserById(user.id);
  if (!dbUser) {
    return { error: "Unauthorized" };
  }
  let updateEmail = false;

  if (values.email && values.email !== user.email) {
    updateEmail = true;
  }

  if (updateEmail) {
    //@ts-ignore
    const existingUser = await getUserByEmail(values.email);

    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already exist." };
    }
    //@ts-ignore
    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: "Verification email sent!" };
  }

  const updatedUser = await db.user.update({
    where: { id: dbUser.id },
    data: {
      name: values.name,
      role: values.role,
      email: user.isOAuth || !updateEmail ? undefined : values.email,
      isTwoFactorEnabled: user.isOAuth ? undefined : values.isTwoFactorEnabled,
    },
  });

  unstable_update({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      isTwoFactorEnabled: updatedUser.isTwoFactorEnabled,
      role: updatedUser.role,
    },
  });

  return {
    success: !updateEmail
      ? "Profile updated."
      : "Profile updated & verification email sent.",
  };
};
