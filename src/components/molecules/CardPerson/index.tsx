import React from 'react';
import * as styles from './index.module.scss';
import CardImage from '../../atoms/CardImage';
import { CardPersonProps } from './index.types';
import Linkedin from '../../../assets/social/linkedin.svg';
import Website from '../../../assets/social/internet.svg';

const Index = ({ image, name, role, reversed = false, website, linkedin, noMargin = false }: CardPersonProps) => {
  return (
    <div className={styles.wrap} style={noMargin ? { marginLeft: 0, marginRight: 0 } : {}}>
      {website || linkedin ? (
        <div className={reversed ? styles.linksReversed : styles.links}>
          {linkedin ? (
            <a title={'Profilo Linkedin ' + name} href={linkedin} target="_blank">
              <Linkedin width={30} height={30} />
            </a>
          ) : (
            <></>
          )}
          {website ? (
            <a title={'Sito web ' + name} href={website} target="_blank">
              <Website width={30} height={30} />
            </a>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <CardImage reversed={reversed}>{image}</CardImage>
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
};

export default Index;
