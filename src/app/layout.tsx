import type { Metadata } from "next"
import { JetBrains_Mono, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { LanguageProvider } from "@/contexts/LangContext"

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["300", "400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "luis@portfolio:~$",
  description: "Backend Software Engineer portfolio - Luis Henrique de Barros",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={ibm.variable}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
