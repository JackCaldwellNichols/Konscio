import Hero from "../Components/Hero/Hero";
import Benefits from "../Components/Benefits/Benefits";
import InfoTop from "../Components/InfoTop/InfoTop";
import InfoTopCentre from "../Components/InfoTopCentre/InfoTopCentre";
import InfoBottomCentre from "../Components/InfoBottomCentre/InfoBottomCentre";
import Vision from "../Components/Vision/Vision";
import Contact from "../Components/Contact/Contact";
import { useLayoutEffect } from "react";
import Banner from "../Components/Banner/Banner";
import BannerBottom from "../Components/BannerBottom/BannerBottom";
import Why from "../Components/Why/Why";
//import ReactGA from "react-ga4";

function Home() {
  // ReactGA.initialize(import.meta.env.VITE_GA_TRACKING);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="app">
      {/* <Nav /> */}
      <Hero />
      <Banner />
      <Benefits />
      <BannerBottom />
      <hr />
      <InfoTop />
      <hr />
      <InfoTopCentre />
      <hr />
      <InfoBottomCentre />
      <hr />
      <hr />
      {/* <Examples /> */}
      <Why />
      <Vision />
      <Contact />
    </div>
  );
}

export default Home;
