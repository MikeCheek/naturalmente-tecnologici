import React from 'react';

import * as styles from './index.module.scss';
import { ReactComponent as Colli } from '../../../assets/colli.svg';
import WindShovel from '../../atoms/WindShovel';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Aftermovie from '../../../assets/video/webm/aftermovie.webm';

const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <div className={styles.wrap}>
      {/* <video
        className={styles.backgroundVideo}
        src={Aftermovie}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      /> */}

      <video
        src={Aftermovie}
        className={styles.backgroundVideo}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        poster="/images/aftermovie_placeholder.png"
      />
      {/* <BigBranch width="555" height="282" className={styles.bigBranch} /> */}
      <div className={styles.headWrap}>
        <a
          href="https://syskracklab.cc/desidera-il-manifesto-di-naturalmente-tecnologici/"
          target="_blank"
          rel="noopener noreferrer"
          title='COMUNITÀ - Il Manifesto di Naturalmente Tecnologici'
        >
          <h1 className={language === 'en' ? styles.headingEn : styles.heading}>
            {t('Title')} <br />
            {t('Subtitle')}
          </h1>
        </a>
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
