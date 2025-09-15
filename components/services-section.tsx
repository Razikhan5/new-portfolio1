"use client"

import { Code, Palette, Smartphone, Globe } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Responsive mobile-first designs and progressive web applications for all devices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
  },
  {
    icon: Globe,
    title: "Full-Stack Solutions",
    description: "Complete end-to-end solutions from database design to deployment and maintenance.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-8">
            MY <span className="text-accent">SERVICES</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
                        hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
