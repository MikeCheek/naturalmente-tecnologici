import React from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Ticket from '../../../assets/ticket-1.svg';
import Tickets from '../../../assets/ticket-2.svg';
import Vip from '../../../assets/vip.svg';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="ACQUISTA IL TUO BIGLIETTO<br/> PER L'EVENTO" />
      <div className={styles.cards}>
        <CardAction
          icon={<Ticket className={styles.icon} width={70} />}
          text="<span class='cuttedText'>80€</span><br/>70€"
          description="1 giorno"
          buttonText="ACQUISTA"
          buttonHref="#footer"
        />
        <CardAction
          icon={<Tickets className={styles.icon} width={70} />}
          text="<span class='cuttedText'>100€</span><br/>90€"
          description="2 giorni"
          buttonText="ACQUISTA"
          buttonHref=""
        />
        <CardAction
          icon={<Vip className={styles.icon} width={70} />}
          text="<span class='cuttedText'>120€</span><br/>110€"
          description="3 giorni + camping"
          buttonText="ACQUISTA"
          buttonHref=""
        />
      </div>
      <div className={styles.timerWrap}>
        <h3>Affrettati! L'offerta scade tra</h3>
        <Timer date={new Date('May 11, 2023 00:00:00')} shutOffTimer={() => {}} />
      </div>
    </div>
  );
};

export default Index;
