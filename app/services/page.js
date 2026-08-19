import ServicesContent from "./ServicesContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "ERP Implementation & Sage Support Services Zimbabwe",
  description:
    "Kilapunch provides ERP implementation, Sage support, accounting systems consulting, automation, and IT support services for businesses in Zimbabwe.",
})

export default function ServicesPage() {
  return <ServicesContent />
}
