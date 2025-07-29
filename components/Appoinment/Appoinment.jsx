import React from 'react'

const Appoinment = () => {
 return (
  <>
   <section className="section appoinment" id='appoinment'>
    <div className="container">
     <div className="row align-items-center">
      <div className="col-12 col-lg-6 order-2 order-lg-1 mb-4 mb-lg-0">
       <div className="appoinment-content text-center">
        <img src="/images/about/profile-1.jpg" alt="Eric Lugaya Musanyi" className="img-fluid mb-4" />
        <div className="emergency">
         <h2 className="text-lg"><i className="icofont icofont-phone-circle text-lg"></i>+254-916-741-164</h2>
        </div>
       </div>
      </div>
      <div className="col-12 col-lg-6 order-1 order-lg-2">
       <div className="appoinment-wrap mt-5 mt-lg-0">
        <h2 className="mb-2 title-color text-center text-lg-left">Schedule Professional Clinical Consultation</h2>
        <p className="mb-4 text-center text-lg-left">Request a comprehensive clinical assessment with our licensed Clinical Officer. Choose from in-home visits, clinic consultations, or telehealth services based on your medical needs and preferences.</p>
        
        <div className="consultation-types mb-4">
         <div className="row">
          <div className="col-4 col-md-4 text-center mb-3">
           <div className="consultation-option">
            <i className="icofont icofont-home text-primary h4"></i>
            <h6>Home Visits</h6>
            <small>Domiciliary care</small>
           </div>
          </div>
          <div className="col-4 col-md-4 text-center mb-3">
           <div className="consultation-option">
            <i className="icofont icofont-hospital text-primary h4"></i>
            <h6>Clinic</h6>
            <small>Professional setting</small>
           </div>
          </div>
          <div className="col-4 col-md-4 text-center mb-3">
           <div className="consultation-option">
            <i className="icofont icofont-phone text-primary h4"></i>
            <h6>Telehealth</h6>
            <small>Remote consultation</small>
           </div>
          </div>
         </div>
        </div>
        <form id="#" className="appoinment-form" method="post" action="#">
         <div className="row">
          <div className="col-12 col-md-6">
           <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
             <option>Select Consultation Venue</option>
             <option>🏠 Home Visit - Nairobi Metropolitan</option>
             <option>🏥 Hospital - Neuro Center</option>
             <option>🏥 Clinic - Primary Care</option>
             <option>💻 Telehealth Consultation</option>
             <option>🚑 Emergency Home Visit</option>
            </select>
           </div>
          </div>
          <div className="col-12 col-md-6">
           <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect2">
             <option>Select Clinical Specialization</option>
             <option>🧠 Neurological Assessment & Care</option>
             <option>👂 ENT Disorders & Treatment</option>
             <option>🦠 Infectious Disease Management</option>
             <option>💊 Chronic Disease Management</option>
             <option>🏠 Domiciliary Care Services</option>
             <option>👩‍⚕️ Nursing Staff Coordination</option>
             <option>🔬 Laboratory & Diagnostic Services</option>
             <option>💻 Telemedicine Consultation</option>
             <option>🚑 Post-Operative Care</option>
             <option>👴 Geriatric Care Management</option>
            </select>
           </div>
          </div>

          <div className="col-12 col-md-6">
           <div className="form-group">
            <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
           </div>
          </div>

          <div className="col-12 col-md-6">
           <div className="form-group">
            <input name="time" id="time" type="text" className="form-control" placeholder="Time" />
           </div>
          </div>
          <div className="col-12 col-md-6">
           <div className="form-group">
            <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
           </div>
          </div>

          <div className="col-12 col-md-6">
           <div className="form-group">
            <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
           </div>
          </div>
         </div>
         <div className="form-group-2 mb-4">
          <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
         </div>

         <div className="text-center text-lg-left">
          <a className="btn btn-main btn-round-full w-100 w-md-auto" href="/book-appointment"><i className="icofont icofont-ui-calendar mr-2"></i>Book Advanced Appointment System <i className="icofont icofont-simple-right ml-2"></i></a>
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Appoinment