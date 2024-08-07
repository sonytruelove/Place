import clsx from "clsx";
import {
  InputHTMLAttributes,
  PropsWithRef,
  SelectHTMLAttributes,
  useId,
} from "react";

export type UICheckBoxProps = {
  className?: string;
  label?: string;
  error?: string;
  isChecked?: any;
  props?: PropsWithRef<InputHTMLAttributes<HTMLSelectElement>>;
};
export function UICheckBox({
  className,
  error,
  label,
  props,
}: UICheckBoxProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <input
        id={id}
        type="checkbox"
        className={clsx(
          "rounded border border-slate-300 focus:border-blue-600 px-2 h-10 outlined-none",
        )}
      />
      {error && <div className="text-rose-400 text-use">{error}</div>}
    </div>
  );
}
