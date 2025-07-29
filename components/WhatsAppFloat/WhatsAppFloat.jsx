"use client"
import React, { useState, useEffect } from 'react'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Show button after user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappMessage = encodeURIComponent(
    "Hi Dr. Eric! I'd like to schedule a consultation. Please let me know your availability."
  )
  
  const whatsappURL = `https://wa.me/25491674164?text=${whatsappMessage}`

  return (
    <>
      {isVisible && (
        <div className="whatsapp-float-container">
          <div 
            className={`whatsapp-float ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a 
              href={whatsappURL}
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-link"
              aria-label="Contact Dr. Eric via WhatsApp"
            >
              <div className="whatsapp-icon">
                <i className="icofont icofont-brand-whatsapp"></i>
              </div>
              
              {isHovered && (
                <div className="whatsapp-tooltip">
                  <div className="tooltip-content">
                    <div className="doctor-info">
                      <div className="doctor-avatar">
                        <i className="icofont icofont-doctor"></i>
                      </div>
                      <div className="doctor-details">
                        <strong>Dr. Eric Musanyi</strong>
                        <span>Licensed Clinical Officer</span>
                      </div>
                    </div>
                    <div className="quick-actions">
                      <div className="action-item">
                        <i className="icofont icofont-ui-calendar"></i>
                        <span>Book Consultation</span>
                      </div>
                      <div className="action-item">
                        <i className="icofont icofont-phone"></i>
                        <span>Emergency Support</span>
                      </div>
                      <div className="action-item">
                        <i className="icofont icofont-question-circle"></i>
                        <span>Ask Questions</span>
                      </div>
                    </div>
                    <div className="availability">
                      <div className="status-indicator online"></div>
                      <span>Available Now</span>
                    </div>
                  </div>
                  <div className="tooltip-arrow"></div>
                </div>
              )}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default WhatsAppFloat
