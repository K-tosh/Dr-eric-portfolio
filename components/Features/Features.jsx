"use client"
import React from 'react'

const Features = () => {
  const featuresData = [
    {
      icon: "icofont icofont-video-cam",
      badge: "24/7 Available",
      title: "Online Consultation",
      description: "Connect with Dr. Eric instantly through secure video consultations. Get professional medical advice from the comfort of your home.",
      buttonText: "Start Consultation",
      buttonLink: "https://doxy.me/ericmusanyi",
      color: "success",
      isExternal: true
    },
    {
      icon: "icofont icofont-ui-clock",
      badge: "Flexible Schedule",
      title: "Working Hours",
      description: "Convenient appointment times that work with your schedule.",
      color: "primary",
      schedule: [
        { days: "Mon - Wed", hours: "8:00 AM - 8:00 PM" },
        { days: "Thu - Fri", hours: "8:00 AM - 6:00 PM" },
        { days: "Saturday", hours: "9:00 AM - 5:00 PM" },
        { days: "Sunday", hours: "Emergency Only" }
      ]
    },
    {
      icon: "icofont icofont-emergency",
      badge: "Emergency Support",
      title: "Urgent Care",
      description: "24/7 emergency medical support for critical situations. We're here when you need us most.",
      buttonText: "Call Emergency",
      buttonLink: "tel:+254791674164",
      color: "danger",
      emergencyNumber: "+254-79-167-4164"
    }
  ]

  return (
    <>
      <section className="features-section py-5" itemScope itemType="https://schema.org/MedicalBusiness">
        <div className="container px-3 px-lg-4">
          
          {/* Section Header */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-8 text-center">
              <div className="section-header">
                <div className="section-badge mb-3">
                  <span className="badge badge-outline-primary px-3 py-2">
                    <i className="icofont icofont-medical-sign mr-2"></i>
                    Key Features
                  </span>
                </div>
                
                <h2 className="section-title mb-4 font-weight-bold" 
                    style={{fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'}}
                    itemProp="name">
                  Why Choose <span className="text-primary">Dr. Eric Musanyi</span>
                </h2>
                
                <p className="section-subtitle text-muted mb-0" 
                   style={{fontSize: 'clamp(1rem, 2vw, 1.125rem)', maxWidth: '650px', margin: '0 auto'}}
                   itemProp="description">
                  Experience exceptional healthcare with convenient access, flexible scheduling, 
                  and emergency support when you need it most.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="features-grid" itemScope itemType="https://schema.org/ItemList">
            <div className="row justify-content-center">
              {featuresData.map((feature, index) => (
                <div key={index} className="col-12 col-lg-4 mb-4" itemScope itemType="https://schema.org/Service">
                  <div className="feature-card h-100 p-4 p-lg-5 bg-white rounded-lg shadow position-relative overflow-hidden">
                    
                    {/* Background Pattern */}
                    <div 
                      className="feature-bg position-absolute" 
                      style={{
                        top: '-20px',
                        right: '-20px',
                        width: '100px',
                        height: '100px',
                        background: feature.color === 'success' ? 'linear-gradient(45deg, #28a745, transparent)' :
                                   feature.color === 'primary' ? 'linear-gradient(45deg, #007bff, transparent)' :
                                   'linear-gradient(45deg, #dc3545, transparent)',
                        borderRadius: '50%',
                        opacity: 0.1
                      }}
                    ></div>
                    
                    {/* Feature Badge */}
                    <div className="feature-badge mb-3">
                      <span className={`badge badge-${feature.color} px-3 py-2`} style={{fontSize: '0.85rem'}}>
                        {feature.badge}
                      </span>
                    </div>
                    
                    {/* Feature Icon */}
                    <div className="feature-icon mb-4">
                      <div className={`icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-${feature.color} text-white`}
                           style={{width: '80px', height: '80px', fontSize: '2.5rem'}}>
                        <i className={feature.icon}></i>
                      </div>
                    </div>
                    
                    {/* Feature Title */}
                    <h4 className="feature-title mb-3 font-weight-bold text-dark" itemProp="name">
                      {feature.title}
                    </h4>
                    
                    {/* Feature Description */}
                    <p className="feature-description mb-4 text-muted" itemProp="description">
                      {feature.description}
                    </p>
                    
                    {/* Schedule Display */}
                    {feature.schedule && (
                      <div className="schedule-list mb-4">
                        <ul className="list-unstyled">
                          {feature.schedule.map((item, idx) => (
                            <li key={idx} className="schedule-item d-flex justify-content-between align-items-center py-2 border-bottom">
                              <span className="font-weight-medium text-dark">{item.days}</span>
                              <span className={`badge badge-outline-${feature.color} px-2 py-1`}>
                                {item.hours}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Emergency Number */}
                    {feature.emergencyNumber && (
                      <div className="emergency-number mb-4 p-3 bg-light rounded text-center">
                        <h5 className="mb-1 font-weight-bold text-danger">Emergency Hotline</h5>
                        <h3 className="mb-0 font-weight-bold text-dark">{feature.emergencyNumber}</h3>
                        <small className="text-muted">Available 24/7 for urgent cases</small>
                      </div>
                    )}
                    
                    {/* Action Button */}
                    {feature.buttonText && (
                      <div className="feature-action text-center">
                        <a 
                          href={feature.buttonLink}
                          target={feature.isExternal ? "_blank" : "_self"}
                          rel={feature.isExternal ? "noopener noreferrer" : ""}
                          className={`btn btn-${feature.color} btn-md rounded-pill font-weight-bold`}
                          style={{minWidth: '160px', fontSize: '14px', padding: '8px 16px'}}
                          aria-label={`${feature.buttonText} - ${feature.title}`}
                        >
                          {feature.color === 'success' && <i className="icofont icofont-video-cam mr-2"></i>}
                          {feature.color === 'danger' && <i className="icofont icofont-phone mr-2"></i>}
                          {feature.buttonText}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-10">
              <div className="additional-services p-4 bg-light rounded-lg">
                <div className="text-center mb-4">
                  <h3 className="mb-3 font-weight-bold text-dark">
                    <i className="icofont icofont-plus mr-2 text-primary"></i>
                    Additional Services
                  </h3>
                </div>
                
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-3 mb-3 text-center">
                    <div className="service-item">
                      <i className="icofont icofont-home text-primary mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="font-weight-bold mb-1">Home Visits</h6>
                      <small className="text-muted">Nairobi & Suburbs</small>
                    </div>
                  </div>
                  
                  <div className="col-12 col-sm-6 col-lg-3 mb-3 text-center">
                    <div className="service-item">
                      <i className="icofont icofont-prescription text-success mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="font-weight-bold mb-1">Digital Prescriptions</h6>
                      <small className="text-muted">Electronic Rx</small>
                    </div>
                  </div>
                  
                  <div className="col-12 col-sm-6 col-lg-3 mb-3 text-center">
                    <div className="service-item">
                      <i className="icofont icofont-users-alt-4 text-info mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="font-weight-bold mb-1">Family Care</h6>
                      <small className="text-muted">All Ages</small>
                    </div>
                  </div>
                  
                  <div className="col-12 col-sm-6 col-lg-3 mb-3 text-center">
                    <div className="service-item">
                      <i className="icofont icofont-shield-alt text-warning mb-2" style={{fontSize: '2rem'}}></i>
                      <h6 className="font-weight-bold mb-1">Personalized IV Therapy</h6>
                      <small className="text-muted">Tailored for Your Needs</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-lg-8 text-center">
              <div className="contact-cta p-4 bg-primary text-white rounded-lg">
                <h4 className="mb-3 font-weight-bold">
                  <i className="icofont icofont-brand-whatsapp mr-2"></i>
                  Need Medical Assistance?
                </h4>
                <p className="mb-4">
                  Don't wait when it comes to your health. Contact Dr. Eric Musanyi today 
                  for professional medical consultation and care.
                </p>
                
                <div className="d-flex flex-column flex-sm-row justify-content-center">
                  <a 
                    href="https://wa.me/254791674164?text=Hi%20Dr.%20Eric,%20I%20need%20medical%20assistance." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-light btn-md mb-2 mb-sm-0 mr-sm-3 rounded-pill font-weight-bold"
                    style={{minWidth: '160px', fontSize: '14px', padding: '8px 16px'}}
                    aria-label="Contact via WhatsApp"
                  >
                    <i className="icofont icofont-brand-whatsapp mr-2 text-success"></i>
                    WhatsApp Now
                  </a>
                  
                  <a 
                    href="tel:+254791674164" 
                    className="btn btn-outline-light btn-md rounded-pill font-weight-bold"
                    style={{minWidth: '160px', fontSize: '14px', padding: '8px 16px'}}
                    aria-label="Call Dr. Eric"
                  >
                    <i className="icofont icofont-phone mr-2"></i>
                    Call Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .badge-outline-primary {
          color: #007bff;
          border: 1px solid #007bff;
          background: transparent;
        }

        .badge-outline-success {
          color: #28a745;
          border: 1px solid #28a745;
          background: transparent;
        }

        .badge-outline-danger {
          color: #dc3545;
          border: 1px solid #dc3545;
          background: transparent;
        }

        .feature-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1) !important;
        }

        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .emergency-number {
          border: 2px dashed #dc3545;
        }

        .service-item {
          transition: all 0.3s ease;
          padding: 1rem;
          border-radius: 0.5rem;
        }

        .service-item:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-5px);
        }

        .contact-cta {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .feature-card {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .btn {
            width: 100%;
            margin-bottom: 1rem !important;
          }
          
          .icon-wrapper {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Features
