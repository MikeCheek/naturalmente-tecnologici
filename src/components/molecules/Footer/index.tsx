import React from 'react';
import * as styles from './index.module.scss';
import Separator from '../../atoms/Separator';
import LogoNT from '../../../assets/logo-nt.svg';
import { Link } from 'gatsby';
import Instagram from '../../../assets/social/instagram.svg';
import Facebook from '../../../assets/social/facebook.svg';
import Telegram from '../../../assets/social/telegram.svg';
import Linkedin from '../../../assets/social/linkedin.svg';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Separator />
      <div>
        <Link className={styles.logo} to="/">
          <LogoNT width="266" height="87.92" style={{ fill: 'var(--nt-orange)' }} />
        </Link>
        <p>11-13 Agosto 2023</p>
      </div>
      <div className={styles.socialIcons}>
        <a
          href="https://www.instagram.com/syskrack_giuseppeporsia/"
          rel="noopener noreferrer"
          title="Visita la nostra pagina Instagram"
          target="_blank"
        >
          <Instagram width={50} height={50} fill="var(--nt-white)" />
        </a>
        <a
          href="https://t.me/+AYplGqMtentlOTE0"
          rel="noopener noreferrer"
          title="Vai al canale Telegram delle News"
          target="_blank"
        >
          <Telegram width={50} height={50} fill="var(--nt-white)" />
        </a>
        <a
          href="https://www.facebook.com/syskrackgiuseppeporsia/"
          rel="noopener noreferrer"
          title="Visita la pagina Facebook dell'associazione"
          target="_blank"
        >
          <Facebook width={50} height={50} fill="var(--nt-white)" />
        </a>
        <a
          href="https://www.linkedin.com/company/syskrack-lab/"
          rel="noopener noreferrer"
          title="Visita la pagina Linkedin dell'associazione"
          target="_blank"
        >
          <Linkedin width={50} height={50} fill="var(--nt-white)" style={{ borderRadius: '10px' }} />
        </a>
      </div>
    </div>
  );
};

export default Index;
