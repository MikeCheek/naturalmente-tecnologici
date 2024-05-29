import React, { useEffect, useState } from 'react';
import Heading from '../../atoms/Heading';
import * as styles from './index.module.scss';
// import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../SectionImageCTA';
import ShowOnView from '../../atoms/ShowOnView';
import Button from '../../atoms/Button';
import BoscoCoste from '../../../assets/video/bosco_coste_backward.mp4';
import BoscoCoste1 from '../../../assets/video/pala_eolica.mp4';
import { useTranslation } from 'react-i18next';
import LocationMap from '../../atoms/LocationMap';
import Badge from '../../atoms/Badge';
import { services } from '../../../utilities/location';

const Index = () => {
  const { t } = useTranslation();
  const [loadVideo, setLoadVideo] = useState<boolean>(false);

  useEffect(() => {
    setLoadVideo(true);
  }, []);

  return (
    <div className={styles.whenAndWhere}>
      <Heading text={t('WhenWhere')} simple />
      <ShowOnView className={styles.wrapMap}>
        <span>
          <h3>Bosco Coste, Grottole (MT)</h3>
          <p>{t('Date')}</p>
          {/* <p className={styles.locDesc} dangerouslySetInnerHTML={{ __html: t('LocationDescription') }}></p> */}
        </span>
        <LocationMap />
      </ShowOnView>
      <div className={styles.services}>
        {services.map((s, key) => (
          <Badge key={key} name={s} on />
        ))}
      </div>
      {/* <ShowOnView>
        <h4 dangerouslySetInnerHTML={{ __html: t('WhereLocation') }}></h4>
        <Button text={t('HowToReach')} title={t('HowToReach')} href="/info/#come-raggiungerci" internal />
      </ShowOnView> */}
      <SectionImageCTA
        text={t('LocationText1')}
        // buttonText={t('LocationCta')}
        // buttonHref={mapsLink}
        imageOrVideo={
          <video height={500} muted autoPlay controls={false} loop playsInline>
            {loadVideo ? <source src={BoscoCoste} type="video/mp4" /> : <></>}
            Your browser doesn't support video tag
          </video>
        }
      />
      <SectionImageCTA
        text={t('LocationText2')}
        // buttonText={t('LocationCta')}
        // buttonHref={mapsLink}
        imageOrVideo={
          <video height={500} muted autoPlay controls={false} loop playsInline>
            {loadVideo ? <source src={BoscoCoste1} type="video/mp4" /> : <></>}
            Your browser doesn't support video tag
          </video>
          // <StaticImage
          //   quality={80}
          //   alt="Bosco coste"
          //   src="../../../images/location/bosco-2.JPG"
          //   layout="constrained"
          //   width={700}
          //   height={500}
          // />
        }
        reversed
      />
    </div>
  );
};

export default Index;
