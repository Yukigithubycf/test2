import type { Metadata } from "next";
import { Pacifico, Quicksand } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Valentine's Day!",
  description: "A romantic surprise for my love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pacifico.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
