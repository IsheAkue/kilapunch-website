import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Every fact here already appears on the live site (Footer, Contact page) —
// this just makes it machine-readable for search engines, nothing new is
// being claimed.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kilapunch ERP Solutions",
  url: "https://kilapuncherp.co.zw",
  logo: "https://kilapuncherp.co.zw/images/Logo.png",
  image: "https://kilapuncherp.co.zw/images/Logo.png",
  email: "kilapunch.erpsolutions@gmail.com",
  telephone: "+263774708347",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 206, Rothbaths Mansions, Sixth Street",
    addressLocality: "Gweru",
    addressCountry: "ZW",
  },
  areaServed: "ZW",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61590132686807",
    "https://www.linkedin.com/in/kilapunch-erp-solutions-287175185",
  ],
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://kilapuncherp.co.zw"),

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

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>

<MotionConfig reducedMotion="user">
<Navbar />


<main className="flex-grow">
{children}
</main>


<Footer />
</MotionConfig>

</body>

</html>

);

}