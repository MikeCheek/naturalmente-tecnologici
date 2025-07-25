import React from 'react';
import * as styles from './index.module.scss';
import { ReactComponent as Instagram } from '../../../assets/social/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/social/facebook.svg';
import { ReactComponent as Telegram } from '../../../assets/social/telegram.svg';
import { ReactComponent as Linkedin } from '../../../assets/social/linkedin.svg';
import { ReactComponent as Mail } from '../../../assets/social/mail.svg';
import { SocialLinksProps } from './index.types';

const Index = ({ green, onlySocial, small, menu }: SocialLinksProps) => {
  const dimension = small ? 40 : 50;

  const socials = [
    <a
      href="https://www.instagram.com/naturalmente_tecnologici/"
      rel="noopener noreferrer"
      title="Visita la nostra pagina Instagram"
      target="_blank"
    >
      <Instagram width={dimension} height={dimension} fill="var(--nt-white)" />
    </a>,
    <a
      href="https://t.me/+5XTI4xMmm9sxMDE0"
      rel="noopener noreferrer"
      title="Entra nella Community Telegram di Naturalmente Tecnologici"
      target="_blank"
    >
      <Telegram width={dimension} height={dimension} fill="var(--nt-white)" />
    </a>,
    (!onlySocial ? (
      <a href="mailto:direttivo@syskrack.org" rel="noopener noreferrer" title="Scrivici una Email" target="_blank">
        <Mail width={dimension} height={dimension} fill="var(--nt-white)" />
      </a>
    ) : (
      null
    )),
    <a
      href="https://www.facebook.com/syskrackgiuseppeporsia/"
      rel="noopener noreferrer"
      title="Visita la pagina Facebook dell'associazione"
      target="_blank"
    >
      <Facebook width={dimension} height={dimension} fill="var(--nt-white)" />
    </a>,
    <a
      href="https://www.linkedin.com/company/syskrack-lab/"
      rel="noopener noreferrer"
      title="Visita la pagina Linkedin dell'associazione"
      target="_blank"
    >
      <Linkedin width={dimension} height={dimension} fill="var(--nt-white)" style={{ borderRadius: '5px' }} />
    </a>
  ]

  return (
    <div className={`${small ? styles.smallSocialIcons : styles.socialIcons} ${green ? styles.wrapGreen : ''} ${menu ? styles.menu : ''}`}>
      {
        socials.filter((s) => s !== null).map((social, key) => (
          <div key={key} className={menu ? styles.menuIcon : styles.icon}>
            {social}
          </div>
        ))
      }
    </div>
  );
};

export default Index;
