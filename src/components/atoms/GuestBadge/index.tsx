import React from 'react';
import GuestBadgeProps from './index.types';
import * as styles from './index.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

const Index = ({ name, id, image }: GuestBadgeProps) => {
  return (
    <a className={styles.wrap} href={`#${id}`} title={name}>
      <GatsbyImage alt={name} image={image} loading="lazy" className={styles.image} objectPosition={'center top'} />
      <span>{name}</span>
    </a>
  );
};

export default Index;
