import React from 'react';

import * as styles from './index.module.scss';
import { ReactComponent as Collina } from '../../../assets/collina-lato.svg';
import Flower from '../../atoms/Flower';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  return (
    <div className={styles.wrap}>
      <div className={styles.headWrap}>
        <span>
          <Link className={styles.date} to="/#quando-e-dove" title="Quando e dove">
            Bosco Coste, Grottole(MT)
            <br /> 07 &gt; 10 Agosto 2025
          </Link>
          <h1 className={language === 'en' ? styles.headingEn : styles.heading}>
            {t('Title')} <br />
            {t('Subtitle')}
          </h1>
        </span>
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
