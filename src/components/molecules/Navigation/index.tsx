import { Link } from 'gatsby';
import React from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Programma', to: '/_' },
  { name: 'Contattaci', to: '#footer' },
  { name: 'Chi siamo', to: '/chi-siamo' },
];

const Index = ({ opened }: NavigationProps) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const removeSlashes = (text: string) => text.replace(/\//g, '');

  const linkElements = links.map((link, key) => {
    return (
      <Link
        key={key}
        className={styles.link}
        style={removeSlashes(pathname) === removeSlashes(link.to) ? { color: 'var(--nt-orange)' } : {}}
        to={link.to}
      >
        {link.name}
      </Link>
    );
  });

  return (
    <>
      <div
        className={styles.wrapMobile}
        style={opened ? { transform: 'translate(0, 0)', opacity: 1 } : { transform: 'translate(0, -100%)', opacity: 0 }}
      >
        <div className={styles.linksMobile}>
          {linkElements}
          <a
            title="Iscriviti a NT 2023"
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className={styles.buttonMobile}
          >
            ISCRIVITI
          </a>
        </div>
      </div>
      <div className={styles.wrapDesktop}>
        <div className={styles.links}>{linkElements}</div>
        <a title="Iscriviti a NT 2023" href="" rel="noopener noreferrer" target="_blank" className={styles.button}>
          ISCRIVITI
        </a>
      </div>
    </>
  );
};

export default Index;
