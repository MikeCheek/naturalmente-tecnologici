import React from 'react';
import * as styles from './index.module.scss';
import Separator from '../../atoms/Separator';
import LogoNT from '../../../assets/logo-nt.svg';
import { Link } from 'gatsby';
import SocialLinks from '../SocialLinks';
import { links } from '../../../utilities/navigation';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const Index = () => {
  const { language } = useI18next();
  const { t } = useTranslation();
  return (
    <footer className={styles.wrap} id="footer">
      <Separator />
      <div className={styles.logoMap}>
        <div>
          <Link className={styles.logo} to="#top" title="Torna in cima">
            <LogoNT width="266" height="87.92" style={{ fill: 'var(--nt-orange)' }} />
          </Link>
          <Link className={styles.date} to="/#quando-e-dove" title="Quando e dove">
            Bosco Coste, Grottole(MT)
            <br /> {t('Date')}
          </Link>
        </div>
        <div className={styles.sitemap}>
          <h4>{t('FooterMap')}</h4>
          <div className={styles.links}>
            {links(language)
              .filter((l) => !l.multiple)
              .map((link, key) => (
                <Link key={key} to={link.to ?? ''} title={`Vai alla pagina ${link.name}`}>
                  {link.name}
                </Link>
              ))}
          </div>
          <div className={styles.links}>
            {links(language)
              .filter((l) => l.multiple)
              .map((link) =>
                link.links?.map((l, key) => (
                  <Link key={key} to={l.to ?? ''} title={`Vai alla pagina ${link.name}/${l.name}`}>
                    {link.name}-{l.name}
                  </Link>
                ))
              )}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright © {new Date().getFullYear()} APS Syskrack Giuseppe Porsia ETS</p>
        <SocialLinks small />
        <p>
          Created with ❤ by{' '}
          <a
            href="https://michelepulvirenti.vercel.app/?r=nt23"
            title="Michele Pulvirenti Website"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Michele Pulvirenti
          </a>{' '}
          and{' '}
          <a
            href="https://bernardoforcillo.com/"
            title="Bernardo Forcillo Website"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Bernardo Forcillo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Index;
