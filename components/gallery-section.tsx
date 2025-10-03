export function GallerySection() {
  const images = [
    {
      src: "/Gemini_Generated_Image_52p04k52p04k52p0.png",
      alt: "Design Process",
      span: "md:row-span-2",
    },
    {
      src: "/storage1.png",
      alt: "Design Sketches",
      span: "",
    },
    {
      src: "/exibition3.png",
      alt: "Mood Board",
      span: "",
    },
    {
      src: "/storage3.png",
      alt: "Photoshoot",
      span: "md:col-span-2",
    },
    
  ]

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Gallery & Inspiration
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our creative process, from concept to creation
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-3 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
