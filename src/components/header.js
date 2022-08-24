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
    <header className="fixed-top bg-white py-3">

      <div className="container">
        <nav className="navbar navbar-expand-lg">

          <a href="/" title="CRR" className=" logo d-flex align-items-center col-md-4 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="/images/logo.png" />
          </a>
          <button className="navbar-toggler" onClick={onClick} type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={'collapse navbar-collapse flex-wrap align-items-center justify-content-md-center justify-content-md-between'+ (navbarOpen ? ' d-flex' : ' hidden')} >

            <ul className="navbar-nav nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

              <li className="dropdown"><a href="/services" className="nav-link fw-bold  px-3 link-dark">What we do</a>
                <div className="dropdown-menu text-small shadow p-3" data-popper-placement="top-start">
                  <div className="row">

                    <div className="col-md-12">
                      <nav className="d-grid gap-2 w-100">
 

                        {services.map((service, index) =>
                          <a key={index.toString()} href={service.url} className="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-3 px-3 lh-sm text-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                            <div>
                              <strong className="d-block">{service.title}</strong>
                            </div>
                          </a>
                        )
                        }

                      </nav>
                    </div>
 
                  </div>

                </div>
              </li>
              <li><a href="/about-us" className="nav-link fw-bold px-3 link-dark">About Us</a></li>
              <li><a href="/faq" className="nav-link fw-bold px-3 link-dark">FAQ</a></li>
              <li><a href="/pricing" className="nav-link fw-bold px-3 link-dark">Pricing</a></li>
            </ul>

            <div className="col-md-3 text-end">
              <a href="/contact-us" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
