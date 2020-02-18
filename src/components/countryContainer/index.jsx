import React from 'react';
import * as styles from './index.module.css';
import Card from '../card';


const CountryContainer = () => {
  const records = JSON.parse(localStorage.getItem('songs'));
  const countryRecords = records[0].country;
  const countryRecs = [...countryRecords].map((rec) => (
    <Card
      img={rec.albumArtUrl}
      text={rec.name}
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
