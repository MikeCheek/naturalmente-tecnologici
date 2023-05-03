import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Programma', to: '/programma' },
  { name: 'Contattaci', to: '/contattaci' },
  { name: 'Partner', to: '/partner' },
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
        <nav className={styles.linksMobile}>
          {linkElements}
          <a
            title="Iscriviti alla Newsletter dell'associazione"
            href="https://static.mailerlite.com/webforms/submit/m7k6g6"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.buttonMobile}
          >
            NEWS
          </a>
        </nav>
      </div>
      <div className={styles.wrapDesktop}>
        <nav className={styles.links}>{linkElements}</nav>
        <a
          title="Iscriviti alla Newsletter dell'associazione"
          href="https://static.mailerlite.com/webforms/submit/m7k6g6"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.button}
        >
          NEWS
        </a>
      </div>
    </>
  );
};

export default Index;
