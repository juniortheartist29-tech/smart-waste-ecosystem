import { Scan, Brain, Gift, ShoppingBag, BookOpen, BarChart3, Users, Recycle } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "AI Waste Scanner",
    description: "Point your camera at any waste item. Our AI instantly identifies it and tells you exactly how to dispose of it properly.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Smart Segregation",
    description: "Get personalized guidance on segregating waste into the right categories - wet, dry, hazardous, and e-waste.",
    color: "chart-2",
  },
  {
    icon: Gift,
    title: "Rewards & Gamification",
    description: "Earn points for every correct disposal. Redeem them for discounts, vouchers, or donate to environmental causes.",
    color: "accent",
  },
  {
    icon: ShoppingBag,
    title: "Eco Marketplace",
    description: "Connect with verified recyclers and industries. Sell your sorted waste directly to buyers at fair prices.",
    color: "chart-4",
  },
  {
    icon: BookOpen,
    title: "Education Hub",
    description: "Learn about recycling, composting, and sustainable living through interactive guides and videos.",
    color: "chart-5",
  },
  {
    icon: BarChart3,
    title: "Impact Dashboard",
    description: "Track your environmental impact in real-time. See how much CO2 you have saved and trees you have helped plant.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Community Challenges",
    description: "Join neighborhood challenges. Compete with friends and communities to become recycling champions.",
    color: "chart-2",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Be part of a closed-loop system where waste becomes a resource, creating value at every step.",
    color: "accent",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="text-primary">Sustainable Living</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            BIOLOOP combines AI technology, gamification, and community to make 
            waste management simple, rewarding, and impactful.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType
  title: string
  description: string
  color: string
}) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    "chart-2": "bg-chart-2/10 text-chart-2",
    accent: "bg-accent/10 text-accent-foreground",
    "chart-4": "bg-chart-4/10 text-chart-4",
    "chart-5": "bg-chart-5/10 text-chart-5",
  }

  return (
    <div className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
