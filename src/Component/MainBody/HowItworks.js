import React from "react";
import workapi from "../../API/workApi";

const HowItworks = () => {
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {workapi.map((cur) => {
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                    key={cur.id}
                  >
                    <i className={`fontawesome-style ${cur.logo}`}></i>
                    <h2 className="sub-heading">{cur.title}</h2>
                    <p className="main-hero-para w-100">{cur.info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItworks;
