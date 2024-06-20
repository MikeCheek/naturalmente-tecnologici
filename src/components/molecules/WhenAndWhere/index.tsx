import React, { useEffect, useState } from 'react';
import Heading from '../../atoms/Heading';
import * as styles from './index.module.scss';
// import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../SectionImageCTA';
import ShowOnView from '../../atoms/ShowOnView';
import Button from '../../atoms/Button';
import { useTranslation } from 'react-i18next';
import LocationMap from '../../atoms/LocationMap';
import Badge from '../../atoms/Badge';
import { servicesEN, servicesIT } from '../../../utilities/location';
import { mapsLink } from '../../../utilities/howToReach';
import { StaticImage } from 'gatsby-plugin-image';
import Player from 'react-player/lazy';
import Bench from '../../../assets/video/webm/big_bench.webm';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const services = language == 'it' ? servicesIT : servicesEN;

  return (
    <div className={styles.whenAndWhere}>
      <Heading text={t('WhenWhere')} simple />
      <ShowOnView className={styles.wrapMap}>
        <span>
          <h3>Bosco Coste, Grottole (MT)</h3>
          <p>{t('Date')}</p>
        </span>
        <LocationMap />
      </ShowOnView>
      <ShowOnView className={styles.services}>
        {services.map((s, key) => (
          <Badge key={key} name={s} on />
        ))}
      </ShowOnView>
      {/* <ShowOnView>
        <h4 dangerouslySetInnerHTML={{ __html: t('WhereLocation') }}></h4>
        <Button text={t('HowToReach')} title={t('HowToReach')} href="/info/#come-raggiungerci" internal />
      </ShowOnView> */}
      <SectionImageCTA
        text={t('LocationText1')}
        buttonText={t('LocationCta')}
        buttonHref={mapsLink}
        imageOrVideo={
          // <video height={500} muted autoPlay controls={false} loop playsInline>
          //   {loadVideo ? <source src={BoscoCoste} type="video/mp4" /> : <></>}
          //   Your browser doesn't support video tag
          // </video>
          <StaticImage
            quality={80}
            alt="Bosco coste"
            src="../../../images/location/bosco-coste.jpg"
            layout="constrained"
            width={700}
            height={500}
          />
        }
      />
      {/* <SectionImageCTA
        text={t('LocationText2')}
        buttonText={t('LocationCta')}
        buttonHref={mapsLink}
        imageOrVideo={
          // <video height={500} muted autoPlay controls={false} loop playsInline>
          //   {loadVideo ? <source src={BoscoCoste1} type="video/mp4" /> : <></>}
          //   Your browser doesn't support video tag
          // </video>
          <StaticImage
            quality={80}
            alt="Bosco coste"
            src="../../../images/location/bosco-2.JPG"
            layout="constrained"
            width={700}
            height={500}
          />
        }
        reversed
      /> */}
      <Heading text={t('BigBench')} simple marginTop />
      <SectionImageCTA
        text={t('LocationText3')}
        buttonText={t('LocationCta')}
        buttonHref={mapsLink}
        imageOrVideo={<Player width={700} url={Bench} muted autoPlay playing controls={false} loop playsInline />}
        reversed
      />
    </div>
  );
};

export default Index;
