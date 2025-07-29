import React from 'react'

const ComingSoon = () => {
  return (
    <div className="coming-soon-page">
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-lg-8 col-md-10 text-center">
            <div className="coming-soon-content">
              <div className="medical-icon mb-4">
                <i className="icofont icofont-stethoscope text-primary" style={{fontSize: '4rem'}}></i>
              </div>
              
              <h1 className="display-4 font-weight-bold text-primary mb-3">
                Coming Soon
              </h1>
              
              <h3 className="h4 text-secondary mb-4">
                Dr. Eric Lugaya Musanyi
              </h3>
              
              <div className="feature-highlight mb-5">
                <p className="lead text-muted mb-4">
                  We're working hard to bring you an enhanced medical experience. 
                  This feature will be available soon to serve you better.
                </p>
                
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <i className="icofont icofont-ui-settings text-primary mb-2" style={{fontSize: '2rem'}}></i>
                      <h6>Enhanced Features</h6>
                      <small className="text-muted">Advanced functionality in development</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <i className="icofont icofont-shield-alt text-primary mb-2" style={{fontSize: '2rem'}}></i>
                      <h6>Secure Platform</h6>
                      <small className="text-muted">Medical-grade security standards</small>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="feature-item">
                      <i className="icofont icofont-ui-user text-primary mb-2" style={{fontSize: '2rem'}}></i>
                      <h6>Better Experience</h6>
                      <small className="text-muted">Improved user interface</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cta-section">
                <h5 className="mb-3">Need Medical Assistance Now?</h5>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                  <a href="/#appoinment" className="btn btn-primary btn-lg mb-3 mb-md-0 mr-md-3">
                    <i className="icofont icofont-ui-calendar mr-2"></i>
                    Book Appointment
                  </a>
                  <a href="tel:+254916741164" className="btn btn-outline-primary btn-lg mb-3 mb-md-0 mr-md-3">
                    <i className="icofont icofont-phone mr-2"></i>
                    Emergency Call
                  </a>
                  <a href="https://wa.me/25491674164" className="btn btn-success btn-lg">
                    <i className="icofont icofont-brand-whatsapp mr-2"></i>
                    WhatsApp Chat
                  </a>
                </div>
              </div>
              
              <div className="back-home mt-5">
                <a href="/" className="text-primary">
                  <i className="icofont icofont-simple-left mr-1"></i>
                  Back to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
