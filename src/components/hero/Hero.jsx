import React from 'react';

const Hero = ({title, text}) => {
  return (
    <section className="hero">
      <article className="h-article">
  <h2 className="ha-title">{title}</h2>
  <p className="ha-text">{text}</p>
      </article>
    </section>
  )
}

export default Hero;