import { Logo } from "@/shared/ui/ui-logo";
import clsx from "clsx";

type PlacerProps = {
  name: string;
  discription: string;
  uniqueQuota: number;
};
export function PlacerCard({
  className,
  props,
}: {
  className?: string;
  props: PlacerProps;
}) {
  const { name, discription } = props;
  return (
    <div
      className={clsx(
        className,
        "flex flex-col justify-center items-center w-full ",
      )}
    >
      {" "}
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        <Logo className="w-16 h-16 pb-3.5 fill-primary-400" />
      </div>
      <span className="mt-1 text-lg font-medium text-gray-900">
        {discription}
      </span>
      <h3 className="mt-4 text-sm text-gray-700 order-last w-full text-right">
        {name}
      </h3>
    </div>
  );
}

export function Thumb({ className, src }: { className?: string; src: string }) {
  return <img src={src} className={clsx(className, "")} />;
}
