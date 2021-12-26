import React from "react";
import { useStyles } from "./Styles";
import CarouselDesign from "./Carousel";
import NavbarLanding from "../navbar/NavbarLanding";
import Footer from "../Footer/Footer";
import CardComponent from "./Card";

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.Landing}>
      <NavbarLanding />
      <CarouselDesign />
      <CardComponent />
      <Footer />
    </div>
  );
};

export default Landing;
