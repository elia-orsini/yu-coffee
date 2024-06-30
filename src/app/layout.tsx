import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "../../public/fonts/website-font.ttf" });

export const metadata: Metadata = {
  title: "Yu's Cafes",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
