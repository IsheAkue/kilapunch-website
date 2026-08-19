import HeroSection from "@/sections/HeroSection"
import TrustStrip from "@/sections/TrustStrip"
import ClientsStrip from "@/sections/ClientsStrip"
import ServicesSection from "@/sections/ServicesSection"
import WhyChooseUs from "@/sections/WhyChooseUs"
import ProcessSection from "@/sections/ProcessSection"
import IndustriesSection from "@/sections/IndustriesSection"
import CTASection from "@/sections/CTASection"
import MetricsSection from "@/sections/MetricsSection"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function KilapunchHomepage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <TrustStrip />
      <ClientsStrip />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <MetricsSection />
      <WhyChooseUs />
      <CTASection />

      <WhatsAppButton />
    </main>
  )
}
