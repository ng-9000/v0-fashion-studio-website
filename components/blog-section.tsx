import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const posts = [
    {
      title: "The Art of Indo-Western Fusion",
      excerpt:
        "Discover how traditional Indian craftsmanship blends seamlessly with contemporary design principles to create timeless pieces.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Fashion Trends",
    },
    {
      title: "Styling Tips for Festive Season",
      excerpt:
        "Expert advice on choosing the perfect Indo-Western outfit for weddings, festivals, and special celebrations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Styling Tips",
    },
    {
      title: "Sustainable Fashion Practices",
      excerpt:
        "Learn about our commitment to ethical sourcing, traditional handloom techniques, and sustainable fashion practices.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sustainability",
    },
  ]

  return (
    <section id="blog" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Blog & Insights
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Stories, trends, and inspiration from the world of Indo-Western fashion
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-card rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="text-sm font-medium text-primary">{post.category}</div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground text-balance">{post.title}</h3>
                <p className="text-card-foreground/70 leading-relaxed">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-primary group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
