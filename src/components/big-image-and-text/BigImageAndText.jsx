import React from 'react';
import styles from './big-image-and-text.module.scss';

const BigImageAndText = ({ imagePath, imageRegular, imageAlt, title, text}) => {
  return (
    <article className={styles.bigImageArticle}>
        <img
          className={styles.bIAImage}
          src={require(`../../assets/images/${imagePath}/${imageRegular}`)}
          alt={imageAlt}
        />
        <div className={styles.bIATextWrapper}>
          <h2 className={styles.bIATWTitle}>{title}</h2>
          <p className={styles.bIATWText}>{text}</p>
        </div>
      </article>
  )
}

export default BigImageAndText;