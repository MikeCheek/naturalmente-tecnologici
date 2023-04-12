import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import LogoNT from '../../../assets/logo-nt.svg';
import Hamburger from '../../../assets/hamburger.svg';
import X from '../../../assets/x.svg';
import Navigation from '../Navigation';
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
    <div
      className={`${styles.wrap} ${show ? styles.show : styles.hide}`}
      style={shadow ? { boxShadow: '0 0 20px 0 rgb(0, 0, 0, 0.25)' } : {}}
    >
      <Link to="/" className={styles.logoNT}>
        <LogoNT width="195" height="64.45" style={opened ? { fill: 'var(--nt-green)' } : { fill: 'var(--nt-white)' }} />
      </Link>
      <Navigation opened={opened} onClick={() => setOpened(false)} />
      {opened ? (
        <span onClick={() => setOpened(false)} className={styles.menuIcon}>
          <X width="25" height="25" />
        </span>
      ) : (
        <span onClick={() => setOpened(true)} className={styles.menuIcon}>
          <Hamburger width="28" height="20" />
        </span>
      )}
    </div>
  );
};

export default Index;
