import React from 'react';
import ModalProps from './index.types';
import X from '../../../assets/x.svg';
import * as styles from './index.module.scss';
import { Eventbrite, allBadges } from '../../../utilities/tickets';
import Button from '../Button';

const Index = ({ title, description, opened, close, price, badges }: ModalProps) => {
  const desc =
    description.replace('https://syskrack.org/associati.', '').split('.').join('.<br/>') +
    `<a href="https://syskrack.org/associati" rel="noopener noreferrer" title"Associati" target="_blank">https://syskrack.org/associati</a>`;

  return (
    <div className={opened ? styles.opened : styles.closed}>
      <div onClick={close} className={styles.close}>
        <X width={20} height={20} fill="var(--nt-orange)" />
      </div>
      <div className={styles.titleWrap}>
        <span className={styles.miniWrap}>
          <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></p>
          <p className={styles.price}>{price}</p>
        </span>
        {badges && badges.length > 0 ? (
          <div className={styles.badges}>
            {allBadges?.map((badge, key) => (
              <p className={badges?.includes(badge) ? styles.onBadge : styles.offBadge} key={key}>
                {badge}
              </p>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <p className={styles.content} dangerouslySetInnerHTML={{ __html: desc }}></p>
      <div className={styles.shadow}></div>
      <Button text={'RISERVA IL TUO BIGLIETTO'} title={'RISERVA IL TUO BIGLIETTO'} href={Eventbrite} internal={false} />
    </div>
  );
};

export default Index;
