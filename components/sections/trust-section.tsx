export function TrustSection() {
  const pressLogos = [
    { name: "The New York Times", abbr: "NYT" },
    { name: "Real Simple", abbr: "RS" },
    { name: "Architectural Digest", abbr: "AD" },
    { name: "Domino", abbr: "DOM" },
    { name: "Apartment Therapy", abbr: "AT" },
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary border-y border-border">
      <div className="container mx-auto px-6">
        {/* Header */}
        <p className="text-center text-sm tracking-[0.2em] text-muted-foreground uppercase mb-10 font-sans">
          As Featured In
        </p>

        {/* Press Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {pressLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              {/* Placeholder for actual logos - using text representation */}
              <span className="font-serif text-xl md:text-2xl tracking-wide text-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
