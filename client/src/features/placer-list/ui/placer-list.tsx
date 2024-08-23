import clsx from "clsx";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { PlacerCard } from "./placer-card";
import { usePlacerListQuery } from "../model/use-placer-list";
import { PlacerQueryState } from "../type/placer-list.type";

export default function placerList({
  className,
  queryState,
}: {
  className?: string;
  queryState?: PlacerQueryState;
}) {
  const { data, isError, isLoading } = usePlacerListQuery(queryState!);
  if (isError) {
    <div className="text-rose-500">"Loading failed"</div>;
  }
  if (isLoading) return <UIPageSpinner className="text-primary-500" />;
  return (
    <div className={clsx(className, "")}>
      {(data || []).map((item) => (
        <PlacerCard
          className="p-4 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg border border-gray-300 xl:aspect-h-8 xl:aspect-w-2"
          props={item}
        />
      ))}
    </div>
  );
}
