export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img src="/indian-fashion-designer-in-elegant-studio-with-tra.jpg" alt="Our Founder" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance">Our Story</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Heritage Studio was born from a passion to bridge the timeless elegance of Indian craftsmanship with
                contemporary design sensibilities. Our journey began with a simple vision: to create clothing that
                honors tradition while embracing modernity.
              </p>
              <p>
                Each piece we create tells a story—a narrative woven through intricate embroidery, luxurious fabrics,
                and silhouettes that transcend cultural boundaries. We believe that fashion is not just about clothing;
                it's about identity, heritage, and self-expression.
              </p>
              <p>
                Our design philosophy celebrates the rich tapestry of Indian textiles and techniques, reimagined for the
                global citizen. From hand-woven silks to contemporary cuts, every garment is a testament to our
                commitment to quality, authenticity, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
