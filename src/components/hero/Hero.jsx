import React from "react";

const Hero = ({ title }) => {
  return (
    <section className="hero">
      <article className="h-article">
        <h2 className="ha-title">{title}</h2>
      </article>
    </section>
  );
};

export default Hero;
