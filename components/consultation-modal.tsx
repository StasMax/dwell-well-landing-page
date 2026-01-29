"use client"

import { createContext, useContext, useState, useCallback } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { LeadForm } from "@/components/forms/lead-form"

type ConsultationModalContextValue = {
  openModal: () => void
  closeModal: () => void
}

const ConsultationModalContext = createContext<ConsultationModalContextValue | null>(null)

export function useConsultationModal() {
  const ctx = useContext(ConsultationModalContext)
  if (!ctx) {
    throw new Error("useConsultationModal must be used within ConsultationModalProvider")
  }
  return ctx
}

export function ConsultationModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return (
    <ConsultationModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent showClose={true} className="p-0 gap-0 max-w-md pt-12 px-6 pb-6 sm:px-8 sm:pb-8">
          <DialogHeader className="sr-only">
            <DialogTitle>Book a Consultation</DialogTitle>
          </DialogHeader>
          <LeadForm />
        </DialogContent>
      </Dialog>
    </ConsultationModalContext.Provider>
  )
}
