import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" // Added import for React
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instamation - Transform Your Instagram Engagement",
  description: "Automate and enhance your Instagram presence with smart engagement tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
        suppressHydrationWarning
        className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider> 
        </body>
      </html>
    </ClerkProvider>
  )
}

