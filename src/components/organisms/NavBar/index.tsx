import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import LogoNT from '../../../assets/logo-nt.svg';
import Hamburger from '../../../assets/hamburger.svg';
import X from '../../../assets/x.svg';
import Navigation from '../../molecules/Navigation';
import { Link } from 'gatsby';

const Index = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const [shadow, setShadow] = useState<boolean>(false);

  let prev = 0;

  const handleScroll = () => {
    const current = window.scrollY;

    if (opened) {
      setShow(true);
      setShadow(true);
    }

    if (!opened) {
      if (current < 50) {
        setShow(true);
        setShadow(false);
      } else if (current < prev) {
        setShow(true);
        setShadow(true);
      } else if (current >= prev) {
        setShow(false);
        setShadow(true);
      }
    }

    prev = current;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <header
      className={`${styles.wrap} ${show || opened ? styles.show : styles.hide}`}
      style={shadow ? { boxShadow: '0 0 20px 0 rgb(0, 0, 0, 0.25)' } : {}}
    >
      <Link to="/" className={styles.logoNT} title="Vai alla home">
        <LogoNT
          width="195"
          height="64.45"
          style={{
            fill:
              window.location.pathname === '/' ? 'var(--nt-orange)' : opened ? 'var(--nt-green)' : 'var(--nt-white)',
          }}
        />
      </Link>
      <Navigation opened={opened} onClick={() => setOpened(false)} />
      {opened ? (
        <span onClick={() => setOpened(false)} className={styles.menuIcon}>
          <X width="25" height="25" fill="var(--nt-green)" />
        </span>
      ) : (
        <span onClick={() => setOpened(true)} className={styles.menuIcon}>
          <Hamburger width="28" height="20" />
        </span>
      )}
    </header>
  );
};

export default Index;
