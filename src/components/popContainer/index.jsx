import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';


const PopContainer = () => {
  console.log(localStorage.getItem('songs'));
  return (
    <div className={styles.container} />
  );
};

export default PopContainer;
