import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';
import Button from '../button';


const SyncContainer = () => (
  <div className={styles.container}>
    <div className={styles.displayText}>
      Seems a little empty in here :((
    </div>
    <Link to="/browse">
      <Button testID="sync-btn" click={() => {}}>sync</Button>
    </Link>
  </div>
);

export default SyncContainer;
