import clsx from "clsx";
import { usePlacesListQuery } from "@/shared/model/use-places-list";
import { useSessionQuery } from "@/entities/session/queries";
import { UIPlaceCard } from "./ui-place-card";
import { UIPageSpinner } from "./ui-page-spinner";
import { PlaceQueryState, PlaceState } from "../types/placeList.type";

export default function UIPlaceList({
  className,
  state,
  queryState,
}: {
  className?: string;
  state: any & PlaceState;
  queryState?: PlaceQueryState;
}) {
  const sessionQuery = useSessionQuery();
  const sessionData = sessionQuery.data;
  const { data, isError, isLoading } = usePlacesListQuery(queryState);
  if (isError) {
    <div className="text-rose-500">"Loading failed"</div>;
  }
  if (isLoading) return <UIPageSpinner className="text-primary-500" />;
  return (
    <div className={clsx(className, "")}>
      {(data || [])
        /* .filter(e => {
                if (state.searchArea == "All")
                    return true
                if (state.searchArea == "My")
                    return e.ownerId == sessionData?.id
                return e.ownerId != sessionData?.id
            }) */
        .map((item) => (
          <UIPlaceCard
            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-2"
            props={item}
          />
        ))}
    </div>
  );
}
