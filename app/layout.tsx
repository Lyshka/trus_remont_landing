import type { Metadata } from "next";
import "./globals.css";
import { proximaNova } from "@/fonts/ProximaNova/index";
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Ремонт ювелирных изделий",
  description: "Качественный и быстрый ремонт ювелирных изделий в Гродно",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(proximaNova.className)}>
        <NextTopLoader />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
