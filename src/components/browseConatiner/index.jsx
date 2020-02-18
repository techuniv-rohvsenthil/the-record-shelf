import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';
import useMusicDetails from '../../hooks/useMusicDetails';
import Button from '../button';


const BrowseContainer = () => {
  const [rock, pop, bollywood, country, callComplete] = useMusicDetails();
  if (callComplete) {
    return (
      <div className={styles.container}>
        <Link to="/pop">
          <Button testID="pop" click={() => {}}>Pop</Button>
        </Link>
        <Link to="/rock">
          <Button testID="rock" click={() => {}}>Rock</Button>
        </Link>
        <Link to="/bollywood">
          <Button testID="bollywood" click={() => {}}>Bollywood</Button>
        </Link>
        <Link to="/country">
          <Button testID="country" click={() => {}}>Country</Button>
        </Link>
      </div>
    );
  }
  return (<div>Loading ...</div>);
};
export default BrowseContainer;
