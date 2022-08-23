import React from "react";   
export default () => {
    
  return (
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <a href="/" title="CRR" class=" logo d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
         <img src="images/logo.jpeg" />
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/services" class="nav-link fw-bold  px-3 link-dark">Services</a></li> 
        <li><a href="/about-us" class="nav-link fw-bold px-3 link-dark">About Us</a></li> 
        <li><a href="/faq" class="nav-link fw-bold px-3 link-dark">FAQ</a></li>
        <li><a href="/pricing" class="nav-link fw-bold px-3 link-dark">Pricing</a></li>
      </ul>

      <div class="col-md-3 text-end"> 
        <a href="/contact-us" class="btn btn-primary">Contact Us</a>
      </div>
    </header>
  </div>
  );
};
 