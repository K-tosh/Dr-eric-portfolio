"use client"
import { useState } from 'react'

const Header = () => {
 const [isNavOpen, setIsNavOpen] = useState(false);

 const toggleNav = () => {
  setIsNavOpen(!isNavOpen);
 };

 return (
  <>
   <header>
    <nav className="navbar navbar-expand-lg navigation fixed-top bg-light" id="navbar">
     <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
       <img src="images/logo.png" alt="" className="img-fluid" />
       <p className='logo-title mb-0 p-0'>Dr Eric.</p>
      </a>

      <button className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`} type="button" onClick={toggleNav} aria-label="Toggle navigation">
       <span className="icofont icofont-navigation-menu"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarmain">
       <ul className="navbar-nav ml-auto">
        <li className="nav-item">
         <a className="nav-link font-weight-semibold" href="/#heroBanner">
          <i className="icofont icofont-home mr-1"></i>Home
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link font-weight-semibold" href="/#about">
          <i className="icofont icofont-doctor mr-1"></i>About Dr. Eric
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link font-weight-semibold" href="/#services">
          <i className="icofont icofont-stethoscope mr-1"></i>Services
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link font-weight-semibold" href="/#consultation">
          <i className="icofont icofont-video-cam mr-1"></i>Consultations
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link font-weight-semibold" href="/book-appointment">
          <i className="icofont icofont-ui-calendar mr-1"></i>Book Now
         </a>
        </li>
        <li className="nav-item">
         <a className="nav-link btn btn-primary text-white px-3 py-2 ml-2 rounded-pill emergency-btn" href="tel:+254916741164">
          <i className="icofont icofont-phone mr-1"></i>Emergency
         </a>
        </li>
       </ul>
      </div>     </div>
    </nav>
   </header>
  </>
 )
}

export default Header
