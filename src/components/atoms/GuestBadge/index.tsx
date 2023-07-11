import React from 'react';
import GuestBadgeProps from './index.types';
import * as styles from './index.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Index = ({ name, href, image, titles }: GuestBadgeProps) => {
  return (
    <Link className={styles.wrap} to={href} title={name}>
      <GatsbyImage alt={name} image={image} loading="lazy" className={styles.image} objectPosition={'center top'} />
      <span className={styles.nameWrap}>
        <span>{name}</span>
        {titles ? <span className={styles.subTitles}>{titles.join(', ')}</span> : <></>}
      </span>
    </Link>
  );
};

export default Index;
