import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const onClick = () => setNavbarOpen(!navbarOpen)
  const services = [
    {
      title: "Cloud Adoption",

      url: "/services/cloud-adoption"
    },
    {
      title: "Digital Transformation",

      url: "/services/digital-ransformation"
    },
    {
      title: "App Modernization",

      url: "/services/app-modernization"
    },
    {
      title: "User Experience",

      url: "/services/user-experience"
    }
  ]


  return (
    <header className="bg-softsol fixed-top py-3">

      <div className="container">
        <nav className="navbar navbar-expand-lg">

          <a href="/" title="CRR" className=" logo d-flex align-items-center col-md-4 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="/images/logo-white.png" />
          </a>
          <button className="navbar-toggler" onClick={onClick} type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={'collapse navbar-collapse flex-wrap align-items-center justify-content-md-center justify-content-md-between' + (navbarOpen ? ' d-flex' : ' hidden')} >

            <ul className="navbar-nav nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" className="nav-link fw-bold px-3 ">Home</a></li>
              <li className="dropdown"><a href="/services" className="nav-link fw-bold  px-3 ">What we do</a>
                <div className="dropdown-menu text-small shadow p-3" data-popper-placement="top-start">
                  <div className="row">

                    <div className="col-md-12">
                      <nav className="w-100"> 
                        {services.map((service, index) =>
                          <a key={index.toString()} href={service.url} className="btn btn-hover-light border-0 rounded-2 d-flex align-items-center text-start">

                             {service.title} 
                          </a>
                        )
                        }

                      </nav>
                    </div>

                  </div>

                </div>
              </li>
              <li><a href="/technologies" className="nav-link fw-bold px-3 ">Technologies</a></li>
              <li><a href="/about-us" className="nav-link fw-bold px-3 ">About Us</a></li>
              <li><a href="/careers" className="nav-link fw-bold px-3 ">Careers</a></li>
            </ul>

            <div className="col-md-3 text-end">
              <a href="/contact-us" className="btn btn-outline-light">Contact Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
