import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Conference from '../../../assets/reviews/conference.svg';
import Workshop from '../../../assets/reviews/workshop.svg';
import Camping from '../../../assets/reviews/camping.svg';
import Event from '../../../assets/reviews/event.svg';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import YoutubeEmbed from '../../atoms/YoutubeEmbed';
import ShowOnView from '../../atoms/ShowOnView';
import { useTranslation } from 'react-i18next';

// const data = [
//   {
//     topic: 'Conferenze',
//     rank: 8.5,
//     svg: Conference,
//   },
//   {
//     topic: 'Laboratori',
//     rank: 7.714,
//     svg: Workshop,
//   },
//   {
//     topic: 'Campeggio',
//     rank: 8,
//     svg: Camping,
//   },
//   {
//     topic: 'Evento',
//     rank: 8.375,
//     svg: Event,
//   },
// ];

const Index = () => {
  const { t } = useTranslation();

  // const [ref, inView, _entry] = useInView({
  //   threshold: 0.5,
  //   rootMargin: '10% 0px -20% 0px',
  //   fallbackInView: true,
  // });

  const conferences = {
    text: t('ConferencesText'),
    links: [
      {
        title: 'Conferenza inaugurale',
        speaker: ['Davide Saladino', 'Giuseppe Becci', 'Giuseppe Liuzzi'],
        id: 'qY5WQHgfI_Q',
      },
      {
        title: 'Immaginare nuovi orizzonti: Spopolamento, abitare digitale e abitare locale',
        speaker: 'Marina Berardi',
        id: 'hlDoIN_5b4Y',
      },
      {
        title: 'Mai più Jedi della tecnologia',
        speaker: 'Carlo Boccazzi Varotto',
        id: 'X0R_HVM6Ki4',
      },
      {
        title: 'Etnobotanica, la madre di tutte le scienze. Come imparare ad imparare dalla natura',
        speaker: 'Giacomo Castana',
        id: 'zr-9KAfZi5w',
      },
    ],
  };

  return (
    <>
      <Heading text={t('LastEditionHeading')} marginTop />
      <ShowOnView className={styles.conferencesWrap}>
        <h3 className={styles.subTitle}>{t('LastEditionTitle1')}</h3>
        <p className={styles.conferenceText} dangerouslySetInnerHTML={{ __html: conferences.text }}></p>
        <div className={styles.links}>
          {conferences.links.map((link, key) => (
            <div className={styles.linkWrap} key={key}>
              <em>“{link.title}„</em>
              {/* <Button text="Vai al video" title="Vai al video" href={link.link} /> */}
              <YoutubeEmbed id={link.id} />
            </div>
          ))}
        </div>
      </ShowOnView>
      {/* <ShowOnView>
        <h3 className={styles.subTitle}>{t("LastEditionTitle2")}</h3>
      </ShowOnView>
      <ShowOnView className={styles.wrapper}>
        <div ref={ref} className={styles.wrap}>
          {data.map((review, key) => (
            <div key={key} className={styles.review}>
              <CircularProgressbarWithChildren
                value={inView ? review.rank * 10 : 1}
                counterClockwise
                styles={buildStyles({
                  pathColor: `var(--nt-orange)`,
                  trailColor: 'var(--nt-transparent-orange)',
                  pathTransitionDuration: 2,
                })}
              >
                <review.svg className={styles.icon} height={40} fill="var(--nt-very-dark-green)" />
                <p className={styles.rank}>{review.rank.toFixed(1)}</p>
              </CircularProgressbarWithChildren>
              <p className={styles.topic}>{review.topic}</p>
            </div>
          ))}
        </div>
      </ShowOnView> */}
    </>
  );
};

export default Index;
