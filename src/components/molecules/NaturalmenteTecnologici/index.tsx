import React from 'react';

import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Bug from '../../../assets/bug.svg';
import Insects from '../../../assets/insects.svg';
import Section from '../Section';
import SingleSection from '../../atoms/SingleSection';
import HeardOn from '../../atoms/HeardOn';
import WhenAndWhere from '../WhenAndWhere';
import { useTranslation } from 'react-i18next';
import Twitch from '../../../assets/twitch.svg';
import VerticalSectionImage from '../../atoms/VerticalSectionImage';
import { StaticImage } from 'gatsby-plugin-image';
import CardImage from '../../atoms/CardImage';
import ShowOnView from '../../atoms/ShowOnView';
import BigPictureSection from '../../atoms/BigPictureSection';
import { images as ntImages } from '../../../utilities/ntPhotos';
import Banner from '../../atoms/Banner';
import BoscoCoste from '../../../assets/bosco_coste_low.mp4';
import Shorty from '../../../assets/video/shorty_10s.mp4';
import Moddilugitrix from '../../../assets/video/moddilugitrix_10s.mp4';
import Baldini from '../../../assets/video/baldini_10s.mp4';
import Millenium from '../../../assets/video/millenium_10s.mp4';
import Transplay from '../../../assets/video/transplay_10s.mp4';

const Index = () => {
  const { t } = useTranslation();
  const { music, activities, nature } = ntImages();

  const whatIs = [
    {
      name: t('WhatIsName1'),
      text: t('WhatIsText1'),
      big: true,
    },
    // {
    //   name: t('WhatIsName2'),
    //   text: t('WhatIsText2'),
    //   eventbrite: true,
    // },
    // {
    //   name: t('WhatIsName3'),
    //   text: t('WhatIsText3'),
    //   eventbrite: true,
    // },
    // {
    //   name: t('WhatIsName4'),
    //   text: t('WhatIsText4'),
    //   big: true,
    // },
  ];

  const info = [
    {
      title: t('InfoTitle1'),
      text: t('InfoText1'),
      svgStyle: { transform: 'rotate(94.72deg)' },
      // cta: 'ASSICURATI IL PASS',
      // ctaLink: '#biglietti',
    },
    {
      title: t('InfoTitle2'),
      text: t('InfoText2'),
      // cta: 'RISERVA IL TUO POSTO',
      // ctaLink: '#biglietti',
    },
    {
      title: t('InfoTitle3'),
      text: t('InfoText3'),
      // cta: 'PRENDINE PARTE',
      // ctaLink: '#biglietti',
      // svgStyle: { transform: 'rotateY(180deg)' },
    },
    {
      title: t('InfoTitle4'),
      text: t('InfoText4'),
      svgStyle: { transform: 'rotate(94.72deg)' },
      cta: t('InfoCta4'),
      ctaLink: '/contattaci',
      ctaInternal: true,
    },
    {
      title: t('InfoTitle5'),
      text: t('InfoText5'),
      cta: t('InfoCta5'),
      ctaLink: 'https://www.twitch.tv/syskracktv',
      ctaInternal: false,
      ctaIcon: Twitch,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.singleSectionsWrap}>
        <ShowOnView className={styles.singleSections}>
          <Heading text={t('EventTitle')} smaller={false} simple showOnView={false} />
          <div className={styles.videoWrap}>
            <video height={500} muted autoPlay controls={false} loop playsInline poster="/images/bosco-1-low.JPG">
              <source src={BoscoCoste} type="video/mp4" />
              Your browser doesn't support video tag
            </video>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t('EventDescription') }}></p>
        </ShowOnView>
        <BigPictureSection
          images={music}
          videos={[Shorty, Moddilugitrix, Baldini, Millenium]}
          title={t('Value1')}
          text={t('ValueText1')}
        />
        <BigPictureSection images={activities} title={t('Value2')} text={t('ValueText2')} reverse />
        <BigPictureSection images={nature} videos={[Transplay]} title={t('Value3')} text={t('ValueText3')} />
        {/* {whatIs.map((item, key) => (
          <div className={styles.singleSections} style={item.big ? {} : { maxWidth: '500px' }} key={key}>
            <Heading text={item.name} smaller={key != 0} />
            <SingleSection>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </SingleSection>
          </div>
        ))} */}
      </div>
      <HeardOn />

      <WhenAndWhere />
      {/* <Heading text={t('WhatHeading')} />
      {info.map((item, key) => {
        return (
          <Section
            title={item.title}
            text={item.text}
            reversed={key % 2 == 1}
            key={key}
            Svg={key % 2 == 0 ? Bug : Insects}
            svgStyle={item.svgStyle}
            buttonHref={item.ctaLink}
            buttonTitle={item.cta}
            buttonInternal={item.ctaInternal}
            ButtonIcon={item.ctaIcon}
          />
        );
      })} */}
    </div>
  );
};

export default Index;
