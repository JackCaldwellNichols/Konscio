import { useLayoutEffect } from "react";
import Hero from "../Components/Hero/Hero";
import InfoTop from "../Components/InfoTop/InfoTop";
import InfoBottom from "../Components/InfoBottom/InfoBottom";
import Contact from "../Components/Contact/Contact";
import Benefits from "../Components/Benefits/Benefits";
import Felicidad from "../Components/Felicidad/Felicidad";
import Vision from "../Components/Vision/Vision";
import Feliz from "../Components/Felicidad copy/Feliz";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="app">
      <Hero />
      <InfoTop />
      <Felicidad />
      <InfoBottom />
      <Feliz />
      <Benefits />
      <Vision />
      <Contact />
    </div>
  );
};

export default Home;
