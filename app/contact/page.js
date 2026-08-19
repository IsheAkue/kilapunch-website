import ContactContent from "./ContactContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Contact Kilapunch ERP Solutions Zimbabwe",
  description:
    "Contact Kilapunch for Sage ERP implementation, accounting systems consulting, automation and business technology solutions.",
})

export default function ContactPage() {
  return <ContactContent />
}
