import React, { useState } from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { DefaultTicketProps, info } from '../../../utilities/tickets';
import ShowOnView from '../../atoms/ShowOnView';
import { ReactComponent as Info } from '../../../assets/info.svg';
import useModalContext from '../../../utilities/useModalContext';
import Button from '../../atoms/Button';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { setText } = useModalContext();
  const { t } = useTranslation();

  const [timer, setTimer] = useState<boolean>(true);

  const tickets = info.map((value) => ({
    ...value,
    name: value.name.replace(')', '').split('('),
  }));

  return (
    <div className={styles.wrap}>
      <Heading text={t('TicketsTitle')} id="biglietti" simple />
      <div className={styles.cards}>
        {tickets.map((ticket, key) => {
          const currentPrice = timer && ticket.priceDiscount ? ticket.priceDiscount : ticket.price;
          return (
            <CardAction
              key={key}
              glowing={ticket.bigger}
              primary={ticket.bigger}
              icon={<ticket.icon className={styles.icon} width={70} />}
              // special={[
              //   ticket.price.toFixed(2) + DefaultTicketProps.priceSymbol,
              //   timer && ticket.priceDiscount
              //     ? ticket.priceDiscount.toFixed(2) + DefaultTicketProps.priceSymbol
              //     : undefined,
              // ]}
              text={ticket.name[0]}
              description={ticket.name[1]}
              buttonText={t('NavCta')}
              buttonHref={ticket.url}
              tag={timer && ticket.offer ? 'EARLY BIRD' : undefined}
              Info={Info}
              infoClick={() =>
                setText(
                  ticket.name.join('<br/>'),
                  // Array.isArray(currentPrice)
                  //   ? currentPrice.map((t) => t.toFixed(2) + DefaultTicketProps.priceSymbol).join(' / ')
                  //   : currentPrice.toFixed(2) + DefaultTicketProps.priceSymbol
                  '',
                  ticket.description,
                  ticket.date ? [ticket.date, ...(ticket.badges ?? [])] : ticket.badges
                )
              }
            />
          );
        })}
      </div>
      {/* <ShowOnView>
        <h3>
          I biglietti saranno disponibili anche in loco al botteghino ma a un prezzo maggiorato.
          <br />
          <br />
          Riserva ora il tuo posto al prezzo più basso!
        </h3>
      </ShowOnView> */}
      {timer ? (
        <ShowOnView className={styles.timerWrap}>
          <h3 dangerouslySetInnerHTML={{ __html: t('Offer') }}></h3>
          <Timer date={new Date(DefaultTicketProps.endOffer)} shutOffTimer={() => setTimer(false)} />
        </ShowOnView>
      ) : (
        <></>
      )}

      {/* <ShowOnView>
        <h3 dangerouslySetInnerHTML={{ __html: t('FaqCtaDesc') }}></h3>
        <Button bigger internal href="/info/#faq" title={t('FaqCta')} text={t('FaqCta')} />
      </ShowOnView> */}
    </div>
  );
};

export default Index;
