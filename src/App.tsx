"use client"

import { useEffect, useState } from "react"
import Header from "./components/header"
import Hero from "./components/hero"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Certificates from "./components/Certificates"
import Footer from "./components/footer"
import "./global.css"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col text-foreground">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <section id="about" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="certificates" className="scroll-mt-20">
          <Certificates />
        </section>
      </main>
      <section id="footer" className="scroll-mt-20"><Footer /></section>

    </div>
  )
}
