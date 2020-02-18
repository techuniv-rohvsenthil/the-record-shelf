import React from 'react';
import * as styles from './index.module.css';
import Card from '../card';


const BollywoodContainer = () => {
  const records = JSON.parse(localStorage.getItem('songs'));
  const bollywoodRecords = records[0].bollywood;
  const bollyRecs = [...bollywoodRecords].map((rec) => (
    <Card
      img={rec.albumArtUrl}
      text={rec.name}
      alt="record"
    />
  ));

  return (
    <div className={styles.container}>
      {bollyRecs}
    </div>
  );
};

export default BollywoodContainer;
