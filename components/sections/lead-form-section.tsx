"use client"

import { LeadForm } from "@/components/forms/lead-form"

export function LeadFormSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-sans">
              Start Your Journey
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-foreground">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              Book your complimentary consultation today. No pressure, no obligation—just
              a conversation about how we can help you love your home.
            </p>
          </div>

          {/* Form */}
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
