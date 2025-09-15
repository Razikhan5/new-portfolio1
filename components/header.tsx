"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")

  const tabs = [
    { name: "Home", section: "home", icon: <GoHomeFill /> },
    { name: "About", section: "about", icon: <FaUser /> },
    { name: "Projects", section: "projects", icon: <FaBriefcase /> },
    { name: "Contact", section: "contact", icon: <FaEnvelope /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string, tabName: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveTab(tabName)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="relative">
            <div className="font-heading font-black text-xl sm:text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Razi Khan
            </div>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-1 sm:gap-3 bg-background/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => scrollToSection(tab.section, tab.name)}
                  className={`relative cursor-pointer text-sm px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.name ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"
                  }`}
                  style={{
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span className="hidden lg:inline">{tab.name}</span>
                  <span className="lg:hidden">{tab.icon}</span>
                  {activeTab === tab.name && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 sm:w-8 h-1 bg-primary rounded-t-md animate-pulse">
                      <div className="absolute w-8 sm:w-10 h-8 sm:h-12 bg-primary rounded-full blur shadow-lg opacity-10 -top-2 sm:-top-3 -left-1 sm:-left-1" />
                      <div className="absolute w-10 sm:w-12 h-8 sm:h-12 bg-primary rounded-full blur shadow-lg opacity-20 -top-2 sm:-top-3 -left-2 sm:-left-1" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => scrollToSection(tab.section, tab.name)}
                  className="text-left text-foreground hover:text-primary transition-colors flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-primary/10"
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
