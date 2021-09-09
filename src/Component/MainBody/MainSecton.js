import React from "react";

const MainSecton = () => {
  return (
    <>
      <main>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                sequi delectus sapiente obcaecati voluptatum facere eaque culpa
                id maxime ex ipsa, tempore totam quas veniam explicabo quis eius
                veritatis itaque?
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill  me-3 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-text">Get it Now</div>
              </div>
            </div>
            {/* main header right side */}
            <div className="col-12 col-lg-6 heder-right-side d-flex justify-content-center  align-items-center main-hero-images">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero2.jpg"
                alt="heroimg2"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSecton;
