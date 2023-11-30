import React from 'react';

import * as styles from './index.module.scss';
import Collina from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';
import Handshake from '../../../assets/handshake.svg';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <h1 className={styles.heading}>
          {t('Title')} <br />
          {t('Subtitle')}
        </h1>
        <Handshake width={600} className={styles.svg} fill="var(--nt-dark-green)" />
      </div>
      <div className={styles.orangeFlowers}>
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
        <Flower color="var(--nt-orange)" />
      </div>
      <Collina width="1440" height="129" className={styles.collina} />
      <div className={styles.white}></div>
    </div>
  );
};

export default Index;
