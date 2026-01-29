"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function LeadFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4 font-sans">
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
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 md:p-10">
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-foreground font-sans">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="bg-background border-input focus:border-primary focus:ring-primary/20 py-5"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground font-sans">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(212) 555-0123"
                    required
                    className="bg-background border-input focus:border-primary focus:ring-primary/20 py-5"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground font-sans">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-background border-input focus:border-primary focus:ring-primary/20 py-5"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base tracking-wide group"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Book My Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground font-sans">
                  We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </form>
          ) : (
            <div className="bg-card border border-border rounded-sm p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">Thank You!</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">
                We've received your request and will be in touch within 24 hours 
                to schedule your complimentary consultation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
