"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CollectionsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "menswear", label: "Menswear" },
    { id: "womenswear", label: "Womenswear" },
    { id: "fabrics", label: "Fabrics" },
    { id: "accessories", label: "Accessories" },
  ]

  const products = [
    {
      id: 1,
      category: "womenswear",
      name: "Silk Fusion Kurta",
      description: "Contemporary silhouette with traditional embroidery",
      image: "/elegant-indo-western-silk-kurta-for-women.jpg",
    },
    {
      id: 2,
      category: "menswear",
      name: "Heritage Bandhgala",
      description: "Classic jacket with modern tailoring",
      image: "/modern-indian-bandhgala-jacket-menswear.jpg",
    },
    {
      id: 3,
      category: "womenswear",
      name: "Draped Saree Gown",
      description: "Fusion of saree draping and gown elegance",
      image: "/contemporary-draped-saree-gown-indo-western.jpg",
    },
    {
      id: 4,
      category: "fabrics",
      name: "Handwoven Silk",
      description: "Premium Banarasi silk with gold zari",
      image: "/traditional-indian-banarasi-silk-fabric-texture.jpg",
    },
    {
      id: 5,
      category: "accessories",
      name: "Statement Jewelry",
      description: "Contemporary pieces inspired by temple jewelry",
      image: "/modern-indian-statement-jewelry-accessories.jpg",
    },
    {
      id: 6,
      category: "menswear",
      name: "Nehru Jacket Set",
      description: "Minimalist design with intricate details",
      image: "/contemporary-nehru-jacket-indo-western-menswear.jpg",
    },
  ]

  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter)

  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Collections
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections where traditional craftsmanship meets contemporary design
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id ? "bg-primary text-primary-foreground" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-foreground/70">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
