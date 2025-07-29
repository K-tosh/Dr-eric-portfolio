"use client"
import React from 'react'
import Head from 'next/head'

const Consultation = () => {
  return (
    <>
      <Head>
        <title>Home & Virtual Consultations - Dr. Eric Musanyi | Healthcare Kenya</title>
        <meta name="description" content="Professional home visits and virtual consultations with Dr. Eric Musanyi. Comprehensive healthcare at your doorstep or online. Book secure telemedicine appointments in Kenya." />
        <meta name="keywords" content="home doctor visits Kenya, virtual consultation Kenya, telemedicine Nairobi, home healthcare, online doctor consultation, medical house calls" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Home & Virtual Consultations - Dr. Eric Musanyi" />
        <meta property="og:description" content="Professional healthcare at your doorstep or online. Book home visits or virtual consultations with experienced physician Dr. Eric Musanyi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drericmusanyi.com/consultation" />
        <meta property="og:image" content="https://drericmusanyi.com/images/consultation-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home & Virtual Consultations - Dr. Eric Musanyi" />
        <meta name="twitter:description" content="Professional healthcare at your doorstep or online. Book consultations in Kenya." />
        
        {/* Medical Practice Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Eric Musanyi Medical Practice",
              "description": "Home-based and virtual medical consultations",
              "url": "https://drericmusanyi.com",
              "telephone": "+254916741644",
              "email": "eric.musanyi@healthcare.co.ke",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Kenya",
                "addressLocality": "Nairobi"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.2921",
                "longitude": "36.8219"
              },
              "openingHours": "Mo-Sa 08:00-20:00",
              "priceRange": "KSH 200 - KSH 8,500",
              "medicalSpecialty": ["Family Medicine", "Internal Medicine", "Telemedicine"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Medical Consultation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Virtual Consultation",
                      "description": "Secure video consultation via telehealth platform"
                    },
                    "price": "3500",
                    "priceCurrency": "KES"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure", 
                      "name": "Home Visit Consultation",
                      "description": "Comprehensive medical examination at patient's home"
                    },
                    "price": "8500",
                    "priceCurrency": "KES"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <article itemScope itemType="https://schema.org/MedicalWebPage">
        <section className="consultation-hero section" id='consultation'>
          <div className="container px-3 px-lg-4">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-xl-10 text-center">
                <div className="consultation-hero-content">
                  <h1 className="consultation-title mb-3 mb-md-4 display-4 display-md-3" itemProp="headline">
                    Home-Based & Virtual Consultations
                  </h1>
                  <h2 className="consultation-subtitle text-primary mb-3 mb-md-4 h4 h3-md" itemProp="alternativeHeadline">
                    Care that fits your life
                  </h2>
                  <p className="lead mb-4 mb-md-5 mx-auto" style={{maxWidth: '600px'}} itemProp="description">
                    Your personal health, evaluated and supported — at your door or online.
                  </p>
                  
                  <div className="consultation-modes mb-4 mb-md-5">
                    <div className="row justify-content-center">
                      <div className="col-12 col-sm-6 col-lg-5 mb-3 mb-sm-4">
                        <div className="consultation-mode-card h-100 p-3 p-md-4" itemScope itemType="https://schema.org/Service">
                          <div className="mode-icon mb-3 text-primary">
                            <i className="icofont icofont-home" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}></i>
                          </div>
                          <h3 className="h5 h4-md" itemProp="name">Home Visit Consultation</h3>
                          <p className="mb-0 small text-muted" itemProp="description">
                            Professional clinical care in the comfort of your own home
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-lg-5 mb-3 mb-sm-4">
                        <div className="consultation-mode-card h-100 p-3 p-md-4" itemScope itemType="https://schema.org/Service">
                          <div className="mode-icon mb-3 text-primary">
                            <i className="icofont icofont-video-cam" style={{fontSize: 'clamp(2.5rem, 5vw, 4rem)'}}></i>
                          </div>
                          <h3 className="h5 h4-md" itemProp="name">Secure Virtual Consult</h3>
                          <p className="mb-0 small text-muted" itemProp="description">
                            Expert medical advice via secure video consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cta-buttons">
                    <a 
                      href="https://doxy.me/ericmusanyi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg mx-2 mb-3 virtual-btn position-relative"
                      style={{
                        animation: 'pulse-glow 2s infinite',
                        boxShadow: '0 0 20px rgba(40, 167, 69, 0.6)',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        minWidth: '280px'
                      }}
                      aria-label="Start virtual consultation with Dr. Eric"
                    >
                      <i className="icofont icofont-video-cam mr-2"></i>
                      <span className="d-none d-sm-inline">Start Virtual </span>Consultation
                    </a>
                    <a 
                      href="https://wa.me/25491674164" 
                      className="btn btn-outline-primary btn-lg mx-2 mb-3"
                      style={{minWidth: '280px'}}
                      aria-label="Contact Dr. Eric via WhatsApp"
                    >
                      <i className="icofont icofont-brand-whatsapp mr-2"></i>WhatsApp Directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Care Philosophy Section */}
        <section className="care-philosophy section bg-light" itemScope itemType="https://schema.org/AboutPage">
          <div className="container px-3 px-lg-4">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8 text-center">
                <div className="philosophy-content">
                  <h2 className="mb-4 h3 h2-md" itemProp="headline">My Care Philosophy</h2>
                  <div className="philosophy-quote mb-4 mb-md-5 position-relative">
                    <i className="icofont icofont-quote-left text-primary position-absolute" 
                       style={{fontSize: '3rem', top: '-1rem', left: '50%', transform: 'translateX(-50%)', opacity: '0.3'}}></i>
                    <blockquote className="lead font-italic position-relative" style={{zIndex: 1}} itemProp="text">
                      "My approach to healthcare is personal, not transactional. I combine clinical experience with a compassionate heart to offer thorough, patient-centered care that doesn't just treat symptoms but addresses the root causes. Whether at home, virtually, or in-person, you get the attention and care you deserve."
                    </blockquote>
                  </div>
                  <div className="philosophy-values">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-4 mb-4" itemScope itemType="https://schema.org/Thing">
                        <div className="value-item text-center p-3">
                          <i className="icofont icofont-heart-beat text-primary mb-3 d-block" style={{fontSize: '2.5rem'}}></i>
                          <h3 className="h5 h4-md" itemProp="name">I Listen</h3>
                          <p className="small text-muted mb-0" itemProp="description">
                            Your story matters. I take time to understand your concerns.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4" itemScope itemType="https://schema.org/Thing">
                        <div className="value-item text-center p-3">
                          <i className="icofont icofont-users-alt-4 text-primary mb-3 d-block" style={{fontSize: '2.5rem'}}></i>
                          <h3 className="h5 h4-md" itemProp="name">We Partner</h3>
                          <p className="small text-muted mb-0" itemProp="description">
                            Healthcare is a collaboration. We work together on your care.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4" itemScope itemType="https://schema.org/Thing">
                        <div className="value-item text-center p-3">
                          <i className="icofont icofont-medical-sign text-primary mb-3 d-block" style={{fontSize: '2.5rem'}}></i>
                          <h3 className="h5 h4-md" itemProp="name">Root Causes</h3>
                          <p className="small text-muted mb-0" itemProp="description">
                            Beyond symptoms - we address the underlying health issues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types Section - Fixed Container */}
        <section className="consultation-types section" id="consultation-types" itemScope itemType="https://schema.org/ItemList">
          <div className="container px-3 px-lg-4">
            <div className="row justify-content-center mb-4 mb-md-5">
              <div className="col-12 col-lg-8 text-center">
                <h2 className="mb-3 mb-md-4 h3 h2-md" itemProp="name">Choose Your Consultation Type</h2>
                <p className="lead text-muted" itemProp="description">
                  Flexible options designed around your needs and schedule
                </p>
              </div>
            </div>

            {/* Fixed Column Sizes for Better Desktop Layout */}
            <div className="row justify-content-center">
              {/* Comprehensive Home Consult */}
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4" itemScope itemType="https://schema.org/Service">
                <div className="consultation-package premium-package h-100 shadow-sm">
                  <div className="package-header text-center p-4">
                    <div className="package-icon mb-3">
                      <i className="icofont icofont-home text-success" style={{fontSize: '3rem'}}></i>
                    </div>
                    <h3 className="h5 h4-md" itemProp="name">Comprehensive Home Consultation</h3>
                    <div className="package-duration text-muted small">~60 minutes</div>
                  </div>
                  <div className="package-price text-center py-3 bg-light">
                    <span className="currency text-muted">KSH</span>
                    <span className="amount h4 text-success font-weight-bold" itemProp="price">8,500</span>
                  </div>
                  <div className="package-features p-4" itemProp="description">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Detailed medical history & exam</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Personalized care plan</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Basic diagnostics at home</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Medication & lifestyle review</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Follow-up message access</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Lab planning & coordination</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Specialist Referrals</li>
                    </ul>
                  </div>
                  <div className="package-cta p-4 pt-0">
                    <a 
                      href="/book-appointment" 
                      className="btn btn-primary btn-block"
                      aria-label="Book comprehensive home consultation"
                    >
                      Book Home Visit
                    </a>
                  </div>
                </div>
              </div>

              {/* Virtual Discovery Call */}
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4" itemScope itemType="https://schema.org/Service">
                <div className="consultation-package popular-package h-100 shadow-sm position-relative">
                  <div className="package-badge position-absolute bg-warning text-dark px-3 py-1 rounded-pill small font-weight-bold">
                    Most Popular
                  </div>
                  <div className="package-header text-center p-4 pt-5">
                    <div className="package-icon mb-3">
                      <i className="icofont icofont-video-cam text-primary" style={{fontSize: '3rem'}}></i>
                    </div>
                    <h3 className="h5 h4-md" itemProp="name">Virtual Discovery Call</h3>
                    <div className="package-duration text-muted small">~15 minutes</div>
                  </div>
                  <div className="package-price text-center py-3 bg-light">
                    <span className="currency text-muted">KSH</span>
                    <span className="amount h4 text-primary font-weight-bold" itemProp="price">200</span>
                  </div>
                  <div className="package-features p-4" itemProp="description">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Brief virtual introduction</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Assess your health needs</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Recommend best visit type</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Answer initial questions</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Book appropriate consultation</li>
                    </ul>
                  </div>
                  <div className="package-cta p-4 pt-0">
                    <a 
                      href="https://doxy.me/ericmusanyi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-success btn-block virtual-btn"
                      style={{
                        animation: 'pulse-glow 2s infinite',
                        boxShadow: '0 0 15px rgba(40, 167, 69, 0.5)',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      aria-label="Start virtual discovery call"
                    >
                      <i className="icofont icofont-video-cam mr-2"></i>Start Virtual Call
                    </a>
                  </div>
                </div>
              </div>

              {/* Focused Review Visit */}
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-4" itemScope itemType="https://schema.org/Service">
                <div className="consultation-package h-100 shadow-sm">
                  <div className="package-header text-center p-4">
                    <div className="package-icon mb-3">
                      <i className="icofont icofont-stethoscope text-info" style={{fontSize: '3rem'}}></i>
                    </div>
                    <h3 className="h5 h4-md" itemProp="name">Focused Review Visit</h3>
                    <div className="package-duration text-muted small">~30 minutes</div>
                  </div>
                  <div className="package-price text-center py-3 bg-light">
                    <span className="currency text-muted">KSH</span>
                    <span className="amount h4 text-info font-weight-bold" itemProp="price">4,500</span>
                  </div>
                  <div className="package-features p-4" itemProp="description">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>One specific health concern</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Quick focused examination</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Personalized advice</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Clear next steps</li>
                      <li className="mb-2"><i className="icofont icofont-check text-success mr-2"></i>Wellness guidance</li>
                    </ul>
                  </div>
                  <div className="package-cta p-4 pt-0">
                    <a 
                      href="/book-appointment" 
                      className="btn btn-outline-primary btn-block"
                      aria-label="Book focused review visit"
                    >
                      Book Focused Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Consultation Pricing - Fixed Container */}
            <div className="row justify-content-center mt-5">
              <div className="col-12 col-lg-8 col-xl-6">
                <div className="virtual-pricing-section text-center p-4 bg-light rounded">
                  <h3 className="mb-4 h4 h3-md">Virtual Consultation Options</h3>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-6 mb-3">
                      <div className="pricing-card bg-white p-4 rounded shadow-sm h-100">
                        <h4 className="h5 h4-md mb-2">Virtual Consultation</h4>
                        <div className="price h4 text-success mb-2">KSH 3,500</div>
                        <p className="text-muted small mb-3">Secure video consultation from home</p>
                        <a 
                          href="https://doxy.me/ericmusanyi" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-success btn-sm virtual-btn"
                          style={{
                            animation: 'pulse-glow 2s infinite',
                            boxShadow: '0 0 10px rgba(40, 167, 69, 0.4)',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease'
                          }}
                          aria-label="Start virtual consultation now"
                        >
                          <i className="icofont icofont-video-cam mr-1"></i>Start Now
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <div className="pricing-card bg-white p-4 rounded shadow-sm h-100">
                        <h4 className="h5 h4-md mb-2">Follow-up Virtual</h4>
                        <div className="price h4 text-success mb-2">KSH 2,500</div>
                        <p className="text-muted small mb-3">Continuing care & progress review</p>
                        <a 
                          href="https://doxy.me/ericmusanyi" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-success btn-sm virtual-btn"
                          style={{
                            animation: 'pulse-glow 2s infinite',
                            boxShadow: '0 0 10px rgba(40, 167, 69, 0.4)',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease'
                          }}
                          aria-label="Book follow-up consultation"
                        >
                          <i className="icofont icofont-video-cam mr-1"></i>Follow-up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add CSS for optimization */}
        <style jsx>{`
          @keyframes pulse-glow {
            0% {
              box-shadow: 0 0 20px rgba(40, 167, 69, 0.6);
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 30px rgba(40, 167, 69, 0.8);
              transform: scale(1.05);
            }
            100% {
              box-shadow: 0 0 20px rgba(40, 167, 69, 0.6);
              transform: scale(1);
            }
          }
          
          .virtual-btn:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 5px 35px rgba(40, 167, 69, 0.8) !important;
          }

          /* Responsive Typography */
          .display-md-3 { font-size: clamp(1.8rem, 4vw, 3rem); }
          .h2-md { font-size: clamp(1.5rem, 3vw, 2.25rem); }
          .h3-md { font-size: clamp(1.25rem, 2.5vw, 1.875rem); }
          .h4-md { font-size: clamp(1.1rem, 2vw, 1.5rem); }

          /* Desktop Layout Constraints */
          @media (min-width: 1200px) {
            .consultation-package {
              max-width: 350px;
              margin: 0 auto;
            }
            
            .pricing-card {
              max-width: 280px;
              margin: 0 auto;
            }
          }

          /* Large Desktop Layout */
          @media (min-width: 1400px) {
            .consultation-package {
              max-width: 380px;
            }
          }

          /* Mobile Optimizations */
          @media (max-width: 767.98px) {
            .consultation-mode-card {
              border: 1px solid #e9ecef;
              border-radius: 0.5rem;
              background: #fff;
              transition: all 0.3s ease;
            }
            
            .consultation-mode-card:hover {
              box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
            }
            
            .package-badge {
              top: 0.5rem;
              right: 0.5rem;
              font-size: 0.75rem;
            }
            
            .cta-buttons .btn {
              min-width: 250px;
              margin: 0.5rem auto;
              display: block;
            }
          }

          /* Performance Optimizations */
          .virtual-btn {
            will-change: transform;
          }
          
          .consultation-package {
            will-change: box-shadow;
            transition: box-shadow 0.3s ease;
          }
          
          .consultation-package:hover {
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
          }

          /* Accessibility Improvements */
          .btn:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
          }
          
          @media (prefers-reduced-motion: reduce) {
            .virtual-btn {
              animation: none !important;
            }
          }
        `}</style>
      </article>
    </>
  )
}

export default Consultation
