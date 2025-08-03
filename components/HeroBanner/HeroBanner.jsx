"use client"
import React from 'react'
import Head from 'next/head'

const HeroBanner = () => {
  return (
    <>
      <Head>
        <title>Dr. Eric Musanyi - Licensed Clinician | Medical Treatment Kenya</title>
        <meta name="description" content="Dr. Eric Musanyi - Licensed clinician with 5+ years experience and 1000+ patients served. Get the best medical treatment and emergency support 24/7 in Kenya." />
        <meta name="keywords" content="Dr Eric Musanyi, licensed clinician Kenya, medical treatment Kenya, emergency medical support, pain relief doctor, healthcare professional Nairobi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Dr. Eric Musanyi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://drericmusanyi.com" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Dr. Eric Musanyi - Licensed Clinician | Medical Treatment Kenya" />
        <meta property="og:description" content="Licensed clinician with 5+ years experience. Best medical treatment for all your ailments with 24/7 emergency support in Kenya." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drericmusanyi.com" />
        <meta property="og:image" content="https://drericmusanyi.com/images/dr-eric-banner.jpg" />
        <meta property="og:site_name" content="Dr. Eric Musanyi Medical Practice" />
        <meta property="og:locale" content="en_KE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Eric Musanyi - Licensed Clinician | Medical Treatment Kenya" />
        <meta name="twitter:description" content="Licensed clinician with 5+ years experience. Best medical treatment with 24/7 emergency support." />
        <meta name="twitter:image" content="https://drericmusanyi.com/images/dr-eric-banner.jpg" />
        
        {/* Medical Professional Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Eric Musanyi Medical Practice",
              "alternateName": "Eric Musanyi Clinic",
              "description": "Licensed medical clinician providing comprehensive healthcare services with 5+ years experience",
              "url": "https://drericmusanyi.com",
              "logo": "https://drericmusanyi.com/images/logo.png",
              "image": "https://drericmusanyi.com/images/dr-eric-banner.jpg",
              "telephone": "+254916741644",
              "email": "eric.musanyi@healthcare.co.ke",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Kenya",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-1.2921",
                "longitude": "36.8219"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "medicalSpecialty": [
                "General Medicine",
                "Pain Management", 
                "Emergency Medicine",
                "Clinical Medicine"
              ],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Clinical Consultation",
                  "description": "Comprehensive medical examination and treatment"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Emergency Medical Support",
                  "description": "24/7 emergency medical assistance and consultation"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Pain Management",
                  "description": "Specialized treatment for pain relief and management"
                }
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Medical License",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Kenya Medical Practitioners and Dentists Council"
                  }
                }
              ],
              "employee": {
                "@type": "Person",
                "name": "Dr. Eric Musanyi",
                "jobTitle": "Licensed Medical Clinician",
                "worksFor": {
                  "@type": "MedicalOrganization",
                  "name": "Dr. Eric Musanyi Medical Practice"
                },
                "hasOccupation": {
                  "@type": "Occupation",
                  "name": "Medical Doctor",
                  "occupationLocation": {
                    "@type": "Country",
                    "name": "Kenya"
                  }
                }
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "KSH 200 - KSH 8,500",
              "paymentAccepted": ["Cash", "Mobile Money", "Bank Transfer"],
              "currenciesAccepted": "KES"
            })
          }}
        />

        {/* Statistics Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Dr. Eric Musanyi Practice Statistics",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Thing",
                    "name": "Years of Experience",
                    "description": "5+ years of medical practice experience"
                  }
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "item": {
                    "@type": "Thing",
                    "name": "Patients Served",
                    "description": "1000+ patients successfully treated"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3, 
                  "item": {
                    "@type": "Thing",
                    "name": "Emergency Support",
                    "description": "24/7 emergency medical support availability"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <section className="banner" id='heroBanner' itemScope itemType="https://schema.org/MedicalWebPage">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-8 text-center text-lg-left">
              <div className="block">
                <div className="divider mb-3 mx-auto mx-lg-0"></div>
                <div className="credentials-banner mb-3 d-flex flex-wrap justify-content-center justify-content-lg-start">
                  <span className="credential-badge mb-2 mr-2" itemProp="medicalSpecialty">Licensed Clinician</span>
                  <span className="credential-badge mb-2 mr-2">5+ Years Experience</span>
                  <span className="credential-badge mb-2">Certified</span>
                </div>
                <h1 className="mb-3 mt-3" itemProp="headline">Eric Musanyi,</h1>
                <h3 className="subtitle mb-4 text-primary" itemProp="description">Don't suffer from your pain…just come to us, as we are the best painkillers for your body.</h3>

                <div className="value-proposition mb-4" itemScope itemType="https://schema.org/ItemList">
                  <div className="row text-center">
                    <div className="col-4 col-md-4">
                      <div className="stat-item" itemScope itemType="https://schema.org/Thing">
                        <h4 className="stat-number text-primary" itemProp="name">5+</h4>
                        <p className="stat-label" itemProp="description">Years Experience</p>
                      </div>
                    </div>
                    <div className="col-4 col-md-4">
                      <div className="stat-item" itemScope itemType="https://schema.org/Thing">
                        <h4 className="stat-number text-primary" itemProp="name">1000+</h4>
                        <p className="stat-label" itemProp="description">Patients Served</p>
                      </div>
                    </div>
                    <div className="col-4 col-md-4">
                      <div className="stat-item" itemScope itemType="https://schema.org/Thing">
                        <h4 className="stat-number text-primary" itemProp="name">24/7</h4>
                        <p className="stat-label" itemProp="description">Emergency Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mb-4 lead text-center text-lg-left" itemProp="text">Best treatment for all your ailment is in my hands...
                </p>
                
                {/* Fixed Button Container */}
                <div className="btn-container text-center text-lg-left">
                  <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-3">
                    
                    {/* Primary CTA Button */}
                    <a 
                      href="https://wa.me/25491674164?text=Hi%20Dr.%20Eric,%20I%20would%20like%20to%20schedule%20a%20consultation." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-lg rounded-pill px-4 py-3"
                      style={{
                        minWidth: '220px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        background: '#007bff',
                        border: '2px solid #007bff',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      aria-label="Schedule consultation via WhatsApp"
                      itemProp="mainEntity"
                    >
                      <i className="icofont icofont-brand-whatsapp mr-2"></i>
                      Book Consultation
                    </a>
                    
                    {/* Secondary Emergency Button */}
                    <a 
                      href="tel:+25491674164" 
                      className="btn btn-outline-danger btn-lg rounded-pill px-4 py-3"
                      style={{
                        minWidth: '220px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        background: 'transparent',
                        border: '2px solid #008000',
                        color: '#008000',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      aria-label="Call Dr. Eric for emergency"
                      itemProp="telephone"
                    >
                      <i className="icofont icofont-phone mr-2"></i>
                      Check your symptoms
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Button Styles */}
        <style jsx>{`
          .btn-container {
            margin-top: 2rem;
          }

          .btn-container .btn {
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .btn-container .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          }

          .btn-primary:hover {
            background: #0056b3 !important;
            border-color: #0056b3 !important;
          }

          .btn-outline-danger:hover {
            background: #dc3545 !important;
            color: white !important;
          }

          /* Mobile Responsive */
          @media (max-width: 576px) {
            .btn-container .d-flex {
              flex-direction: column !important;
              gap: 1rem !important;
            }
            
            .btn-container .btn {
              width: 100% !important;
              min-width: auto !important;
              margin-bottom: 1rem;
            }
          }

          /* Tablet */
          @media (min-width: 577px) and (max-width: 768px) {
            .btn-container .btn {
              min-width: 200px !important;
            }
          }

          /* Desktop */
          @media (min-width: 769px) {
            .btn-container .d-flex {
              gap: 1.5rem !important;
            }
          }

          /* Accessibility */
          .btn:focus {
            outline: 2px solid #007bff;
            outline-offset: 2px;
          }

          /* High contrast support */
          @media (prefers-contrast: high) {
            .btn {
              border-width: 3px !important;
            }
          }

          /* Reduced motion */
          @media (prefers-reduced-motion: reduce) {
            .btn {
              transition: none !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default HeroBanner
