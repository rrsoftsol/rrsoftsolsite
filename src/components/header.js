import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const onClick = () => setNavbarOpen(!navbarOpen)
  const services = [
    {
      heading: "Private Limited Registations",

      url: "/company-registrations/private-company-registrations"
    },
    {
      heading: "Public Limited Registations",

      url: "/company-registrations/public-company-registrations"
    },
    {
      heading: "One Person Company Registations",

      url: "/company-registrations/one-person-company-registrations"
    },
    {
      heading: "Shops And Establishment",

      url: "/company-registrations/shops-and-establishment-registrations"
    },
    {
      heading: "Startup India Registration",

      url: "/company-registrations/startup-india-registrations"
    },
    {
      heading: "Udyam Registration",

      url: "/company-registrations/udyam-registrations"
    },
    {
      heading: "Nidhi company",

      url: "/company-registrations/nidhi-company-registrations"
    }
  ]


  const cservices = [
    {
      heading: "GST Services",
      url: "/company-registrations/private-company-registrations"
    },
    {
      heading: "HR Services",

      url: "/company-registrations"
    },
    {
      heading: "Digital Signatures",

      url: "/company-registrations"
    },
    {
      heading: "FCRA Services",

      url: "/company-registrations"
    }
  ]

  return (
    <header class="fixed-top bg-white">

      <div class="container">
        <nav class="navbar navbar-expand-lg">

          <a href="/" title="CRR" class=" logo d-flex align-items-center col-md-4 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src="/images/logo.jpeg" />
          </a>
          <button class="navbar-toggler" onClick={onClick} type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={'collapse navbar-collapse flex-wrap align-items-center justify-content-md-center justify-content-md-between'+ (navbarOpen ? ' d-flex' : ' hidden')} >

            <ul class="navbar-nav nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

              <li class="dropdown"><a href="/services" class="nav-link fw-bold  px-3 link-dark">Services</a>
                <div class="dropdown-menu text-small shadow p-3" data-popper-placement="top-start">
                  <div class="row">

                    <div class="col-md-4">
                      <nav class="d-grid gap-2 w-100">
                        <a href="#" class="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start border-bottom">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                          </svg>
                          <div>
                            <strong class="d-block">Company Registrations</strong>
                            <small>Take a tour through the product</small>
                          </div>
                        </a>

                        {services.map((service) =>
                          <a href={service.url} class="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-3 px-3 lh-sm text-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                            <div>
                              <strong class="d-block">{service.heading}</strong>
                            </div>
                          </a>
                        )
                        }

                      </nav>
                    </div>

                    <div class="col-md-4">
                      <nav class="d-grid gap-2 w-100">
                        <a href="#" class="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-2 px-3 lh-sm text-start border-bottom">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                            <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
                          </svg>
                          <div>
                            <strong class="d-block">Corporate Services</strong>
                            <small>Take a tour through the product</small>
                          </div>
                        </a>

                        {cservices.map((service) =>
                          <a href={service.url} class="btn btn-hover-light border-0 rounded-2 d-flex align-items-center gap-3 py-3 px-3 lh-sm text-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <div>
                              <strong class="d-block">{service.heading}</strong>
                            </div>
                          </a>
                        )
                        }
                      </nav>
                    </div>
                    <div class="col-md-4">
                      <div class="py-5 text-center">
                        <h1 class="display-6">Interested in our services</h1>
                        <div class="col-lg-6 mx-auto">

                          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <a href="/contact-us" class="btn btn-primary btn-lg px-4 me-sm-3 fw-bold">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li><a href="/about-us" class="nav-link fw-bold px-3 link-dark">About Us</a></li>
              <li><a href="/faq" class="nav-link fw-bold px-3 link-dark">FAQ</a></li>
              <li><a href="/pricing" class="nav-link fw-bold px-3 link-dark">Pricing</a></li>
            </ul>

            <div class="col-md-3 text-end">
              <a href="/contact-us" class="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
