import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Users, Building2 } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 lg:p-16 border border-border shadow-xl overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Ready to Join the{" "}
                <span className="text-primary">Circular Economy?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
                Start your sustainable journey today. Download BIOLOOP and transform how you 
                manage waste while earning rewards and making a real impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                  <Link href="/dashboard">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="#contact">
                    Contact Sales
                  </Link>
                </Button>
              </div>

              {/* User Types */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">For Households</h3>
                  <p className="text-sm text-muted-foreground">Free forever with premium features</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-chart-2/10 flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-chart-2" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">For Communities</h3>
                  <p className="text-sm text-muted-foreground">Group plans with analytics</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">For Enterprises</h3>
                  <p className="text-sm text-muted-foreground">Custom solutions & API access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
