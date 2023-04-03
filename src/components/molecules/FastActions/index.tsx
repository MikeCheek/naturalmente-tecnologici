import React from 'react';
import CardAction from '../../atoms/CardAction';
import Phone from '../../../assets/phone.svg';
import Location from '../../../assets/location.svg';
import Heart from '../../../assets/heart.svg';
import * as styles from './index.module.scss';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.cards}>
        <CardAction
          icon={<Phone className={styles.icon} width={70} />}
          text="Vuoi saperne di più?"
          buttonText="CONTATTACI"
          buttonHref=""
        />
        <CardAction
          icon={<Location className={styles.icon} width={70} />}
          text="Partecipa anche tu!"
          buttonText="ISCRIVITI"
          buttonHref=""
        />
        <CardAction
          icon={<Heart className={styles.icon} width={70} />}
          text="Supporta l'evento"
          buttonText="DONA"
          buttonHref=""
        />
      </div>
    </div>
  );
};

export default Index;
