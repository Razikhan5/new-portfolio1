import React, { useState, useEffect } from 'react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building modern, responsive web applications with cutting-edge technologies",
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that delight users",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Crafting visual identities and creative solutions for brands and businesses",
      icon: "✏️",
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Auto-advance the slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        
        // Reset transitioning state after animation completes
        setTimeout(() => setIsTransitioning(false), 800);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isTransitioning, services.length]);

  const goToSlide = (index: number) => {
    if (index !== activeIndex && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  return (
    <section className="services-section py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world.
          </p>
        </div>
        
        {/* Slider Container */}
        <div className="relative h-96 md:h-80 w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
          {/* Slides */}
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center p-8
                ${index === activeIndex ? 'opacity-100 scale-100 translate-x-0' : 
                  index < activeIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
            >
              <div className={`bg-gradient-to-br ${service.color} text-white rounded-2xl p-8 w-full h-full flex flex-col justify-center items-center text-center shadow-xl`}>
                <div className="text-6xl mb-6 animate-bounce">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-xl opacity-90">{service.description}</p>
                <div className="mt-8 w-24 h-1 bg-white opacity-70 rounded-full"></div>
              </div>
            </div>
          ))}
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-20">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">We deliver exceptional results with attention to detail and passion for innovation.</p>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-5 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-20px) rotate(10deg) scale(1.05);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        
        .services-section {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;