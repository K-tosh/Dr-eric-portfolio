"use client"
import React from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About Dr. Eric Musanyi - Experienced Medical Professional | Kenya Healthcare</title>
        <meta name="description" content="Learn about Dr. Eric Musanyi's medical background, qualifications, and commitment to providing exceptional healthcare services in Kenya. Experienced physician dedicated to patient-centered care." />
        <meta name="keywords" content="Dr Eric Musanyi background, medical qualifications Kenya, physician experience, healthcare professional biography, medical doctor credentials Nairobi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Dr. Eric Musanyi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://drericmusanyi.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Dr. Eric Musanyi - Experienced Medical Professional Kenya" />
        <meta property="og:description" content="Learn about Dr. Eric Musanyi's medical background, qualifications, and commitment to exceptional healthcare in Kenya." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://drericmusanyi.com/about" />
        <meta property="og:image" content="https://drericmusanyi.com/images/dr-eric-about.jpg" />
        <meta property="og:site_name" content="Dr. Eric Musanyi Medical Practice" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Eric Musanyi - Experienced Medical Professional Kenya" />
        <meta name="twitter:description" content="Learn about Dr. Eric Musanyi's medical background and commitment to exceptional healthcare." />
        <meta name="twitter:image" content="https://drericmusanyi.com/images/dr-eric-about.jpg" />
        
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Eric Musanyi",
              "alternateName": "Eric Musanyi",
              "description": "Experienced medical professional providing comprehensive healthcare services in Kenya",
              "url": "https://drericmusanyi.com",
              "image": "https://drericmusanyi.com/images/dr-eric-profile.jpg",
              "telephone": "+254916741644",
              "email": "eric.musanyi@healthcare.co.ke",
              "jobTitle": "Medical Doctor",
              "worksFor": {
                "@type": "MedicalOrganization",
                "name": "Dr. Eric Musanyi Medical Practice",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Kenya",
                  "addressLocality": "Nairobi"
                }
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Physician",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Kenya"
                },
                "skills": [
                  "Clinical Medicine",
                  "Patient Care",
                  "Medical Diagnosis",
                  "Treatment Planning",
                  "Emergency Medicine",
                  "Preventive Healthcare"
                ]
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Medical University",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Kenya"
                }
              },
              "award": [
                "Licensed Medical Practitioner",
                "Certified Healthcare Professional"
              ],
              "knowsAbout": [
                "General Medicine",
                "Family Medicine",
                "Emergency Care",
                "Preventive Medicine",
                "Pain Management",
                "Telemedicine"
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Kenya Medical Practitioners and Dentists Council"
              }
            })
          }}
        />

        {/* Medical Professional Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Eric Musanyi Medical Practice",
              "description": "Professional medical services with focus on patient-centered care and accessibility",
              "founder": {
                "@type": "Person",
                "name": "Dr. Eric Musanyi",
                "jobTitle": "Medical Doctor"
              },
              "foundingDate": "2018",
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "serviceType": [
                "Medical Consultation",
                "Home Visits",
                "Virtual Consultations",
                "Emergency Care",
                "Preventive Medicine"
              ],
              "medicalSpecialty": [
                "General Medicine",
                "Family Medicine",
                "Emergency Medicine"
              ]
            })
          }}
        />
      </Head>

      <section className="section about" id="about" itemScope itemType="https://schema.org/AboutPage">
        <div className="container px-3 px-lg-4">
          <div className="row align-items-center justify-content-between">
            
            {/* Left Column - Image */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div className="about-img position-relative">
                <div 
                  className="img-placeholder bg-light rounded shadow d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    height: 'clamp(400px, 50vw, 500px)',
                    maxWidth: '450px',
                    border: '3px solid #f8f9fa'
                  }}
                  itemProp="image"
                >
                  <div className="text-center p-4">
                    <i className="icofont icofont-doctor-alt text-primary mb-3" style={{fontSize: '4rem'}}></i>
                    <h5 className="text-primary font-weight-bold mb-2" itemProp="name">Dr. Eric Musanyi</h5>
                    <p className="text-muted mb-0" itemProp="jobTitle">Medical Professional</p>
                    <small className="text-muted">Licensed Healthcare Provider</small>
                  </div>
                </div>
                
                {/* Floating Achievement Badges */}
                <div className="achievement-badges">
                  <div 
                    className="badge-float position-absolute bg-success text-white rounded-pill px-3 py-2 shadow"
                    style={{
                      top: '15%',
                      right: '-5%',
                      animation: 'float 3s ease-in-out infinite',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}
                  >
                    <i className="icofont icofont-certificate mr-1"></i>
                    Licensed
                  </div>
                  
                  <div 
                    className="badge-float position-absolute bg-primary text-white rounded-pill px-3 py-2 shadow"
                    style={{
                      bottom: '15%',
                      left: '-5%',
                      animation: 'float 3s ease-in-out infinite 1.5s',
                      fontSize: '0.875rem',
                      fontWeight: 'bold'
                    }}
                  >
                    <i className="icofont icofont-medal mr-1"></i>
                    5+ Years
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-12 col-lg-6">
              <div className="about-content" style={{maxWidth: '550px'}}>
                
                {/* Section Header */}
                <div className="section-header mb-4">
                  <div className="section-badge mb-3">
                    <span className="badge badge-outline-primary px-3 py-2">
                      <i className="icofont icofont-stethoscope mr-2"></i>
                      About Dr. Eric
                    </span>
                  </div>
                  
                  <h2 className="section-title mb-3 font-weight-bold" 
                      style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}
                      itemProp="headline">
                    Committed to Your <span className="text-primary">Health & Wellbeing</span>
                  </h2>
                  
                  <p className="section-subtitle text-muted mb-4" 
                     style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)'}}
                     itemProp="description">
                    Dedicated to providing exceptional, personalized healthcare that puts you first.
                  </p>
                </div>

                {/* About Content */}
                <div className="about-text mb-4" itemProp="mainContentOfPage">
                  <p className="mb-3" style={{lineHeight: '1.7'}}>
                    With over <strong>5 years of medical experience</strong> and a commitment to patient-centered care, 
                    I bring comprehensive healthcare directly to your doorstep. My approach combines clinical expertise 
                    with genuine compassion to ensure you receive the attention and treatment you deserve.
                  </p>
                  
                  <p className="mb-4" style={{lineHeight: '1.7'}}>
                    Whether through <strong>home visits</strong> or <strong>virtual consultations</strong>, 
                    I'm dedicated to making quality healthcare accessible, convenient, and tailored to your unique needs. 
                    Your health is my priority, and I'm here to support you every step of the way.
                  </p>
                </div>

                {/* Professional Highlights */}
                <div className="professional-highlights mb-4" itemScope itemType="https://schema.org/ItemList">
                  <h4 className="mb-3 h5 font-weight-bold text-dark">Professional Highlights</h4>
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-3">
                      <div className="highlight-item d-flex align-items-start" itemScope itemType="https://schema.org/Thing">
                        <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                        <div>
                          <h6 className="mb-1 font-weight-medium" itemProp="name">Licensed Professional</h6>
                          <small className="text-muted" itemProp="description">Fully licensed by Kenya Medical Council</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 mb-3">
                      <div className="highlight-item d-flex align-items-start" itemScope itemType="https://schema.org/Thing">
                        <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                        <div>
                          <h6 className="mb-1 font-weight-medium" itemProp="name">Patient-Centered Care</h6>
                          <small className="text-muted" itemProp="description">Personalized treatment approaches</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 mb-3">
                      <div className="highlight-item d-flex align-items-start" itemScope itemType="https://schema.org/Thing">
                        <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                        <div>
                          <h6 className="mb-1 font-weight-medium" itemProp="name">Modern Technology</h6>
                          <small className="text-muted" itemProp="description">Advanced telemedicine capabilities</small>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 mb-3">
                      <div className="highlight-item d-flex align-items-start" itemScope itemType="https://schema.org/Thing">
                        <i className="icofont icofont-check-circled text-success mr-3 mt-1"></i>
                        <div>
                          <h6 className="mb-1 font-weight-medium" itemProp="name">Convenient Access</h6>
                          <small className="text-muted" itemProp="description">Home visits & virtual consultations</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="about-cta">
                  <div className="d-flex flex-column flex-sm-row">
                    <a 
                      href="/consultation" 
                      className="btn btn-primary btn-lg mb-3 mb-sm-0 mr-sm-3"
                      style={{
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        minWidth: '200px'
                      }}
                      aria-label="Learn about consultation options"
                    >
                      <i className="icofont icofont-stethoscope mr-2"></i>
                      View Services
                    </a>
                    
                    <a 
                      href="https://wa.me/25491674164" 
                      className="btn btn-outline-success btn-lg"
                      style={{
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        minWidth: '200px'
                      }}
                      aria-label="Contact Dr. Eric via WhatsApp"
                    >
                      <i className="icofont icofont-brand-whatsapp mr-2"></i>
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CSS */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .badge-outline-primary {
            color: #007bff;
            border: 1px solid #007bff;
            background: transparent;
          }

          .section-title {
            line-height: 1.3;
          }

          .highlight-item {
            transition: all 0.3s ease;
            padding: 0.5rem;
            border-radius: 0.5rem;
          }

          .highlight-item:hover {
            background: rgba(0, 123, 255, 0.05);
            transform: translateX(5px);
          }

          .about-cta .btn {
            transition: all 0.3s ease;
          }

          .about-cta .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }

          /* Mobile Optimizations */
          @media (max-width: 767.98px) {
            .badge-float {
              position: relative !important;
              display: none;
            }
            
            .about-content {
              max-width: 100% !important;
              text-align: center;
            }
            
            .section-header {
              text-align: center;
            }
            
            .professional-highlights {
              text-align: left;
            }
            
            .about-cta {
              text-align: center;
            }
            
            .about-cta .btn {
              width: 100%;
              margin-bottom: 1rem !important;
            }
            
            .about-cta .d-flex {
              flex-direction: column !important;
            }
          }

          /* Tablet Adjustments */
          @media (min-width: 768px) and (max-width: 991.98px) {
            .img-placeholder {
              max-width: 400px !important;
            }
            
            .badge-float {
              font-size: 0.8rem !important;
            }
          }

          /* Performance Optimizations */
          .badge-float {
            will-change: transform;
          }
          
          .highlight-item {
            will-change: transform;
          }

          /* Accessibility */
          .btn:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
          }
          
          @media (prefers-reduced-motion: reduce) {
            .badge-float,
            .highlight-item,
            .btn {
              animation: none !important;
              transition: none !important;
            }
          }

          /* High contrast support */
          @media (prefers-contrast: high) {
            .text-muted {
              color: #495057 !important;
            }
            
            .badge-outline-primary {
              border-width: 2px !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default About