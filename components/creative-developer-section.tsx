"use client"

import { useState, useEffect } from "react"

const codeLines = [
  "const me = {",
  '  name: "RAZI KHAN",',
  '  mission: "Build epic apps that inspire",',
  '  inspire: () => "Code today, change tomorrow! 🚀"',
  "};",
  "",
  "console.log(me.inspire());",
]

export function CreativeDeveloperSection() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return

    const currentLine = codeLines[currentLineIndex]

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev]
          if (newLines[currentLineIndex]) {
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1)
          } else {
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1)
          }
          return newLines
        })
        setCurrentCharIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, currentCharIndex])

  // Function to handle CV download
  const handleDownloadCV = () => {
    setIsDownloading(true)
    
    try {
      // Create a link element
      const link = document.createElement('a')
      
      // Path to your CV file - directly in public folder as cv.pdf
      link.href = '/cv.pdf'
      
      // Set the download attribute with the desired file name
      link.download = 'Razi_Khan_CV.pdf'
      
      // Append to the document
      document.body.appendChild(link)
      
      // Trigger the download
      link.click()
      
      // Clean up
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback: Open in new tab if download fails
      window.open('/cv.pdf', '_blank')
    }
    
    // Reset downloading state after a short delay
    setTimeout(() => setIsDownloading(false), 1000)
  }

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-8">
              CREATIVE{" "}
              <span className="relative inline-block">
                <span
                  className="text-primary font-black bg-primary/10 px-3 py-1 rounded-lg border-2 border-primary/20 shadow-lg"
                  style={{ textShadow: "0 2px 4px rgba(16, 185, 129, 0.3)" }}
                >
                  DEVELOPER
                </span>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
              Passionate about creating digital experiences that combine beautiful design with powerful functionality
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-heading font-semibold text-xl mb-4">Crafting Intelligent Web Experiences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Razi Khan, a Full-Stack and Agentic AI Developer with expertise in building modern, scalable web
                  applications and integrating AI agents to create smarter, more dynamic user experiences.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  I build modern, scalable web applications and integrate AI agents to create smarter, more dynamic user
                  experiences.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Alongside my development work with diverse clients, I stay passionate about learning and evolving with
                  the latest tech trends.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className={`bg-primary text-background px-6 py-3 rounded-lg font-medium 
                               transition-colors duration-300 flex items-center gap-2
                               ${isDownloading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  <>
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </>
                )}
              </button>
              <button
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium 
                               hover:bg-primary hover:text-background transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Upwork Profile
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-muted-foreground ml-auto">about-me.ts</span>
              </div>

              <div className="space-y-1">
                {displayedLines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-muted-foreground w-8 text-right mr-4">{index + 1}</span>
                    <span className="text-foreground">
                      {line && line.includes("const") && <span className="text-blue-400">const </span>}
                      {line && line.includes("name:") && <span className="text-green-400">name: </span>}
                      {line && line.includes("mission:") && <span className="text-green-400">mission: </span>}
                      {line && line.includes("inspire:") && <span className="text-green-400">inspire: </span>}
                      {line && line.includes("console.log") && <span className="text-blue-400">console.log</span>}
                      {line ? line.replace(/const |name: |mission: |inspire: |console\.log/, "") : ""}
                    </span>
                  </div>
                ))}
                <div className="flex">
                  <span className="text-muted-foreground w-8 text-right mr-4"></span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border text-xs text-muted-foreground">
                <span>TypeScript 5.0</span>
                <span className="flex items-center gap-1">
                  <span className="text-primary">⚡</span>
                  Powered by Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}