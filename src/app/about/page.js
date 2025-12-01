import BreadCrumb from "@/components/BreadCrumb";
import React from "react";
import About from "./About";
import Services from "../(home)/services/Services";
import Facts from "./Facts";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div className="container m-t-30">
      <BreadCrumb page="About Us" />
      <About />
      <Services />
      <Facts />
      <Team />
    </div>
  );
};

export default AboutUs;
