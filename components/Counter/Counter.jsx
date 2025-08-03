"use client"
import React, { useState, useEffect, useRef } from 'react'

const Counter = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    consultations: 0,
    experience: 0,
    satisfaction: 0
  })
  
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startCountAnimation()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation function
  const startCountAnimation = () => {
    const targets = {
      patients: 1000,
      consultations: 2500,
      experience: 5,
      satisfaction: 98
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = duration / steps

    Object.keys(targets).forEach(key => {
      let current = 0
      const target = targets[key]
      const step = target / steps

      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }))
      }, increment)
    })
  }

  const statisticsData = [
    {
      icon: "icofont icofont-users-alt-4",
      count: counters.patients,
      suffix: "+",
      label: "Satisfied Patients",
      description: "Happy patients served with quality care",
      color: "primary",
      bgGradient: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)"
    },
    {
      icon: "icofont icofont-stethoscope",
      count: counters.consultations,
      suffix: "+",
      label: "Consultations Completed",
      description: "Successful medical consultations conducted",
      color: "success",
      bgGradient: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)"
    },
    {
      icon: "icofont icofont-medal",
      count: counters.experience,
      suffix: "+",
      label: "Years Experience",
      description: "Years of dedicated medical practice",
      color: "warning",
      bgGradient: "linear-gradient(135deg, #ffc107 0%, #e0a800 100%)"
    },
    {
      icon: "icofont icofont-heart-beat",
      count: counters.satisfaction,
      suffix: "%",
      label: "Patient Satisfaction",
      description: "Positive feedback from patients",
      color: "danger",
      bgGradient: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)"
    }
  ]

  return (
    <section 
      className="counter-section py-5" 
      ref={sectionRef}
      itemScope 
      itemType="https://schema.org/MedicalOrganization"
    >
      <div className="container px-3 px-lg-4">
        
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="section-header">
              <div className="section-badge mb-3">
                <span className="badge badge-outline-primary px-3 py-2">
                  <i className="icofont icofont-chart-bar-graph mr-2"></i>
                  Our Impact
                </span>
              </div>
              
              <h2 className="section-title mb-4 font-weight-bold text-white" 
                  style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}
                  itemProp="name">
                Trusted by <span className="text-warning">Thousands</span> of Patients
              </h2>
              
              <p className="section-subtitle text-light mb-0" 
                 style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '600px', margin: '0 auto'}}
                 itemProp="description">
                These numbers reflect our commitment to providing exceptional healthcare 
                and building lasting relationships with our patients.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="statistics-grid" itemScope itemType="https://schema.org/ItemList">
          <div className="row">
            {statisticsData.map((stat, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3 mb-4" itemScope itemType="https://schema.org/Thing">
                <div className="counter-card h-100 p-4 text-center position-relative overflow-hidden">
                  
                  {/* Background Gradient */}
                  <div 
                    className="counter-bg position-absolute w-100 h-100"
                    style={{
                      top: 0,
                      left: 0,
                      background: stat.bgGradient,
                      opacity: 0.1,
                      borderRadius: '15px'
                    }}
                  ></div>
                  
                  {/* Icon */}
                  <div className="counter-icon mb-3">
                    <div 
                      className={`icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-${stat.color} text-white`}
                      style={{width: '70px', height: '70px', fontSize: '2rem'}}
                    >
                      <i className={stat.icon}></i>
                    </div>
                  </div>
                  
                  {/* Counter Number */}
                  <div className="counter-number mb-2" itemProp="name">
                    <h3 className="mb-0 font-weight-bold text-white" style={{fontSize: 'clamp(2rem, 4vw, 3rem)'}}>
                      {isVisible ? (
                        <>
                          <span className="counter-value">{stat.count.toLocaleString()}</span>
                          <span className={`text-${stat.color}`}>{stat.suffix}</span>
                        </>
                      ) : (
                        <span>0{stat.suffix}</span>
                      )}
                    </h3>
                  </div>
                  
                  {/* Label */}
                  <div className="counter-label mb-2">
                    <h5 className="mb-0 font-weight-bold text-white" itemProp="description">
                      {stat.label}
                    </h5>
                  </div>
                  
                  {/* Description */}
                  <div className="counter-description">
                    <p className="mb-0 text-light small">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Decorative Element */}
                  <div 
                    className={`decorative-dot position-absolute bg-${stat.color}`}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      top: '15px',
                      right: '15px',
                      opacity: 0.7
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CSS */}
      <style jsx>{`
        .counter-section {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          position: relative;
          overflow: hidden;
        }

        .counter-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .badge-outline-primary {
          color: #007bff;
          border: 1px solid #007bff;
          background: rgba(255, 255, 255, 0.1);
        }

        .counter-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .counter-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .counter-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .counter-value {
          animation: ${isVisible ? 'countUp 2s ease-out' : 'none'};
        }

        @keyframes countUp {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        .cta-section {
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .cta-section .btn {
          transition: all 0.3s ease;
        }

        .cta-section .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
        }

        .trust-item {
          transition: all 0.3s ease;
        }

        .trust-item:hover {
          transform: translateY(-5px);
        }

        .trust-item i {
          transition: all 0.3s ease;
        }

        .trust-item:hover i {
          transform: scale(1.2);
        }

        /* Mobile Optimizations */
        @media (max-width: 767.98px) {
          .counter-card {
            margin-bottom: 1.5rem;
          }
          
          .cta-section .btn {
            width: 100%;
            min-width: auto !important;
          }
          
          .icon-wrapper {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.5rem !important;
          }
          
          .counter-number h3 {
            font-size: 2rem !important;
          }
          
          .trust-indicators .row {
            justify-content: center;
          }
        }

        /* Tablet Adjustments */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .counter-card {
            margin-bottom: 1.5rem;
          }
          
          .cta-section .btn {
            min-width: 180px !important;
          }
        }

        /* Performance Optimizations */
        .counter-card,
        .icon-wrapper,
        .btn,
        .trust-item {
          will-change: transform;
        }

        /* Accessibility */
        .btn:focus {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .counter-card,
          .icon-wrapper,
          .btn,
          .trust-item,
          .counter-value {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
        }

        /* High contrast support */
        @media (prefers-contrast: high) {
          .counter-card {
            border-width: 2px !important;
            background: rgba(255, 255, 255, 0.9) !important;
          }
          
          .text-light {
            color: #e9ecef !important;
          }
        }

        /* Print styles */
        @media print {
          .counter-section {
            background: white !important;
            color: black !important;
          }
          
          .counter-card {
            background: white !important;
            border: 1px solid #000 !important;
          }
          
          .text-white,
          .text-light {
            color: black !important;
          }
        }

        /* Large desktop layout */
        @media (min-width: 1200px) {
          .counter-card {
            padding: 2rem !important;
          }
          
          .icon-wrapper {
            width: 80px !important;
            height: 80px !important;
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Counter
