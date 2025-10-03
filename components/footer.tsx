import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-serif font-bold">Heritage Studio</div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-background/70">
            © {new Date().getFullYear()} Heritage Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
