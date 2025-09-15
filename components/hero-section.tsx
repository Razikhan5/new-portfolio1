"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Mail, Github, Linkedin, ArrowRight, Sparkles, Zap, Rocket, Star } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["FULL STACK DEVELOPER", "UI/UX DESIGNER", "PROBLEM SOLVER"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10"
    >
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] animate-pulse-slow"></div>

        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-4 h-4 sm:w-6 sm:h-6 bg-accent/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-20 sm:left-40 w-2 h-6 sm:w-3 sm:h-8 bg-primary/20 animate-pulse delay-500"></div>
        <div className="absolute top-32 sm:top-60 left-1/4 sm:left-1/3 w-2 h-2 bg-accent/60 rotate-45 animate-spin-slow delay-700"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-10 sm:right-20 w-4 h-4 sm:w-5 sm:h-5 bg-primary/40 rounded-full animate-ping delay-300"></div>

        <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-l from-accent/15 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="absolute right-4 sm:right-10 lg:right-20 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="robot-container animate-robot-float">
          {/* Robot Head */}
          <div className="robot-head relative">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/80 to-primary/60 rounded-lg border-2 border-primary/40 shadow-lg transform rotate-3d animate-robot-head-tilt">
              {/* Eyes */}
              <div className="flex justify-center items-center h-full gap-2">
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-accent rounded-full animate-robot-eye-blink"></div>
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-accent rounded-full animate-robot-eye-blink delay-100"></div>
              </div>
              {/* Antenna */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-primary/60 rounded-full"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Robot Body */}
          <div className="robot-body mt-2">
            <div className="w-20 h-24 lg:w-24 lg:h-28 bg-gradient-to-br from-primary/70 to-primary/50 rounded-xl border-2 border-primary/30 shadow-lg relative">
              {/* Chest Panel */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-8 lg:w-14 lg:h-10 bg-background/20 rounded border border-primary/20">
                <div className="flex justify-center items-center h-full">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>
              {/* Side Panels */}
              <div className="absolute top-6 left-1 w-2 h-4 bg-primary/40 rounded"></div>
              <div className="absolute top-6 right-1 w-2 h-4 bg-primary/40 rounded"></div>
            </div>
          </div>

          {/* Robot Arms */}
          <div className="robot-arms flex justify-between absolute top-16 lg:top-20 -left-6 -right-6">
            <div className="robot-arm-left animate-robot-wave">
              <div className="w-3 h-12 lg:w-4 lg:h-14 bg-gradient-to-b from-primary/60 to-primary/40 rounded-full border border-primary/30"></div>
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-primary/70 rounded-full border border-primary/30 -mt-1"></div>
            </div>
            <div className="robot-arm-right animate-robot-wave-reverse">
              <div className="w-3 h-12 lg:w-4 lg:h-14 bg-gradient-to-b from-primary/60 to-primary/40 rounded-full border border-primary/30"></div>
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-primary/70 rounded-full border border-primary/30 -mt-1"></div>
            </div>
          </div>

          {/* Robot Legs */}
          <div className="robot-legs flex justify-center gap-2 mt-2">
            <div className="w-3 h-16 lg:w-4 lg:h-20 bg-gradient-to-b from-primary/60 to-primary/40 rounded-full border border-primary/30"></div>
            <div className="w-3 h-16 lg:w-4 lg:h-20 bg-gradient-to-b from-primary/60 to-primary/40 rounded-full border border-primary/30"></div>
          </div>

          {/* Robot Feet */}
          <div className="robot-feet flex justify-center gap-2 -mt-2">
            <div className="w-5 h-3 lg:w-6 lg:h-4 bg-primary/50 rounded-full border border-primary/30"></div>
            <div className="w-5 h-3 lg:w-6 lg:h-4 bg-primary/50 rounded-full border border-primary/30"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary/80 rounded-full border border-primary mb-6 sm:mb-8 backdrop-blur-sm shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-white">Available for new projects</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/70 mb-3 sm:mb-4 font-light">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                <span className="bg-gradient-to-r from-foreground via-primary via-accent to-foreground bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                  Razi Khan
                </span>
              </h1>
            </div>

            <div className="mb-6 sm:mb-8">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] flex items-center justify-center px-2 sm:px-0">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] text-center">
                  {words[currentWordIndex]}
                </span>
              </div>
            </div>

            <div className="mb-8 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                Transforming ideas into exceptional digital experiences through innovative design and cutting-edge
                development. Specializing in React, Next.js, and modern web technologies to bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 border-0 w-full sm:w-auto"
                onClick={scrollToProjects}
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform" />
                Explore My Work
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-primary/40 text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-background/50 backdrop-blur-sm shadow-lg w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <a
                href="https://github.com/Razikhan5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 hover:from-primary/30 hover:to-accent/30 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 backdrop-blur-sm"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/razi-khan-8a64162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 hover:from-primary/30 hover:to-accent/30 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:razikhn7891@gmail.com"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 hover:from-primary/30 hover:to-accent/30 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 border border-primary/20 hover:border-primary/40 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 opacity-20 animate-float-slow">
        <div className="text-2xl sm:text-4xl md:text-6xl font-mono text-primary transform rotate-12">{`{}`}</div>
      </div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 opacity-20 animate-float-reverse">
        <div className="text-xl sm:text-3xl md:text-5xl font-mono text-accent transform -rotate-12">{`</>`}</div>
      </div>
      <div className="absolute top-1/2 right-10 sm:right-20 opacity-10 animate-bounce hidden md:block">
        <div className="text-6xl sm:text-8xl font-mono text-primary transform rotate-45">λ</div>
      </div>
      <div className="absolute top-16 sm:top-32 left-1/4 opacity-15 animate-pulse">
        <Star className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
      </div>
      <div className="absolute bottom-16 sm:bottom-32 right-1/4 sm:right-1/3 opacity-15 animate-spin-slow">
        <Code className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
      </div>
    </section>
  )
}
