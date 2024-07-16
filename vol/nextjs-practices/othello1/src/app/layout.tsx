import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from '../components/Head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Othello Game by Next.js",
  description: "test",
};
export type CellValue = 'black' | 'white' | null;
export type BoardState = CellValue[][];
export type Player = 'black' | 'white';


export default function RootLayout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Head />
        {children}
      </body>
    </html>
  );
}
