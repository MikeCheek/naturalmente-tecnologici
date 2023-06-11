import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Insect from '../../../assets/insect.svg';
import LoadingProps from './index.types';

const Index = ({ noTitle = false }: LoadingProps) => {
  return (
    <div className={styles.wrap} style={noTitle ? { height: 'fit-content' } : {}}>
      {noTitle ? <></> : <Heading text="Loading" />}
      <div className={styles.insects}>
        <Insect width={60} height={60} style={{ top: 0, left: '50%', transform: 'translateX(-50%) rotate(130deg)' }} />
        <Insect
          width={60}
          height={60}
          style={{ bottom: 0, left: '50%', transform: 'translateX(-50%) rotate(310deg)' }}
        />
      </div>
    </div>
  );
};

export default Index;
