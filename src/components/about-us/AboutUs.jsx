import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import dataHome from "../../datas/dataHome.json";
import ImageAndText from "../image-and-text/ImageAndText";
import BigImageAndText from "../big-image-and-text/BigImageAndText";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const { title: titleAbout, text: textAbout } = dataHome.about;
  const { name: imageOwner, alt: imageOwnerAlt } = dataHome.about.image;
  const { process } = dataHome;

  useEffect(() => {
    gsap.from(".article-image-left .asa-image", {
      scrollTrigger: {
        trigger: '.article-image-left',
        start: "top 60%",
        toggleActions: "play none none none"
      },
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 1,
    })

    gsap.from(".asa-text-wrapper.left", {
      scrollTrigger: {
        trigger: '.article-image-left',
        start: "top 60%",
        toggleActions: "play none none none"
      },
      duration: 1,
      x: 50,
      opacity: 0,
      stagger: 1,
    })
  })

  useEffect(() => {
    gsap.from(".article-image-right .asa-image", {
      scrollTrigger: {
        trigger: '.article-image-right',
        start: "top 60%",
        toggleActions: "play none none none"
      },
      duration: 0.75,
      x: 50,
      opacity: 0,
      stagger: 1,
    })

    gsap.from(".asa-text-wrapper.right", {
      scrollTrigger: {
        trigger: '.article-image-right',
        start: "top 60%",
        toggleActions: "play none none none"
      },
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 1,
    })
  })

  return (
    <section className="about-section">
      <BigImageAndText
        imageRegular={imageOwner}
        imageAlt={imageOwnerAlt}
        imagePath="home"
        title={titleAbout}
        text={textAbout}
        imageLeft
      />

      {process.map((elt, index) => {
        if (index % 2 !== 0) {
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
