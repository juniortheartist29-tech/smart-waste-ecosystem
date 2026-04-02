import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "BIOLOOP made recycling fun for my entire family. The kids love scanning items and competing for badges!",
    author: "Priya Sharma",
    role: "Homemaker, Mumbai",
    rating: 5,
  },
  {
    quote: "I have earned over Rs. 2,000 by selling my sorted recyclables through the marketplace. It is like getting paid to save the planet.",
    author: "Rajesh Kumar",
    role: "Small Business Owner, Delhi",
    rating: 5,
  },
  {
    quote: "The AI scanner is incredibly accurate. It even identifies different types of plastics and tells me which ones are actually recyclable.",
    author: "Ananya Patel",
    role: "Environmental Enthusiast, Bangalore",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories from Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Real people, real impact. See how BIOLOOP is transforming waste management across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
