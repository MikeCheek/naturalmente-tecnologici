import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Insect from '../../../assets/insect.svg';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="Loading" />
      <div className={styles.insects}>
        <Insect width={40} height={40} style={{ top: 0, left: '50%', transform: 'translateX(-50%) rotate(130deg)' }} />
        <Insect
          width={40}
          height={40}
          style={{ bottom: 0, left: '50%', transform: 'translateX(-50%) rotate(310deg)' }}
        />
      </div>
    </div>
  );
};

export default Index;
