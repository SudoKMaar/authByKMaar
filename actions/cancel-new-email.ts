"use server";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/authentication";
import { getVerificationTokenByEmail } from "@/data/verification-token";

export async function cancelNewEmail() {
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized." };
  }
  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized." };
  }

  await db.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      email: null,
    },
  });

  const existingToken = await getVerificationTokenByEmail(dbUser.id);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  return { success: "Email update canceled." };
}
