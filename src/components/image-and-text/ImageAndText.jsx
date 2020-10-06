import React from "react";

const ImageAndText = ({imageLeft, imagePath, imageRound, imageAlt, title, text}) => {
  console.log(imageRound);
  if(imageLeft) {
    return (
      <article className="as-article article-image-left">
        <img
          className="asa-image"
          src={require(`../../assets/images/${imagePath}/${imageRound}`)}
          alt={imageAlt}
        />
        <div className="asa-text-wrapper left">
          <h2 className="asatw-title">{title}</h2>
          <p className="asatw-text">{text}</p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="as-article article-image-right">
        
        <div className="asa-text-wrapper right">
          <h2 className="asatw-title">{title}</h2>
          <p className="asatw-text">{text}</p>
        </div>
        <img
          className="asa-image"
          src={require(`../../assets/images/${imagePath}/${imageRound}`)}
          alt={imageAlt}
        />
      </article>
    );
  }
  
  
};

export default ImageAndText;
