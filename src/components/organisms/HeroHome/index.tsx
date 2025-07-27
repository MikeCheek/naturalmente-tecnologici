import React from 'react';

import * as styles from './index.module.scss';
import { ReactComponent as Colli } from '../../../assets/colli.svg';
import { ReactComponent as Collina } from '../../../assets/collina.svg';
import WindShovel from '../../atoms/WindShovel';
import { useTranslation } from 'react-i18next';
import Flower from '../../atoms/Flower';
import { useI18next } from 'gatsby-plugin-react-i18next';
// import BoscoCoste from '../../../assets/video/webm/bosco_coste_forward.webm';
import Aftermovie from '../../../assets/video/webm/aftermovie.webm';
import Player from 'react-player/lazy';
import { ReactComponent as NT24 } from '../../../assets/nt24.svg';
import { StaticImage } from 'gatsby-plugin-image';

const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const PlaceHolder = (
    <StaticImage
      layout="constrained"
      src="../../../images/aftermovie_placeholder.png"
      className={styles.backgroundVideo}
      alt="Aftermovie"
      placeholder='blurred'
    // width={150}
    />
  )

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

      <Player
        fallback={PlaceHolder}
        url={Aftermovie}
        muted
        autoPlay
        playing
        controls={false}
        loop
        playsInline
        className={styles.backgroundVideo}
      />
      {/* <BigBranch width="555" height="282" className={styles.bigBranch} /> */}
      <div className={styles.headWrap}>
        <a
          href="https://syskracklab.cc/desidera-il-manifesto-di-naturalmente-tecnologici/"
          target="_blank"
          rel="noopener noreferrer"
          title='Desidera - Il Manifesto di Naturalmente Tecnologici'
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
