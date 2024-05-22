import React from 'react';

import * as styles from './index.module.scss';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina.svg';
import Flower from '../../atoms/Flower';
import Speaking from '../../../assets/speaking.svg';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <h1 className={language === 'en' ? styles.headingEn : styles.heading}>
          {t('Title')}
          <br />
          {t('Subtitle')}
        </h1>
        <Speaking width={600} className={styles.speaking} fill="var(--nt-dark-green)" />
        <div className={styles.svgWrap}>
          <div className={styles.collinaWrap}>
            <Collina width="1440" className={styles.collina} />
            <div className={styles.white}></div>
          </div>

          <div className={styles.greenFlowers}>
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
          </div>
          <Colli width="1440" height="185" className={styles.colli} fill="var(--nt-green)" />
          <div className={styles.green}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
