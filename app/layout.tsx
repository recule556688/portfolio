import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tess Dev - Portfolio",
  description: "A showcase of my work and skills",
  icons: {
    icon: "/logo.ico",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}