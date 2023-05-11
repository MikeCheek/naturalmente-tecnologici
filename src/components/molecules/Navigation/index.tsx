import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';
import { showPopUp } from '../../../hooks/newsletter';
import { links } from '../../../hooks/navigation';

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
          <div
            title="Iscriviti alla Newsletter dell'associazione"
            onClick={showPopUp}
            // rel="noopener noreferrer"
            // target="_blank"
            className={styles.buttonMobile}
          >
            PARTECIPA
          </div>
        </nav>
      </div>
      <div className={styles.wrapDesktop}>
        <nav className={styles.links}>{linkElements}</nav>
        <div
          title="Iscriviti alla Newsletter dell'associazione"
          onClick={showPopUp}
          // rel="noopener noreferrer"
          // target="_blank"
          className={styles.button}
        >
          PARTECIPA
        </div>
      </div>
    </>
  );
};

export default Index;
