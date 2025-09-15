"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "fullstack",
      github: "#",
      live: "https://hakhaton1.vercel.app/",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "res.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      github: "#",
      live: "#https://hakhatone-milstone5.vercel.app/",
    },
    {
      title: "realstate Website",
      description: "A responsive  website with modern animations and interactive elements.",
      image: "real.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "frontend",
      github: "#",
      live: "#https://qkassociates.org/",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard with location-based forecasts and interactive maps.",
      image: "/weather-dashboard-interface.png",
      technologies: ["React", "API Integration", "Chart.js"],
      category: "frontend",
      github: "#",
      live: "#",
    },
    {
      title: "API Gateway",
      description: "A scalable API gateway with authentication, rate limiting, and monitoring.",
      image: "/api-gateway-architecture.png",
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      category: "backend",
      github: "#",
      live: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with file sharing and group messaging capabilities.",
      image: "/chat-application-interface.png",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      github: "#",
      live: "#",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  // Function to handle opening live project
  const handleOpenLiveProject = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  // Function to handle opening GitHub repository
  const handleOpenGithub = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-heading text-lg sm:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 bg-transparent text-xs sm:text-sm"
                      onClick={() => handleOpenGithub(project.github)}
                      disabled={project.github === "#"}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-xs sm:text-sm"
                      onClick={() => handleOpenLiveProject(project.live)}
                      disabled={project.live === "#"}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}