import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Quiz - Quiz Rick e Morty",
  description: "Treinando next + fetch + typescript e utilizando API oficial do Rick and Morty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
