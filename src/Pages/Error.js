import React from "react";
import Error404 from "../Component/Error/Error404";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <Error404 />
      <Footer />
    </>
  );
};

export default Error;
