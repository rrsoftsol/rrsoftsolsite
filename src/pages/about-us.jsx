import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const iconGRid = [

    {
      title: "24*7 Support",
      desc: "Highly available teams."
    },
    {
      title: "Strong Teams",
      desc: "Strong Techincal expertise people."
    },
    {
      title: "Customer Satisfaction",
      desc: "Customer centric Aproach."
    },
  ];

  return (
    <Layout>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/images/about.jpg" className="d-block mx-lg-auto img-fluid" alt="RR Softsol About us"></img>
          </div>
          <div className="col-lg-6">
            <h5 className="text-crr">ABOUT RR SOFTSOL</h5>
            <h1 className="display-3 fw-bold lh-sm mb-3">Your Digital Partner.</h1>
            <p className="lead">We offer a range of services to meet the complex and evolving challenges that you face on multiple fronts.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      <section id="values" class="values  text-center"><div class="container" >
        <header class="section-header"><h2>Our Strory</h2>
          <p>Odit est perspiciatis laboruxtet dicta</p></header>
        <div class="row"><div class="col-lg-4">
          <div class="p-4 shadow"> <img src="/images/values-1.png" class="p-5 img-fluid" alt=""></img>
            <h3 className="text-primary"> Our Humble Beginnings</h3><p>

              Every entrepreneurial journey starts with inspiration from some source to someone and it takes a shape based on the vision and the passion of the team which comes together to accomplish their objective. Despite the fact that thousands of companies get started year on year, very few come to lime light and the glory of success, and accomplishment of objective.</p>
          </div></div><div class="col-lg-4 mt-4 mt-lg-0">
            <div class="p-4 shadow"> <img src="/images/values-2.png" class="p-5 img-fluid" alt=""></img>
              <h3 className="text-primary">A Company is Born</h3>
              <p>
                We a small team of entrepreneurs kept working for a considerable time on understanding the fact that there is a certain way by which the success follows, hundreds of book, thousands of articles from experts and proven track of history, all this has formed the basis for our passion to work in a certain way to get through the success.</p></div></div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="p-4 shadow"> <img src="/images/values-3.png" class="p-5 img-fluid" alt=""></img>
              <h3 className="text-primary">Transition to Full Service.</h3>
              <p>
                This initiated us to start this company RR Softsol, which is robust with its passion to deliver quality solutions to our clients. We are too far from aspiring to be one of the leading companies, but every step we take forward; we keep our priority for a Happy Client List..</p></div></div></div></div></section>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-12 text-center">
            <h3 className="text-crr">Our Values</h3>
            <h1 className="display-3 fw-bold lh-sm mb-3">We follow these.</h1>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-3 px-5 g-4 py-5 text-center">

          {iconGRid.map((item) =>
            <div className="col d-flex justify-content-center align-items-center">

              <div>
                <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                  </svg>
                </div>
                <h4 className="fw-bold mb-0">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          )
          }

        </div>
      </div>


    </Layout>
  )
}
