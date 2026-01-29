import { HeroSection } from "@/components/sections/hero-section"
import { PainPointsSection } from "@/components/sections/pain-points-section"
import { ServicesSection } from "@/components/sections/services-section"
import { MethodSection } from "@/components/sections/method-section"
import { TrustSection } from "@/components/sections/trust-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { LocalContextSection } from "@/components/sections/local-context-section"
import { LeadFormSection } from "@/components/sections/lead-form-section"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <MethodSection />
      <TrustSection />
      <TestimonialsSection />
      <LocalContextSection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}
