import React, { useState } from 'react';
import * as styles from './index.module.scss';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { DefaultTicketProps, info, TICKETS_ENABLED, Ticket } from '../../../utilities/tickets';
import ShowOnView from '../../atoms/ShowOnView';
import useModalContext from '../../../utilities/useModalContext';
import { useTranslation } from 'react-i18next';
import TicketCardStandalone from './TicketCardStandalone';

const Index = () => {
  const { setText } = useModalContext();
  const { t } = useTranslation();

  const [timer, setTimer] = useState<boolean>(true);

  const tickets = info.map((value) => ({
    ...value,
    name: value.name.replace(')', '').split('('),
  })) as unknown as Array<Ticket & { name: string[] }>;

  const handleTicketInfo = (ticket: any) => {
    if (!TICKETS_ENABLED) return;

    const currentPrice = timer && ticket.priceDiscount ? ticket.priceDiscount : ticket.price;
    const priceText = Array.isArray(currentPrice)
      ? currentPrice.map((t) => t.toFixed(2) + DefaultTicketProps.priceSymbol).join(' / ')
      : currentPrice.toFixed(2) + DefaultTicketProps.priceSymbol;

    setText(
      ticket.name.join('<br/>'),
      priceText,
      ticket.description,
      ticket.date ? [ticket.date, ...(ticket.badges ?? [])] : ticket.badges
    );
  };

  return (
    <div className={styles.wrap}>
      <Heading text={t('TicketsTitle')} id="biglietti" simple />
      
      <div className={styles.cards}>
        {tickets.map((ticket, key) => (
          <TicketCardStandalone
            key={key}
            ticket={ticket}
            hasTimer={timer}
            isDisabled={!TICKETS_ENABLED}
            onInfoClick={handleTicketInfo}
          />
        ))}
      </div>

      {timer ? (
        <ShowOnView className={styles.timerWrap}>
          <h3 dangerouslySetInnerHTML={{ __html: t('Offer') }}></h3>
          <Timer date={new Date(DefaultTicketProps.endOffer)} shutOffTimer={() => setTimer(false)} />
        </ShowOnView>
      ) : null}
    </div>
  );
};

export default Index;
