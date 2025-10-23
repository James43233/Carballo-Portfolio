"use client"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Toyozu Autoshop Online Retail Application",
      description:
        "Full-stack e-commerce solution with React, Django, and PostgreSQL.",
      technologies: ["React", "Django", "PostgreSQL"],
      image: "/ApplicationProof/ToyozuE-Commerce.png",
      link: "https://github.com/James43233/ToyozuWebApplication",
    },
    {
      id: 2,
      title: "LTO Application Violation Tracker and Payment",
      description:
        "Cross-platform violation tracking and payment app built with React Native.",
      technologies: ["React Native", "Django", "PostgreSQL"],
      image: "/ApplicationProof/LTOApp.png",
      link: "https://github.com/James43233/LTO-Application-Violation-Monitoring-System.git",
    },
    {
      id: 3,
      title: "MisFits POS and Inventory System",
      description:
        "POS and inventory management system for small clothing businesses.",
      technologies: ["HTML / CSS", "PHP", "MySQL"],
      image: "/ApplicationProof/MisFitsPOS.png",
      link: "https://github.com/James43233/POS-Inventory-System",
    },
    {
      id: 4,
      title: "Pest Detection in Greenhouse Environment",
      description:
        "Object detection using deep learning to identify pests in greenhouse environments.",
      technologies: ["Python", "Roboflow", "Google Colab"],
      image: "/ApplicationProof/PestDetection.png",
      link: "https://universe.roboflow.com/pestdetectionmodel-oqwk6/pest-dataset-923-jzzq0",
    },
    {
      id: 5,
      title: "Expenses Tracker Application Using LLM",
      description:
        "Chatbot-based expense tracker using Large Language Models for smart analysis.",
      technologies: ["React Native", "FastAPI", "SQLite"],
      image: "/ApplicationProof/ExpensesTracker.png",
      link: "https://github.com/James43233/ExpensesTrackerDesign",
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
