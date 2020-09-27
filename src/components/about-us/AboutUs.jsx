import React from "react";

const AboutUs = ({ title, text }) => {
  return (
    <section className="about-section">
      <article className="as-article">
        <h2 className="asa-title">{title}</h2>
        <p className="asa-text">{text}</p>
      </article>
    </section>
  );
};

export default AboutUs;
