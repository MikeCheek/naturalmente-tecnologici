import React from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { info, DefaultTicketProps } from '../../../utilities/tickets';
import ShowOnView from '../../atoms/ShowOnView';
import Info from '../../../assets/info.svg';
import useModalContext from '../../../utilities/useModalContext';

const Index = () => {
  const { setText } = useModalContext();

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
      <Heading text="RISERVA IL TUO BIGLIETTO <br/>PER L'EVENTO" id="biglietti" />
      <div className={styles.cards}>
        {tickets.map((ticket, key) => {
          return (
            <CardAction
              key={key}
              glowing={key == 0}
              primary={key == 0}
              icon={<ticket.icon className={styles.icon} width={70} />}
              // text={`<span class='cuttedText'>${ticket.price}€</span><br/>${ticket.price - discount}€`}
              text={ticket.name[0]}
              description={ticket.name[1]}
              buttonText="PARTECIPA"
              buttonHref={DefaultTicketProps.url}
              tag={ticket.offer ? 'EARLY BIRD' : undefined}
              Info={Info}
              infoClick={() =>
                setText(ticket.name.join('<br/>'), `${ticket.price.toFixed(2)} €`, ticket.description, ticket.badges)
              }
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
