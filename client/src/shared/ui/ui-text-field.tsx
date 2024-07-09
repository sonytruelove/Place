import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UITextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};
export function UITextField({ className, error, label, inputProps }: UITextFieldProps) {
   const id = useId();
    return (
    <div className={clsx(className,"flex flex-col gap-1")}>
        {label && (
        <label htmlFor={id} className="block">{label}</label>
        )}
        <input {...inputProps} id={id} className={clsx(
            inputProps?.className, 
            "rounded border border-slate-300 focus:border-blue-600 px-2 h-10 outlined-none"
            )}/>
        {error && (
        <div className="text-rose-400 text-use">{error}</div>
        )}
    </div>
  );
}
