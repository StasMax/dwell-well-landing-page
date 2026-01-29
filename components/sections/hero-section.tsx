import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-organized-space.jpg"
          alt="Beautifully organized living space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6 font-sans">
          Professional Home Organization
        </p>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-foreground text-balance">
          Transform Your Space,
          <br />
          <span className="italic">Transform Your Life</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Discover the peace that comes with a perfectly organized home. 
          We create serene, functional spaces that reflect how you truly want to live.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base tracking-wide group"
          >
            <Link href="#contact">
              Begin Your Transformation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/5 px-8 py-6 text-base tracking-wide bg-transparent"
          >
            <Link href="#services">
              Explore Our Services
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
