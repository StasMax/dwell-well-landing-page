// Force dynamic render for /contacts to avoid "Image is not defined"
// during static generation (next/image in Header/Footer)
export const dynamic = "force-dynamic"

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
