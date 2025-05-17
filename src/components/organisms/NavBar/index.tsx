import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { ReactComponent as LogoNT } from '../../../assets/logo-nt.svg';
import { ReactComponent as Hamburger } from '../../../assets/hamburger.svg';
import { ReactComponent as X } from '../../../assets/x.svg';
import Navigation from '../../molecules/Navigation';
import { Link } from 'gatsby';
import { isBrowser } from '../../../utilities/browser';
import { useI18next } from 'gatsby-plugin-react-i18next';
import SocialLinks from '../../molecules/SocialLinks';
import { useNavigationContext } from '../../../utilities/navigation';

const Index = () => {
  const [on, setOn] = useState<boolean>(false);
  const { isOpen, open, close, toggle } = useNavigationContext();
  const [show, setShow] = useState<boolean>(true);
  const { language } = useI18next();
  const removeLang = (text: string) => (language != 'it' ? text.substring(3) : text);

  let prev = 0;

  const handleScroll = () => {
    const current = window.scrollY;

    if (isOpen) {
      setShow(true);
    }

    if (!isOpen) {
      if (current < 50) {
        setShow(true);
      } else if (current < prev) {
        setShow(true);
      } else if (current >= prev) {
        setShow(false);
      }
    }

    prev = current;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return window.removeEventListener('scroll', () => { });
  }, []);

  useEffect(() => {
    if (isBrowser() && removeLang(window.location.pathname) === '/') setOn(true);
  }, []);

  return (
    <header
      className={`${styles.wrap} ${show || isOpen ? styles.show : styles.hide}`}
      style={{ boxShadow: '0 0 20px 0 rgb(0, 0, 0, 0.25)' }
      }
    >
      <Navigation />
      <div className={styles.menuLang}>
        <span onClick={() => toggle()} className={styles.menuIcon}>
          {isOpen ? (
            <X width="25" height="25" fill='var(--nt-white)' />
          ) : (
            <Hamburger width="28" height="20" />
          )}
        </span>
      </div>
      <Link to="/" className={styles.logoNT} title="Vai alla home" onClick={close}>
        <LogoNT
          width="195"
          height="64.45"
          style={{
            fill: on ? 'var(--nt-orange)' : 'var(--nt-white)',
          }}
        />
      </Link>
      <SocialLinks menu />
    </header >
  );
};

export default Index;
