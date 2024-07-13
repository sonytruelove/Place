import clsx from "clsx";
import Link from "next/link";

export type UILinkProps = {} & Parameters<typeof Link>[0];

export function UILink({ className, ...props }: UILinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-primary-500 hover:text-primary-600 cursor-pointer",
      )}
    />
  );
}
