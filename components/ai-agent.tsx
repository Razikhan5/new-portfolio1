"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"

export function AIAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hi! I'm Razi Khan's AI assistant. I can help you learn more about Razi's skills, projects, experience as a full-stack developer, animations, AI work, and how to get in touch with him. What would you like to know?",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = { type: "user", content: inputValue }
    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response with typing animation
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }])
    }, 1000)

    setInputValue("")
  }

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech")) {
      return "Razi Khan is a skilled full-stack developer with expertise in React, Next.js, TypeScript, Node.js, Python, and modern web technologies. He specializes in databases like PostgreSQL, MongoDB, and Supabase, cloud services like AWS and Vercel, and has experience with AI integration, responsive design, and performance optimization. He's passionate about creating scalable applications with exceptional user experiences."
    }

    if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
      return "Razi has developed various impressive projects including modern e-commerce platforms with payment integration, AI-powered task management applications, real-time weather dashboards, and interactive portfolio websites. His projects showcase expertise in both frontend and backend development, featuring modern animations, responsive design, and seamless user experiences. Each project demonstrates his ability to work with cutting-edge technologies and deliver production-ready applications."
    }

    if (lowerMessage.includes("experience") || lowerMessage.includes("background") || lowerMessage.includes("about")) {
      return "Razi Khan is a passionate full-stack developer with extensive experience in modern web development. He has a strong background in creating innovative solutions using cutting-edge technologies and believes in continuous learning. Razi is known for his attention to detail, problem-solving skills, and ability to deliver high-quality, scalable applications. He stays updated with the latest industry trends and best practices."
    }

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("hire") ||
      lowerMessage.includes("work together") ||
      lowerMessage.includes("collaboration")
    ) {
      return "You can reach out to Razi through the contact form on this website, or connect with him on LinkedIn and GitHub. He's always interested in discussing new opportunities, exciting projects, and potential collaborations. Razi is available for freelance work, full-time opportunities, and consulting services. He responds promptly to all inquiries and loves working on challenging projects."
    }

    if (lowerMessage.includes("education") || lowerMessage.includes("learning") || lowerMessage.includes("courses")) {
      return "Razi is committed to continuous learning and staying updated with the latest technologies. He regularly takes courses in web development, AI/ML, cloud computing, and modern frameworks. You can see some of the courses he recommends in the courses section of this website. He believes in sharing knowledge and often mentors other developers."
    }

    if (lowerMessage.includes("services") || lowerMessage.includes("offer") || lowerMessage.includes("help")) {
      return "Razi offers comprehensive services including full-stack web development, React/Next.js applications, API development and integration, database design and optimization, UI/UX implementation, website performance optimization, and AI integration. He can help bring your ideas to life with modern, scalable solutions tailored to your specific needs."
    }

    if (lowerMessage.includes("animation") || lowerMessage.includes("design") || lowerMessage.includes("ui")) {
      return "Razi specializes in creating beautiful, animated user interfaces using modern CSS, Framer Motion, and advanced animation libraries. He focuses on smooth transitions, engaging micro-interactions, and responsive designs that work seamlessly across all devices. His design philosophy combines aesthetics with functionality."
    }

    if (
      lowerMessage.includes("ai") ||
      lowerMessage.includes("artificial intelligence") ||
      lowerMessage.includes("machine learning")
    ) {
      return "Razi has experience integrating AI technologies into web applications, including chatbots, recommendation systems, and AI-powered features. He works with various AI APIs and services to create intelligent, user-friendly applications that leverage the power of artificial intelligence."
    }

    return "That's a great question! I can help you learn about Razi's skills, projects, experience, services, animations, AI work, or how to get in touch with him. What specific aspect would you like to know more about?"
  }

  return (
    <>
      {/* Chat Toggle Button with enhanced animation */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center animate-bounce`}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Chat Window with enhanced animations */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-2xl animate-slide-in-up border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg">
            <CardTitle className="text-sm font-medium flex items-center">
              <Bot className="w-4 h-4 mr-2 animate-pulse" />
              Razi's AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-80 p-0">
            {/* Messages with enhanced styling */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                        : "bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input with enhanced styling */}
            <div className="p-4 border-t border-border bg-background/50">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me about Razi..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 border-primary/20 focus:border-primary transition-colors"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
