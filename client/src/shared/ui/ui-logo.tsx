import clsx from "clsx";

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center justify-center gap-1 -m-5 text-2xl font-black text-gray-600")}>
      <Logo className="w-16 h-16 pb-3.5 fill-primary-400" />
      Place
    </div>
  );
}

export const Logo = ({ className }: { className?: string }) => (
    <svg className={className} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="48" height="48">
    <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path d="m0 0h1200v1200h-1200z"/>
        </clipPath>
    </defs>
    <g id="Clip-Path" clip-path="url(#cp1)">
        <g id="Layer">
            <path id="Layer" fill-rule="evenodd" d="m598.9 1025.3c-79.5 0-155.8-31.6-212.1-87.9-56.2-56.3-87.9-132.6-87.9-212.1 0-79.6 31.7-155.9 87.9-212.2 56.3-56.2 132.6-87.8 212.1-87.8 79.6 0 155.9 31.6 212.2 87.8 56.2 56.3 87.8 132.6 87.8 212.2 0 79.5-31.6 155.8-87.8 212.1-56.3 56.3-132.6 87.9-212.2 87.9zm0-75c59.7 0 117-23.7 159.1-65.9 42.2-42.2 65.9-99.5 65.9-159.1 0-59.7-23.7-116.9-65.9-159.1-42.1-42.2-99.4-65.9-159.1-65.9-59.6 0-116.9 23.7-159.1 65.9-42.1 42.2-65.9 99.4-65.9 159.1 0 59.6 23.8 116.9 65.9 159.1 42.2 42.2 99.5 65.9 159.1 65.9z"/>
            <path id="Layer" d="m189.1 913.7c9.9 0 19.5 3.9 26.5 11 7 7 11 16.5 11 26.5v300c0 9.9-4 19.5-11 26.5-7 7-16.6 11-26.5 11-10 0-19.5-4-26.5-11-7.1-7-11-16.6-11-26.5v-300c0-10 3.9-19.5 11-26.5 7-7.1 16.5-11 26.5-11z"/>
            <path id="Layer" d="m1050 937.5c0 103.5-201.5 187.5-450 187.5-248.6 0-450-84-450-187.5 0-81.7 300-100.7 300-100.7-133.9 21.4-225 67.8-225 100.7 0 44.2 163.9 112.5 375 112.5 211 0 375-68.3 375-112.5 0-33-91.1-79.3-225-100.7 0 0 300 19.1 300 100.7z"/>
        </g>
    </g>
</svg>
);