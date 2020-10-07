import React from "react";
import dataHome from "../../datas/dataHome.json";

import Hero from "../../components/hero/Hero";
import AboutUs from "../../components/about-us/AboutUs";

const HomePage = () => {
  const {title: titleHero} = dataHome.hero;
  const { lastText, lastImage } = dataHome.aboutUsLastTextAndPhoto;
  const lastPhotoPath = require(`../../assets/images/home/${lastImage}`);
  return (
    <main>
      <Hero title={titleHero} />
      <AboutUs />
      <article
        className="about-us-last-part"
        style={{
          backgroundImage: `url(${lastPhotoPath})`,
        }}
      >
        <p className="aulp-text">{lastText}</p>
      </article>
    </main>
  );
};

export default HomePage;
