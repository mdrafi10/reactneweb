import React from "react";
import Aboutus from "./Component/About/Aboutus";
import HowItworks from "./Component/MainBody/HowItworks";
import MainSecton from "./Component/MainBody/MainSecton";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSecton />
      <HowItworks />
      <Aboutus />
      <Services />
    </>
  );
};

export default App;
