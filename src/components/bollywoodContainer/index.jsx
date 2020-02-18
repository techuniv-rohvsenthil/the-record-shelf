import React from 'react';
import * as styles from './index.module.css';
import Card from '../card';


const BollywoodContainer = () => {
  const rec = JSON.parse(localStorage.getItem('songs'));
  const records = rec[0].data;
  let i = 0;
  // eslint-disable-next-line prefer-const
  let bollywoodRecords = [];
  while (i < records.length) {
    const { genres } = records[i];
    if (genres.includes('bollywood')) {
      bollywoodRecords.push(records[i]);
    }
    i += 1;
  }
  const bollyRecs = [...bollywoodRecords].map((song) => (
    <Card
      img={song.albumArtUrl}
      text={song.name}
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
