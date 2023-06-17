import React from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { info, DefaultTicketProps } from '../../../utilities/tickets';
import ShowOnView from '../../atoms/ShowOnView';

const Index = () => {
  const tickets = info
    .map((value) => ({
      ...value,
      name: value.name.match(/- Early Bird/i) ? value.name.replace('- Early Bird', '') : value.name,
      offer: value.name.match(/- Early Bird/) ? true : false,
    }))
    .map((value) => ({
      ...value,
      name: value.name.replace(')', '').split('('),
    }));

  return (
    <div className={styles.wrap}>
      <Heading text="RISERVA IL TUO BIGLIETTO <br/>PER L'EVENTO" />
      <div className={styles.cards}>
        {tickets.map((ticket, key) => {
          return (
            <CardAction
              key={key}
              icon={<ticket.icon className={styles.icon} width={70} />}
              // text={`<span class='cuttedText'>${ticket.price}€</span><br/>${ticket.price - discount}€`}
              text={`${ticket.price.toFixed(2)} €`}
              description={ticket.name.join('<br/>')}
              buttonText="PARTECIPA"
              buttonHref={DefaultTicketProps.url}
              tag={ticket.offer ? 'EARLY BIRD' : undefined}
            />
          );
        })}
      </div>
      <ShowOnView className={styles.timerWrap}>
        <h3>Affrettati! L'offerta scade tra</h3>
        <Timer date={new Date(info[0].availabilityEnds)} shutOffTimer={() => {}} />
      </ShowOnView>
    </div>
  );
};

export default Index;
