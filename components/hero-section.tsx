import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-indo-western-fashion-studio-interior-with-.jpg" alt="Fashion Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 text-balance">
          Where modern design meets Indian heritage
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Explore Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/90 hover:bg-background border-background text-foreground px-8"
          >
            Book a Visit
          </Button>
        </div>
      </div>
    </section>
  )
}
