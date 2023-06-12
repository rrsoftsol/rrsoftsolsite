import React from "react";


function FooterSection(links = []) {
  return (
    <>
      {links.links.map((link, index) =>
        <li key={index.toString()} className="nav-item mb-2"><a href={link.url} className="nav-link p-0 ">{link.title}</a></li>
      )
      }
    </>
  )
}

export default () => {

  const footerlinks = {
    sections: [
      {
        title: 'Our Capabilities',
        links: [
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
      }, {
        title: 'Company',
        links: [{ title: 'Home', url: '/' }, { title: 'About', url: '/about-us' }, { title: 'Contact', url: '/contact-us' },]
      },]
  }
  return (
    <>

      <div className="container">
        <div className="cta text-secondary mx-4 my-5 text-center rounded-3">
          <div className="py-5">
            <h1 className="display-5 fw-bold text-primary">Interested in our services</h1>
            <div className="col-lg-6 mx-auto">
              <p className="fs-5 mb-4">
                Join uS now.</p>
              <div className="d-md-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3 fw-bold">Contact Us</button>
              </div>
            </div>
          </div>
          <div className="position-absolute"><svg viewBox="0 0 600 600" className="">
            <g transform="translate(300,300)"><path d="M153.6,-239C199.1,-209.8,236,-167.2,258.4,-118C280.9,-68.9,288.9,-13.1,281.2,40.4C273.5,93.9,250.1,145.2,214.7,186.1C179.3,226.9,131.9,257.4,80,272.6C28.2,287.8,-28.2,287.8,-80,272.6C-131.9,257.4,-179.3,226.9,-214.7,186.1C-250.1,145.2,-273.5,93.9,-281.2,40.4C-288.9,-13.1,-280.9,-68.9,-258.4,-118C-236,-167.2,-199.1,-209.8,-153.6,-239C-108.1,-268.3,-54.1,-284.1,0,-284.1C54.1,-284.1,108.1,-268.3,153.6,-239Z" fill="currentColor"></path></g></svg>
            <svg viewBox="0 0 600 600" className="GetStartedLight__DecoratorBlob2-sc-14djjkq-12 iNQuOi">
              <g transform="translate(300,300)"><path d="M153.6,-239C199.1,-209.8,236,-167.2,258.4,-118C280.9,-68.9,288.9,-13.1,281.2,40.4C273.5,93.9,250.1,145.2,214.7,186.1C179.3,226.9,131.9,257.4,80,272.6C28.2,287.8,-28.2,287.8,-80,272.6C-131.9,257.4,-179.3,226.9,-214.7,186.1C-250.1,145.2,-273.5,93.9,-281.2,40.4C-288.9,-13.1,-280.9,-68.9,-258.4,-118C-236,-167.2,-199.1,-209.8,-153.6,-239C-108.1,-268.3,-54.1,-284.1,0,-284.1C54.1,-284.1,108.1,-268.3,153.6,-239Z" fill="currentColor"></path></g></svg></div>
        </div>
      </div>
      <div className="footer bg-softsol text-white">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-md-3 mb-3">
                <a href="/" title="RR Softsol" className=" logo d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                  <img src="/images/logo-white.png" />
                </a>
                <div className=" my-4">
                Our experience brings the right insight, technology and teamwork together to create outstanding digital experiences, every time.
                </div>
                <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg></a></li>
              </ul>
              </div>
              {
                footerlinks.sections.map((section, index) =>
                  <div key={index.toString()} className="col-6 col-md-3 mb-3">
                    <h5>{section.title}</h5>
                    <ul className="nav flex-column">
                      <FooterSection links={section.links}></FooterSection>
                    </ul>
                  </div>
                )
              }
              <div className="col-md-3 mb-3">
                <h5>Contact Us</h5>
               <div className="my-4"><div>Plot  No.49B, Sairaj Towers</div>
                <div> Beside Mercedes Benz Showroom</div>
                <div>  Kavuri Hills, Hyderabad-500081</div>
                <div className="pt-2">  <strong>Phone</strong>: 18008892499</div>
                <div className="pt-2">  <strong>Phone</strong>: 9140-40050954</div>
                <div> <strong>Email</strong> : info@rrsoftsol.in</div></div>
              </div>

            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2012 RR SoftSol. All Rights Reserved.</p>
             
            </div>
          </footer></div>
      </div>
    </>
  );
};
