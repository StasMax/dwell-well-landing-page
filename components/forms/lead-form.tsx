"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function LeadForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))

        setIsLoading(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="bg-card border border-border rounded-sm p-8 md:p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">Thank You!</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">
                    We've received your request and will be in touch within 24 hours
                    to schedule your complimentary consultation.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 md:p-10 h-full">
            <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground font-sans">
                        Full Name
                    </Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="bg-background border-input focus:border-primary focus:ring-primary/20 py-5 radius-md"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground font-sans">
                        Phone Number
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(212) 555-0123"
                        required
                        className="bg-background border-input focus:border-primary focus:ring-primary/20 py-5 radius-md"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground font-sans">
                        Email Address
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-background border-input focus:border-primary focus:ring-primary/20 py-5 radius-md"
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base tracking-wide group"
                >
                    {isLoading ? (
                        "Sending..."
                    ) : (
                        <>
                            Book My Free Consultation
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </Button>

                <p className="text-xs text-center text-muted-foreground font-sans">
                    We respect your privacy. Your information will never be shared.
                </p>
            </div>
        </form>
    )
}
