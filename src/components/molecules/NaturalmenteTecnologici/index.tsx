import React from 'react';

import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Bug from '../../../assets/bug.svg';
import Insects from '../../../assets/insects.svg';
import Section from '../Section';
import SingleSection from '../../atoms/SingleSection';
import HeardOn from '../../atoms/HeardOn';
import WhenAndWhere from '../../atoms/WhenAndWhere';
import { useTranslation } from 'react-i18next';
import Twitch from '../../../assets/twitch.svg';

const Index = () => {
  const { t } = useTranslation();

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
    {
      name: t('WhatIsName4'),
      text: t('WhatIsText4'),
      big: true,
    },
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
    },
    {
      title: t('InfoTitle5'),
      text: t('InfoText5'),
      cta: t('InfoCta5'),
      ctaLink: 'https://www.twitch.tv/syskracktv',
      ctaIcon: Twitch,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.singleSectionsWrap}>
        {whatIs.map((item, key) => (
          <div className={styles.singleSections} style={item.big ? {} : { maxWidth: '500px' }} key={key}>
            <Heading text={item.name} smaller={key != 0} />
            <SingleSection>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </SingleSection>
          </div>
        ))}
      </div>
      <HeardOn />
      <WhenAndWhere />
      <Heading text={t('WhatHeading')} />
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
            ButtonIcon={item.ctaIcon}
          />
        );
      })}
    </div>
  );
};

export default Index;
