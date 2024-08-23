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
        "px-4 h-10 rounded-sm cursor-pointer flex gap-2 items-center justify-center disabled:cursor-default disabled:pointer-events-none",
        {
          primary:
            "text-secondary-500 bg-primary-500 hover:bg-primary-600 disabled:opacity-50",
          secondary:
            "text-primary-500 border border-gray-300 bg-secondary-500 hover:bg-secondary-600 hover:border hover:border-primary-500 disabled:opacity-50 shadow-neutral-50/30",
          outlined:
            "border border-gray-500 hover:bg-gray-50 disabled:opacity-50",
        }[variant],
      )}
    />
  );
}
