import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CreativeDeveloperSection } from "@/components/creative-developer-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import CoursesSection from "@/components/courses-section"
import { CoffeeSection } from "@/components/coffee-section"
import { ContactSection } from "@/components/contact-section"
import { AIAgent } from "@/components/ai-agent"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
        <CoursesSection />
        <CoffeeSection />
      <CreativeDeveloperSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <AIAgent />
    </main>
  )
}
