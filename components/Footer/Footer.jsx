import React from 'react'

const Footer = () => {
 return (
  <>
   <footer className="footer py-5 bg-dark text-light">
    <div className="container">
     <div className="row">
      <div className="col-lg-4 col-md-6 mb-4">
       <div className="footer-section">
        <div className="footer-logo mb-4">
         <div className="d-flex align-items-center">
          <i className="icofont icofont-medical-sign-alt text-primary mr-3" style={{fontSize: '2.5rem'}}></i>
          <div>
           <h5 className="text-white mb-0">Dr. Eric Lugaya Musanyi</h5>
           <small className="text-primary">Licensed Clinical Officer</small>
          </div>
         </div>
        </div>
        <p className="text-light mb-3">"Your health deserves attention, not just treatment. Providing compassionate, professional medical care at your doorstep."</p>
        
        <div className="credentials mt-3">
         <div className="credential-item mb-2">
          <i className="icofont icofont-graduate-alt text-primary mr-2"></i>
          <span className="text-light">coc</span>
         </div>
         <div className="credential-item mb-2">
          <i className="icofont icofont-certificate text-primary mr-2"></i>
          <span className="text-light">University of Washington Certified</span>
         </div>
         <div className="credential-item mb-2">
          <i className="icofont icofont-shield-alt text-primary mr-2"></i>
          <span className="text-light">5+ Years Clinical Experience</span>
         </div>
        </div>
       </div>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4">
       <div className="footer-section">
        <h5 className="text-primary mb-3">Medical Services</h5>
        <ul className="footer-links">
         <li><a href="#services" className="text-light"><i className="icofont icofont-home mr-2"></i>Home-Based Medical Care</a></li>
         <li><a href="#services" className="text-light"><i className="icofont icofont-stethoscope mr-2"></i>Clinical Consultations</a></li>
         <li><a href="#services" className="text-light"><i className="icofont icofont-brain-alt mr-2"></i>Neurological Assessments</a></li>
         <li><a href="#services" className="text-light"><i className="icofont icofont-laboratory mr-2"></i>Laboratory Coordination</a></li>
         <li><a href="#services" className="text-light"><i className="icofont icofont-phone mr-2"></i>Telehealth Consultations</a></li>
         <li><a href="#services" className="text-light"><i className="icofont icofont-heart-beat mr-2"></i>Health Monitoring</a></li>
        </ul>
        
        <div className="specialty-areas mt-4">
         <h6 className="text-primary mb-2">Specialization Areas</h6>
         <div className="specialty-tags">
          <span className="badge badge-outline-primary mr-1 mb-1">Neurology</span>
          <span className="badge badge-outline-primary mr-1 mb-1">ENT Care</span>
          <span className="badge badge-outline-primary mr-1 mb-1">Infectious Disease</span>
          <span className="badge badge-outline-primary mr-1 mb-1">Primary Care</span>
         </div>
        </div>
       </div>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4">
       <div className="footer-section">
        <h5 className="text-primary mb-3">Contact & Locations</h5>
        <div className="contact-info">
         <div className="contact-item mb-3">
          <i className="icofont icofont-phone text-primary mr-2"></i>
          <div>
           <span className="text-light">Emergency & Appointments: </span><br/>
           <a href="tel:+254916741164" className="text-primary font-weight-bold">+254-91-674-164</a>
          </div>
         </div>
         
         <div className="contact-item mb-3">
          <i className="icofont icofont-brand-whatsapp text-success mr-2"></i>
          <div>
           <span className="text-light">WhatsApp Consultation: </span><br/>
           <a href="https://wa.me/25491674164" className="text-success font-weight-bold">+254-91-674-164</a>
          </div>
         </div>
         
         <div className="contact-item mb-3">
          <i className="icofont icofont-hospital text-primary mr-2"></i>
          <div className="text-light">
           <strong>Hospital</strong><br/>
           <small>Specialized Neurological & ENT Care</small>
          </div>
         </div>
         
         <div className="contact-item mb-3">
          <i className="icofont icofont-medical-sign text-primary mr-2"></i>
          <div className="text-light">
           <strong>Clinic</strong><br/>
           <small>Primary Care & Consultation Services</small>
          </div>
         </div>
         
         <div className="service-hours mt-3">
          <h6 className="text-primary mb-2">Service Hours</h6>
          <div className="text-light">
           <small><strong>Emergency:</strong> 24/7 Available</small><br/>
           <small><strong>Home Visits:</strong> 7AM - 7PM</small><br/>
           <small><strong>Virtual Consult:</strong> 7AM - 10PM</small>
          </div>
         </div>
        </div>
       </div>
      </div>
      
      <div className="col-lg-2 col-md-6 mb-4">
       <div className="footer-section">
        <h5 className="text-primary mb-3">Quick Links</h5>
        <ul className="footer-links mb-4">
         <li><a href="#heroBanner" className="text-light">Home</a></li>
         <li><a href="#about" className="text-light">About Dr. Eric</a></li>
         <li><a href="#services" className="text-light">Medical Services</a></li>
         <li><a href="#consultation" className="text-light">Consultation Types</a></li>
         <li><a href="#appoinment" className="text-light">Book Appointment</a></li>
         <li><a href="/coming-soon" className="text-light">Patient Portal</a></li>
        </ul>
        
        <h6 className="text-primary mb-3">Connect With Us</h6>
        <div className="social-links mb-4">
         <a href="/coming-soon" className="social-link mr-3" title="Facebook">
          <i className="icofont icofont-facebook text-primary"></i>
         </a>
         <a href="/coming-soon" className="social-link mr-3" title="LinkedIn">
          <i className="icofont icofont-linkedin text-primary"></i>
         </a>
         <a href="/coming-soon" className="social-link mr-3" title="Twitter">
          <i className="icofont icofont-twitter text-primary"></i>
         </a>
         <a href="https://wa.me/25491674164" className="social-link mr-3" title="WhatsApp">
          <i className="icofont icofont-brand-whatsapp text-success"></i>
         </a>
        </div>
        
        <div className="mt-4">
         <a className="btn btn-primary btn-sm rounded-pill px-3" href="#heroBanner">
          <i className="icofont icofont-long-arrow-up mr-1"></i> Back to Top
         </a>
        </div>
       </div>
      </div>
     </div>
     
     <hr className="border-secondary my-4"/>
     
     <div className="row align-items-center">
      <div className="col-md-6">
       <div className="copyright text-light">
        <p className="mb-0">
         &copy; 2025 <span className="text-primary font-weight-bold">Dr. Eric Musanyi</span>
        </p>
        <small className="text-muted">All rights reserved. Afyascope.co.ke</small>
       </div>
      </div>
      <div className="col-md-6 text-md-right">
       <div className="footer-badges">
        <span className="badge badge-primary mr-2"><i className="icofont icofont-shield-alt mr-1"></i>Licensed</span>
        <span className="badge badge-success mr-2"><i className="icofont icofont-certificate mr-1"></i>Certified</span>
        <span className="badge badge-outline-primary"><i className="icofont icofont-heart-beat mr-1"></i>5+ Years</span>
       </div>
      </div>
     </div>
     
     <div className="row mt-4">
      <div className="col-md-8">
       <div className="footer-additional-info">
        <h6 className="text-primary mb-2">Service Coverage Areas</h6>
        <p className="text-muted small mb-0">
         <i className="icofont icofont-location-pin text-primary mr-1"></i>
         Nairobi, Kenya | Home visits available across Nairobi County | Virtual consultations nationwide
        </p>
       </div>
      </div>
      <div className="col-md-4 text-md-right">
       <div className="emergency-notice">
        <a href="tel:+254916741164" className="btn btn-outline-danger btn-sm">
         <i className="icofont icofont-phone mr-1"></i>Emergency Line
        </a>
       </div>
      </div>
     </div>
     
     <div className="row mt-3">
      <div className="col-12 text-center">
       <div className="medical-disclaimer p-3 bg-warning text-dark rounded">
        <i className="icofont icofont-warning mr-2"></i>
        <strong>Medical Disclaimer:</strong> This website provides medical information for educational and appointment booking purposes only. 
        It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
        In case of medical emergencies, please call emergency services or visit the nearest hospital immediately.
       </div>
      </div>
     </div>
    </div>
   </footer>
  </>
 )
}

export default Footer
