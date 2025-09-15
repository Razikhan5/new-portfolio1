"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Brain, Zap } from "lucide-react"

const courses = [
  {
    title: "Modern Web Development",
    description:
      "Master modern web development with React, Next.js, and TypeScript. Build scalable applications with best practices.",
    level: "Beginner",
    duration: "12 weeks",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Full-Stack JavaScript",
    description: "Complete full-stack development course covering frontend, backend, and database technologies.",
    level: "Intermediate",
    duration: "16 weeks",
    icon: BookOpen,
    skills: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    title: "AI & Machine Learning",
    description: "Explore artificial intelligence and machine learning concepts with practical implementations.",
    level: "Advanced",
    duration: "20 weeks",
    icon: Brain,
    skills: ["Python", "TensorFlow", "PyTorch", "Data Science"],
  },
  {
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native and modern development tools.",
    level: "Intermediate",
    duration: "14 weeks",
    icon: Zap,
    skills: ["React Native", "Expo", "Firebase", "Redux"],
  },
]

export default function CoursesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Courses Offered</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Master the Future of Technology with Our Comprehensive Curriculum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const IconComponent = course.icon
            return (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-primary transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-primary text-white">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-slate-300 text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="border-slate-600 text-slate-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Duration: {course.duration}</span>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
