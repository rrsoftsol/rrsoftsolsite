import Head from 'next/head'
import Layout from "../components/layout"; 

export default function Home() {

  const iconGRid = [
    {
      title: "Track Record",
      desc: "We'll file the paperwork and file on your behalf."
    },
    {
      title: "Get Your Clarifications",
      desc: "It’s usual to hear back from support agents within the hour."
    },
    {
      title: "24*7 Support",
      desc: "Higlly available teams."
    }, {
      title: "Problem Free",
      desc: "you wont look for another comany again."
    }
  ];

  return (


    <Layout>
     
      <div class="container">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="images/contact-us-illustration.svg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div class="col-lg-6">
            <h1 class="display-3 text-crr fw-bold lh-sm mb-3">We Got All Your Accounting Needs Covered.</h1>
            <p class="lead">We are multidisciplinary team of accounting, tax and audit professionals with deep, sector-specific experience in wide spectrum of Industries.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 text-center">Our Professional Services</h2>
        
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <a> 
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
              </svg>
            </div>
            <h2>Corporate Services</h2>
            <p>We are engrossed in providing high quality and reliable consultancy services for company registration.</p>
            <a href="/company-registrations" class="icon-link d-inline-flex align-items-center">
              Read More
               
            </a>
          </div>
          </a>
          <a>
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </div>
              <h2>GST Services</h2>
              <p>We help you provide all digital signature certificate related services at reasonable cost and premium service.</p>
              <a href="#" class="icon-link d-inline-flex align-items-center">
                Read More
                 
              </a>
            </div>
          </a>
          <a>
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </div>
              <h2>HR Services</h2>
              <p>We are service provider engaged in rendering superior quality FCRA services to our valuable clients.</p>
              <a href="#" class="icon-link d-inline-flex align-items-center">
                Read More
                 
              </a>
            </div></a>

            <a> 
            <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-collection" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
              </svg>
            </div>
            <h2>Company Registations</h2>
            <p>We are engrossed in providing high quality and reliable consultancy services for company registration.</p>
            <a href="/company-registrations" class="icon-link d-inline-flex align-items-center">
              Read More
               
            </a>
          </div>
          </a>
          <a>
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </div>
              <h2>Digital Signatures</h2>
              <p>We help you provide all digital signature certificate related services at reasonable cost and premium service.</p>
              <a href="#" class="icon-link d-inline-flex align-items-center">
                Read More
                 
              </a>
            </div>
          </a>
          <a>
            <div class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </div>
              <h2>FCRA Consultants</h2>
              <p>We are service provider engaged in rendering superior quality FCRA services to our valuable clients.</p>
              <a href="#" class="icon-link d-inline-flex align-items-center">
                Read More
                 
              </a>
            </div>
            </a>
        </div>
      </div>

      <div class="container px-4 py-5" id="icon-grid">

        <div class="row flex-lg-row align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">

            <div class="card border-0">
              <div class="testimonials">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path></svg>
                <blockquote class="TwoColumnWithFeaturesAndTestimonial__Quote-sc-7wvgyg-19">
                Best service provided. A new and yet best corporate advisors in town to solve the problem and provide consultation for the best.
                </blockquote>
                <div >Jaya Banerjee
</div>
                <div >Founder.</div>

              </div>
              <div class="p-image  mx-auto">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="350"></img>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <h2 class="pb-2">Why CRR Corporate Services?</h2>

            <div class="row row-cols-1 row-cols-sm-2 g-4 py-5">

              {iconGRid.map((item) =>
                <div class="col d-flex align-items-start">
                  <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" viewBox="0 0 16 16">
                    <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                    <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                    <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                  </svg>
                  <div>
                    <h4 class="fw-bold mb-0">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              )
              }

            </div>
          </div>

        </div>
      </div>
      
    </Layout>
  )
}
