import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flend",
  description: "Finance Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className=" light">
      
      <Providers>
        <body className={inter.className}>
          <Analytics/>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </Providers>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}/>
    </html>
  )
}
