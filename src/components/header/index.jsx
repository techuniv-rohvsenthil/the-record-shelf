import React from 'react';
import * as styles from './index.module.css';


const Header = () => (
  <div className={styles.headerBar}>
    <div className={styles.normalText}>
      The
    </div>
    <div className={styles.boldText}>
      Record
    </div>
    <div className={styles.normalText}>
      Shelf
    </div>
  </div>
);

export default Header;
