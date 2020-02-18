import React from 'react';
import * as styles from './index.module.css';
import Card from '../card';


const RockContainer = () => {
  const records = JSON.parse(localStorage.getItem('songs'));
  const rockRecords = records[0].rock;
  const rockRecs = [...rockRecords].map((rec) => (
    <Card
      img={rec.albumArtUrl}
      text={rec.name}
      alt="record"
    />
  ));

  return (
    <div className={styles.container}>
      {rockRecs}
    </div>
  );
};

export default RockContainer;
