import { Building2, Ruler, Award } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Built for NYC Living",
    description:
      "We understand the unique challenges of city apartments—limited square footage, awkward layouts, and the constant battle against clutter. Every solution we create is designed for real New York spaces.",
  },
  {
    icon: Ruler,
    title: "Small Space Specialists",
    description:
      "From 400 sq ft studios to pre-war walkups, we've transformed thousands of tight spaces into functional sanctuaries. We see potential where others see limitations.",
  },
  {
    icon: Award,
    title: "High Standards, Higher Results",
    description:
      "New Yorkers expect excellence—and so do we. Our aesthetic meets the city's design standards while prioritizing function. Beautiful spaces that actually work.",
  },
]

export function LocalContextSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-sans">
              Why Dwell Well NYC
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-foreground">
              We Know NYC Spaces <span className="italic">Intimately</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-sans">
              Founded by Marla Alt, Dwell Well NYC was born from the belief that everyone
              deserves to love their home—no matter how many square feet they have.
              With years of experience organizing Manhattan apartments and Brooklyn brownstones,
              we've mastered the art of maximizing space without sacrificing style.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-sans">
              We're not just organizers. We're your neighbors, fellow New Yorkers who
              understand that your apartment isn't just a place to sleep—it's your sanctuary
              in the city that never sleeps.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-6">
                <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
