import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import X from '../../../assets/x.svg';
import CookieBannerProps from './index.types';
import Down from '../../../assets/down.svg';
import Cookies from 'js-cookie';
import { CookiesNames, options } from '../../../utilities/cookies';
import { useTranslation } from 'react-i18next';

const Index = ({ close }: CookieBannerProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<string>('allow');
  const [statistics, setStatistics] = useState<string>('allow');
  const [info, setInfo] = useState<number>();
  const { t } = useTranslation();

  const handleAcceptCookie = (denyAll: boolean = false) => {
    Cookies.set(CookiesNames.functional, 'allow', options);
    if (denyAll) {
      Cookies.set(CookiesNames.statistics, 'deny', options);
      Cookies.set(CookiesNames.marketing, 'deny', options);
    } else {
      Cookies.set(CookiesNames.statistics, statistics, options);
      Cookies.set(CookiesNames.marketing, marketing, options);
    }
    //@ts-ignore
    window.dataLayer?.push({ event: 'update-consent' });
    close();
  };

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
    <>
      <div className={styles.shadow}></div>
      <div className={styles.banner}>
        <X className={styles.close} width={20} height={20} onClick={() => handleAcceptCookie(true)} />
        <div className={styles.content}>
          {t('CookiesText')}{' '}
          <span className={styles.link} style={{ display: 'contents' }} onClick={openOptions}>
            {t('CookiesTextCta')}
          </span>
          .
          {showOptions ? (
            <div className={styles.options}>
              <div className={styles.option}>
                <p>{t('CookiesFunc')}</p>
                <div className={styles.functional}>
                  <p>{t('CookiesFuncStatus')}</p>
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
              {info === 0 ? <p className={styles.info}>{t('CookiesFuncDesc')}</p> : <></>}
              <div className={styles.option}>
                <p>{t('CookiesStat')}</p>
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
              {info === 1 ? <p className={styles.info}>{t('CookiesStatDesc')}</p> : <></>}
              <div className={styles.option}>
                <p>{t('CookiesMark')}</p>
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
              {info === 2 ? <p className={styles.info}>{t('CookiesMarkDesc')}</p> : <></>}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className={styles.buttons}>
          <button className={styles.acceptButton} onClick={() => handleAcceptCookie()}>
            {showOptions ? t('CookiesSave') : t('CookiesAccept')}
          </button>
        </div>
        <div className={styles.links}>
          <a
            className={styles.link}
            target="_blank"
            title="Cookie Policy"
            href="https://syskrack.org/cookie-policy-ue/"
          >
            Cookie Policy
          </a>
          <a className={styles.link} target="_blank" title="Privacy Policy" href="https://syskrack.org/privacy-policy/">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};

export default Index;
