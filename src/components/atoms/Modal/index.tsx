import React from 'react';
import ModalProps from './index.types';
import X from '../../../assets/x.svg';
import * as styles from './index.module.scss';
import { allBadges } from '../../../utilities/tickets';

const Index = ({ title, description, opened, close, badges }: ModalProps) => {
  return (
    <div className={opened ? styles.opened : styles.closed}>
      <div onClick={close} className={styles.close}>
        <X width={20} height={20} fill="var(--nt-green)" />
      </div>
      <div className={styles.titleWrap}>
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
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
      <p className={styles.content} dangerouslySetInnerHTML={{ __html: description.split('.').join('.<br/>') }}></p>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default Index;
