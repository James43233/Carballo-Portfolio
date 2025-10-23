"use client"

import {
  FaPython,
  FaReact,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaCode,
} from "react-icons/fa"
import {
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiTailwindcss,
} from "react-icons/si"

export default function Skills() {
  const skillIcons = {
    Python: <FaPython className="text-5xl text-blue-500" />,
    Django: <SiDjango className="text-5xl text-green-700" />,
    MySQL: <SiMysql className="text-5xl text-blue-400" />,
    PostgreSQL: <SiPostgresql className="text-5xl text-sky-600" />,
    HTML: <FaHtml5 className="text-5xl text-orange-500" />,
    "CSS / Tailwind": (
      <div className="flex items-center gap-2">
        <FaCss3Alt className="text-4xl text-blue-500" />
        <SiTailwindcss className="text-4xl text-cyan-400" />
      </div>
    ),
    "React Native": <FaReact className="text-5xl text-cyan-400" />,
    "React JS": <FaReact className="text-5xl text-cyan-400" />,
    Java: <FaJava className="text-5xl text-red-600" />,
    "C#": <FaCode className="text-5xl text-purple-500" />, // fallback for missing SiCsharp
    "C++": <SiCplusplus className="text-5xl text-blue-700" />,
  }

  const highExperienceSkills = [
    { name: "Python", level: "Advanced" },
    { name: "Django", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS / Tailwind", level: "Advanced" },
    { name: "React Native", level: "Advanced" },
    { name: "React JS", level: "Advanced" },
  ]

  const knownSkills = [
    { name: "Java", level: "Didn't Practice Anymore" },
    { name: "C#", level: "Didn't Practice Anymore" },
    { name: "C++", level: "Didn't Practice Anymore" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-balance">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* High Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-accent">High Experience</h3>
            <div className="grid grid-cols-2 gap-4">
              {highExperienceSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-all hover:shadow-lg hover:scale-105"
                >
                  <div className="mb-3 flex justify-center">{skillIcons[skill.name as keyof typeof skillIcons]}</div>
                  <p className="font-semibold text-center">{skill.name}</p>
                  <p className="text-sm text-muted-foreground text-center">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Known Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">Known Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {knownSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg hover:scale-105"
                >
                  <div className="mb-3 flex justify-center">{skillIcons[skill.name as keyof typeof skillIcons]}</div>
                  <p className="font-semibold text-center">{skill.name}</p>
                  <p className="text-sm text-muted-foreground text-center">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
