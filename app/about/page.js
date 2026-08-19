import AboutContent from "@/components/AboutContent"
import { pageMetadata } from "@/lib/seo"


export const metadata = pageMetadata({
  title: "About Kilapunch ERP Solutions Zimbabwe",
  description:
    "Learn about Kilapunch ERP Solutions, a Zimbabwean ERP consulting company specializing in Sage ERP, accounting systems, payroll solutions and business technology.",
})


export default function AboutPage(){

  return (

    <AboutContent />

  )

}