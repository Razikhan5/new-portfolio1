"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CoffeeSection() {
  const [showTeaCups, setShowTeaCups] = useState(false)

  const handleCoffeeClick = () => {
    setShowTeaCups(true)
    // Reset animation after 3 seconds
    setTimeout(() => setShowTeaCups(false), 3000)
  }

  return (
    <section className="py-20 px-4 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="relative">
          {/* Main Content */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">Ready to Collaborate?</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              I'm always excited to work on innovative projects that challenge me and create meaningful impact. Let's
              discuss how we can bring your vision to life.
            </p>
          </div>

          {/* Coffee Button */}
          <div className="relative">
            <Button
              onClick={handleCoffeeClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="mr-3 text-2xl">☕</span>
              Let's Grab Coffee
            </Button>
          </div>

          {/* Animated Tea Cups */}
          {showTeaCups && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-full h-32">
                {/* Left Tea Cup */}
                <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 animate-slide-right">
                  <div className="text-6xl animate-bounce">🍵</div>
                </div>

                {/* Right Tea Cup */}
                <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 animate-slide-left">
                  <div className="text-6xl animate-bounce">🍵</div>
                </div>

                {/* Collision Effect */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-collision-effect">
                  <div className="text-4xl">✨</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground text-sm">Quick turnaround on projects</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">💡</div>
            <h3 className="font-semibold text-foreground mb-2">Creative Solutions</h3>
            <p className="text-muted-foreground text-sm">Innovative approaches to problems</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="font-semibold text-foreground mb-2">Great Communication</h3>
            <p className="text-muted-foreground text-sm">Regular updates and feedback</p>
          </div>
        </div>
      </div>
    </section>
  )
}
