import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { UIButton } from "@/shared/ui/ui-button";
import { UILink } from "@/shared/ui/ui-link";
import { UITextField } from "@/shared/ui/ui-text-field";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  const { register, errorMessage, handleSubmit, isPending } = useSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UITextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UITextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UIButton disabled={isPending} variant="primary">
        Sign In
      </UIButton>
      <UILink className="text-center" href={ROUTES.SIGN_UP}>
        Sign Up
      </UILink>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
}
