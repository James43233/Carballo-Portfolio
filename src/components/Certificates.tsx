"use client"


import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function Certificates() {
  const certificates = [
    { 
      id: 1, 
      title: "Beginning Custom Projects with Raspberry Pi", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C1.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/ERTiUGDihz5BrIWMDG3MjgABA06OvXLhW7vScUMT_wSgRg?e=RQh5qj" // 🟢 Replace with real OneDrive link
    },
    { 
      id: 2, 
      title: "Programming for Everybody (Getting Started with Python)", 
      issuer: "Coursera", 
      date: "2023", 
      image: "/CourseraCertificate/C2.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EVBj4lNCqnVKrnCR3eqV-mQBqKEpjPhj87ip4mSEDw6w_A?e=LPog11"
    },
    { 
      id: 3, 
      title: "LLM Fine-Tuning and Customization Training", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C3.webp",
      link: "https://malayancollegesmindanaooW365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EekbQEkopXNHqbsrub6HAkABula-u5VwtdsX7NGSVRFaqw?e=YD6Aie"
    },
    { 
      id: 4, 
      title: "Start the UX Design Process: Empathize, Define, and Ideate", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C4.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/ERXqb3SDA-BKkbdMVcGTM4kBGJd25hr7E8f9KaTXQp7ILg?e=yXB4XB"
    },
    { 
      id: 5, 
      title: "What is Data Science?", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C5.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EflOamh-IIZAqFQX2YbtfUYB_h2gcnsd2Bk2X6OMFjZy_w?e=N1Wo92"
    },
    { 
      id: 6, 
      title: "Generative AI Advanced Fine-Tuning for LLMs", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C6.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/Ef6NSnEwxSRJiHKBuWEsU9YB4Hl0Fhmt-zixBTlKNA_VfA?e=WVrWYq"
    },
    { 
      id: 7, 
      title: "Introduction to Hardware and Operating Systems", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C7.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EQIoKSsTxTpIpu2J2XMmadcBl5OxnjEpc-OfTU46HCFIIA?e=KQ6fqw"
    },
    { 
      id: 8, 
      title: "Introduction to Software Engineering", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C8.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/ETf71CTTvHtPjFoPHTW9yQMBtAP17T7Wgd2KPfyGnf9o3g?e=ZNBHiS"
    },
    { 
      id: 9, 
      title: "Fundamentals of AI Agents Using RAG and LangChain", 
      issuer: "Coursera", 
      date: "2025", 
      image: "/CourseraCertificate/C9.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/Eawc5_7PTjdNqy0IejC2YjMBvYaCO3Th9CfKYp8ZZA_goQ?e=ZaNnlq"
    },
    { 
      id: 10, 
      title: "Advanced Algorithms and Complexity", 
      issuer: "Coursera", 
      date: "2024", 
      image: "/CourseraCertificate/C10.webp",
      link: "https://malayancollegesmindanaoo365-my.sharepoint.com/:b:/g/personal/jpcarballo_mcm_edu_ph/EUArk4s-521LnochnBIdtiEBQzxt3zL9eC4RhvEi2me_qw?e=LA9ToV"
    },
  ]


  const [current, setCurrent] = useState(0)
  const emblaApiRef = useRef<CarouselApi | null>(null)

  const handleSetApi = (api: CarouselApi | undefined) => {
    if (!api) return
    emblaApiRef.current = api
    try {
      setCurrent(api.selectedScrollSnap())
    } catch {
      // ignore
    }
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
    api.on("reInit", () => setCurrent(api.selectedScrollSnap()))
  }

  return (
    <section id="certificates" className="relative py-14 sm:py-16 md:py-20 bg-background overflow-hidden">
      {/* Full-width blurred backdrop from active slide */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-center bg-cover blur-3xl opacity-30 scale-110"
        style={{ backgroundImage: `url(${certificates[current]?.image ?? ""})` }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-background/80" />

      <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 md:mb-16 text-center animate-fade-in">
        Certifications
      </h2>

      <div className="flex justify-center px-4 sm:px-6 ">
        <Carousel
          className="w-full max-w-5xl"
          opts={{ align: "center", loop: true }}
          setApi={handleSetApi}
        >
          <CarouselContent className="h-[360px] sm:h-[200px] md:h-[420px] items-center">
            {certificates.map((cert, idx) => {
              const isCenter = idx === current
              const isSide =
                Math.abs(idx - current) === 1 ||
                (current === 0 && idx === certificates.length - 1) ||
                (current === certificates.length - 1 && idx === 0)

              return (
                <CarouselItem
                  key={cert.id}
                  className="basis-auto w-full sm:w-[320px] sm:max-w-none md:w-[360px] xs:w-[280px] "
                >
                  <div
                    className={cn(
                      "transition-all duration-300 rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden",
                      isCenter ? "z-10 scale-[1.03] shadow-lg" : "scale-95",
                      isSide ? "blur-sm opacity-60" : !isCenter ? "blur-md opacity-40" : ""
                    )}
                    style={{ pointerEvents: isCenter ? "auto" : "none" }}
                  >
                    <div className="relative">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        loading="lazy"
                        decoding="async"
                        className="h-40 sm:h-48 w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                    </div>

                    <div className="flex h-44 sm:h-52 md:h-56 flex-col justify-between p-3 sm:p-4">
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold leading-snug line-clamp-2">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">Completed {cert.date}</p>
                      </div>

                      <Button asChild className="w-full">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          View Credential
                        </a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          <CarouselPrevious className="left-2 sm:-left-12 md:-left-4" />
          <CarouselNext className="right-2 sm:-right-12 md:-right-4" />

          <div className="flex justify-center gap-2 mt-6">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                className={cn(
                  "h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-colors",
                  current === idx ? "bg-foreground" : "bg-muted-foreground/40"
                )}
                onClick={() => emblaApiRef.current?.scrollTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
