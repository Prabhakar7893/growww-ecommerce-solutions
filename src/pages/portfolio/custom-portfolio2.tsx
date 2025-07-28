"use client";
import React  from "react";
import { useState, useEffect, useRef } from "react";
import Wrapper from "@/layouts/wrapper";
import Image from 'next/image';

const Portfolio = () => {

  interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  requirements: string[];
  challenges: string[];
  solutions: string[];
  outcome: string;
  businessImpact: string;
  technologies: string[];
  timeline: string;
  teamSize: string;
  project_link?: string; // optional, if not all have it
}

const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  //const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.parallax');
      parallax.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = htmlElement.dataset.speed;
        const yPos = -(scrolled * parseInt(speed || '0') / 100);
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution",
      client: "TechMart Solutions",
      category: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      requirements: [
        "Modern responsive design",
        "Payment gateway integration",
        "Inventory management system",
        "Multi-vendor support",
        "Advanced analytics dashboard"
      ],
      challenges: [
        "High traffic handling (10k+ concurrent users)",
        "Complex payment processing",
        "Real-time inventory updates",
        "Multi-currency support"
      ],
      solutions: [
        "Implemented Redis caching for performance",
        "Microservices architecture for scalability",
        "Real-time websocket connections",
        "Advanced security protocols"
      ],
      outcome: "300% increase in conversion rate, 250% boost in revenue",
      businessImpact: "$2.5M additional revenue in first year",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe"],
      timeline: "6 months",
      teamSize: "8 developers"
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      client: "InvestPro Analytics",
      category: "Financial Technology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      requirements: [
        "Real-time market data visualization",
        "Portfolio management tools",
        "Risk assessment algorithms",
        "Compliance reporting",
        "Mobile trading platform"
      ],
      challenges: [
        "Real-time data processing",
        "Complex financial calculations",
        "Regulatory compliance",
        "High-frequency trading support"
      ],
      solutions: [
        "WebSocket-based real-time updates",
        "Advanced charting with D3.js",
        "Automated compliance checks",
        "Machine learning for predictions"
      ],
      outcome: "40% faster trade execution, 60% improved user satisfaction",
      businessImpact: "$5M assets under management increase",
      technologies: ["React", "Python", "WebSocket", "D3.js", "AWS"],
      timeline: "8 months",
      teamSize: "12 developers"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      client: "MediCare Plus",
      category: "Healthcare Technology",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      requirements: [
        "Patient record management",
        "Appointment scheduling",
        "Telemedicine integration",
        "Billing and insurance claims",
        "Mobile app for patients"
      ],
      challenges: [
        "HIPAA compliance requirements",
        "Integration with legacy systems",
        "High availability requirements",
        "Complex workflow management"
      ],
      solutions: [
        "End-to-end encryption",
        "API-first architecture",
        "Cloud-native deployment",
        "Automated workflow engine"
      ],
      outcome: "50% reduction in administrative work, 80% patient satisfaction",
      businessImpact: "$3M operational cost savings annually",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      timeline: "10 months",
      teamSize: "15 developers"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#121212',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Advanced CSS Animations & Effects */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(50px) opacity(0) scale(0.8); }
          100% { transform: translateY(0) opacity(1) scale(1); }
        }
        
        @keyframes scale-up {
          0% { transform: scale(0.8) rotateY(-15deg) opacity(0); }
          100% { transform: scale(1) rotateY(0deg) opacity(1); }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
                       0 0 40px rgba(59, 130, 246, 0.3),
                       0 0 60px rgba(59, 130, 246, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8),
                       0 0 60px rgba(59, 130, 246, 0.5),
                       0 0 90px rgba(59, 130, 246, 0.3);
          }
        }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes card-tilt {
          0% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg); }
          100% { transform: perspective(1000px) rotateX(10deg) rotateY(10deg); }
        }
        
        @keyframes magnetic-pull {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(var(--mouse-x, 0), var(--mouse-y, 0)) scale(1.05); }
        }
        
        @keyframes hologram {
          0%, 100% { 
            background: linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%);
            transform: translateX(-100%);
          }
          50% { transform: translateX(100%); }
        }
        
        @keyframes modal-entrance {
          0% { 
            opacity: 0;
            transform: scale(0.7) rotateX(-20deg) rotateY(10deg);
            filter: blur(10px);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05) rotateX(5deg) rotateY(-2deg);
            filter: blur(2px);
          }
          100% { 
            opacity: 1;
            transform: scale(1) rotateX(0deg) rotateY(0deg);
            filter: blur(0px);
          }
        }
        
        @keyframes modal-section-enter {
          0% { 
            opacity: 0;
            transform: translateY(30px) rotateX(-10deg);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes tech-badge-float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
          }
          50% { 
            transform: translateY(-5px) rotate(2deg);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes image-zoom-rotate {
          0% { 
            transform: scale(1) rotate(0deg);
            filter: brightness(1) saturate(1);
          }
          100% { 
            transform: scale(1.2) rotate(5deg);
            filter: brightness(1.2) saturate(1.3);
          }
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-scale-up { animation: scale-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-ping { animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-particle { animation: particle-float linear infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: text-shimmer 2s linear infinite;
        }
        .animate-tilt { transition: transform 0.3s ease; }
        .animate-tilt:hover { animation: card-tilt 0.6s ease-in-out; }
        .animate-magnetic { transition: transform 0.2s ease; }
        .animate-hologram::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: hologram 3s linear infinite;
          pointer-events: none;
        }
        .animate-modal-entrance { animation: modal-entrance 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-modal-section { animation: modal-section-enter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-tech-badge { animation: tech-badge-float 3s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .card-gradient {
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.9) 0%, rgba(18, 18, 18, 0.9) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .project-card:hover {
          transform: translateY(-20px) rotateX(5deg) rotateY(5deg) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5),
                     0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 16px;
        }
        
        .project-card:hover::before {
          opacity: 1;
        }
        
        .project-card img {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .project-card:hover img {
          animation: image-zoom-rotate 0.6s ease-in-out forwards;
        }
        
        .badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .badge:hover::before {
          left: 100%;
        }
        
        .badge-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
        }
        
        .badge-outline {
          border: 1px solid #4b5563;
          color: #d1d5db;
          background: rgba(75, 85, 99, 0.2);
        }
        
        .badge-outline:hover {
          border-color: #60a5fa;
          color: #60a5fa;
          background: rgba(96, 165, 250, 0.1);
          transform: translateY(-2px);
        }
        
        .button {
          padding: 14px 28px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          border: none;
          position: relative;
          overflow: hidden;
        }
        
        .button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .button:hover::before {
          left: 100%;
        }
        
        .button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }
        
        .button:active::after {
          width: 300px;
          height: 300px;
          animation: ripple 0.6s ease-out;
        }
        
        .button-primary {
          background: linear-gradient(135deg, #2563eb, #7c3aed, #ec4899);
          color: white;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
        }
        
        .button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.6);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 50;
          animation: slide-up 0.4s ease;
        }
        
        .modal-content {
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
          backdrop-filter: blur(30px);
          max-width: 64rem;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8),
                     0 0 50px rgba(59, 130, 246, 0.2);
          position: relative;
        }
        
        .modal-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            transparent 25%, 
            transparent 75%, 
            rgba(168, 85, 247, 0.1) 100%);
          border-radius: 24px;
          pointer-events: none;
          z-index: -1;
        }
        
        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 10;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .close-button:hover {
          background: rgba(239, 68, 68, 0.9);
          transform: rotate(90deg) scale(1.2);
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #60a5fa, transparent);
          border-radius: 50%;
          pointer-events: none;
        }
        
        .parallax {
          transition: transform 0.1s ease-out;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 400% 400%;
          animation: text-shimmer 4s ease-in-out infinite;
        }
        
        .morphing-blob {
          position: absolute;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2), transparent);
          filter: blur(40px);
          animation: morph 20s ease-in-out infinite;
        }
        
        .modal-section {
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .modal-section.visible {
          transform: translateY(0);
          opacity: 1;
        }
        
        .tech-badge {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .tech-badge::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          animation: spin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tech-badge:hover::before {
          opacity: 1;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .enhanced-card {
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(30, 30, 30, 0.9) 25%, 
            rgba(18, 18, 18, 0.9) 75%, 
            rgba(168, 85, 247, 0.15) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .enhanced-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.8s ease;
        }
        
        .enhanced-card:hover::after {
          left: 100%;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem !important;
          }
          
          .hero-subtitle {
            font-size: 2rem !important;
          }
          
          .grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: 1fr !important;
          }
          
          .project-card:hover {
            transform: translateY(-10px) scale(1.02);
          }
          
          .modal-content {
            margin: 10px;
            max-height: 95vh;
          }
        }
      `}</style>

      {/* Header */}
      

      {/* Animated Particles Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 12}s`,
              background: `radial-gradient(circle, ${['#60a5fa', '#a78bfa', '#22d3ee', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)]}, transparent)`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`
            }}
          />
        ))}
      </div>

      {/* Enhanced Morphing Background Blobs */}
      <div className="morphing-blob animate-gradient" style={{
        top: '5%',
        left: '5%',
        width: '350px',
        height: '350px',
        animationDelay: '0s',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.2), transparent)'
      }} />
      <div className="morphing-blob animate-gradient" style={{
        top: '50%',
        right: '5%',
        width: '280px',
        height: '280px',
        animationDelay: '4s',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), rgba(168, 85, 247, 0.2), transparent)'
      }} />
      <div className="morphing-blob animate-gradient" style={{
        bottom: '10%',
        left: '25%',
        width: '220px',
        height: '220px',
        animationDelay: '8s',
        background: 'radial-gradient(circle, rgba(34, 197, 238, 0.4), rgba(34, 197, 238, 0.2), transparent)'
      }} />

      {/* Navigation */}
      {/* <nav style={{ position: 'relative', zIndex: 50, padding: '24px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          maxWidth: '80rem', 
          margin: '0 auto' 
        }}>
          <a 
            href="/" 
            className="animate-magnetic"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#d1d5db', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              padding: '8px 16px',
              borderRadius: '25px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              const element = e.target as HTMLElement;
              element.style.color = 'white';
              element.style.background = 'rgba(59, 130, 246, 0.2)';
              element.style.transform = 'translateX(-5px)';
            }}
            onMouseLeave={(e) => {
              const element = e.target as HTMLElement;
              element.style.color = '#d1d5db';
              element.style.background = 'rgba(255, 255, 255, 0.05)';
              element.style.transform = 'translateX(0)';
            }}
          >
            <span style={{ fontSize: '20px' }}>←</span>
            Back to Home
          </a>
          <div className="text-gradient" style={{ 
            fontSize: '32px', 
            fontWeight: 'bold'
          }}>
            Portfolio
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div ref={heroRef} style={{ position: 'relative', padding: '80px 24px', textAlign: 'center', zIndex: 10 }}>
        {/* Enhanced Floating Elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '25%',
            width: '12px',
            height: '12px',
            background: 'radial-gradient(circle, #60a5fa, transparent)',
            borderRadius: '50%'
          }} className="animate-ping"></div>
          <div style={{
            position: 'absolute',
            top: '128px',
            right: '33%',
            width: '16px',
            height: '16px',
            background: 'radial-gradient(circle, #a78bfa, transparent)',
            borderRadius: '50%',
            animationDelay: '1s'
          }} className="animate-ping"></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            left: '20%',
            width: '10px',
            height: '10px',
            background: 'radial-gradient(circle, #22d3ee, transparent)',
            borderRadius: '50%',
            animationDelay: '2s'
          }} className="animate-ping"></div>
          
          {/* 3D Floating Geometric Shapes */}
          <div className="parallax animate-float" data-speed="2" style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
            transform: 'rotate(45deg)',
            opacity: '0.7',
            filter: 'blur(1px)'
          }} />
          <div className="parallax animate-float-slow" data-speed="4" style={{
            position: 'absolute',
            bottom: '30%',
            right: '25%',
            width: '40px',
            height: '40px',
            background: 'linear-gradient(45deg, #22d3ee, #f59e0b)',
            borderRadius: '50%',
            opacity: '0.6',
            animationDelay: '3s'
          }} />
        </div>
        
        <div style={{ maxWidth: '64rem', margin: '0 auto', position: 'relative', zIndex: 10 }} className="animate-slide-up">
          <h1 className="hero-title text-gradient" style={{ 
            fontSize: '6rem', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            textShadow: '0 0 30px rgba(96, 165, 250, 0.5)'
          }}>
            Our Work
          </h1>
          <div className="animate-shimmer" style={{
            display: 'inline-block',
            padding: '4px',
            borderRadius: '25px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            backgroundSize: '200% 100%'
          }}>
            <p style={{ 
              fontSize: '24px', 
              color: '#d1d5db', 
              marginBottom: '32px',
              padding: '12px 24px',
              background: 'rgba(30, 30, 30, 0.8)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              Transforming businesses through innovative digital solutions
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px 80px', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }} className="grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="enhanced-card project-card animate-scale-up animate-tilt animate-hologram"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                animationDelay: `${index * 0.3}s`,
                animationFillMode: 'both'
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <Image
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, rgba(0,0,0,0.7), rgba(59, 130, 246, 0.2), rgba(0,0,0,0.7))'
                }}></div>
                <span className="badge badge-primary" style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px'
                }}>
                  {project.category}
                </span>
              </div>
              
              <div style={{ padding: '28px' }}>
                <h3 style={{ 
                  fontSize: '22px', 
                  fontWeight: '700', 
                  marginBottom: '8px',
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {project.title}
                </h3>
                <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '16px' }}>{project.client}</p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginBottom: '20px' 
                }}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="badge badge-outline">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="badge badge-outline">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  fontSize: '14px',
                  color: '#9ca3af',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>🕒</span>
                    {project.timeline}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>👥</span>
                    {project.teamSize}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content animate-modal-entrance">
            <div style={{ position: 'relative' }}>
              <Image
                src={selectedProject.image} 
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '24px',
                  borderTopRightRadius: '24px',
                  transition: 'all 0.6s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2), rgba(0,0,0,0.8))',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px'
              }}></div>
              <button 
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div style={{ 
                position: 'absolute', 
                bottom: '24px', 
                left: '32px'
              }} className="animate-modal-section">
                <h2 className="text-gradient" style={{ 
                  fontSize: '52px', 
                  fontWeight: 'bold', 
                  marginBottom: '8px',
                  textShadow: '0 4px 8px rgba(0,0,0,0.5)'
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: '#60a5fa', fontSize: '20px', fontWeight: '500' }}>{selectedProject.client}</p>
              </div>
            </div>
            
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Enhanced Project Overview */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '24px' 
              }} className="grid-cols-3 animate-modal-section">
                <div className="enhanced-card animate-scale-up" style={{
                  padding: '24px',
                  borderRadius: '16px',
                  animationDelay: '0.1s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#60a5fa', fontSize: '24px' }}>📈</span>
                    <span style={{ fontWeight: '700', color: 'white', fontSize: '18px' }}>Business Impact</span>
                  </div>
                  <p style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '20px' }}>
                    {selectedProject.businessImpact}
                  </p>
                </div>
                
                <div className="enhanced-card animate-scale-up" style={{
                  padding: '24px',
                  borderRadius: '16px',
                  animationDelay: '0.2s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#22c55e', fontSize: '24px' }}>✅</span>
                    <span style={{ fontWeight: '700', color: 'white', fontSize: '18px' }}>Outcome</span>
                  </div>
                  <p style={{ color: '#22c55e', fontWeight: '600', fontSize: '16px' }}>
                    {selectedProject.outcome}
                  </p>
                </div>
                
                <div className="enhanced-card animate-scale-up" style={{
                  padding: '24px',
                  borderRadius: '16px',
                  animationDelay: '0.3s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#a855f7', fontSize: '24px' }}>👥</span>
                    <span style={{ fontWeight: '700', color: 'white', fontSize: '18px' }}>Team</span>
                  </div>
                  <p style={{ color: '#a855f7', fontSize: '18px', fontWeight: '600' }}>{selectedProject.teamSize}</p>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>{selectedProject.timeline}</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="animate-modal-section" style={{ animationDelay: '0.4s' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                  Requirements
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '16px' 
                }} className="grid-cols-2">
                  {selectedProject.requirements.map((req, index) => (
                    <div key={index} className="enhanced-card animate-scale-up" style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      color: '#d1d5db',
                      padding: '16px',
                      borderRadius: '12px',
                      animationDelay: `${0.5 + index * 0.1}s`
                    }}>
                      <span style={{ color: '#60a5fa', flexShrink: 0, fontSize: '18px' }}>✓</span>
                      {req}
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '40px' 
              }} className="grid-cols-2">
                <div className="animate-modal-section" style={{ animationDelay: '0.6s' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                    Challenges Solved
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {selectedProject.challenges.map((challenge, index) => (
                      <div key={index} className="enhanced-card animate-scale-up" style={{
                        padding: '20px',
                        borderRadius: '12px',
                        animationDelay: `${0.7 + index * 0.1}s`,
                        border: '1px solid rgba(239, 68, 68, 0.3)'
                      }}>
                        <p style={{ color: '#d1d5db', fontSize: '16px' }}>{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="animate-modal-section" style={{ animationDelay: '0.8s' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                    Our Solutions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {selectedProject.solutions.map((solution, index) => (
                      <div key={index} className="enhanced-card animate-scale-up" style={{
                        padding: '20px',
                        borderRadius: '12px',
                        animationDelay: `${0.9 + index * 0.1}s`,
                        border: '1px solid rgba(34, 197, 94, 0.3)'
                      }}>
                        <p style={{ color: '#d1d5db', fontSize: '16px' }}>{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="animate-modal-section" style={{ animationDelay: '1s' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                  Technologies Used
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={tech} className="tech-badge animate-tech-badge animate-scale-up" style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))',
                      border: '1px solid rgba(59, 130, 246, 0.4)',
                      color: '#93c5fd',
                      padding: '12px 20px',
                      borderRadius: '14px',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      animationDelay: `${1.1 + index * 0.1}s`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center', paddingTop: '32px' }} className="animate-modal-section">
                <button className="button button-primary animate-glow" style={{ animationDelay: '1.2s' }}>
                  <span style={{ marginRight: '12px' }}>🔗</span>
                  View Live Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;