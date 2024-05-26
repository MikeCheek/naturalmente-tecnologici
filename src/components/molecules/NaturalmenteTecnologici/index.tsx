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
            <svg viewBox="-5 -5 364.5 84.701" preserveAspectRatio="none" clipPathUnits="objectBoundingBox">
              <defs>
                <clipPath id="clip-00">
                  <path d="M 91.3 32.601 L 75.5 32.601 L 73.5 42.101 L 84.5 42.101 L 84.5 62.301 L 69.1 62.301 L 66.5 74.701 L 45.9 74.701 L 48.5 62.301 L 34.6 62.301 L 32 74.701 L 11.5 74.701 L 14.1 62.301 L 0 62.301 L 0 42.101 L 18.5 42.101 L 20.5 32.601 L 6.8 32.601 L 6.8 12.401 L 24.8 12.401 L 27.3 0.701 L 47.8 0.701 L 45.3 12.401 L 59.2 12.401 L 61.7 0.701 L 82.3 0.701 L 79.8 12.401 L 91.3 12.401 L 91.3 32.601 Z M 165.2 3.901 L 165.2 74.701 L 143 74.701 L 119.5 39.101 L 119.5 74.701 L 97.3 74.701 L 97.3 3.901 L 119.5 3.901 L 143 40.101 L 143 3.901 L 165.2 3.901 Z M 255.8 26.901 L 234.3 26.901 A 40.297 40.297 0 0 1 235.01 20.39 Q 235.726 16.768 237.138 13.812 A 22.329 22.329 0 0 1 238.35 11.601 A 23.686 23.686 0 0 1 243.997 5.288 A 21.941 21.941 0 0 1 248.1 2.801 A 30.16 30.16 0 0 1 259.079 0.069 A 35.659 35.659 0 0 1 261.3 0.001 A 42.211 42.211 0 0 1 268.128 0.515 Q 271.732 1.107 274.577 2.382 A 17.437 17.437 0 0 1 280.05 6.151 A 20.908 20.908 0 0 1 285.824 18.703 A 28.34 28.34 0 0 1 286 21.901 A 31.032 31.032 0 0 1 280.884 38.9 A 38.718 38.718 0 0 1 279.55 40.851 Q 273.1 49.701 263.4 55.801 L 286.3 55.801 L 286.3 73.701 L 234.6 73.701 L 234.6 57.001 A 248.644 248.644 0 0 0 243.508 50.052 Q 247.612 46.688 250.988 43.565 A 111.131 111.131 0 0 0 255.8 38.851 Q 260.425 34.019 262.307 29.556 A 15.272 15.272 0 0 0 263.6 23.601 A 8.806 8.806 0 0 0 263.492 22.176 Q 263.264 20.784 262.55 19.901 Q 261.5 18.601 259.8 18.601 A 3.258 3.258 0 0 0 257.194 19.852 A 5.263 5.263 0 0 0 256.65 20.651 Q 255.5 22.701 255.8 26.901 Z M 171.2 3.901 L 230.8 3.901 L 230.8 21.501 L 212 21.501 L 212 74.701 L 189.8 74.701 L 189.8 21.501 L 171.2 21.501 L 171.2 3.901 Z M 324.9 63.701 L 293.6 63.701 L 293.6 45.201 L 323.4 2.701 L 347.3 2.701 L 347.3 44.501 L 354.5 44.501 L 354.5 63.701 L 347.3 63.701 L 347.3 74.701 L 324.9 74.701 L 324.9 63.701 Z M 52.9 42.101 L 54.9 32.601 L 41 32.601 L 39 42.101 L 52.9 42.101 Z M 326.7 44.501 L 326.7 28.001 L 315.9 44.501 L 326.7 44.501 Z" />
                </clipPath>
              </defs>
              <foreignObject clipPath="url(#clip-00)" width="100%" height="100%">
                <video
                  className={styles.video}
                  height={500}
                  muted
                  autoPlay
                  controls={false}
                  loop
                  playsInline
                  poster="/images/bosco-1-low.JPG"
                >
                  <source src={BoscoCoste} type="video/mp4" />
                  Your browser doesn't support video tag
                </video>
              </foreignObject>
            </svg>
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
