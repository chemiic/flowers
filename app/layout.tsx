import type { Metadata } from 'next'
import './globals.css'
import Burger from "@/components/menu/burger";
import Header from "@/components/menu/header";
import localFont from "@next/font/local";
import ToastProvider from "@/providers/toast-provider";
import Footer from "@/components/menu/Footer";

export const metadata: Metadata = {
  title: 'Алиссум',
  description: 'Generated by create next app',
}
const SFPro = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Light.otf",
      weight: "300",
    },
  ],
  variable: "--SFPro"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${SFPro.variable} font-sans`}>
        <Header />
        <ToastProvider />
        <Burger />
        <div className={`max-w-[1920px] mx-auto`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
