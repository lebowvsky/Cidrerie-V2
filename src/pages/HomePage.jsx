import React from "react";
import dataHome from "../datas/dataHome.json";

import Hero from "../components/hero/Hero";
import AboutUs from "../components/about-us/AboutUs";

const HomePage = () => {
  const {title: titleHero} = dataHome.hero;
  const {title: titleAbout,text: textAbout  } = dataHome.about;
  const {name: imageOwner, alt: imageOwnerAlt} = dataHome.about.image;
  return (
    <main>
      <Hero title={titleHero} />
      <AboutUs title={titleAbout} text={textAbout} imageOwner={imageOwner} imageOwnerAlt={imageOwnerAlt} />
    </main>
  );
};

export default HomePage;
