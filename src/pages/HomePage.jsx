import React from "react";
import dataHome from "../datas/dataHome.json";

import Hero from "../components/hero/Hero";
import AboutUs from "../components/about-us/AboutUs";

const HomePage = () => {
  const {title: titleHero} = dataHome.hero;
  return (
    <main>
      <Hero title={titleHero} />
      <AboutUs />
    </main>
  );
};

export default HomePage;
