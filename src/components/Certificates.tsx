"use client"

import { useState } from "react"

export default function Certificates() {
  const certificates = [
    { id: 1, title: "Beginning Custom Projects with Raspberry Pi", issuer: "Coursera", date: "2024", image: "/CourseraCertificate/C1.jpg" },
    { id: 2, title: "Programming for Everybody (Getting Started with Python)", issuer: "Coursera", date: "2023", image: "/CourseraCertificate/C2.jpg" },
    { id: 3, title: "LLM Fine-Tuning and Customization Training", issuer: "Coursera", date: "2025", image: "/CourseraCertificate/C3.jpg" },
    { id: 4, title: "Start the UX Design Process: Empathize, Define, and Ideate", issuer: "Coursera", date: "2024", image: "/CourseraCertificate/C4.jpg" },
    { id: 5, title: "What is Data Science?", issuer: "Coursera", date: "2024", image: "/CourseraCertificate/C5.jpg" },
    { id: 6, title: "Generative AI Advance Fine-Tuning for LLMs", issuer: "Coursera", date: "2025", image: "/CourseraCertificate/C6.jpg" },
    { id: 7, title: "Introduction to Hardware and Operating Systems", issuer: "Coursera", date: "2025", image: "/CourseraCertificate/C7.jpg" },
    { id: 8, title: "Introduction to Software Engineering", issuer: "Coursera", date: "2025", image: "/CourseraCertificate/C8.jpg" },
    { id: 9, title: "Fundamentals of AI Agents Using RAG and LangChain", issuer: "Coursera", date: "2025", image: "/CourseraCertificate/C9.jpg" },
    { id: 10, title: "Advanced Algorithms and Complexity", issuer: "Coursera", date: "2024", image: "/CourseraCertificate/C10.jpg" },
  ]

  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="certificates" className="py-20 bg-muted/30 overflow-hidden">
      <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">
        Certifications
      </h2>

      {/* Full width marquee */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`marquee-track ${isHovered ? "paused" : ""}`}>
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={index}
              className="marquee-item bg-background rounded-xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col min-w-[350px] max-w-[350px]"
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col justify-between h-[250px] p-6">
                <div>
                  <h3 className="text-md font-semibold mb-1 line-clamp-2 h-[3rem]">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Completed {cert.date}
                  </p>
                </div>

                {/* Button aligned at bottom */}
                <a
                  href="#"
                  className="block text-center w-full px-4 py-2 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
