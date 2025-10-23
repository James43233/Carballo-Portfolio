"use client"

import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/Allahuuuu.Potatooooo" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/james_carballo/" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/james-paul-carballo-b49bb4317/" },
    { icon: Github, label: "GitHub", url: "https://github.com/James43233" },
    { icon: Mail, label: "Email", url: "mailto:jpCarballo@mcm.edu.ph" },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about building scalable applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certificates" className="text-muted-foreground hover:text-foreground transition-colors">
                  Certificates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} James Paul U. Carballo. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
