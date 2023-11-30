import React from 'react';

import * as styles from './index.module.scss';
import BigBranch from '../../../assets/big-branch.svg';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina.svg';
import Flower from '../../atoms/Flower';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <BigBranch width="555" height="282" className={styles.bigBranch} />
      <div className={styles.headWrap}>
        <a className={styles.date} href="#quando-e-dove" title={t('WhenWhere')}>
          Bosco Coste, Grottole(MT)
          <br /> {t('Date')}
        </a>
        <h1 className={styles.heading}>
          {t('Title')} <br />
          {t('Subtitle')}
        </h1>
        <div className={styles.orangeFlowers}>
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
          <Flower color="var(--nt-orange)" />
        </div>
        <Colli width="1440" height="185" className={styles.colli} />
        <div className={styles.white}></div>
      </div>
      <div className={styles.wrapHill}>
        <div className={styles.greenFlowers}>
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
          <Flower color="var(--nt-green)" />
        </div>
        <Collina width="1440" height="64" className={styles.collina} />
        <div className={styles.green}></div>
      </div>
    </div>
  );
};

export default Index;
