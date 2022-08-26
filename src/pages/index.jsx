import Head from 'next/head'
import Layout from "../components/layout"; 

import ServiceSection from "../components/services"; 

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
     
     <section id="hero" className="bg-softsol">
      <div className="container-fluid">
        <div className="row flex-lg-row-reverse justify-content-center align-items-center g-3 py-5">
          <div className="col-11 col-sm-8 col-lg-4 py-2">
            <img src="images/hero-img.png" className="d-block mx-lg-auto img-fluid animated" alt="RR softsol"></img>
          </div>
          <div className="col-11 col-xl-5 col-lg-6">
            <h1 className="display-3 text-white fw-bold lh-sm mb-3">Your Digital Transformation Partner.</h1>
            <p className="lead text-light">Our experience brings the right insight, technology and teamwork together to create outstanding digital experiences, every time.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-light btn-lg px-4 me-md-2">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      </section>
     <ServiceSection></ServiceSection>
     
    </Layout>
  )
}
