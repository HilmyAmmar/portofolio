import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hilmy Ammar Darmawan",
  description: "Hilmy Ammar Darmawan's Website Portofolio",
  icons: {
    icon: '/logo.png',
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hilmy Ammar Darmawan</title>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-gradient-to-b from-[#000B18] via-[#001122] to-[#000B18]`}
      >
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
