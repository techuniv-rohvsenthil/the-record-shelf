import React from 'react';
import * as styles from './index.module.css';
import SongCard from '../songCard';


const PopContainer = () => {
  const rec = JSON.parse(localStorage.getItem('songs'));
  const records = rec[0].data;
  let i = 0;
  // eslint-disable-next-line prefer-const
  let popRecords = [];
  while (i < records.length) {
    const { genres } = records[i];
    if (genres.includes('pop')) {
      popRecords.push(records[i]);
    }
    i += 1;
  }
  const popRecs = [...popRecords].map((song) => (
    <SongCard
      img={song.albumArtUrl}
      text={`${song.name} by ${song.artists.toString()}`}
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
