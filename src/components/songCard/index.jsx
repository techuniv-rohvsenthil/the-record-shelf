import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';


const SongCard = (props) => {
  const { text, img, alt } = props;
  return (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt={alt} height="100px" width="100px" />
      <div>{text}</div>
      <button type="button">
        ♡
        {' '}
      </button>
    </div>
  );
};

SongCard.propTypes = {
  text: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default SongCard;
