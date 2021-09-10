import React from "react";
import Aboutus from "./Component/About/Aboutus";
import Contactus from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import HowItworks from "./Component/MainBody/HowItworks";
import MainSecton from "./Component/MainBody/MainSecton";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <MainSecton />
      <HowItworks />
      <Aboutus />
      <Services />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
