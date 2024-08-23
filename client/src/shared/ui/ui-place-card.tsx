import clsx from "clsx";
import { Logo } from "./ui-logo";

type UIPlaceProps = {
  owner: any;
  name: string;
};
export function UIPlaceCard({
  className,
  props,
}: {
  className?: string;
  props: UIPlaceProps;
}) {
  const { owner, name } = props;
  return (
    <div className={clsx(className, "justify-center items-center")}>
      {" "}
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Logo className="w-16 h-16 pb-3.5 fill-primary-400" />
      </div>
      <span className="mt-1 text-lg font-medium text-gray-900">{name}</span>
      <h3 className="mt-4 text-sm text-gray-700">{owner.name}</h3>
    </div>
  );
}

export function Thumb({ className, src }: { className?: string; src: string }) {
  return <img src={src} className={clsx(className, "")} />;
}
