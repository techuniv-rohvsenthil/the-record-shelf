import React from 'react';
import * as styles from './index.module.css';
import Card from '../card';


const PopContainer = () => {
  const records = JSON.parse(localStorage.getItem('songs'));
  const popRecords = records[0].pop;
  const popRecs = [...popRecords].map((rec) => (
    <Card
      img={rec.albumArtUrl}
      text={rec.name}
      alt="record"
    />
  ));

  return (
    <div className={styles.container}>
      {popRecs}
    </div>
  );
};

export default PopContainer;
