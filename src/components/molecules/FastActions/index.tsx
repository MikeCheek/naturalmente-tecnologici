import React, { useState } from 'react';
import * as styles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import Timer from '../Timer';
import Heading from '../../atoms/Heading';
import { DefaultTicketProps, info, TICKETS_ENABLED } from '../../../utilities/tickets';
import ShowOnView from '../../atoms/ShowOnView';
import { ReactComponent as Info } from '../../../assets/info.svg';
import useModalContext from '../../../utilities/useModalContext';
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
            <div key={key} className={!TICKETS_ENABLED ? styles.disabledCard : undefined}>
              <CardAction
                glowing={ticket.bigger}
                primary={ticket.bigger}
                image={ticket.image}
                //icon={<ticket.icon className={styles.icon} width={70} />}
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
                tag={timer && ticket.offer && TICKETS_ENABLED ? 'EARLY BIRD' : undefined}
                Info={Info}
                infoClick={
                  TICKETS_ENABLED
                    ? () =>
                      setText(
                        ticket.name.join('<br/>'),
                        Array.isArray(currentPrice)
                          ? currentPrice.map((t) => t.toFixed(2) + DefaultTicketProps.priceSymbol).join(' / ')
                          : currentPrice.toFixed(2) + DefaultTicketProps.priceSymbol,
                        ticket.description,
                        ticket.date ? [ticket.date, ...(ticket.badges ?? [])] : ticket.badges
                      )
                    : undefined
                }
              />
              {!TICKETS_ENABLED ? <span className={styles.disabledLabel}>I pass usciranno presto!</span> : <></>}
            </div>
          );
        })}
      </div>
      {TICKETS_ENABLED ? (
        <ShowOnView className={styles.info}>
          <h3>Non campeggi? Per te L’EVENTO È COMPLETAMENTE GRATUITO!</h3>
          <p>
            Puoi partecipare gratuitamente a talk, performance e molte attività (i pass danno priorità agli eventi a numero chiuso).
            <br />
            Crediamo che cultura e innovazione debbano essere accessibili a tutti!
          </p>
          <p>
            Se vuoi sostenere #NT26, puoi fare una donazione libera a Syskrack per supportare i nostri progetti.
          </p>
        </ShowOnView>
      ) : (
        <ShowOnView className={styles.info}>
          <h3>Non perderti i pass per la prossima edizione!</h3>
        </ShowOnView>
      )}
      {
        timer ? (
          <ShowOnView className={styles.timerWrap}>
            <h3 dangerouslySetInnerHTML={{ __html: t('Offer') }}></h3>
            <Timer date={new Date(DefaultTicketProps.endOffer)} shutOffTimer={() => setTimer(false)} />
          </ShowOnView>
        ) : (
          <></>
        )
      }

      {/* <ShowOnView>
        <h3 dangerouslySetInnerHTML={{ __html: t('FaqCtaDesc') }}></h3>
        <Button bigger internal href="/info/#faq" title={t('FaqCta')} text={t('FaqCta')} />
      </ShowOnView> */}
    </div >
  );
};

export default Index;
