import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Programma', to: '/programma' },
  { name: 'Contattaci', to: '/contattaci' },
  { name: 'Chi siamo', to: '/chi-siamo' },
];

const Index = ({ opened, onClick }: NavigationProps) => {
  const [pathname, setPathname] = useState<string>();
  const removeSlashes = (text?: string) => (text ? text.replace(/\//g, '') : '');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const linkElements = links.map((link, key) => {
    return (
      <Link
        key={key}
        className={styles.link}
        style={removeSlashes(pathname) === removeSlashes(link.to) ? { color: 'var(--nt-orange)' } : {}}
        to={link.to}
        onClick={onClick}
        title={link.name}
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
