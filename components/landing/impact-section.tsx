const stats = [
  {
    value: "50K+",
    label: "Active Users",
    description: "Households making a difference",
  },
  {
    value: "2.5M",
    label: "Waste Items Scanned",
    description: "Correctly sorted and recycled",
  },
  {
    value: "150T",
    label: "CO2 Prevented",
    description: "Tonnes of emissions avoided",
  },
  {
    value: "Rs. 25L",
    label: "Value Generated",
    description: "Through marketplace trades",
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our Collective Impact
          </h2>
          <p className="text-lg text-primary-foreground/80 text-pretty">
            Together, BIOLOOP users are creating measurable change for our planet. 
            Every scan, every recycled item counts.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-primary-foreground/70">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="mt-16 pt-16 border-t border-primary-foreground/20">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
              Aligned with UN Sustainable Development Goals
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { num: 11, title: "Sustainable Cities" },
              { num: 12, title: "Responsible Consumption" },
              { num: 13, title: "Climate Action" },
              { num: 17, title: "Partnerships" },
            ].map((sdg) => (
              <div
                key={sdg.num}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
              >
                <span className="w-8 h-8 rounded-full bg-primary-foreground text-primary text-sm font-bold flex items-center justify-center">
                  {sdg.num}
                </span>
                <span className="text-sm font-medium">{sdg.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
