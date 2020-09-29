import React from "react";

const AboutUs = ({ title, text, imageOwner, imageOwnerAlt }) => {
  return (
    <section className="about-section">
      <article className="as-article">
        <img className="asa-image"
          src={require(`../../assets/images/home/${imageOwner}`)}
          alt={imageOwnerAlt}
        />
        <div className="asa-text-wrapper">
          <h2 className="asatw-title">{title}</h2>
          <p className="asatw-text">{text}</p>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
