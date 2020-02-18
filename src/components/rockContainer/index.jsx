import React from 'react';
import * as styles from './index.module.css';
import Card from '../card';


const RockContainer = () => {
  const rec = JSON.parse(localStorage.getItem('songs'));
  const records = rec[0].data;
  let i = 0;
  // eslint-disable-next-line prefer-const
  let rockRecords = [];
  while (i < records.length) {
    const { genres } = records[i];
    if (genres.includes('rock')) {
      rockRecords.push(records[i]);
    }
    i += 1;
  }
  const rockRecs = [...rockRecords].map((song) => (
    <Card
      img={song.albumArtUrl}
      text={song.name}
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
