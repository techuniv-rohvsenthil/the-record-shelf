import React from 'react';
import * as styles from './index.module.css';
import Header from '../header';
import Button from '../button';


const RecordShelfContainer = () => (
  <div className={styles.container}>
    <Header />
    <Button testID="sync-btn" click={() => {}}>sync</Button>
  </div>
);

export default RecordShelfContainer;
