import React from 'react';
import ModalProps from './index.types';
import { ReactComponent as X } from '../../../assets/x.svg';
import * as styles from './index.module.scss';
import { Eventbrite, allBadges } from '../../../utilities/tickets';
import Button from '../Button';
import Badge from '../Badge';
import { useTranslation } from 'react-i18next';

const Index = ({ title, description, opened, close, price, badges }: ModalProps) => {
  const isForATicket = badges ? true : false;
  const { t } = useTranslation();

  const desc = isForATicket
    ? description.replace('https://syskrack.org/associati.', '').split('.').join('.<br/>') +
      `<a href="https://syskrack.org/associati" rel="noopener noreferrer" title"Associati" target="_blank">https://syskrack.org/associati</a>`
    : description;

  return (
    <div className={opened ? styles.opened : styles.closed}>
      <div onClick={close} className={styles.close}>
        <X width={20} height={20} fill="var(--nt-orange)" />
      </div>
      <div className={styles.titleWrap}>
        <span className={styles.miniWrap} style={isForATicket ? {} : { alignItems: 'center' }}>
          <p className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></p>
          <p className={styles.price}>{price}</p>
        </span>
        {badges && badges.length > 0 ? (
          <div className={styles.badges}>
            {allBadges?.includes(badges[0]) ? <></> : <Badge on name={badges[0]} />}
            {allBadges?.map((badge, key) => (
              <Badge on={badges?.includes(badge)} key={key} name={badge} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <p className={styles.content} dangerouslySetInnerHTML={{ __html: desc }}></p>
      <div className={styles.shadow}></div>
      <div className={styles.buttonWrap}>
        {isForATicket ? (
          <Button text={t('ModalCta')} title={t('ModalCta')} href={Eventbrite} internal={false} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Index;
