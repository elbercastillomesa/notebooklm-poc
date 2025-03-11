import type React from "react"
import type { Metadata } from "next"
import "@/assets/css/global.css"
import { ThemeProvider } from "@/components/layout/ThemeProvider"

export const metadata: Metadata = {
  title: "SophiA AI Proposal Builder",
  description: "AI-powered proposal builder application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider defaultTheme="dark" storageKey="sophia-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

