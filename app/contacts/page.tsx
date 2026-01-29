"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { LeadForm } from "@/components/forms/lead-form"
import { Mail, Phone, Instagram, MapPin, Facebook } from "lucide-react"

export default function ContactsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Contact Info & Form Section */}
            <section className="py-24 bg-secondary/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                            {/* Left Column: Contact Info */}
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h1 className="font-serif text-4xl md:text-5xl text-foreground">
                                        We look forward to working together
                                    </h1>
                                    <h2 className="text-xl font-sans tracking-wide">
                                        You can find us in New York, San Francisco & Los Angeles.
                                    </h2>
                                    <p className="text-muted-foreground text-lg font-sans leading-relaxed">
                                        Tell us a bit about your project and you . .
                                    </p>
                                </div>

                                <div className="flex flex-col items-start gap-4">
                                    <h3 className="font-serif text-2xl">Book a complimentary discovery call</h3>
                                    <div className="flex flex-col items-start gap-2 text-sm font-sans tracking-wider">
                                        <a
                                            href="https://app.acuityscheduling.com/schedule.php?owner=34637388&calendarID=11454602"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-b border-primary/20 hover:border-primary pb-1 transition-colors"
                                        >
                                            New York
                                        </a>
                                        <a
                                            href="https://app.acuityscheduling.com/schedule.php?owner=34637388&calendarID=11454596"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-b border-primary/20 hover:border-primary pb-1 transition-colors"
                                        >
                                            San Francisco & Los Angeles
                                        </a>
                                        <a
                                            href="https://app.acuityscheduling.com/schedule.php?owner=34637388&calendarID=11447675"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-b border-primary/20 hover:border-primary pb-1 transition-colors"
                                        >
                                            Membership Inquiries
                                        </a>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Phone */}
                                    <div className="bg-white p-6 rounded-lg border border-border flex flex-col items-start space-y-4 hover:shadow-sm transition-shadow">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg mb-1">Phone</h3>
                                            <a href="tel:+12124609655" className="text-muted-foreground hover:text-primary transition-colors font-sans block text-sm">
                                                T. 212.460.9655
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="bg-white p-6 rounded-lg border border-border flex flex-col items-start space-y-4 hover:shadow-sm transition-shadow">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg mb-1">Email</h3>
                                            <a href="mailto:hello@dwellwellnyc.com" className="text-muted-foreground hover:text-primary transition-colors font-sans block text-sm">
                                                hello@dwellwellnyc.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Instagram */}
                                    <div className="bg-white p-6 rounded-lg border border-border flex flex-col items-start space-y-4 hover:shadow-sm transition-shadow">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Instagram className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg mb-1">Instagram</h3>
                                            <a
                                                href="https://instagram.com/dwellwellnyc"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors font-sans block text-sm"
                                            >
                                                @dwellwellnyc
                                            </a>
                                        </div>
                                    </div>

                                    {/* Facebook */}
                                    <div className="bg-white p-6 rounded-lg border border-border flex flex-col items-start space-y-4 hover:shadow-sm transition-shadow">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Facebook className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg mb-1">Facebook</h3>
                                            <a
                                                href="https://www.facebook.com/dwellwellnyc"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors font-sans block text-sm"
                                            >
                                                DwellWell NYC
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Intro Text */}
                                <div className="pt-4">
                                    <p className="text-muted-foreground font-sans">
                                        If you don’t see a time that works for you, reach out using the form and we’ll find something that fits.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Order Form */}
                            <div className="lg:pt-0">
                                <div className="sticky top-24">
                                    <LeadForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
