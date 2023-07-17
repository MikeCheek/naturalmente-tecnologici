import React from 'react';
import BadgeProps from './index.types';
import * as styles from './index.module.scss';
import { textToId } from '../../../utilities/sanitizer';

const Index = ({ on, name, href }: BadgeProps) => {
  return (
    <>
      {href ? (
        <a className={on ? styles.onBadge : styles.offBadge} href={'#' + textToId(href)}>
          {name}
        </a>
      ) : (
        <p className={on ? styles.onBadge : styles.offBadge}>{name}</p>
      )}
    </>
  );
};

export default Index;
