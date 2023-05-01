import React, { useEffect, useState } from 'react';
import CookieConsent, { Cookies, getCookieConsentValue } from 'react-cookie-consent';
import * as styles from './index.module.scss';
import X from '../../../assets/x.svg';
import CookieBannerProps from './index.types';
import Down from '../../../assets/down.svg';

const expires = 150;
const cookieConsentName = 'cmplz_consented_services';

const Index = ({ close }: CookieBannerProps) => {
  const options = { expires: expires, secure: true, sameSite: 'Lax' };

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<string>('allow');
  const [statistics, setStatistics] = useState<string>('allow');
  const [info, setInfo] = useState<number>();

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

    window.dataLayer.push({'event': 'update-consent'});
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

  const handleDownClick = (id: number) => setInfo((curr) => (curr === id ? undefined : id));

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
      <span className={styles.link} style={{ display: 'contents' }} onClick={openOptions}>
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
              <Down
                className={styles.down}
                style={info === 0 ? { transform: 'rotate(180deg)' } : {}}
                width={20}
                height={20}
                onClick={() => handleDownClick(0)}
              />
            </div>
          </div>
          {info === 0 ? (
            <p className={styles.info}>
              L'archiviazione tecnica o l'accesso sono strettamente necessari al fine legittimo di consentire l'uso di
              un servizio specifico esplicitamente richiesto dall'abbonato o dall'utente, o al solo scopo di effettuare
              la trasmissione di una comunicazione su una rete di comunicazione elettronica.
            </p>
          ) : (
            <></>
          )}
          <div className={styles.option}>
            <p>Statistiche</p>
            <div className={styles.actions}>
              <span
                className={isAllowed(statistics) ? styles.checkboxChecked : styles.checkbox}
                onClick={toggleStatistics}
              ></span>
              <Down
                className={styles.down}
                style={info === 1 ? { transform: 'rotate(180deg)' } : {}}
                width={20}
                height={20}
                onClick={() => handleDownClick(1)}
              />
            </div>
          </div>
          {info === 1 ? (
            <p className={styles.info}>
              L'archiviazione tecnica o l'accesso che viene utilizzato esclusivamente per scopi statistici anonimi.
              Senza un mandato di comparizione, una conformità volontaria da parte del vostro Fornitore di Servizi
              Internet, o ulteriori registrazioni da parte di terzi, le informazioni memorizzate o recuperate per questo
              scopo da sole non possono di solito essere utilizzate per l'identificazione.
            </p>
          ) : (
            <></>
          )}
          <div className={styles.option}>
            <p>Marketing</p>
            <div className={styles.actions}>
              <span
                className={isAllowed(marketing) ? styles.checkboxChecked : styles.checkbox}
                onClick={toggleMarketing}
              ></span>
              <Down
                className={styles.down}
                style={info === 2 ? { transform: 'rotate(180deg)' } : {}}
                width={20}
                height={20}
                onClick={() => handleDownClick(2)}
              />
            </div>
          </div>
          {info === 2 ? (
            <p className={styles.info}>
              L'archiviazione tecnica o l'accesso sono necessari per creare profili di utenti per inviare pubblicità, o
              per tracciare l'utente su un sito web o su diversi siti web per scopi di marketing simili.
            </p>
          ) : (
            <></>
          )}
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
