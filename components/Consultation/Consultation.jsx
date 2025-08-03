"use client"
import React from 'react'

const Consultation = () => {
  return (
    <section className="section consultation" id="consultation" itemScope itemType="https://schema.org/MedicalWebPage">
      <div className="container px-3 px-lg-4">
        
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="section-header">
              <div className="section-badge mb-3">
                <span className="badge badge-outline-primary px-3 py-2">
                  <i className="icofont icofont-stethoscope mr-2"></i>
                  Consultation Options
                </span>
              </div>
              
              <h2 className="section-title mb-4 font-weight-bold" 
                  style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}
                  itemProp="headline">
                Choose Your <span className="text-primary">Consultation Method</span>
              </h2>
              
              <p className="section-subtitle text-muted mb-0" 
                 style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '600px', margin: '0 auto'}}
                 itemProp="description">
                Flexible consultation options designed for your convenience. Get professional medical care 
                when and where you need it most.
              </p>
            </div>
          </div>
        </div>

        {/* Consultation Options */}
        <div className="consultation-grid" itemScope itemType="https://schema.org/ItemList">
          <div className="row justify-content-center">
            
            {/* Home Visit Consultation */}
            <div className="col-12 col-lg-6 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="consultation-card h-100 p-4 p-lg-5 rounded-lg shadow bg-white position-relative overflow-hidden">
                
                {/* Background Pattern */}
                <div className="consultation-bg position-absolute" 
                     style={{
                       top: '-20px',
                       right: '-20px',
                       width: '120px',
                       height: '120px',
                       background: 'linear-gradient(45deg, rgba(0,123,255,0.1), rgba(0,123,255,0.05))',
                       borderRadius: '50%'
                     }}>
                </div>
                
                {/* Card Header */}
                <div className="consultation-header mb-4 text-center">
                  <div className="consultation-icon mb-3">
                    <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                         style={{width: '80px', height: '80px', fontSize: '2.5rem'}}>
                      <i className="icofont icofont-home"></i>
                    </div>
                  </div>
                  
                  <h3 className="consultation-title mb-2 h4 font-weight-bold" itemProp="name">
                    Home Visit Consultation
                  </h3>
                  <p className="consultation-subtitle text-muted" itemProp="description">
                    Personalized medical care in the comfort of your home
                  </p>
                </div>
                
                {/* Features */}
                <div className="consultation-features mb-4">
                  <ul className="list-unstyled">
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Comprehensive Physical Examination</h6>
                        <small className="text-muted">Thorough medical assessment in your familiar environment</small>
                      </div>
                    </li>
                    
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Personalized Treatment Plans</h6>
                        <small className="text-muted">Customized medical care tailored to your needs</small>
                      </div>
                    </li>
                    
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Medication Management</h6>
                        <small className="text-muted">Prescription and medication counseling services</small>
                      </div>
                    </li>
                    
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Family Health Consultation</h6>
                        <small className="text-muted">Care for multiple family members in one visit</small>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Pricing & Duration */}
                <div className="consultation-info mb-4 p-3 bg-light rounded">
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="info-item">
                        <h6 className="text-primary font-weight-bold mb-1">Duration</h6>
                        <p className="mb-0 text-muted small">45-60 minutes</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <h6 className="text-primary font-weight-bold mb-1">Area</h6>
                        <p className="mb-0 text-muted small">Nairobi & Suburbs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="consultation-cta text-center">
                  <a 
                    href="https://wa.me/25491674164?text=Hi%20Dr.%20Eric,%20I%20would%20like%20to%20book%20a%20home%20visit%20consultation." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg rounded-pill"
                    style={{minWidth: '250px', fontWeight: 'bold'}}
                    aria-label="Book home visit consultation via WhatsApp"
                  >
                    <i className="icofont icofont-brand-whatsapp mr-2"></i>
                    Book Home Visit
                  </a>
                  
                  <div className="mt-3">
                    <small className="text-muted">
                      <i className="icofont icofont-shield-alt mr-1 text-success"></i>
                      Safe & Professional Service
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Consultation */}
            <div className="col-12 col-lg-6 mb-4" itemScope itemType="https://schema.org/MedicalProcedure">
              <div className="consultation-card h-100 p-4 p-lg-5 rounded-lg shadow bg-white position-relative overflow-hidden">
                
                {/* Background Pattern */}
                <div className="consultation-bg position-absolute" 
                     style={{
                       top: '-20px',
                       right: '-20px',
                       width: '120px',
                       height: '120px',
                       background: 'linear-gradient(45deg, rgba(40,167,69,0.1), rgba(40,167,69,0.05))',
                       borderRadius: '50%'
                     }}>
                </div>
                
                {/* Card Header */}
                <div className="consultation-header mb-4 text-center">
                  <div className="consultation-icon mb-3">
                    <div className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-success text-white"
                         style={{width: '80px', height: '80px', fontSize: '2.5rem'}}>
                      <i className="icofont icofont-video-cam"></i>
                    </div>
                  </div>
                  
                  <h3 className="consultation-title mb-2 h4 font-weight-bold" itemProp="name">
                    Virtual Consultation
                  </h3>
                  <p className="consultation-subtitle text-muted" itemProp="description">
                    Professional medical consultation from anywhere, anytime
                  </p>
                </div>
                
                {/* Features */}
                <div className="consultation-features mb-4">
                  <ul className="list-unstyled">
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">HD Video Consultation</h6>
                        <small className="text-muted">Clear, secure video calls via Doxy.me platform</small>
                      </div>
                    </li>
                    
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Instant Medical Advice</h6>
                        <small className="text-muted">Quick assessment and professional guidance</small>
                      </div>
                    </li>
                    
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Digital Prescriptions</h6>
                        <small className="text-muted">Electronic prescriptions sent directly to you</small>
                      </div>
                    </li>
                    
                    <li className="feature-item mb-3 d-flex align-items-start">
                      <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                      <div>
                        <h6 className="mb-1 font-weight-medium">Follow-up Support</h6>
                        <small className="text-muted">Continued care and monitoring remotely</small>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Pricing & Duration */}
                <div className="consultation-info mb-4 p-3 bg-light rounded">
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="info-item">
                        <h6 className="text-success font-weight-bold mb-1">Duration</h6>
                        <p className="mb-0 text-muted small">20-30 minutes</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="info-item">
                        <h6 className="text-success font-weight-bold mb-1">Access</h6>
                        <p className="mb-0 text-muted small">24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="consultation-cta text-center">
                  <a 
                    href="https://doxy.me/ericmusanyi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-success btn-lg rounded-pill"
                    style={{minWidth: '250px', fontWeight: 'bold'}}
                    aria-label="Start virtual consultation now"
                  >
                    <i className="icofont icofont-video-cam mr-2"></i>
                    Start Virtual Consult
                  </a>
                  
                  <div className="mt-3">
                    <small className="text-muted">
                      <i className="icofont icofont-lock mr-1 text-success"></i>
                      HIPAA Compliant & Secure
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-10">
            <div className="emergency-section p-4 bg-danger text-white rounded-lg text-center">
              <div className="row align-items-center">
                <div className="col-12 col-md-8">
                  <h4 className="mb-2 font-weight-bold">
                    <i className="icofont icofont-emergency mr-2"></i>
                    Medical Emergency?
                  </h4>
                  <p className="mb-0">
                    For urgent medical situations requiring immediate attention, call our emergency line.
                  </p>
                </div>
                <div className="col-12 col-md-4 mt-3 mt-md-0">
                  <a 
                    href="tel:+25491674164" 
                    className="btn btn-light btn-lg rounded-pill font-weight-bold"
                    style={{minWidth: '200px'}}
                    aria-label="Call emergency line"
                  >
                    <i className="icofont icofont-phone mr-2"></i>
                    Call Now: +254-91-674-164
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-8 text-center">
            <div className="consultation-info-section">
              <h4 className="mb-4 font-weight-bold text-dark">Why Choose Our Consultation Services?</h4>
              
              <div className="row">
                <div className="col-12 col-md-4 mb-3">
                  <div className="info-point">
                    <i className="icofont icofont-certificate text-primary mb-2" style={{fontSize: '2rem'}}></i>
                    <h6 className="font-weight-bold mb-2">Licensed Professional</h6>
                    <p className="text-muted small mb-0">Fully licensed Clinical Officer with years of experience</p>
                  </div>
                </div>
                
                <div className="col-12 col-md-4 mb-3">
                  <div className="info-point">
                    <i className="icofont icofont-heart-beat text-success mb-2" style={{fontSize: '2rem'}}></i>
                    <h6 className="font-weight-bold mb-2">Patient-Centered Care</h6>
                    <p className="text-muted small mb-0">Personalized treatment plans focused on your wellbeing</p>
                  </div>
                </div>
                
                <div className="col-12 col-md-4 mb-3">
                  <div className="info-point">
                    <i className="icofont icofont-clock-time text-warning mb-2" style={{fontSize: '2rem'}}></i>
                    <h6 className="font-weight-bold mb-2">Flexible Scheduling</h6>
                    <p className="text-muted small mb-0">Convenient appointment times that work with your schedule</p>
                  </div>
                </div>
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

        .consultation-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
        }

        .consultation-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important;
        }

        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .consultation-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-item {
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .consultation-card:hover .feature-item {
          transform: translateX(5px);
        }

        .consultation-cta .btn {
          transition: all 0.3s ease;
        }

        .consultation-cta .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .emergency-section {
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          border: none;
        }

        .info-point {
          transition: all 0.3s ease;
        }

        .info-point:hover {
          transform: translateY(-5px);
        }

        .info-point i {
          transition: all 0.3s ease;
        }

        .info-point:hover i {
          transform: scale(1.2);
        }

        /* Mobile Optimizations */
        @media (max-width: 767.98px) {
          .consultation-card {
            margin-bottom: 2rem;
          }
          
          .consultation-cta .btn {
            width: 100%;
            min-width: auto !important;
          }
          
          .emergency-section .btn {
            width: 100%;
            min-width: auto !important;
          }
          
          .icon-wrapper {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.5rem !important;
          }
          
          .consultation-info .row {
            text-align: center;
          }
        }

        /* Tablet Adjustments */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .consultation-card {
            margin-bottom: 1.5rem;
          }
          
          .consultation-cta .btn {
            min-width: 200px !important;
          }
        }

        /* Performance Optimizations */
        .consultation-card,
        .icon-wrapper,
        .feature-item,
        .btn,
        .info-point {
          will-change: transform;
        }

        /* Accessibility */
        .btn:focus {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .consultation-card,
          .icon-wrapper,
          .feature-item,
          .btn,
          .info-point {
            transition: none !important;
            transform: none !important;
          }
        }

        /* High contrast support */
        @media (prefers-contrast: high) {
          .consultation-card {
            border-width: 2px !important;
          }
          
          .text-muted {
            color: #495057 !important;
          }
          
          .bg-light {
            background-color: #f8f9fa !important;
          }
        }

        /* Large desktop layout */
        @media (min-width: 1200px) {
          .consultation-card {
            max-width: 500px;
            margin: 0 auto 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Consultation
