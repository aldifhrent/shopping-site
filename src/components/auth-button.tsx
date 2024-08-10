import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

type SignInProps = {
  provider: "google" | "github";
};

const AuthButton = async (props: SignInProps) => {
  return (
    <Button
      onClick={async () => {
        "use server";
        await signIn(props.provider, {
          callbackUrl: "https://localhost:3000",
        });
      }}
      className="bg-transparent text-black no-hover"
      variant="outline"
    >
      Log In
    </Button>
  );
};

export default AuthButton;
