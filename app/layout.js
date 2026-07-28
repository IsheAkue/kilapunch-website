import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    default: "Kilapunch ERP Solutions | Sage ERP Consultants Zimbabwe",
    template: "%s | Kilapunch ERP Solutions",
  },

  description:
    "Kilapunch provides Sage ERP implementation, Sage Evolution support, accounting systems consulting, automation, and business technology solutions for businesses in Zimbabwe and Southern Africa.",

  keywords: [
    "Sage Evolution Zimbabwe",
    "Sage ERP Consultants Zimbabwe",
    "ERP Implementation Zimbabwe",
    "Sage Intacct Zimbabwe",
    "Sage Payroll Zimbabwe",
    "Sage 50 Pastel",
    "Palladium Accounting",
    "Accounting Software Zimbabwe",
    "Business Automation Zimbabwe",
    "ERP Support Zimbabwe",
  ],

  openGraph: {
    title:
      "Kilapunch ERP Solutions | Sage ERP Consultants Zimbabwe",

    description:
      "ERP implementation, Sage accounting solutions, automation, and business technology services.",

    url:
      "https://kilapuncherp.co.zw",

    siteName:
      "Kilapunch ERP Solutions",

    images:[
      {
        url:"/images/Logo.png",
        width:800,
        height:600,
        alt:"Kilapunch ERP Solutions Logo",
      }
    ],

    locale:"en_ZW",

    type:"website",
  },


  twitter:{
    card:"summary_large_image",

    title:"Kilapunch ERP Solutions",

    description:
      "ERP and accounting consultants helping businesses operate smarter.",

    images:[
      "/images/Logo.png"
    ],
  },


  robots:{
    index:true,
    follow:true,
  },

};


export default function RootLayout({ children }) {

return (

<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>

<body className="min-h-full flex flex-col">


<Navbar />


<main className="flex-grow">
{children}
</main>


<Footer />


</body>

</html>

);

}