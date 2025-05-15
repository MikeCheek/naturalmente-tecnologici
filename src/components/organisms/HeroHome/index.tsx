import React from 'react';

import * as styles from './index.module.scss';
import { ReactComponent as Colli } from '../../../assets/colli.svg';
import { ReactComponent as Collina } from '../../../assets/collina.svg';
import WindShovel from '../../atoms/WindShovel';
import { useTranslation } from 'react-i18next';
import Flower from '../../atoms/Flower';
import { useI18next } from 'gatsby-plugin-react-i18next';
import BoscoCoste from '../../../assets/video/webm/bosco_coste_forward.webm';


const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <div className={styles.wrap}>
      <video
        className={styles.backgroundVideo}
        src={BoscoCoste}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* <BigBranch width="555" height="282" className={styles.bigBranch} /> */}
      <div className={styles.headWrap}>
        <h1 className={language === 'en' ? styles.headingEn : styles.heading}>
          {t('Title')} <br />
          {t('Subtitle')}
        </h1>
        <a className={styles.date} href="#quando-e-dove" title={t('WhenWhere')}>
          Bosco Coste, Grottole(MT)
          <br /> <span>{t('Date')}</span>
        </a>
        <div className={styles.windShovels}>
          <div className={styles.firstWind}>
            <WindShovel color="var(--nt-orange)" />
          </div>
          <div
          // className={styles.secondWind}
          >
            <WindShovel color="var(--nt-orange)" slower />
          </div>
        </div>
        <Colli width="1440" className={styles.colli} />
        <div className={styles.subGreen}></div>
      </div>
    </div>
  );
};

export default Index;
