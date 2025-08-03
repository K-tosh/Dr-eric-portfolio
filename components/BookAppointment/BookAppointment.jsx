"use client"
import React, { useState } from 'react'

const BookAppointment = () => {
  const [activeTab, setActiveTab] = useState('virtual')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    urgency: 'routine'
  })

  const consultationTypes = {
    virtual: {
      title: 'Virtual Consultation',
      price: 'KSH 300',
      duration: '30-45 min',
      icon: 'icofont-video-cam',
      color: 'primary',
      description: 'Secure video consultation via a secured platform'
    },
    home: {
      title: 'Home Visit',
      price: 'KSH 8,500',
      duration: '60-90 min',
      icon: 'icofont-home',
      color: 'success',
      description: 'Professional medical care at your home'
    },
    clinic: {
      title: 'Clinic Visit',
      price: 'KSH 500',
      duration: '10-15 min',
      icon: 'icofont-hospital',
      color: 'info',
      description: 'Professional consultation at our clinic'
    }
  }

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ]

  const generateNext7Days = () => {
    const days = []
    const today = new Date()
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        weekday: date.toLocaleDateString('en-US', { weekday: 'short' })
      })
    }
    return days
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBooking = () => {
    const consultation = consultationTypes[activeTab]
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    
    if (activeTab === 'virtual') {
      const message = `Hi Dr. Eric,

I would like to book a ${consultation.title}:

📅 Date: ${formattedDate}
⏰ Time: ${selectedTime}
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || 'Not provided'}
🏥 Health Concern: ${formData.concern}
⚡ Urgency: ${formData.urgency}
💰 Fee: ${consultation.price}

Please confirm my virtual appointment. I will join the consultation room at the scheduled time via: https://doxy.me/ericmusanyi

Thank you!`

      const whatsappUrl = `https://wa.me/25491674164?text=${encodeURIComponent(message)}`
      
      window.open(whatsappUrl, '_blank')
      
      setTimeout(() => {
        if (confirm('Your booking request has been sent via WhatsApp. Would you like to save the virtual consultation room link?')) {
          window.open('https://doxy.me/ericmusanyi', '_blank')
        }
      }, 2000)
      
    } else {
      const message = `Hi Dr. Eric,

I would like to book a ${consultation.title}:

📅 Date: ${formattedDate}
⏰ Time: ${selectedTime}
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email || 'Not provided'}
🏥 Health Concern: ${formData.concern}
⚡ Urgency: ${formData.urgency}
💰 Fee: ${consultation.price}

Please confirm my appointment. Thank you!`

      const whatsappUrl = `https://wa.me/25491674164?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  return (
    <div className="book-appointment-page py-3 py-md-5">
      <div className="container-fluid px-3 px-md-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            
            {/* Header Section */}
            <div className="text-center mb-4 mb-md-5">
              <h2 className="mb-2 mb-md-3 h3 h2-md">Book Your Appointment</h2>
              <p className="text-muted mb-1 small">Choose your consultation type and schedule with Dr. Eric</p>
              <hr className="w-50 w-md-25 mx-auto border-primary" />
            </div>

            {/* Consultation Type Selection */}
            <div className="consultation-types mb-4 mb-md-5">
              <h5 className="mb-3 mb-md-4 text-center h6 h5-md">
                <i className="icofont icofont-stethoscope mr-2 text-primary"></i>
                Select Consultation Type
              </h5>
              <div className="row g-2 g-md-3">
                {Object.entries(consultationTypes).map(([key, type]) => (
                  <div key={key} className="col-12 col-sm-6 col-md-4 mb-2 mb-md-3">
                    <div 
                      className={`card text-center h-100 consultation-card ${activeTab === key ? `border-${type.color} shadow-sm` : 'border-light'}`}
                      onClick={() => setActiveTab(key)}
                      style={{cursor: 'pointer', transition: 'all 0.3s ease'}}
                    >
                      <div className="card-body py-3 py-md-4">
                        <div className={`consultation-icon mb-2 mb-md-3 text-${type.color}`}>
                          <i className={`icofont ${type.icon}`} style={{fontSize: '2rem', fontSize: '3rem'}}></i>
                        </div>
                        <h6 className="card-title small h6-md">{type.title}</h6>
                        <p className="text-muted small mb-1 mb-md-2 d-none d-sm-block">{type.description}</p>
                        <div className={`price h6 h5-md mb-1 text-${type.color}`}>{type.price}</div>
                        <small className="text-muted">{type.duration}</small>
                        {activeTab === key && (
                          <div className="mt-2 mt-md-3">
                            <i className={`icofont icofont-check-circled text-${type.color}`}></i>
                            <small className={`ml-2 text-${type.color} font-weight-bold`}>Selected</small>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Virtual Consultation Info */}
            {activeTab === 'virtual' && (
              <div className="virtual-info mb-3 mb-md-4">
                <div className="card border-primary">
                  <div className="card-body p-3 p-md-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-8 mb-3 mb-md-0">
                        <h6 className="text-primary mb-2 small h6-md">
                          <i className="icofont icofont-video-cam mr-2"></i>
                          Virtual Consultation Platform
                        </h6>
                        <p className="mb-2 small">Your consultation will be conducted via a secure, HIPAA-compliant telehealth platform.</p>
                        <small className="text-muted">No app download required. Works directly in your web browser.</small>
                      </div>
                      <div className="col-12 col-md-4 text-center">
                        <a 
                          href="https://doxy.me/ericmusanyi" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-success floating-btn position-relative btn-sm btn-md-normal"
                          style={{
                            animation: 'pulse-glow 2s infinite',
                            boxShadow: '0 0 15px rgba(40, 167, 69, 0.6)',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            display: 'inline-block',
                            transition: 'all 0.3s ease',
                            padding: '8px 16px',
                            fontSize: '0.875rem'
                          }}
                        >
                          <i className="icofont icofont-video-cam mr-1 mr-md-2"></i>
                          <span className="d-none d-sm-inline">Start Virtual </span>Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Date & Time Selection */}
            <div className="datetime-selection mb-4 mb-md-5">
              <div className="row">
                
                {/* Date Selection */}
                <div className="col-12 col-md-6 mb-3 mb-md-4">
                  <h6 className="mb-3 small h6-md">
                    <i className="icofont icofont-calendar mr-2 text-primary"></i>
                    Select Date
                  </h6>
                  <div className="row g-2">
                    {generateNext7Days().map((day, index) => (
                      <div key={index} className="col-6 col-lg-12 col-xl-6 mb-2">
                        <div 
                          className={`card date-card ${selectedDate === day.date ? 'bg-primary text-white' : 'bg-light'}`}
                          onClick={() => setSelectedDate(day.date)}
                          style={{cursor: 'pointer', transition: 'all 0.3s ease'}}
                        >
                          <div className="card-body text-center py-2 px-1 px-md-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <div className="small" style={{fontSize: '0.75rem'}}>{day.weekday}</div>
                                <div className="font-weight-bold small">{day.day} {day.month}</div>
                              </div>
                              {selectedDate === day.date && (
                                <i className="icofont icofont-check text-white"></i>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="col-12 col-md-6 mb-3 mb-md-4">
                  <h6 className="mb-3 small h6-md">
                    <i className="icofont icofont-clock-time mr-2 text-primary"></i>
                    Select Time
                  </h6>
                  <div className="row g-2">
                    {timeSlots.map((time, index) => (
                      <div key={index} className="col-6 mb-2">
                        <button 
                          type="button"
                          className={`btn btn-block time-slot small ${selectedTime === time ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setSelectedTime(time)}
                          disabled={!selectedDate}
                          style={{
                            transition: 'all 0.3s ease',
                            padding: '8px 4px',
                            fontSize: '0.875rem'
                          }}
                        >
                          {time}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Patient Information Form */}
            {selectedDate && selectedTime && (
              <div className="patient-form mb-4 mb-md-5">
                <h6 className="mb-3 mb-md-4 small h6-md">
                  <i className="icofont icofont-user mr-2 text-primary"></i>
                  Patient Information
                </h6>
                <div className="card">
                  <div className="card-body p-3 p-md-4">
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label small font-weight-bold">Full Name *</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm form-control-md-normal"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label small font-weight-bold">Phone Number *</label>
                        <input 
                          type="tel" 
                          className="form-control form-control-sm form-control-md-normal"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+254 XXX XXX XXX"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label small font-weight-bold">
                          Email Address {activeTab === 'virtual' ? '*' : ''}
                        </label>
                        <input 
                          type="email" 
                          className="form-control form-control-sm form-control-md-normal"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required={activeTab === 'virtual'}
                        />
                        {activeTab === 'virtual' && (
                          <small className="text-muted">Required for virtual consultation room access</small>
                        )}
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <label className="form-label small font-weight-bold">Urgency Level</label>
                        <select 
                          className="form-control form-control-sm form-control-md-normal"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                        >
                          <option value="routine">Routine</option>
                          <option value="urgent">Urgent</option>
                          <option value="emergency">Emergency</option>
                        </select>
                      </div>
                      <div className="col-12 mb-3">
                        <label className="form-label small font-weight-bold">Health Concern *</label>
                        <textarea 
                          className="form-control form-control-sm form-control-md-normal"
                          name="concern"
                          value={formData.concern}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Briefly describe your health concern..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Booking Confirmation */}
            {selectedDate && selectedTime && formData.name && formData.phone && formData.concern && 
             (activeTab !== 'virtual' || formData.email) && (
              <div className="booking-confirmation">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-3 p-md-4">
                    <h6 className="text-primary mb-3 small h6-md">
                      <i className="icofont icofont-check-circled mr-2"></i>
                      Ready to Book
                    </h6>
                    
                    <div className="booking-summary mb-3 mb-md-4">
                      <div className="row text-center">
                        <div className="col-6 col-md-3 mb-2">
                          <small className="text-muted d-block" style={{fontSize: '0.75rem'}}>Type</small>
                          <span className="font-weight-bold small">{consultationTypes[activeTab].title}</span>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                          <small className="text-muted d-block" style={{fontSize: '0.75rem'}}>Date</small>
                          <span className="font-weight-bold small">
                            {new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                          <small className="text-muted d-block" style={{fontSize: '0.75rem'}}>Time</small>
                          <span className="font-weight-bold small">{selectedTime}</span>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                          <small className="text-muted d-block" style={{fontSize: '0.75rem'}}>Fee</small>
                          <span className="font-weight-bold text-success small">{consultationTypes[activeTab].price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="btn btn-success btn-lg btn-block btn-md-auto px-3 px-md-5"
                      onClick={handleBooking}
                      style={{fontSize: '0.875rem'}}
                    >
                      {activeTab === 'virtual' ? (
                        <>
                          <i className="icofont icofont-video-cam mr-2"></i>
                          <span className="d-none d-sm-inline">Book Virtual </span>Consultation
                        </>
                      ) : (
                        <>
                          <i className="icofont icofont-brand-whatsapp mr-2"></i>
                          <span className="d-none d-sm-inline">Confirm via </span>WhatsApp
                        </>
                      )}
                    </button>
                    
                    <div className="mt-3">
                      <small className="text-muted" style={{fontSize: '0.75rem'}}>
                        {activeTab === 'virtual' 
                          ? 'Booking confirmation via WhatsApp. Virtual room link will be provided.'
                          : 'You\'ll be redirected to WhatsApp to confirm your appointment'
                        }
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile-Optimized CSS */}
      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 15px rgba(40, 167, 69, 0.6);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px rgba(40, 167, 69, 0.8);
            transform: scale(1.02);
          }
          100% {
            box-shadow: 0 0 15px rgba(40, 167, 69, 0.6);
            transform: scale(1);
          }
        }
        
        .floating-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 5px 25px rgba(40, 167, 69, 0.8) !important;
        }

        /* Mobile-specific styles */
        @media (max-width: 767.98px) {
          .h2-md { font-size: 1.5rem !important; }
          .h5-md { font-size: 1.1rem !important; }
          .h6-md { font-size: 1rem !important; }
          
          .consultation-card .card-body {
            padding: 1rem !important;
          }
          
          .consultation-icon i {
            font-size: 2rem !important;
          }
          
          .btn-md-normal {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          
          .form-control-md-normal {
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
          }
          
          .btn-md-auto {
            width: auto !important;
            display: inline-block !important;
          }
        }

        /* Ensure proper touch targets */
        @media (max-width: 767.98px) {
          .card[style*="cursor: pointer"] {
            min-height: 44px;
          }
          
          .btn {
            min-height: 44px;
          }
          
          .time-slot {
            min-height: 44px !important;
          }
        }

        /* Improve spacing on mobile */
        .container-fluid {
          max-width: 100%;
          overflow-x: hidden;
        }
        
        .row {
          margin-left: -0.5rem;
          margin-right: -0.5rem;
        }
        
        .row > * {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default BookAppointment