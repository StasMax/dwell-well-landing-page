import { MessageSquare, ClipboardList, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Consultation",
    description:
      "We start with a conversation—not a clipboard. Tell us about your space, your lifestyle, and your vision. We listen deeply to understand not just what you need organized, but how you want to feel in your home.",
    detail: "In-home or virtual • 30-45 minutes • Complimentary",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Personalized Plan",
    description:
      "Based on your consultation, we craft a detailed action plan tailored to your space and goals. You'll know exactly what to expect—timeline, investment, and outcomes—before we touch a single item.",
    detail: "Clear pricing • No surprises • Full transparency",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Transformation Day",
    description:
      "Our team arrives and the magic happens. We work efficiently and respectfully, transforming your space while you relax—or run errands. Come home to the organized sanctuary you've been dreaming of.",
    detail: "Professional team • Same-day results • Ongoing support",
  },
]

export function MethodSection() {
  return (
    <section id="method" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 font-sans opacity-80">
            The Dwell Well Method
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
            Simple Process, Stunning Results
          </h2>
          <p className="opacity-80 text-lg leading-relaxed font-sans">
            No overwhelm. No judgment. Just a clear path from chaos to calm—guided by experts who care.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-primary-foreground/20" />
              )}
              
              <div className="text-center">
                {/* Number */}
                <div className="font-serif text-6xl opacity-20 mb-4">{step.number}</div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-2xl mb-4">{step.title}</h3>
                
                <p className="opacity-80 leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
                
                <p className="text-sm tracking-wide font-sans opacity-60">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
