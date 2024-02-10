import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionProvider from "@/context/ActiveSession";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyank Thakur | Personal Portfolio",
  description: "Priyank is Software Engineer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} 
        bg-gray-50
        text-gray-950 pt-4 sm:pt-36`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 right-[35rem] h-[31.25rem] w-[60rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem]"></div> */}
        <ActiveSectionProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
