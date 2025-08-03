"use client"
import React from 'react'

const Services = () => {
  return (
    <section className="section services" id="services" itemScope itemType="https://schema.org/MedicalWebPage">
      <div className="container px-3 px-lg-4">
        
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="section-header">
              <div className="section-badge mb-3">
                <span className="badge badge-outline-primary px-3 py-2">
                  <i className="icofont icofont-medical-sign mr-2"></i>
                  Our Services
                </span>
              </div>
              
              <h2 className="section-title mb-4 font-weight-bold" 
                  style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}
                  itemProp="headline">
                Comprehensive <span className="text-primary">Medical Services</span>
              </h2>
              
              <p className="section-subtitle text-muted mb-0" 
                 style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '600px', margin: '0 auto'}}
                 itemProp="description">
                From emergency care to preventive medicine, we provide complete healthcare solutions 
                tailored to your needs across Kenya.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid" itemScope itemType="https://schema.org/ItemList">
          <div className="row justify-content-center">
            
            {/* Emergency Care */}
            <div className="col-12 col-md-6 col-lg-4 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="service-card h-100 p-4 rounded shadow-sm bg-white position-relative overflow-hidden">
                <div className="service-icon mb-3 text-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white"
                       style={{width: '70px', height: '70px', fontSize: '2rem'}}>
                    <i className="icofont icofont-emergency"></i>
                  </div>
                </div>
                
                <div className="service-content text-center">
                  <h4 className="service-title mb-3 h5 font-weight-bold" itemProp="name">
                    Emergency Care
                  </h4>
                  <p className="service-description text-muted mb-4" itemProp="description">
                    24/7 emergency medical services for urgent health situations. 
                    Immediate response and critical care when you need it most.
                  </p>
                  
                  <div className="service-features mb-4">
                    <ul className="list-unstyled small">
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>24/7 Availability</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Rapid Response</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Critical Care</li>
                    </ul>
                  </div>
                  
                  <a href="tel:+25491674164" 
                     className="btn btn-outline-danger btn-sm rounded-pill"
                     aria-label="Call for emergency medical care">
                    <i className="icofont icofont-phone mr-2"></i>Emergency Call
                  </a>
                </div>
                
                <div className="service-bg-icon position-absolute" 
                     style={{top: '10px', right: '10px', opacity: '0.1', fontSize: '4rem', color: '#dc3545'}}>
                  <i className="icofont icofont-emergency"></i>
                </div>
              </div>
            </div>

            {/* Preventive Medicine */}
            <div className="col-12 col-md-6 col-lg-4 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="service-card h-100 p-4 rounded shadow-sm bg-white position-relative overflow-hidden">
                <div className="service-icon mb-3 text-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-success text-white"
                       style={{width: '70px', height: '70px', fontSize: '2rem'}}>
                    <i className="icofont icofont-shield-alt"></i>
                  </div>
                </div>
                
                <div className="service-content text-center">
                  <h4 className="service-title mb-3 h5 font-weight-bold" itemProp="name">
                    Preventive Medicine
                  </h4>
                  <p className="service-description text-muted mb-4" itemProp="description">
                    Comprehensive health screenings, vaccinations, and preventive care 
                    to keep you healthy and catch issues early.
                  </p>
                  
                  <div className="service-features mb-4">
                    <ul className="list-unstyled small">
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Health Screenings</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Vaccinations</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Wellness Plans</li>
                    </ul>
                  </div>
                  
                  <a href="/consultation" 
                     className="btn btn-outline-success btn-sm rounded-pill"
                     aria-label="Book preventive care consultation">
                    <i className="icofont icofont-calendar mr-2"></i>Schedule Screening
                  </a>
                </div>
                
                <div className="service-bg-icon position-absolute" 
                     style={{top: '10px', right: '10px', opacity: '0.1', fontSize: '4rem', color: '#28a745'}}>
                  <i className="icofont icofont-shield-alt"></i>
                </div>
              </div>
            </div>

            {/* Chronic Disease Management */}
            <div className="col-12 col-md-6 col-lg-4 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="service-card h-100 p-4 rounded shadow-sm bg-white position-relative overflow-hidden">
                <div className="service-icon mb-3 text-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                       style={{width: '70px', height: '70px', fontSize: '2rem'}}>
                    <i className="icofont icofont-heart-beat"></i>
                  </div>
                </div>
                
                <div className="service-content text-center">
                  <h4 className="service-title mb-3 h5 font-weight-bold" itemProp="name">
                    Chronic Disease Management
                  </h4>
                  <p className="service-description text-muted mb-4" itemProp="description">
                    Ongoing care and monitoring for chronic conditions like diabetes, 
                    hypertension, and other long-term health issues.
                  </p>
                  
                  <div className="service-features mb-4">
                    <ul className="list-unstyled small">
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Diabetes Care</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Hypertension Management</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Regular Monitoring</li>
                    </ul>
                  </div>
                  
                  <a href="/consultation" 
                     className="btn btn-outline-primary btn-sm rounded-pill"
                     aria-label="Book chronic disease management consultation">
                    <i className="icofont icofont-stethoscope mr-2"></i>Manage Condition
                  </a>
                </div>
                
                <div className="service-bg-icon position-absolute" 
                     style={{top: '10px', right: '10px', opacity: '0.1', fontSize: '4rem', color: '#007bff'}}>
                  <i className="icofont icofont-heart-beat"></i>
                </div>
              </div>
            </div>

            {/* Family Medicine */}
            <div className="col-12 col-md-6 col-lg-4 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="service-card h-100 p-4 rounded shadow-sm bg-white position-relative overflow-hidden">
                <div className="service-icon mb-3 text-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-info text-white"
                       style={{width: '70px', height: '70px', fontSize: '2rem'}}>
                    <i className="icofont icofont-users-alt-4"></i>
                  </div>
                </div>
                
                <div className="service-content text-center">
                  <h4 className="service-title mb-3 h5 font-weight-bold" itemProp="name">
                    Family Medicine
                  </h4>
                  <p className="service-description text-muted mb-4" itemProp="description">
                    Comprehensive primary healthcare for patients of all ages. 
                    Complete family care from pediatrics to geriatrics.
                  </p>
                  
                  <div className="service-features mb-4">
                    <ul className="list-unstyled small">
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>All Ages Care</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Family Health Plans</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Pediatric Care</li>
                    </ul>
                  </div>
                  
                  <a href="/consultation" 
                     className="btn btn-outline-info btn-sm rounded-pill"
                     aria-label="Book family medicine consultation">
                    <i className="icofont icofont-home mr-2"></i>Family Care
                  </a>
                </div>
                
                <div className="service-bg-icon position-absolute" 
                     style={{top: '10px', right: '10px', opacity: '0.1', fontSize: '4rem', color: '#17a2b8'}}>
                  <i className="icofont icofont-users-alt-4"></i>
                </div>
              </div>
            </div>

            {/* Health Consultations */}
            <div className="col-12 col-md-6 col-lg-4 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="service-card h-100 p-4 rounded shadow-sm bg-white position-relative overflow-hidden">
                <div className="service-icon mb-3 text-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-warning text-dark"
                       style={{width: '70px', height: '70px', fontSize: '2rem'}}>
                    <i className="icofont icofont-doctor"></i>
                  </div>
                </div>
                
                <div className="service-content text-center">
                  <h4 className="service-title mb-3 h5 font-weight-bold" itemProp="name">
                    Health Consultations
                  </h4>
                  <p className="service-description text-muted mb-4" itemProp="description">
                    Professional medical consultations and health assessments. 
                    Expert advice for your health concerns and wellness goals.
                  </p>
                  
                  <div className="service-features mb-4">
                    <ul className="list-unstyled small">
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Health Assessments</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Medical Advice</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Wellness Planning</li>
                    </ul>
                  </div>
                  
                  <a href="https://doxy.me/ericmusanyi" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-outline-warning btn-sm rounded-pill"
                     aria-label="Start virtual health consultation">
                    <i className="icofont icofont-video-cam mr-2"></i>Virtual Consult
                  </a>
                </div>
                
                <div className="service-bg-icon position-absolute" 
                     style={{top: '10px', right: '10px', opacity: '0.1', fontSize: '4rem', color: '#ffc107'}}>
                  <i className="icofont icofont-doctor"></i>
                </div>
              </div>
            </div>

            {/* Specialized Treatments */}
            <div className="col-12 col-md-6 col-lg-4 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="service-card h-100 p-4 rounded shadow-sm bg-white position-relative overflow-hidden">
                <div className="service-icon mb-3 text-center">
                  <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-secondary text-white"
                       style={{width: '70px', height: '70px', fontSize: '2rem'}}>
                    <i className="icofont icofont-medical-sign"></i>
                  </div>
                </div>
                
                <div className="service-content text-center">
                  <h4 className="service-title mb-3 h5 font-weight-bold" itemProp="name">
                    Specialized Treatments
                  </h4>
                  <p className="service-description text-muted mb-4" itemProp="description">
                    Targeted medical treatments for specific conditions. 
                    Specialized care plans tailored to your unique health needs.
                  </p>
                  
                  <div className="service-features mb-4">
                    <ul className="list-unstyled small">
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Targeted Treatments</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Custom Care Plans</li>
                      <li className="mb-1"><i className="icofont icofont-check text-success mr-2"></i>Follow-up Care</li>
                    </ul>
                  </div>
                  
                  <a href="/consultation" 
                     className="btn btn-outline-secondary btn-sm rounded-pill"
                     aria-label="Book specialized treatment consultation">
                    <i className="icofont icofont-pills mr-2"></i>Get Treatment
                  </a>
                </div>
                
                <div className="service-bg-icon position-absolute" 
                     style={{top: '10px', right: '10px', opacity: '0.1', fontSize: '4rem', color: '#6c757d'}}>
                  <i className="icofont icofont-medical-sign"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="services-cta p-4 bg-light rounded">
              <h3 className="mb-3 h4 font-weight-bold">Ready to Get Started?</h3>
              <p className="mb-4 text-muted">
                Book your consultation today and take the first step towards better health.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <a 
                  href="https://doxy.me/ericmusanyi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg mb-3 mb-sm-0 mr-sm-3"
                  style={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    minWidth: '220px'
                  }}
                  aria-label="Start virtual consultation now"
                >
                  <i className="icofont icofont-video-cam mr-2"></i>
                  Start Virtual Consultation
                </a>
                
                <a 
                  href="https://wa.me/25491674164" 
                  className="btn btn-outline-primary btn-lg"
                  style={{
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    minWidth: '220px'
                  }}
                  aria-label="Contact via WhatsApp"
                >
                  <i className="icofont icofont-brand-whatsapp mr-2"></i>
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS */}
      <style jsx>{`
        .badge-outline-primary {
          color: #007bff;
          border: 1px solid #007bff;
          background: transparent;
        }

        .service-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }

        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .service-card:hover .icon-wrapper {
          transform: scale(1.1);
        }

        .service-features ul li {
          transition: all 0.3s ease;
        }

        .service-card:hover .service-features ul li {
          transform: translateX(5px);
        }

        .services-cta {
          border: 1px solid rgba(0,0,0,0.05);
        }

        .services-cta .btn {
          transition: all 0.3s ease;
        }

        .services-cta .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        /* Mobile Optimizations */
        @media (max-width: 767.98px) {
          .service-card {
            margin-bottom: 2rem;
          }
          
          .services-cta .btn {
            width: 100%;
            margin-bottom: 1rem !important;
          }
          
          .services-cta .d-flex {
            flex-direction: column !important;
          }
          
          .icon-wrapper {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.5rem !important;
          }
        }

        /* Tablet Adjustments */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .service-card {
            margin-bottom: 1.5rem;
          }
        }

        /* Performance Optimizations */
        .service-card {
          will-change: transform;
        }
        
        .icon-wrapper {
          will-change: transform;
        }

        /* Accessibility */
        .btn:focus {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .icon-wrapper,
          .service-features ul li,
          .btn {
            transition: none !important;
            transform: none !important;
          }
        }

        /* High contrast support */
        @media (prefers-contrast: high) {
          .service-card {
            border-width: 2px !important;
          }
          
          .text-muted {
            color: #495057 !important;
          }
        }

        /* Desktop Grid Optimization */
        @media (min-width: 1200px) {
          .service-card {
            max-width: 350px;
            margin: 0 auto 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services