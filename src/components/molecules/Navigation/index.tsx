import { Link } from 'gatsby';
import React from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';

const Index = ({ opened }: NavigationProps) => {
  return (
    <>
      <div
        className={styles.wrapMobile}
        style={opened ? { transform: 'translate(0, 0)', opacity: 1 } : { transform: 'translate(0, -100%)', opacity: 0 }}
      >
        <div className={styles.linksMobile}>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/">Programma</Link>
          <Link to="/">Unisciti</Link>
          <Link to="/">Contattaci</Link>
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
        <div className={styles.links}>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/">Programma</Link>
          <Link to="/">Unisciti</Link>
          <Link to="/">Contattaci</Link>
        </div>
        <a title="Iscriviti a NT 2023" href="" rel="noopener noreferrer" target="_blank" className={styles.button}>
          ISCRIVITI
        </a>
      </div>
    </>
  );
};

export default Index;
