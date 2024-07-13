import { UIButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { isPending, signOut } = useSignOut();
  return (
    <UIButton
      variant="outlined"
      disabled={isPending}
      onClick={() => signOut({})}
    >
      Sign Out
    </UIButton>
  );
}
