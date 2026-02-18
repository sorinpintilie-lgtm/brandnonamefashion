import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRAND Demo",
  description: "Pixel-perfect inspired demo for murmur.ro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`${jost.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
