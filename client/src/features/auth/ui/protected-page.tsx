import { useSessionQuery } from "@/entities/session/queries";
import { authControllerGetSession } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import router from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const { isPending, isError } = useSessionQuery();
    if (isPending) return <UIPageSpinner className="text-primary-500" />;
    if (isError) router.replace(ROUTES.SIGN_IN);
    return <Component {...props} />;
  };
}
