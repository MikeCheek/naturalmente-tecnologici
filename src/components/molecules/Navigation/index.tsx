import { Link } from 'gatsby';
import React from 'react';
import * as styles from './index.module.scss';
import { NavigationProps } from './index.types';

const Index = ({ opened }: NavigationProps) => {
  return (
    <>
      <div className={styles.wrapMobile} style={opened ? {} : { transform: 'translate(0, -100%)' }}>
        <div className={styles.linksMobile}>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/">Programma</Link>
          <Link to="/">Unisciti</Link>
          <Link to="/">Contattaci</Link>
          <button className={styles.buttonMobile}>ISCRIVITI</button>
        </div>
      </div>
      <div className={styles.wrapDesktop}>
        <div className={styles.links}>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/">Programma</Link>
          <Link to="/">Unisciti</Link>
          <Link to="/">Contattaci</Link>
        </div>
        <button className={styles.button}>ISCRIVITI</button>
      </div>
    </>
  );
};

export default Index;
