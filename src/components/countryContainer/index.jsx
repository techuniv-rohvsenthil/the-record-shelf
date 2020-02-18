import React from 'react';
import * as styles from './index.module.css';
import SongCard from '../songCard';


const CountryContainer = () => {
  const rec = JSON.parse(localStorage.getItem('songs'));
  const records = rec[0].data;
  let i = 0;
  // eslint-disable-next-line prefer-const
  let countryRecords = [];
  while (i < records.length) {
    const { genres } = records[i];
    if (genres.includes('country')) {
      countryRecords.push(records[i]);
    }
    i += 1;
  }
  const countryRecs = [...countryRecords].map((song) => (
    <SongCard
      img={song.albumArtUrl}
      text={song.name}
      alt="record"
    />
  ));

  return (
    <div className={styles.container}>
      {countryRecs}
    </div>
  );
};

export default CountryContainer;
