import React, { useEffect, useState } from 'react';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import * as styles from './index.module.scss';
import X from '../../../assets/x.svg';
import CookieBannerProps from './index.types';

const expires = 150;
const cookieConsentName = 'cmplz_consented_services';

const Index = ({ close }: CookieBannerProps) => {
  const options = { expires: expires, secure: true, sameSite: 'Lax' };

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<string>('allow');
  const [statistics, setStatistics] = useState<string>('allow');

  const baseSettings = () => {
    Cookies.set('cmplz_banner-status', 'dismissed', options);
    Cookies.set('cmplz_preferences', 'allow', options);
    Cookies.set('cmplz_functional', 'allow', options);
  };

  const handleCloseBanner = () => {
    baseSettings();
    Cookies.set('cmplz_statistics', statistics, options);
    Cookies.set('cmplz_marketing', marketing, options);
    Cookies.set(cookieConsentName, 'allow', options);
    close();
  };

  const handleAcceptCookie = () => {
    baseSettings();
    Cookies.set('cmplz_statistics', statistics, options);
    Cookies.set('cmplz_marketing', marketing, options);
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  const openOptions = () => {
    setMarketing('deny');
    setStatistics('deny');
    setShowOptions(true);
  };

  const isAllowed = (value: string) => (value === 'allow' ? true : false);
  const toggleMarketing = () => setMarketing((curr) => (curr === 'allow' ? 'deny' : 'allow'));
  const toggleStatistics = () => setStatistics((curr) => (curr === 'allow' ? 'deny' : 'allow'));

  return (
    <CookieConsent
      onAccept={handleAcceptCookie}
      location="bottom"
      buttonText={showOptions ? 'Salva preferenze' : 'Accetta tutti'}
      cookieName={cookieConsentName}
      expires={expires}
      disableStyles
      cookieSecurity={true}
      buttonWrapperClasses={styles.buttons}
      buttonClasses={styles.acceptButton}
      containerClasses={styles.banner}
      contentClasses={styles.content}
      overlay
    >
      <X className={styles.close} width={20} height={20} onClick={handleCloseBanner} />
      Questo sito utilizza cookie tecnici per il proprio funzionamento e per l'erogazione dei relativi servizi; per tali
      cookie non è richiesto il tuo consenso. Potrebbero, inoltre, essere installati cookie analitici (propri e di terza
      parte) per comprendere meglio il tuo utilizzo di questo sito e cookie di profilazione (propri e di terze parti)
      per inviarti pubblicità in linea con le tue preferenze; per accettare l'utilizzo di questi cookie clicca su
      “Accetta tutti”, mentre cliccando sul tasto “X” precludi la loro installazione; se, invece, vuoi operare una
      scelta analitica su specifici cookie{' '}
      <span className={styles.link} onClick={openOptions}>
        personalizza le tue preferenze
      </span>
      .
      {showOptions ? (
        <div className={styles.options}>
          <div className={styles.option}>
            <p>Funzionale</p>
            <div className={styles.functional}>
              <p>Sempre attivo</p>
              <span className={styles.checkboxChecked}></span>
            </div>
          </div>
          <div className={styles.option}>
            <p>Statistiche</p>
            <span
              className={isAllowed(statistics) ? styles.checkboxChecked : styles.checkbox}
              onClick={toggleStatistics}
            ></span>
          </div>
          <div className={styles.option}>
            <p>Marketing</p>
            <span
              className={isAllowed(marketing) ? styles.checkboxChecked : styles.checkbox}
              onClick={toggleMarketing}
            ></span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.links}>
        <a className={styles.link} target="_blank" title="Cookie Policy" href="https://syskrack.org/cookie-policy-ue/">
          Cookie Policy
        </a>
        <a className={styles.link} target="_blank" title="Privacy Policy" href="https://syskrack.org/privacy-policy/">
          Privacy Policy
        </a>
      </div>
    </CookieConsent>
  );
};

export default Index;
