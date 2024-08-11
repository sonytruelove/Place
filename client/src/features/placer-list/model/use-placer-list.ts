import { placerListControllerGetAllPublic } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { PlacerQueryState } from "../type/placer-list.type";

const placerListKey = ["placer-list"] as unknown[];
export function usePlacerListQuery(q: PlacerQueryState) {
  if (!q) q = { skip: 0, take: 10 };
  const { data, isError, isLoading } = useQuery({
    queryFn: () => placerListControllerGetAllPublic(q),
    queryKey: placerListKey.concat([q]),
  });
  return {
    data,
    isError,
    isLoading,
  };
}
