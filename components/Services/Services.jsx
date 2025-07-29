import React from 'react'

const Services = () => {
 return (
  <>
   <section className="section service gray-bg" id='services'>
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
       <div className="section-title">
        <h2>Clinical Services & Specializations</h2>
        <div className="divider mx-auto my-4"></div>
        <p className="lead">Comprehensive healthcare solutions delivered through evidence-based practice and personalized clinical care protocols.</p>
       </div>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4 premium-service">
        <div className="icon d-flex align-items-center mb-3">
         <i className="icofont icofont-home text-lg text-primary"></i>
        </div>
        <h4 className="mt-3 mb-3">Domiciliary Clinical Care</h4>
        <div className="content">
         <p className="mb-3">Comprehensive in-home clinical assessments, post-operative monitoring, geriatric care protocols, and medication reconciliation services.</p>
         <ul className="service-features">
          <li>Critical care monitoring</li>
          <li>Post-surgical follow-up</li>
          <li>Medication management</li>
         </ul>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4 premium-service">
        <div className="icon d-flex align-items-center mb-3">
         <i className="icofont icofont-nurse text-lg text-primary"></i>
        </div>
        <h4 className="mt-3 mb-3">Professional Care Coordination</h4>
        <div className="content">
         <p className="mb-3">Certified nursing staff placement and supervision for complex medical conditions requiring specialized attention and continuity of care.</p>
         <ul className="service-features">
          <li>Registered nurse placement</li>
          <li>24/7 supervised care</li>
          <li>Specialized condition management</li>
         </ul>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4 premium-service">
        <div className="icon d-flex align-items-center mb-3">
         <i className="icofont icofont-stethoscope text-lg text-primary"></i>
        </div>
        <h4 className="mt-3 mb-3">Specialized Clinical Consultation</h4>
        <div className="content">
         <p className="mb-3">Expert consultation in neurological disorders, ENT pathology, and chronic disease management with personalized treatment protocols.</p>
         <ul className="service-features">
          <li>Neurological assessments</li>
          <li>ENT disorder management</li>
          <li>Chronic disease protocols</li>
         </ul>
        </div>
       </div>
      </div>


      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4 premium-service">
        <div className="icon d-flex align-items-center mb-3">
         <i className="icofont icofont-laboratory text-lg text-primary"></i>
        </div>
        <h4 className="mt-3 mb-3">Diagnostic Coordination Services</h4>
        <div className="content">
         <p className="mb-3">Comprehensive laboratory services including home-based sample collection, diagnostic interpretation, and continuous monitoring protocols.</p>
         <ul className="service-features">
          <li>Home sample collection</li>
          <li>Results interpretation</li>
          <li>Chronic condition monitoring</li>
         </ul>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4 premium-service">
        <div className="icon d-flex align-items-center mb-3">
         <i className="icofont icofont-phone text-lg text-primary"></i>
        </div>
        <h4 className="mt-3 mb-3">Telemedicine & Remote Care</h4>
        <div className="content">
         <p className="mb-3">Advanced telehealth consultations with digital prescription services, remote monitoring, and post-discharge care coordination.</p>
         <ul className="service-features">
          <li>Virtual consultations</li>
          <li>Digital prescriptions</li>
          <li>Remote monitoring</li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Services