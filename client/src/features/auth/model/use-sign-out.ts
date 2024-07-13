import { useResetSession } from "@/entities/session/queries";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });
  return {
    isPending: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
