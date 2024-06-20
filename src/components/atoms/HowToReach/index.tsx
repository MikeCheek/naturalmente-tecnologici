import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';
import ShowOnView from '../ShowOnView';
import { mapsLink } from '../../../utilities/howToReach';
import Button from '../Button';
import useModalContext from '../../../utilities/useModalContext';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Car } from '../../../assets/infoUtili/car.svg';
import { ReactComponent as Bus } from '../../../assets/infoUtili/bus.svg';
import { ReactComponent as Plane } from '../../../assets/infoUtili/plane.svg';

// <br/>MARINOBUS è Mobility Partner di Naturalmente Tecnologici e acquistando un biglietto per il festival hai diritto a uno sconto del 10% sulla tratta di andata e ritorno.<br/>Inserisci il codice che trovi nella guida qui sotto in fase di acquisto.
// <br/>MARINOBUS is a Mobility Partner of Naturalmente Tecnologici, and by purchasing a ticket for the festival, you are entitled to a 10% discount on the round trip.<br/>Enter the code found in the guide below during the purchase process.

const Index = () => {
  // const { setText } = useModalContext();
  const { t } = useTranslation();

  const howToReach = [
    {
      name: t('HowToReachName1'),
      svg: Car,
      info: t('HowToReachInfo1'),
      locationCta: true,
    },
    {
      name: t('HowToReachName2'),
      svg: Bus,
      info: t('HowToReachInfo2'),
      infoMarinoBus: false,
    },
    {
      name: t('HowToReachName3'),
      svg: Plane,
      info: t('HowToReachInfo3'),
    },
  ];

  return (
    <div className={styles.wrap}>
      <Heading text={t('Heading1')} />
      {howToReach.map((option, key) => (
        <ShowOnView key={key} className={styles.content}>
          <option.svg width={140} fill="var(--nt-very-dark-green)" />
          <div className={styles.info}>
            <h3>{option.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: option.info }}></p>
            {option.locationCta ? <Button text={t('MapCta')} title={t('MapCta')} href={mapsLink} /> : <></>}
            {/* {option.infoMarinoBus ? (
              <Button
                text={t('MarinobusCta')}
                title={t('MarinobusCta')}
                onClick={() => setText(MarinoBusInfo.title, MarinoBusInfo.subTitle, MarinoBusInfo.text)}
              />
            ) : (
              <></>
            )} */}
          </div>
        </ShowOnView>
      ))}
    </div>
  );
};

export default Index;
