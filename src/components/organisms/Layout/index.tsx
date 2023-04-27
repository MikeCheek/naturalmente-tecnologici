import React, { useEffect } from 'react';
import NavBar from '../../molecules/NavBar';
import { LayoutProps } from './index.types';
import * as styles from './index.module.scss';
import FlyingInsects from '../../molecules/FlyingInsects';
import Footer from '../../molecules/Footer';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';

const Index = ({ children, insects = true }: LayoutProps) => {
  const handleAcceptCookie = () => {};

  const handleDeclineCookie = () => {
    Cookies.remove('_ga');
    // Cookies.remove('_gat');
    // Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div id="top">
      <NavBar />
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        location="bottom"
        buttonText="ACCETTA"
        declineButtonText="RIFIUTA"
        cookieName="cookie-consent"
        expires={150}
        disableStyles
        buttonWrapperClasses={styles.buttons}
        buttonClasses={styles.acceptButton}
        declineButtonClasses={styles.declineButton}
        containerClasses={styles.banner}
        contentClasses={styles.content}
      >
        Questo sito utilizza i cookie per migliorare l'esperienza di navigazione
      </CookieConsent>
      {insects ? <FlyingInsects /> : <></>}
      <main className={styles.wrap}>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
