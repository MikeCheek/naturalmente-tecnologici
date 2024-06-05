import React, { useState } from 'react';
import { ReactComponent as Basilicata } from '../../../assets/basilicata.svg';
//import {ReactComponent as BasilicataPin} from '../../../assets/basilicataPin.svg';
import { ReactComponent as Location } from '../../../assets/location.svg';
import ShowOnView from '../ShowOnView';
import * as styles from './index.module.scss';
import { coords, mapsLink } from '../../../utilities/howToReach';

const Index = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ShowOnView className={styles.wrap} setInView={setShow} triggerOnce>
      <Location
        className={show ? styles.locationPinShow : styles.locationPin}
        width={40}
        height={40}
        fill="var(--nt-orange)"
      />
      <a rel="noopener noreferrer" target="_blank" title="Scopri la location" href={mapsLink}>
        <Basilicata className={styles.basilicata} width={580} height={580} />
      </a>
    </ShowOnView>
  );
};

export default Index;
