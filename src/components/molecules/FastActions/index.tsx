import React from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { discount, tickets } from '../../../utilities/tickets';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="ACQUISTA IL TUO BIGLIETTO <br/>PER L'EVENTO" />
      <div className={styles.cards}>
        {tickets.map((ticket, key) => {
          return (
            <CardAction
              key={key}
              icon={<ticket.icon className={styles.icon} width={70} />}
              text={`<span class='cuttedText'>${ticket.price}€</span><br/>${ticket.price - discount}€`}
              description={ticket.name}
              buttonText="ACQUISTA"
              buttonHref={ticket.url}
            />
          );
        })}
      </div>
      <div className={styles.timerWrap}>
        <h3>Affrettati! L'offerta scade tra</h3>
        <Timer date={new Date('May 11, 2023 00:00:00')} shutOffTimer={() => {}} />
      </div>
    </div>
  );
};

export default Index;
