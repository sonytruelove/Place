import "@/app/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "./app.provider";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({subsets:["latin"],weight:"400"});
console.log(ubuntu);
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={ubuntu.className}>
      <Component {...pageProps} />;
      </div>
    </AppProvider>
  );
}
