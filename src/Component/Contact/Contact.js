import React, { useState } from "react";

const Contactus = () => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submiteData = async (e) => {
    e.preventDefault();
    const { fname, lname, phone, email, address, message } = userData;
    if (fname && lname && phone && email && address && message) {
      const res = fetch(
        "https://reactfirebasewebsite-adb22-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-left-side col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt nemo dolores neque?
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contact.img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* right side contact form */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="fname"
                          id=""
                          className="form-control"
                          value={userData.fname}
                          onChange={postUserData}
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lname"
                          id=""
                          className="form-control"
                          value={userData.lname}
                          onChange={postUserData}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          value={userData.phone}
                          onChange={postUserData}
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          value={userData.email}
                          onChange={postUserData}
                          placeholder="Email ID"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          value={userData.address}
                          onChange={postUserData}
                          placeholder="Add Address"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          value={userData.message}
                          onChange={postUserData}
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label main-hero-para"
                        for="flexCheckChecked"
                      >
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn bnt-style w-100"
                      onClick={submiteData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
