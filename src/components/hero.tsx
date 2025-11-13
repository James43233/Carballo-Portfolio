"use client"

import Avatar from "../assets/MeinPng.png"

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="about"
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-background to-muted/40 px-6 sm:px-10 lg:px-20 pt-16 md:pt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-[250px]">
        {/* Left Text Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          <div className="w-full text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight flex flex-wrap justify-center md:justify-start gap-2">
              <span>Hi! I'm</span>
              <span className="text-primary whitespace-nowrap">James Paul Carballo</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-3 text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md sm:max-w-xl text-center">
            I'm a developer focusing on building scalable web and mobile applications using modern technologies.
            I study at Mapua Malayan Colleges Mindanao, and I’m passionate about creating efficient, user-friendly solutions
            that make an impact. I primarily work with React, Django, PostgreSQL, and Tailwind CSS, and I’m always eager to learn
            and adapt to new challenges.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("footer")}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition"
            >
              Contact Me
            </button>
          </div>

          {/* Tech Stack Scrolling */}
          <div className="w-full overflow-hidden mt-8">
            <div className="flex animate-scroll gap-8 sm:gap-12 items-center">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 shrink-0"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                  <span className="text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Avatar Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[230px] sm:w-[280px] md:w-[380px] aspect-square bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl flex items-center justify-center shadow-lg">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-[280px] sm:w-[240px] md:w-[320px] object-contain drop-shadow-xl mb-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
