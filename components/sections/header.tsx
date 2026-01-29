"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useConsultationModal } from "@/components/consultation-modal"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openModal } = useConsultationModal()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-12 w-48">
            <Image
              src="/images/logo.png"
              alt="DwellWell NYC"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#method"
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              Our Method
            </Link>
            <Link
              href="#about"
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contacts"
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={openModal}
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2 text-sm tracking-wide"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            <Link
              href="#services"
              className="block text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#method"
              className="block text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Method
            </Link>
            <Link
              href="#about"
              className="block text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contacts"
              className="block text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false)
                openModal()
              }}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-2 text-sm tracking-wide"
            >
              Book a Consultation
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
