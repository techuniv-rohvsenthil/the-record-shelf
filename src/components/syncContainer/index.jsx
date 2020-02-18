import React from 'react';
import * as styles from './index.module.css';
import Button from '../button';


const SyncContainer = () => (
  <div className={styles.container}>
    <Button testID="sync-btn" click={() => {}}>sync</Button>
  </div>
);

export default SyncContainer;
