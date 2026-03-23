import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    <html lang="en">
      <head>
        <script 
          type="text/javascript" 
          src="//cdn.gtranslate.net/widgets/latest/float.js" 
          defer
        ></script>
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <div 
          className="gtranslate_wrapper" 
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999 }}
        ></div>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                default_language: "en",
                detect_browser_language: true,
                wrapper_selector: ".gtranslate_wrapper",
                flag_style: "3d"
              }
            `
          }}
        ></script>
      </body>
    </html>
  )
}
