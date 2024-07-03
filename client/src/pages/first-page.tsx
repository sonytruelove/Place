import Image from "next/image";
import { Inter } from "next/font/google";
import {
  authControllerGetSession,
  authControllerSignIn,
  authControllerSignUp,
} from "@/share/api/generated";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { UIButton } from "@/shared/ui/ui-button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSession(),
  });
  console.log(data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
      <UIButton variant="primary">Work</UIButton>
      <UIButton variant="secondary">Work</UIButton>
      <UIButton variant="outlined">Work</UIButton>
      <UIButton disabled variant="outlined">
        Work
      </UIButton>
    </main>
  );
}
