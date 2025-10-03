import { Scissors, Users, Ruler } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Custom Designs",
      description:
        "Bespoke Indo-Western garments tailored to your unique style and measurements, crafted with premium fabrics and traditional techniques.",
    },
    {
      icon: Users,
      title: "Collaborations",
      description:
        "Partner with us for exclusive collections, fashion shows, and creative projects that blend heritage with innovation.",
    },
    {
      icon: Ruler,
      title: "Fittings",
      description:
        "Personalized fitting sessions ensuring perfect silhouettes and comfort, with multiple consultations throughout the creation process.",
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Studio & Services
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            We offer comprehensive design services that bring your vision to life, from initial consultation to final
            fitting.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-lg text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="text-card-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Workspace Gallery */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/indian-fashion-studio-workspace-with-fabrics-and-s.jpg" alt="Studio Workspace" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/traditional-indian-textile-production-process-hand.jpg" alt="Production Process" className="w-full h-full object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img src="/fashion-design-workshop-with-sketches-and-fabric-s.jpg" alt="Design Workshop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
