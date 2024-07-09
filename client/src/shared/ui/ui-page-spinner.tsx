import clsx from "clsx";
import { UISpinner } from "./ui-spinner";

export function UIPageSpinner({className}:{className?:string}){
    return (
     <div 
     className={clsx(
        className,
        "fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-slate-100"
        )}
        >
        <UISpinner className="w-24 h-24"/>
    </div>
);
}