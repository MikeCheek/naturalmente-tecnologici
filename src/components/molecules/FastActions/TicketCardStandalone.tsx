import React from 'react';
import * as styles from './TicketCardStandalone.module.scss';
import * as fastActionStyles from './index.module.scss';
import Button from '../../atoms/Button';
import { GatsbyImage } from 'gatsby-plugin-image';
import { images as ntImages } from '../../../utilities/ntPhotos';
import { Ticket, DefaultTicketProps } from '../../../utilities/tickets';
import { ReactComponent as Info } from '../../../assets/info.svg';
import CountdownBadge from './CountdownBadge';

interface TicketCardStandaloneProps {
  ticket: Ticket & { name: string[] };
  hasTimer?: boolean;
  isDisabled?: boolean;
  onInfoClick?: (ticket: Ticket & { name: string[] }) => void;
}

const TicketCardStandalone = ({
  ticket,
  hasTimer = true,
  isDisabled = false,
  onInfoClick = () => { },
}: TicketCardStandaloneProps) => {
  const savings = ticket.priceDiscount && hasTimer
    ? Math.round(((ticket.price - ticket.priceDiscount) / ticket.price) * 100)
    : 0;

  const priceDisplay = [
    ticket.price.toFixed(2) + DefaultTicketProps.priceSymbol,
    hasTimer && ticket.priceDiscount
      ? ticket.priceDiscount.toFixed(2) + DefaultTicketProps.priceSymbol
      : undefined,
  ];

  const { activities } = ntImages();

  const bgImage = activities.edges?.find(edge => edge.node.name === ticket.image)?.node?.childImageSharp?.gatsbyImageData;
  const special = (ticket as any).special;

  return (
    <div className={styles.standaloneWrapper}>
      {ticket.image && bgImage && (
        <div className={styles.backgroundImage} aria-hidden>
          <GatsbyImage
            image={bgImage}
            alt={typeof ticket.name[0] === 'string' ? ticket.name[0] : 'Ticket background'}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, borderRadius: 'inherit' }}
            imgStyle={{ objectFit: 'cover', borderRadius: 'inherit' }}
            draggable={false}
          />
        </div>
      )}

      {ticket.offer === false && <p className={styles.tag}>Coming Soon</p>}
      {Info && onInfoClick && (
        <div className={styles.info} onClick={() => onInfoClick(ticket)}>
          <Info width={32} height={32} fill="var(--nt-orange)" />
        </div>
      )}

      {hasTimer && ticket.offer && (
        <div className={styles.topLeftBadge}>
          <span className={fastActionStyles.earlyBirdBadge}>EARLY</span>
          <div className={styles.topCountdown}>
            <CountdownBadge endDate={new Date(DefaultTicketProps.endOffer)} />
          </div>
        </div>
      )}

      <div className={styles.infoPanel}>
        <p className={styles.name}>{ticket.name[0]}</p>
        {special ? (
          <div className={styles.special}>
            {special[1] ? (
              <>
                <p className={styles.cutted}>{special[0]}</p>
                <p className={styles.primary}>{special[1]}</p>
              </>
            ) : (
              <p className={styles.primary}>{special[0]}</p>
            )}
          </div>
        ) : null}

        {/* simplified price: show only current price and savings badge */}
        <div className={fastActionStyles.priceSection}>
          <div className={fastActionStyles.discountedPrice}>
            <p className={fastActionStyles.currentPrice}>{priceDisplay[1] ?? priceDisplay[0]}</p>
            {savings > 0 && (
              <span className={fastActionStyles.savingsBadge}>-{savings}%</span>
            )}
          </div>
        </div>

        {/* {ticket.date && <p className={styles.duration}>{ticket.date}</p>} */}
        <p className={styles.duration}></p>

        {/* {(() => {
          const visibleBadges = ticket.badges
            ? ticket.badges.filter((b: any) => (typeof b === 'string') && !['camping', 'conferenze'].includes(b.toLowerCase()))
            : [];

          return visibleBadges.length > 0 ? (
            <div className={styles.badgesRow}>
              {visibleBadges.slice(0, 2).map((badge: string, idx: number) => (
                <span key={idx} className={styles.badge}>{badge}</span>
              ))}
            </div>
          ) : null;
        })()} */}

        {/* timer moved to top-left badge for compact display */}
      </div>

      <div className={styles.buttonWrap}>
        <Button text="Get Tickets" title="Get Tickets" href={ticket.url} internal={false} bigger />
      </div>

      {/* {isDisabled && (
        <div className={styles.comingSoonOverlay}>
          <button className={styles.notifyButton}>🔔 Notify Me</button>
        </div>
      )} */}
    </div>
  );
};

export default TicketCardStandalone;
