import React from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { info, DefaultTicketProps } from '../../../utilities/tickets';
import ShowOnView from '../../atoms/ShowOnView';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="ACQUISTA IL TUO BIGLIETTO <br/>PER L'EVENTO" />
      <div className={styles.cards}>
        {info.map((ticket, key) => {
          return (
            <CardAction
              key={key}
              icon={<ticket.icon className={styles.icon} width={70} />}
              // text={`<span class='cuttedText'>${ticket.price}€</span><br/>${ticket.price - discount}€`}
              text={`${ticket.price} €`}
              description={ticket.name.replace('- Early Bird', '')}
              buttonText="ACQUISTA"
              buttonHref={DefaultTicketProps.url}
              tag={'EARLY BIRD'}
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
