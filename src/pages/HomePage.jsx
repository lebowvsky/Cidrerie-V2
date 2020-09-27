import React from "react";
import dataHome from "../datas/dataHome.json";

import Hero from "../components/hero/Hero";
import AboutUs from "../components/about-us/AboutUs";

const HomePage = () => {
  const {title: titleHero, text: textHero} = dataHome.hero;
  const {title: titleAbout,text: textAbout} = dataHome.about;
  return (
    <main>
      <Hero title={titleHero} text={textHero} />
      <AboutUs title={titleAbout} text={textAbout} />
    </main>
  );
};

export default HomePage;
