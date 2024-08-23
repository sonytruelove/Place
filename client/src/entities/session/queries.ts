import { authControllerGetSession } from "@/shared/api/generated";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const sessionKey = ["session"];
export function useSessionQuery() {
  return useQuery({
    queryKey: sessionKey,
    queryFn: authControllerGetSession,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}
export function useResetSession() {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries({ queryKey: sessionKey });
}
