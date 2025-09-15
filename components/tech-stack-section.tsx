"use client"

import { useEffect, useState } from "react"

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
  "Framer Motion",
  "Vercel",
  "Git",
  "Docker",
  "GraphQL",
  "Prisma",
  "Supabase",
  "Firebase",
]

export function TechStackSection() {
  const [mounted, setMounted] = useState(false)
  const [movingItems, setMovingItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTechClick = (tech: string) => {
    setMovingItems((prev) => new Set(prev).add(tech))

    setTimeout(() => {
      setMovingItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(tech)
        return newSet
      })
    }, 800)
  }

  if (!mounted) return null

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-card">
      <div className="container mx-auto text-center relative">
        <h2 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-8">
          MY TECH <span className="text-accent">STACK</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-16 max-w-3xl mx-auto">
          A comprehensive collection of technologies I've mastered to build modern, performant web applications
        </p>

        <div className="relative h-96 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech}
              onClick={() => handleTechClick(tech)}
              className={`absolute bg-primary text-primary-foreground px-4 py-3 rounded-full font-medium text-sm md:text-base
                        hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-pointer
                        shadow-md hover:shadow-lg animate-float-dynamic hover:scale-110 ${
                          movingItems.has(tech) ? "animate-move-on-click" : ""
                        }`}
              style={{
                left: `${(index * 47) % 85}%`,
                top: `${(index * 31) % 75}%`,
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${5 + (index % 4)}s`,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
