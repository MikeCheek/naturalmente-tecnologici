import React from 'react';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../SectionImageCTA';
import Heading from '../../atoms/Heading';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const image0 = (
    <StaticImage
      quality={60}
      alt="Syskrack 1"
      src="../../../images/syskrack/camp0.jpg"
      layout="constrained"
      width={700}
      height={500}
    />
  );
  const image1 = (
    <StaticImage
      quality={60}
      alt="Syskrack 2"
      src="../../../images/syskrack/camp1.jpg"
      layout="constrained"
      width={700}
      height={500}
    />
  );

  return (
    <>
      <div className={styles.heading}>
        <Heading text={t('SysHeading')} />
      </div>
      <SectionImageCTA
        title={t('SysTitle1')}
        text={t('SysText1')}
        buttonHref="https://syskrack.org"
        buttonText={t('SysCta1')}
        imageOrVideo={image0}
      />
      <SectionImageCTA
        title={t('SysTitle2')}
        text={t('SysText2')}
        buttonHref="https://syskrack.org"
        buttonText={t('SysCta2')}
        imageOrVideo={image1}
        reversed
      />
    </>
  );
};

export default Index;
