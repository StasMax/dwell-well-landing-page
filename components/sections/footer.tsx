import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl tracking-wide">DWELL WELL</span>
              <span className="text-xs tracking-[0.3em] ml-2 opacity-80 font-sans">NYC</span>
            </Link>
            <p className="opacity-80 leading-relaxed max-w-md font-sans">
              Professional home organization services for New York City. 
              We transform spaces into sanctuaries—one room at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-sans">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#method" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-sans">
                  Our Method
                </Link>
              </li>
              <li>
                <Link href="#about" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-sans">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@dwellwellnyc.com" 
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity text-sm font-sans"
                >
                  <Mail className="w-4 h-4" />
                  hello@dwellwellnyc.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+12125550123" 
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity text-sm font-sans"
                >
                  <Phone className="w-4 h-4" />
                  (212) 555-0123
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/dwellwellnyc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity text-sm font-sans"
                >
                  <Instagram className="w-4 h-4" />
                  @dwellwellnyc
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60 font-sans">
            © {new Date().getFullYear()} Dwell Well NYC. All rights reserved.
          </p>
          <p className="text-sm opacity-60 font-sans">
            Serving Manhattan, Brooklyn, Queens & Beyond
          </p>
        </div>
      </div>
    </footer>
  )
}
