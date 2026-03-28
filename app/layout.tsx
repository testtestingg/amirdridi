import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script' // 1. Import Next.js Script component
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Amir Dridi – IT Freelancer | Web & Mobile Development',
  description: 'Amir Dridi is an IT freelancer specializing in modern websites, mobile apps, and custom digital solutions to help your business grow.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    {/* 2. Add suppressHydrationWarning to html */}
    <html lang="en" suppressHydrationWarning>
      {/* 3. Add suppressHydrationWarning to body */}
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
        
        <div 
          className="gtranslate_wrapper" 
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}
        ></div>

        {/* 4. Use Next.js Script for settings */}
        <Script id="gtranslate-settings" strategy="beforeInteractive">
          {`
            window.gtranslateSettings = {
              default_language: "en",
              detect_browser_language: true,
              wrapper_selector: ".gtranslate_wrapper",
              flag_style: "3d"
            }
          `}
        </Script>

        {/* 5. Use Next.js Script for the external script */}
        <Script 
          src="//cdn.gtranslate.net/widgets/latest/float.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
