import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';
import ShowOnView from '../ShowOnView';
import howToReach, { mapsLink } from '../../../utilities/howToReach';
import Button from '../Button';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="Come raggiungerci" />
      {howToReach.map((option, key) => (
        <ShowOnView key={key} className={styles.content}>
          <option.svg width={100} fill="var(--nt-very-dark-green)" />
          <div className={styles.info}>
            <h3>{option.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: option.info }}></p>
            {option.locationCta ? <Button text="Vedi sulle mappe" title="Vedi sulle mappe" href={mapsLink} /> : <></>}
          </div>
        </ShowOnView>
      ))}
    </div>
  );
};

export default Index;
