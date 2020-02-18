import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';


const CardConatiner = (props) => (
  <div className={styles.container}>
    {props.children}
  </div>
);

export default CardConatiner;
