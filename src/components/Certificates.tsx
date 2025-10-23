"use client"

import { useState } from "react"

export default function Certificates() {
  const certificates = [
    { 
      id: 1, 
      title: "Beginning Custom Projects with Raspberry Pi", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C1.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/ERTiUGDihz5BrIWMDG3MjgABA06OvXLhW7vScUMT_wSgRg?e=RQh5qj" // 🟢 Replace with real OneDrive link
    },
    { 
      id: 2, 
      title: "Programming for Everybody (Getting Started with Python)", 
      issuer: "Coursera", 
      date: "2023", 
      image: "/CourseraCertificate/C2.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EVBj4lNCqnVKrnCR3eqV-mQBqKEpjPhj87ip4mSEDw6w_A?e=LPog11"
    },
    { 
      id: 3, 
      title: "LLM Fine-Tuning and Customization Training", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C3.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EekbQEkopXNHqbsrub6HAkABula-u5VwtdsX7NGSVRFaqw?e=YD6Aie"
    },
    { 
      id: 4, 
      title: "Start the UX Design Process: Empathize, Define, and Ideate", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C4.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/ERXqb3SDA-BKkbdMVcGTM4kBGJd25hr7E8f9KaTXQp7ILg?e=yXB4XB"
    },
    { 
      id: 5, 
      title: "What is Data Science?", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C5.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EflOamh-IIZAqFQX2YbtfUYB_h2gcnsd2Bk2X6OMFjZy_w?e=N1Wo92"
    },
    { 
      id: 6, 
      title: "Generative AI Advanced Fine-Tuning for LLMs", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C6.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/Ef6NSnEwxSRJiHKBuWEsU9YB4Hl0Fhmt-zixBTlKNA_VfA?e=WVrWYq"
    },
    { 
      id: 7, 
      title: "Introduction to Hardware and Operating Systems", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C7.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EQIoKSsTxTpIpu2J2XMmadcBl5OxnjEpc-OfTU46HCFIIA?e=KQ6fqw"
    },
    { 
      id: 8, 
      title: "Introduction to Software Engineering", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C8.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/ETf71CTTvHtPjFoPHTW9yQMBtAP17T7Wgd2KPfyGnf9o3g?e=ZNBHiS"
    },
    { 
      id: 9, 
      title: "Fundamentals of AI Agents Using RAG and LangChain", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C9.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/Eawc5_7PTjdNqy0IejC2YjMBvYaCO3Th9CfKYp8ZZA_goQ?e=ZaNnlq"
    },
    { 
      id: 10, 
      title: "Advanced Algorithms and Complexity", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C10.jpg",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EUArk4s-521LnochnBIdtiEBQzxt3zL9eC4RhvEi2me_qw?e=LA9ToV"
    },
  ]

  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="certificates" className="py-20 bg-muted/30 overflow-hidden">
      <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">
        Certifications
      </h2>

      {/* Responsive Marquee Style Container */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex gap-6 animate-scroll hover:pause whitespace-nowrap ${
            isHovered ? "paused" : ""
          }`}
        >
          {[...certificates, ...certificates].map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-background rounded-xl border border-border overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-[280px] sm:w-[320px] md:w-[350px]"
            >
              {/* Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col justify-between p-4 h-[240px]">
                <div>
                  <h3 className="text-md font-semibold mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">Completed {cert.date}</p>
                </div>

                {/* View Credential Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition"
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
