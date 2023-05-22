import React from 'react';
import * as styles from './index.module.scss';
import Instagram from '../../../assets/social/instagram.svg';
import Facebook from '../../../assets/social/facebook.svg';
import Telegram from '../../../assets/social/telegram.svg';
import Linkedin from '../../../assets/social/linkedin.svg';
import Mail from '../../../assets/social/mail.svg';
import { SocialLinksProps } from './index.types';

const Index = ({ green, onlySocial, small }: SocialLinksProps) => {
  const dimension = small ? 40 : 50;
  return (
    <div className={`${small ? styles.smallSocialIcons : styles.socialIcons} ${green ? styles.wrapGreen : ''}`}>
      <a
        href="https://www.instagram.com/naturalmente_tecnologici/"
        rel="noopener noreferrer"
        title="Visita la nostra pagina Instagram"
        target="_blank"
      >
        <Instagram width={dimension} height={dimension} fill="var(--nt-white)" />
      </a>
      <a
        href="https://t.me/+AYplGqMtentlOTE0"
        rel="noopener noreferrer"
        title="Vai al canale Telegram delle News"
        target="_blank"
      >
        <Telegram width={dimension} height={dimension} fill="var(--nt-white)" />
      </a>
      {!onlySocial ? (
        <a href="mailto:direttivo@syskrack.org" rel="noopener noreferrer" title="Scrivici una Email" target="_blank">
          <Mail width={dimension} height={dimension} fill="var(--nt-white)" />
        </a>
      ) : (
        <></>
      )}
      <a
        href="https://www.facebook.com/syskrackgiuseppeporsia/"
        rel="noopener noreferrer"
        title="Visita la pagina Facebook dell'associazione"
        target="_blank"
      >
        <Facebook width={dimension} height={dimension} fill="var(--nt-white)" />
      </a>
      <a
        href="https://www.linkedin.com/company/syskrack-lab/"
        rel="noopener noreferrer"
        title="Visita la pagina Linkedin dell'associazione"
        target="_blank"
      >
        <Linkedin width={dimension} height={dimension} fill="var(--nt-white)" style={{ borderRadius: '5px' }} />
      </a>
    </div>
  );
};

export default Index;
