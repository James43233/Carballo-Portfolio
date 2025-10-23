import type React from "react"
import "./globals.css"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-sans antialiased">
      {children}
    </div>
  )
}
