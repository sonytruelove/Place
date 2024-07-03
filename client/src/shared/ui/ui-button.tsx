import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UIButtonVariant = "primary" | "secondary" | "outlined";
export type UIButtonProps = {
  variant: UIButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export function UIButton({ className, variant, ...props }: UIButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
          primary:
            "text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 shadow-sky-400/30",
          secondary:
            "border border-sky-300 hover:bg-neutral-100 disabled:opacity-50 shadow-neutral-50/30",
          outlined:
            "border border-sky-300 hover:bg-sky-500 disabled:opacity-50",
        }[variant],
      )}
    />
  );
}
