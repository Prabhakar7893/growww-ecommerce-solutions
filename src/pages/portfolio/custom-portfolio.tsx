import { useState } from "react";
import HeaderFour from "@/layouts/headers/header-four";
import p_1 from "@/assets/img/home-04/portfolio/images/agrivrudhi.png";
import Link from "next/link";
//import "../../../.next/static/css/app/layout.css";
//import '../../styles/layout.css';
import '@/styles/layout.css';
import FooterFour from "@/layouts/footers/footer-four";

const Portfolio = () => {
  
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Agri Vruddhi",
      client: "Empowering Farmers",
      category: "E-Commerce Platform",
      image: "/assets/img/home-04/portfolio/images/agrivrudhi.png",
      requirements: [
        "Modern responsive design",
        "Payment gateway integration",
        "Multi Language Support",
        "Live Order Tracking",
        "Advanced analytics dashboard",
        "WhatsApp Integration"
      ],
      challenges: [
        "High traffic handling (20k+ concurrent users)",
        "Complex payment processing",
        "Real-time inventory updates",
        "Multi-language support",
        "Bulk Order Enquiry"
      ],
      solutions: [
        "Complex Payment Gateway Integration",
        "Microservices architecture for scalability",
        "Real-time websocket connections",
        "Advanced security protocols",
        "Magic Checkout"
      ],
      outcome: "300% increase in conversion rate, 250% boost in revenue",
      businessImpact: "13 Lakhs additional revenue in first year",
      technologies: ["Shopify", "Liquid", "MongoDB", "Shiprocket", "RazorPay", "Delhivery One"],
      timeline: "1 Week",
      teamSize: "2 developers",
      project_link: "https://agrivruddhi.com/"
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
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240229162347/Hospital-Management-System.webp",
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
    },
    {
      id: 4,
      title: "Agri Vruddhi",
      client: "Empowering Farmers",
      category: "E-Commerce Platform",
      image: "/assets/img/home-04/portfolio/images/agrivrudhi.png",
      requirements: [
        "Modern responsive design",
        "Payment gateway integration",
        "Multi Language Support",
        "Live Order Tracking",
        "Advanced analytics dashboard",
        "WhatsApp Integration"
      ],
      challenges: [
        "High traffic handling (20k+ concurrent users)",
        "Complex payment processing",
        "Real-time inventory updates",
        "Multi-language support",
        "Bulk Order Enquiry"
      ],
      solutions: [
        "Complex Payment Gateway Integration",
        "Microservices architecture for scalability",
        "Real-time websocket connections",
        "Advanced security protocols",
        "Magic Checkout"
      ],
      outcome: "300% increase in conversion rate, 250% boost in revenue",
      businessImpact: "13 Lakhs additional revenue in first year",
      technologies: ["Shopify", "Liquid", "MongoDB", "Shiprocket", "RazorPay", "Delhivery One"],
      timeline: "1 Week",
      teamSize: "2 developers",
      project_link: "https://agrivruddhi.com/"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#121212',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Custom CSS Animations */}
      <style>{`
      html{
         background: #121212;
      }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scale-up {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-scale-up { animation: scale-up 0.5s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-ping { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        .card-gradient {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
          backdrop-filter: blur(10px);
        }
        
        .project-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .project-card:hover {
          transform: scale(1.05);
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        .project-card img {
          transition: transform 0.5s ease;
        }
        
        .project-card:hover img {
          transform: scale(1.1);
        }
        
        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .badge-primary {
          background: rgba(59, 130, 246, 0.8);
          color: white;
        }
        
        .badge-outline {
          border: 1px solid #4b5563;
          color: #d1d5db;
        }
        
        .button {
          padding: 12px 24px;
          border-radius: 9999px;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }
        
        .button-primary {
          background: linear-gradient(to right, #2563eb, #7c3aed);
          color: white;
        }
        
        .button-primary:hover {
          background: linear-gradient(to right, #1d4ed8, #6d28d9);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          z-index: 50;
        }
        
        .modal-content {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
          backdrop-filter: blur(10px);
          max-width: 64rem;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 16px;
          border: 1px solid #374151;
        }
        
        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 8px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .close-button:hover {
          background: rgba(0, 0, 0, 0.7);
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
        }
      `}</style>


      <HeaderFour />

      {/* Hero Section */}
      <div style={{ position: 'relative', padding: '80px 24px', textAlign: 'center' }}>
        {/* Floating Elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '25%',
            width: '8px',
            height: '8px',
            background: '#60a5fa',
            borderRadius: '50%'
          }} className="animate-ping"></div>
          <div style={{
            position: 'absolute',
            top: '128px',
            right: '33%',
            width: '12px',
            height: '12px',
            background: '#a78bfa',
            borderRadius: '50%',
            animationDelay: '1s'
          }} className="animate-ping"></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            left: '20%',
            width: '8px',
            height: '8px',
            background: '#22d3ee',
            borderRadius: '50%',
            animationDelay: '2s'
          }} className="animate-ping"></div>
        </div>
        
        <div style={{ maxWidth: '64rem', margin: '0 auto' }} className="animate-slide-up">
          <h1 className="hero-title" style={{ 
            fontSize: '5rem', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            background: 'linear-gradient(to right, #60a5fa, #a78bfa, #22d3ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: '#ffffff'
          }}>
            Our Work
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#d1d5db', 
            marginBottom: '32px' 
          }}>
            Transforming businesses through innovative Ecommerce Solutions
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '32px' 
        }} className="grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="card-gradient project-card animate-scale-up"
              style={{
                border: '1px solid #374151',
                borderRadius: '16px',
                overflow: 'hidden',
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '192px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                }}></div>
                <span className="badge badge-primary" style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px'
                }}>
                  {project.category}
                </span>
              </div>
              
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  marginBottom: '8px',
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}>
                  {project.title}
                </h3>
                <p style={{ color: '#9ca3af', marginBottom: '16px' }}>{project.client}</p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px', 
                  marginBottom: '16px' 
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
                  color: '#9ca3af'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>🕒</span>
                    {project.timeline}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>👥</span>
                    {project.teamSize}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay animate-scale-up">
          <div className="modal-content">
            <div style={{ position: 'relative' }}>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '256px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
              }}></div>
              <button 
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div style={{ 
                position: 'absolute', 
                bottom: '16px', 
                left: '24px' 
              }}>
                <h2 style={{ 
                  fontSize: '48px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{ color: '#60a5fa', fontSize: '18px' }}>{selectedProject.client}</p>
              </div>
            </div>
            
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Project Overview */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '24px' 
              }} className="grid-cols-3">
                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: '#60a5fa' }}>📈</span>
                    <span style={{ fontWeight: '600', color: 'white' }}>Business Impact</span>
                  </div>
                  <p style={{ color: '#60a5fa', fontWeight: 'bold', fontSize: '18px' }}>
                    {selectedProject.businessImpact}
                  </p>
                </div>
                
                <div style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(34, 197, 94, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: '#22c55e' }}>✅</span>
                    <span style={{ fontWeight: '600', color: 'white' }}>Outcome</span>
                  </div>
                  <p style={{ color: '#22c55e', fontWeight: '500' }}>
                    {selectedProject.outcome}
                  </p>
                </div>
                
                <div style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid rgba(168, 85, 247, 0.2)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: '#a855f7' }}>👥</span>
                    <span style={{ fontWeight: '600', color: 'white' }}>Team</span>
                  </div>
                  <p style={{ color: '#a855f7' }}>{selectedProject.teamSize}</p>
                  <p style={{ color: '#9ca3af', fontSize: '14px' }}>{selectedProject.timeline}</p>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                  Requirements
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                  gap: '12px' 
                }} className="grid-cols-2">
                  {selectedProject.requirements.map((req, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: '#d1d5db' 
                    }}>
                      <span style={{ color: '#60a5fa', flexShrink: 0 }}>✓</span>
                      {req}
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                gap: '32px' 
              }} className="grid-cols-2">
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                    Challenges Solved
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedProject.challenges.map((challenge, index) => (
                      <div key={index} style={{
                        padding: '12px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '8px'
                      }}>
                        <p style={{ color: '#d1d5db' }}>{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                    Our Solutions
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedProject.solutions.map((solution, index) => (
                      <div key={index} style={{
                        padding: '12px',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.2)',
                        borderRadius: '8px'
                      }}>
                        <p style={{ color: '#d1d5db' }}>{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                  Technologies Used
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      color: '#93c5fd',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      transition: 'background 0.3s ease'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center', paddingTop: '24px' }}>
                    <a key={selectedProject.project_link} href={selectedProject.project_link} target="_blank">
                       <button className="button button-primary animate-glow">
                        <span style={{ marginRight: '8px' }}>🔗</span>
                        View Live Project
                        </button> 
                    </a> 
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterFour />
    </div>

    
  );
};

export default Portfolio;