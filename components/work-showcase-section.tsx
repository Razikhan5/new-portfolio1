"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    image: "/modern-ecommerce-interface.png",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "Collaborative task management tool with real-time updates and team features",
    image: "/task-management-dashboard.png",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with forecasts and location-based data",
    image: "/weather-dashboard-interface.png",
    tech: ["Next.js", "Tailwind", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function WorkShowcaseSection() {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">
            MY <span className="text-primary">WORK</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 sm:px-0">
            Showcasing my latest projects and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
