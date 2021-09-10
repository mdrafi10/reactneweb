import React from "react";
import aboutus from "../../API/aboutusApi";

const Aboutus = () => {
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-left-side-img">
              <img src="./images/hero-3.jpg" alt="aboutus" />
            </div>
            <div className="col-12 col-lg-7 our-sevices-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutus.map((cur) => {
                const { id, title, info } = cur;
                return (
                  <div key={id} className="row our-services-info">
                    <div className="col-1 our-services-number">{id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn bnt-style  bnt-style-border">
                learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* world class support */}
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGE</h3>
              <h1 className="main-heading">
                World class support is <br /> availble 24/7
              </h1>
              {aboutus.map((cur) => {
                const { id, title, info } = cur;
                return (
                  <div className="row our-services-info" key={id}>
                    <div className="col-1 our-services-number">{id}</div>
                    <div className="col-10 our-services-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <br />
              <button className="btn bnt-style  bnt-style-border">
                learn more
              </button>
            </div>
            <div className="col-12 col-lg-5  our-service-right-side-img">
              <img src="./images/hero4.jpg" alt="aboutus" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
