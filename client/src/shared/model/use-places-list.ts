import { placeControllerGetAvailable } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PlaceQueryState } from "../types/placeList.type";

const placeListKey = ["places"] as unknown[];
export function usePlacesListQuery(q: PlaceQueryState) {
  if (!q) q = { skip: 0, take: 10 };
  const { data, isError, isLoading } = useQuery({
    queryFn: () => placeControllerGetAvailable(q),
    queryKey: placeListKey.concat([q]),
  });
  return {
    data,
    isError,
    isLoading,
  };
}
