"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-wide text-foreground">
              DWELL WELL
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground font-sans">NYC</span>
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
              href="#contact" 
              className="text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-sm tracking-wide"
            >
              <Link href="#contact">Book a Consultation</Link>
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
              href="#contact" 
              className="block text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-sm tracking-wide"
            >
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Consultation</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
