import "@/app/globals.css";
import type { AppProps } from "next/app";
import { AppProvider } from "./app.provider";

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />;
    </AppProvider>
  );
}
