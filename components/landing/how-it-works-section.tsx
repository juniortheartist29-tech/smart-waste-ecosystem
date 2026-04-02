import { Camera, ArrowDown, CheckCircle, Gift, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Scan Your Waste",
    description: "Open the app and point your camera at any waste item. Our AI analyzes it in seconds.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Follow Guidance",
    description: "Get instant instructions on proper segregation and disposal. Learn which bin it belongs in.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Earn Rewards",
    description: "Every correct disposal earns you points. Unlock badges and climb the leaderboard.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Impact",
    description: "Watch your environmental impact grow. See real metrics on CO2 saved and resources conserved.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            How <span className="text-primary">BIOLOOP</span> Works
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Getting started is simple. Four easy steps to transform how you manage waste.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden sm:block" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`flex items-start gap-6 md:gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`flex-1 pb-12 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`bg-card rounded-2xl p-6 border border-border shadow-sm ${index % 2 === 1 ? "md:ml-auto" : ""} max-w-md`}>
                      <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary/20 mb-2 block">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-10 flex-shrink-0 hidden sm:block">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex justify-center -mt-6 mb-6 relative z-10">
                    <ArrowDown className="w-5 h-5 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
