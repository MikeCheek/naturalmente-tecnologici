import React from 'react';

import * as styles from './index.module.scss';
import Colli from '../../../assets/colli.svg';
import Collina from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';
import SearchPeople from '../../../assets/search-people.svg';
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
        <SearchPeople width={300} className={styles.svg} fill="var(--nt-dark-green)" />
        <div className={styles.svgWrap}>
          <div className={styles.colliWrap}>
            <Colli width="1440" className={styles.colli} />
            <div className={styles.white}></div>
          </div>
          <div className={styles.greenFlowers}>
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
            <Flower color="var(--nt-green)" />
          </div>
          <Collina width="1440" height="129" className={styles.collina} fill="var(--nt-green)" />
          <div className={styles.green}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
