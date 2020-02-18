import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';


const Button = (props) => {
  const { click, children, testID } = props;
  return (
    <button className={styles.button} data-testid={testID} type="button" onClick={click}>
      {children}
    </button>
  );
};

Button.propTypes = {
  click: propTypes.func.isRequired,
  children: propTypes.string.isRequired,
  testID: propTypes.string.isRequired,
};

export default Button;
