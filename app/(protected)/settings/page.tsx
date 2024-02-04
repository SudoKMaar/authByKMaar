import { Metadata } from "next";
import { auth, signOut } from "@/auth";

export const metadata: Metadata = {
  title: "Settings",
};

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
