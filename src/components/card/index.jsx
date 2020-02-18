import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import Button from '../button';


const Card = (props) => {
  const { text, img, alt } = props;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt={alt} height="100px" width="100px" />
      <Button testID="card-btn" click={() => {}}>{text}</Button>
    </div>
  );
};

Card.propTypes = {
  text: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default Card;
