"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "I didn't know my apartment could feel this spacious. Marla and her team transformed not just my closets, but my entire relationship with my home. I actually look forward to coming home now.",
    author: "Sarah M.",
    location: "Upper East Side",
    service: "Home Organizing",
  },
  {
    quote:
      "Moving to NYC was overwhelming until Dwell Well stepped in. They unpacked and organized our entire two-bedroom in one day. We were eating dinner at our own table that night. Absolute magic.",
    author: "David & Lisa K.",
    location: "Brooklyn Heights",
    service: "Move-In Unpacking",
  },
  {
    quote:
      "Our apartment sold in 48 hours after staging—above asking price. The buyers said the photos made them feel like they could move right in. Best investment we made.",
    author: "Jennifer R.",
    location: "West Village",
    service: "Prep to Sell",
  },
]

const beforeAfterCases = [
  {
    title: "Studio Apartment Transformation",
    before: "A cluttered 450 sq ft studio with no storage solutions",
    after: "A functional, airy space with hidden storage and designated zones",
    location: "Murray Hill",
    imageBefore: "/images/transformations/studio-before.png",
    imageAfter: "/images/transformations/studio-after.png",
  },
  {
    title: "Family Closet Overhaul",
    before: "Overflowing walk-in closet with no visible floor space",
    after: "Color-coordinated, accessible wardrobe with 40% more capacity",
    location: "Park Slope",
    imageBefore: "/images/transformations/closet-before.png",
    imageAfter: "/images/transformations/closet-after.png",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-sans">
              Client Stories
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground">
              Hear From Those We've Helped
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-card border border-border rounded-sm p-8 md:p-12">
            <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />

            <div className="text-center pt-8">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="space-y-1">
                <p className="font-medium text-foreground font-sans">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm text-muted-foreground font-sans">
                  {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].service}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-border text-foreground hover:bg-secondary bg-transparent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={`testimonial-dot-${index}`}
                    type="button"
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? "bg-primary" : "bg-border"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-border text-foreground hover:bg-secondary bg-transparent"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Before/After Cases */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-sans">
              Transformations
            </p>
            <h3 className="font-serif text-2xl md:text-4xl leading-tight text-foreground">
              Before & After
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfterCases.map((caseStudy) => (
              <div
                key={caseStudy.title}
                className="bg-card border border-border rounded-sm overflow-hidden"
              >
                {/* Image comparison */}
                <div className="aspect-[16/10] bg-secondary relative flex">
                  <div className="w-1/2 relative border-r border-white/20">
                    <Image
                      src={caseStudy.imageBefore}
                      alt={`Before: ${caseStudy.before}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/60 text-white px-2 py-1 text-[10px] items-center tracking-widest font-sans rounded uppercase">Before</div>
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={caseStudy.imageAfter}
                      alt={`After: ${caseStudy.after}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-2 py-1 text-[10px] items-center tracking-widest font-sans rounded uppercase">After</div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-serif text-lg mb-3 text-foreground">{caseStudy.title}</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground font-sans">
                      <span className="font-medium text-foreground/70">Before:</span> {caseStudy.before}
                    </p>
                    <p className="text-muted-foreground font-sans">
                      <span className="font-medium text-foreground/70">After:</span> {caseStudy.after}
                    </p>
                  </div>
                  <p className="text-xs text-primary mt-4 tracking-wide font-sans">{caseStudy.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
