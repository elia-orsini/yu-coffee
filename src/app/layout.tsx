import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/website-font.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/website-font-b.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Yu's Coffee Map",
  description: "Yu's Coffee Map",
  openGraph: {
    title: "Yu's Coffee Map",
    description: "Yu's Coffee Map",
  },
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
