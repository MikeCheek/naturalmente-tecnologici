import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';
import ShowOnView from '../ShowOnView';
import howToReach, { MarinoBusInfo, mapsLink } from '../../../utilities/howToReach';
import Button from '../Button';
import useModalContext from '../../../utilities/useModalContext';

const Index = () => {
  const { setText } = useModalContext();

  return (
    <div className={styles.wrap}>
      <Heading text="Come raggiungerci" />
      {howToReach.map((option, key) => (
        <ShowOnView key={key} className={styles.content}>
          <option.svg width={140} fill="var(--nt-very-dark-green)" />
          <div className={styles.info}>
            <h3>{option.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: option.info }}></p>
            {option.locationCta ? <Button text="Vedi sulle mappe" title="Vedi sulle mappe" href={mapsLink} /> : <></>}
            {option.infoMarinoBus ? (
              <Button
                text="Guida sconto MarinoBus"
                title="Guida sconto MarinoBus"
                onClick={() => setText(MarinoBusInfo.title, MarinoBusInfo.subTitle, MarinoBusInfo.text)}
              />
            ) : (
              <></>
            )}
          </div>
        </ShowOnView>
      ))}
    </div>
  );
};

export default Index;
