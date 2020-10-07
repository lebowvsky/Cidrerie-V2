import React from "react";

import dataHome from "../../datas/dataHome.json";
import ImageAndText from "../image-and-text/ImageAndText";

const AboutUs = () => {
  const { title: titleAbout, text: textAbout } = dataHome.about;
  const { name: imageOwner, alt: imageOwnerAlt } = dataHome.about.image;
  const { process } = dataHome;

  return (
    <section className="about-section">
      <ImageAndText
        imageRound={imageOwner}
        imageAlt={imageOwnerAlt}
        imagePath="home"
        title={titleAbout}
        text={textAbout}
        imageLeft
      />

      {process.map((elt, index) => {
        if (index % 2 === 0) {
          return (
            <ImageAndText
              key={index}
              imageRound={elt.imageProcess}
              imageAlt={elt.imageAlt}
              imagePath="home"
              title={elt.titleProcess}
              text={elt.textProcess}
            />
          );
        } else {
          return (
            <ImageAndText
              key={index}
              imageRound={elt.imageProcess}
              imageAlt={elt.imageAlt}
              imagePath="home"
              title={elt.titleProcess}
              text={elt.textProcess}
              imageLeft
            />
          );
        }
      })}
    </section>
  );
};

export default AboutUs;
