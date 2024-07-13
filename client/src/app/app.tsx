import "@/app/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";
import { AppProvider } from "./app.provider";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });
export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div className={ubuntu.className}>
        <Component {...pageProps} />;
      </div>
    </AppProvider>
  );
}
