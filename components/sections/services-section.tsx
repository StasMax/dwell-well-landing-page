import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const services = [
  {
    title: "Home Organizing",
    tagline: "Wake up to a home that works for you",
    description:
      "Every item finds its perfect place. Your morning routine flows effortlessly. You'll finally know where everything is—and love the way your space looks and feels.",
    benefits: [
      "Custom organization systems designed for your lifestyle",
      "Decluttering guidance—keep only what serves you",
      "Sustainable systems that stay organized",
    ],
    image: "/images/organized-closet.jpg",
  },
  {
    title: "Move-In Unpacking",
    tagline: "Move into a fully ready home—in just one day",
    description:
      "Skip the weeks of living among boxes. We unpack, organize, and set up your entire home so you can start living from day one. Your new chapter begins immediately.",
    benefits: [
      "Complete unpacking in as little as 24 hours",
      "Everything placed with purpose and style",
      "Walk into your new home, not a warehouse",
    ],
    image: "/images/organized-kitchen.jpg",
  },
  {
    title: "Prep to Sell",
    tagline: "Sell faster, sell higher—with effortless staging",
    description:
      "First impressions sell homes. We declutter, organize, and stage your space to show its full potential. Buyers don't see your stuff—they see their future home.",
    benefits: [
      "Strategic decluttering to maximize perceived space",
      "Professional staging that photographs beautifully",
      "Faster sales at better prices",
    ],
    image: "/images/hero-organized-space.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-sans">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-foreground">
            Results That Transform How You Live
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-sans">
            We don't just organize things—we create environments that support the life you want to live.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm tracking-[0.2em] text-primary uppercase mb-3 font-sans">
                  {service.title}
                </p>

                <h3 className="font-serif text-2xl md:text-4xl mb-4 text-foreground">
                  {service.tagline}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-sans">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/80 font-sans">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-5 text-sm tracking-wide group"
                >
                  <Link href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
