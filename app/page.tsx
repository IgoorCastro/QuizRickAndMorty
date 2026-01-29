'use client'
import { useRouter } from "next/navigation";
import Button from "./components/ui/Button/Button";
import Title from "./components/ui/Title";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-15 relative z-1 bg-zinc-50 font-sans dark:bg-black">
      <Title>
        Quiz - Rick and Morty
      </Title>
      <Button onClick={() => router.push("/quiz")}>Jogar</Button>
    </div>
  );
}
