import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type UISelectOptions = {
  value: string;
  label: string;
}
export type UISelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UISelectOptions[];
};
export function UISelectField({ className, error, label, selectProps: inputProps,options }: UISelectFieldProps) {
   const id = useId();
    return (
    <div className={clsx(className,"flex flex-col gap-1")}>
        {label && (
        <label htmlFor={id} className="block">{label}</label>
        )}
        <select {...inputProps} id={id} className={clsx(
            inputProps?.className, 
            "rounded border border-slate-300 focus:border-blue-600 px-2 h-10 outlined-none"
            )}>
              {options?.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)}
        </select>
        {error && (
        <div className="text-rose-400 text-use">{error}</div>
        )}
    </div>
  );
}
