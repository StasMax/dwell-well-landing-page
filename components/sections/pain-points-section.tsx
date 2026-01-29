import { Clock, Package, Frown } from "lucide-react"

const painPoints = [
  {
    icon: Package,
    title: "Drowning in Clutter",
    description:
      "Every closet is stuffed. Every drawer overflows. You've tried organizing, but the chaos always returns. You're not alone—small city spaces demand smarter solutions.",
    trigger: "Wasting hours searching for things that should be easy to find",
  },
  {
    icon: Clock,
    title: "Moving Stress Overwhelming You",
    description:
      "Unpacking feels impossible. Boxes pile up for months. Your new home doesn't feel like home—it feels like a storage unit. Life goes on, but the boxes remain.",
    trigger: "Losing precious weekends to the never-ending unpacking process",
  },
  {
    icon: Frown,
    title: "Your Space Drains Your Energy",
    description:
      "Walking into a cluttered room steals your calm. You deserve to come home and breathe—not feel anxious. Your environment shapes your mindset more than you realize.",
    trigger: "Feeling stressed the moment you walk through your front door",
  },
]

export function PainPointsSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4 font-sans">
            Sound Familiar?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-foreground">
            Living in Chaos Costs More Than You Think
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-sans">
            The stress of disorganization doesn't just clutter your space—it clutters your mind,
            drains your time, and dims your joy.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card p-8 rounded-sm border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-serif text-xl mb-4 text-foreground">
                {point.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6 font-sans">
                {point.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-medium font-sans italic">
                  "{point.trigger}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
