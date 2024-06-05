import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import { ReactComponent as Insect } from '../../../assets/insect.svg';
import LoadingProps from './index.types';

const Index = ({ noTitle = false }: LoadingProps) => {
  return (
    <div className={styles.wrap} style={noTitle ? { height: 'fit-content' } : {}}>
      {noTitle ? <></> : <Heading text="Loading" />}
      <div className={styles.insects}>
        <div className={styles.insectWrap} style={{ top: '50%', left: '50%' }}>
          <div style={{ transform: 'rotate(40deg)' }}>
            <Insect width={60} height={60} />
          </div>
        </div>
        <div className={styles.insectWrap} style={{ top: '50%', left: '50%', animationDelay: '1s' }}>
          <div style={{ transform: 'rotate(40deg)' }}>
            <Insect width={60} height={60} style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
