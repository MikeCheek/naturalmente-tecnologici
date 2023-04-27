import React from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Ticket from '../../../assets/ticket-1.svg';
import Tickets from '../../../assets/ticket-2.svg';
import Vip from '../../../assets/vip.svg';
import Timer from '../Timer';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <h2>ACQUISTA IL TUO BIGLIETTO PER L'EVENTO</h2>
      <div className={styles.cards}>
        <CardAction
          icon={<Ticket className={styles.icon} width={70} />}
          text="<s>80€</s><br/>70€"
          buttonText="ACQUISTA"
          buttonHref="#footer"
        />
        <CardAction
          icon={<Tickets className={styles.icon} width={70} />}
          text="<s>100€</s><br/>90€"
          buttonText="ACQUISTA"
          buttonHref=""
        />
        <CardAction
          icon={<Vip className={styles.icon} width={70} />}
          text="<s>120€</s><br/>110€"
          buttonText="ACQUISTA"
          buttonHref=""
        />
      </div>
      <h3>Affrettati! L'offerta scade tra</h3>
      <Timer date={new Date('May 11, 2023 00:00:00')} shutOffTimer={() => {}} />
    </div>
  );
};

export default Index;
