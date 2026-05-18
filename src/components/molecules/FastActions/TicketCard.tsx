import React from 'react';
import * as styles from './TicketCard.module.scss';
import * as fastActionStyles from './index.module.scss';
import CardAction from '../../atoms/CardAction';
import { Ticket, DefaultTicketProps } from '../../../utilities/tickets';
import { ReactComponent as Info } from '../../../assets/info.svg';
import CountdownBadge from './CountdownBadge';

interface TicketCardProps {
  ticket: Ticket & { name: string[] };
  hasTimer: boolean;
  isDisabled: boolean;
  onInfoClick: (ticket: Ticket & { name: string[] }) => void;
}

const TicketCard = ({
  ticket,
  hasTimer,
  isDisabled,
  onInfoClick,
}: TicketCardProps) => {
  const currentPrice = hasTimer && ticket.priceDiscount ? ticket.priceDiscount : ticket.price;
  const savings = ticket.priceDiscount && hasTimer
    ? Math.round(((ticket.price - ticket.priceDiscount) / ticket.price) * 100)
    : 0;

  const priceDisplay = [
    ticket.price.toFixed(2) + DefaultTicketProps.priceSymbol,
    hasTimer && ticket.priceDiscount
      ? ticket.priceDiscount.toFixed(2) + DefaultTicketProps.priceSymbol
      : undefined,
  ];

  return (
    <div
      className={`${styles.ticketCardWrapper} ${isDisabled ? styles.ticketCardDisabled : ''}`}
    >
      {isDisabled && (
        <div className={styles.comingSoonOverlay}>
          <button className={styles.notifyButton}>
            🔔 Notify Me
          </button>
        </div>
      )}

      <CardAction
        glowing={ticket.bigger}
        primary={ticket.bigger}
        image={ticket.image}
        text={ticket.name[0]}
        description={ticket.name[1]}
        buttonText="SCOPRI"
        buttonHref={ticket.url}
        tag={ticket.offer ? undefined : 'Coming Soon'}
        Info={Info}
        infoClick={() => onInfoClick(ticket)}
      >
        {/* Info Section - rendered inside CardAction so it overlays image but stays within card */}
        <div className={styles.infoSection}>
          {/* Price Section */}
          <div className={fastActionStyles.priceSection}>
            {priceDisplay[1] ? (
              <>
                <p className={fastActionStyles.originalPrice}>{priceDisplay[0]}</p>
                <div className={fastActionStyles.discountedPrice}>
                  <p className={fastActionStyles.currentPrice}>{priceDisplay[1]}</p>
                  {savings > 0 && (
                    <span className={fastActionStyles.savingsBadge}>-{savings}%</span>
                  )}
                </div>
              </>
            ) : (
              <p className={fastActionStyles.currentPrice}>{priceDisplay[0]}</p>
            )}
          </div>

          Duration
          {ticket.date && (
            <p className={styles.duration}>{ticket.date}</p>
          )}

          {/* Badges */}
          {ticket.badges && ticket.badges.length > 0 && (
            <div className={styles.badgesRow}>
              {ticket.badges.slice(0, 3).map((badge, idx) => (
                <span key={idx} className={styles.badge}>{badge}</span>
              ))}
              {ticket.badges.length > 3 && (
                <span className={styles.badge}>+{ticket.badges.length - 3}</span>
              )}
            </div>
          )}

          {/* Timer & Early Bird */}
          {hasTimer && (
            <div className={fastActionStyles.timerSection}>
              {ticket.offer && (
                <span className={fastActionStyles.earlyBirdBadge}>🚀 EARLY BIRD</span>
              )}
              <CountdownBadge endDate={new Date(DefaultTicketProps.endOffer)} />
            </div>
          )}
        </div>
      </CardAction>
    </div>
  );
};

export default TicketCard;
