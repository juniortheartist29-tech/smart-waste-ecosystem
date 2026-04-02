import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scan, Gift, ShoppingBag, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Powered by AI for a sustainable future
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            <span className="text-balance">Turn Your Waste</span>
            <br />
            <span className="text-primary">Into Value</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            BIOLOOP uses AI to help you segregate waste correctly, earn rewards for recycling, 
            and connect with the circular economy marketplace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
              <Link href="/dashboard">
                Start Scanning
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <FeaturePill icon={Scan} label="AI Waste Scanner" />
            <FeaturePill icon={Gift} label="Earn Rewards" />
            <FeaturePill icon={ShoppingBag} label="Eco Marketplace" />
            <FeaturePill icon={BookOpen} label="Learn & Grow" />
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 md:mt-24 relative">
          <div className="relative mx-auto max-w-5xl">
            {/* Phone Mockup */}
            <div className="relative bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-6 h-full">
                  {/* Scanner Card */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Scan className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Scan Waste</h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      Point your camera at any waste item for instant identification
                    </p>
                    <div className="mt-4 h-24 rounded-lg bg-muted flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-4 border-dashed border-primary/40 flex items-center justify-center">
                        <Scan className="w-8 h-8 text-primary/60" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Gift className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Your Impact</h3>
                    <div className="space-y-4 flex-1">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">CO2 Saved</span>
                          <span className="font-semibold text-foreground">24.5 kg</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-3/4 rounded-full bg-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Items Recycled</span>
                          <span className="font-semibold text-foreground">156</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-2/3 rounded-full bg-accent" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Points Earned</span>
                          <span className="font-semibold text-foreground">1,240</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full w-1/2 rounded-full bg-chart-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marketplace Card */}
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center mb-4">
                      <ShoppingBag className="w-6 h-6 text-chart-2" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Marketplace</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Trade recyclables with verified buyers
                    </p>
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                        <div className="w-8 h-8 rounded bg-primary/20" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Plastic Bottles</p>
                          <p className="text-xs text-muted-foreground">Rs. 15/kg</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                        <div className="w-8 h-8 rounded bg-accent/20" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Paper Waste</p>
                          <p className="text-xs text-muted-foreground">Rs. 12/kg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturePill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}
