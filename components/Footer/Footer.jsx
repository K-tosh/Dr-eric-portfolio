"use client"
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer section gray-bg" itemScope itemType="https://schema.org/WPFooter">
      <div className="container px-3 px-lg-4">
        
        {/* Main Footer Content */}
        <div className="row py-5">
          
          {/* Practice Information */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="footer-about" itemScope itemType="https://schema.org/MedicalOrganization">
              <div className="footer-logo mb-3">
                <h4 className="font-weight-bold text-primary mb-2" itemProp="name">
                  Dr. Eric Musanyi
                </h4>
                <p className="text-muted small" itemProp="description">
                  Licensed Clinical Officer
                </p>
              </div>
              
              <p className="footer-description mb-4 text-muted" itemProp="description">
                Providing professional medical care through home visits and virtual consultations. 
                Your health is our priority, with personalized care that puts you first.
              </p>
              
              {/* Practice Stats */}
              <div className="footer-stats mb-4">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="stat-item">
                      <h6 className="stat-number text-primary font-weight-bold mb-0">5+</h6>
                      <small className="text-muted">Years</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h6 className="stat-number text-primary font-weight-bold mb-0">1000+</h6>
                      <small className="text-muted">Patients</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h6 className="stat-number text-primary font-weight-bold mb-0">24/7</h6>
                      <small className="text-muted">Support</small>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="footer-social">
                <h6 className="mb-3 font-weight-bold text-dark">Connect With Us</h6>
                <div className="social-links d-flex">
                  <a 
                    href="https://wa.me/25491674164" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link mr-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{width: '40px', height: '40px', background: '#25D366'}}
                    aria-label="Contact via WhatsApp"
                    itemProp="sameAs"
                  >
                    <i className="icofont icofont-brand-whatsapp text-white"></i>
                  </a>
                  
                  <a 
                    href="tel:+25491674164" 
                    className="social-link mr-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{width: '40px', height: '40px', background: '#007bff'}}
                    aria-label="Call Dr. Eric Musanyi"
                    itemProp="telephone"
                  >
                    <i className="icofont icofont-phone text-white"></i>
                  </a>
                  
                  <a 
                    href="mailto:eric.musanyi@healthcare.co.ke" 
                    className="social-link mr-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{width: '40px', height: '40px', background: '#dc3545'}}
                    aria-label="Email Dr. Eric Musanyi"
                    itemProp="email"
                  >
                    <i className="icofont icofont-email text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-2 mb-4 mb-lg-0">
            <div className="footer-links">
              <h5 className="footer-title mb-4 font-weight-bold text-dark">Quick Links</h5>
              <ul className="list-unstyled footer-menu">
                <li className="mb-2">
                  <a href="#home" className="footer-link text-muted" aria-label="Go to home section">
                    <i className="icofont icofont-simple-right mr-2 text-primary"></i>
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="footer-link text-muted" aria-label="Go to about section">
                    <i className="icofont icofont-simple-right mr-2 text-primary"></i>
                    About Dr. Eric
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link text-muted" aria-label="Go to services section">
                    <i className="icofont icofont-simple-right mr-2 text-primary"></i>
                    Medical Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#consultation" className="footer-link text-muted" aria-label="Go to consultation section">
                    <i className="icofont icofont-simple-right mr-2 text-primary"></i>
                    Consultations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/book-appointment" className="footer-link text-muted" aria-label="Book appointment">
                    <i className="icofont icofont-simple-right mr-2 text-primary"></i>
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Medical Services */}
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="footer-services">
              <h5 className="footer-title mb-4 font-weight-bold text-dark">Medical Services</h5>
              <ul className="list-unstyled footer-menu">
                <li className="mb-2">
                  <a href="#services" className="footer-link text-muted" aria-label="Emergency care services">
                    <i className="icofont icofont-simple-right mr-2 text-danger"></i>
                    Emergency Care
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link text-muted" aria-label="Home visit services">
                    <i className="icofont icofont-simple-right mr-2 text-success"></i>
                    Home Visits
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://doxy.me/ericmusanyi" target="_blank" rel="noopener noreferrer" className="footer-link text-muted" aria-label="Virtual consultation services">
                    <i className="icofont icofont-simple-right mr-2 text-info"></i>
                    Virtual Consultations
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link text-muted" aria-label="Family medicine services">
                    <i className="icofont icofont-simple-right mr-2 text-warning"></i>
                    Family Medicine
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link text-muted" aria-label="Preventive care services">
                    <i className="icofont icofont-simple-right mr-2 text-primary"></i>
                    Preventive Care
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-contact" itemScope itemType="https://schema.org/ContactPoint">
              <h5 className="footer-title mb-4 font-weight-bold text-dark">Contact Information</h5>
              
              <div className="contact-info">
                {/* Phone */}
                <div className="contact-item mb-3 d-flex align-items-start">
                  <div className="contact-icon mr-3 mt-1">
                    <i className="icofont icofont-phone text-primary"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="mb-1 font-weight-medium text-dark">Phone</h6>
                    <a 
                      href="tel:+25491674164" 
                      className="text-muted small"
                      itemProp="telephone"
                      aria-label="Call Dr. Eric Musanyi"
                    >
                      +254-91-674-164
                    </a>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="contact-item mb-3 d-flex align-items-start">
                  <div className="contact-icon mr-3 mt-1">
                    <i className="icofont icofont-brand-whatsapp text-success"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="mb-1 font-weight-medium text-dark">WhatsApp</h6>
                    <a 
                      href="https://wa.me/25491674164" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted small"
                      aria-label="Contact via WhatsApp"
                    >
                      +254-91-674-164
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="contact-item mb-3 d-flex align-items-start">
                  <div className="contact-icon mr-3 mt-1">
                    <i className="icofont icofont-email text-danger"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="mb-1 font-weight-medium text-dark">Email</h6>
                    <a 
                      href="mailto:eric.musanyi@healthcare.co.ke" 
                      className="text-muted small"
                      itemProp="email"
                      aria-label="Email Dr. Eric Musanyi"
                    >
                      eric.musanyi@healthcare.co.ke
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="contact-item mb-3 d-flex align-items-start">
                  <div className="contact-icon mr-3 mt-1">
                    <i className="icofont icofont-location-pin text-info"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="mb-1 font-weight-medium text-dark">Service Area</h6>
                    <p className="text-muted small mb-0" itemProp="areaServed">
                      Nairobi, Kenya<br />
                      <span className="text-success">Home visits available</span>
                    </p>
                  </div>
                </div>
                
                {/* Operating Hours */}
                <div className="contact-item mb-3 d-flex align-items-start">
                  <div className="contact-icon mr-3 mt-1">
                    <i className="icofont icofont-clock-time text-warning"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="mb-1 font-weight-medium text-dark">Availability</h6>
                    <div className="opening-hours text-muted small">
                      <div className="mb-1">
                        <span className="font-weight-medium">Mon - Sat:</span> 8:00 AM - 8:00 PM
                      </div>
                      <div className="text-danger font-weight-medium">
                        <i className="icofont icofont-emergency mr-1"></i>
                        Emergency: 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Action Buttons */}
        <div className="row py-4 border-top">
          <div className="col-12">
            <div className="footer-cta text-center">
              <h6 className="mb-3 font-weight-bold text-dark">Need Medical Assistance?</h6>
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <a 
                  href="https://doxy.me/ericmusanyi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm mb-2 mb-sm-0 mr-sm-3 rounded-pill"
                  style={{minWidth: '180px'}}
                  aria-label="Start virtual consultation"
                >
                  <i className="icofont icofont-video-cam mr-2"></i>
                  Virtual Consultation
                </a>
                
                <a 
                  href="tel:+25491674164" 
                  className="btn btn-outline-danger btn-sm mb-2 mb-sm-0 mr-sm-3 rounded-pill"
                  style={{minWidth: '180px'}}
                  aria-label="Call for emergency"
                >
                  <i className="icofont icofont-emergency mr-2"></i>
                  Emergency Call
                </a>
                
                <a 
                  href="https://wa.me/254791674164" 
                  className="btn btn-outline-success btn-sm rounded-pill"
                  style={{minWidth: '180px'}}
                  aria-label="Contact via WhatsApp"
                >
                  <i className="icofont icofont-brand-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="row py-3 border-top">
          <div className="col-12 col-md-6 text-center text-md-left mb-2 mb-md-0">
            <p className="footer-copyright mb-0 text-muted small">
              © 2025 <span className="font-weight-medium text-primary">Dr. Eric Musanyi</span>. 
              All rights reserved. | 
              <a href="https://afyascope.co.ke" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
                Afyascope.co.ke
              </a>
            </p>
          </div>
          
          <div className="col-12 col-md-6 text-center text-md-right">
            <div className="footer-credentials text-muted small">
              <span className="mr-3">
                <i className="icofont icofont-certificate mr-1 text-success"></i>
                Licensed Clinician
              </span>
              <span>
                <i className="icofont icofont-shield-alt mr-1 text-primary"></i>
                KMPDC Registered
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS */}
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #007bff, transparent);
        }
        
        .footer-link {
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .footer-link:hover {
          color: #007bff !important;
          text-decoration: none;
          transform: translateX(5px);
        }
        
        .social-link {
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .contact-item {
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
        
        .contact-item:hover {
          background: rgba(0, 123, 255, 0.05);
          transform: translateX(5px);
        }
        
        .footer-cta .btn {
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .footer-cta .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .stat-item {
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: scale(1.05);
        }
        
        /* Mobile Optimizations */
        @media (max-width: 767.98px) {
          .footer-stats .row {
            text-align: center;
          }
          
          .footer-cta .btn {
            width: 100%;
            margin-bottom: 0.5rem !important;
          }
          
          .footer-cta .d-flex {
            flex-direction: column !important;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .contact-item {
            margin-bottom: 1.5rem !important;
          }
          
          .footer-copyright {
            text-align: center !important;
          }
          
          .footer-credentials {
            text-align: center !important;
            margin-top: 1rem;
          }
        }
        
        /* Tablet Adjustments */
        @media (min-width: 768px) and (max-width: 991.98px) {
          .footer-cta .btn {
            min-width: 150px !important;
            font-size: 0.875rem;
          }
        }
        
        /* Performance Optimizations */
        .footer-link,
        .social-link,
        .contact-item,
        .btn {
          will-change: transform;
        }
        
        /* Accessibility */
        .btn:focus,
        .footer-link:focus,
        .social-link:focus {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .footer-link,
          .social-link,
          .contact-item,
          .btn,
          .stat-item {
            transition: none !important;
            transform: none !important;
          }
        }
        
        /* High contrast support */
        @media (prefers-contrast: high) {
          .footer {
            background: #f8f9fa !important;
          }
          
          .text-muted {
            color: #495057 !important;
          }
          
          .border-top {
            border-color: #6c757d !important;
          }
        }
        
        /* Print styles */
        @media print {
          .footer {
            background: white !important;
            -webkit-print-color-adjust: exact;
          }
          
          .social-links,
          .footer-cta {
            display: none !important;
          }
        }
        
        /* Large desktop layout */
        @media (min-width: 1200px) {
          .footer .container {
            max-width: 1200px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer