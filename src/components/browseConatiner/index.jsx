import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';
import useMusicDetails from '../../hooks/useMusicDetails';
import Card from '../card';
import CardContainer from '../cardContainer';
import countryImage from '../../images/001-guitar.png';
import rockImage from '../../images/012-electric guitar.png';
import bollywoodImage from '../../images/006-amplifier.png';
import popImage from '../../images/049-singer.png';


const BrowseContainer = () => {
  const [data, callComplete] = useMusicDetails();
  localStorage.removeItem('songs');
  const songs = JSON.parse(localStorage.getItem('songs') || '[]');
  songs.push({ data });
  localStorage.setItem('songs', JSON.stringify(songs));
  if (callComplete) {
    return (
      <div className={styles.container}>
        <div className={styles.titleText}>
          genres
        </div>
        <CardContainer>
          <Link to="/pop">
            <Card text="Pop" img={popImage} alt="pop-icon" />
          </Link>
          <Link to="/rock">
            <Card text="Rock" img={rockImage} alt="rock-icon" />
          </Link>
          <Link to="/bollywood">
            <Card text="Bollywood" img={bollywoodImage} alt="bollywood-icon" />
          </Link>
          <Link to="/country">
            <Card text="Country" img={countryImage} alt="country-icon" />
          </Link>
        </CardContainer>
      </div>
    );
  }
  return (<div>Loading ...</div>);
};
export default BrowseContainer;
