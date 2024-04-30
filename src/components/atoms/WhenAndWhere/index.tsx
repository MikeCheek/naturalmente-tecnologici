import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';
// import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../../molecules/SectionImageCTA';
import ShowOnView from '../ShowOnView';
import Button from '../Button';
import { coords, mapsLink } from '../../../utilities/howToReach';
import BoscoCoste from '../../../assets/bosco_coste_low.mp4';
import BoscoCoste1 from '../../../assets/bosco_coste_1_low.mp4';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.whenAndWhere}>
      <Heading text={t('WhenWhere')} simple />
      <ShowOnView>
        <h3>
          Bosco Coste, Grottole (MT)
          <br />
          <span></span>
          {t('Date')}
          {/* <br />
          <br />
          <a rel="noopener noreferrer" target="_blank" title="Scopri la location" href={mapsLink}>
            @ Bosco Le Coste
            <b>
              <span>{coords[0]}</span> <span>{coords[1]}</span>
            </b>
          </a> */}
        </h3>
      </ShowOnView>
      {/* <ShowOnView>
        <h4 dangerouslySetInnerHTML={{ __html: t('WhereLocation') }}></h4>
        <Button text={t('HowToReach')} title={t('HowToReach')} href="/info/#come-raggiungerci" internal />
      </ShowOnView> */}
      <SectionImageCTA
        text={t('LocationText1')}
        // buttonText={t('LocationCta')}
        // buttonHref={mapsLink}
        imageOrVideo={
          <video height={500} muted autoPlay controls={false} loop playsInline poster="/images/bosco-1-low.JPG">
            <source src={BoscoCoste} type="video/mp4" />
            Your browser doesn't support video tag
          </video>
        }
      />
      <SectionImageCTA
        text={t('LocationText2')}
        // buttonText={t('LocationCta')}
        // buttonHref={mapsLink}
        imageOrVideo={
          <video height={500} muted autoPlay controls={false} loop playsInline poster="/images/bosco-2-low.JPG">
            <source src={BoscoCoste1} type="video/mp4" />
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
