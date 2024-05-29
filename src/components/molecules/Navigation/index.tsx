import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { links } from '../../../utilities/navigation';
import { isBrowser } from '../../../utilities/browser';
import { NavigationProps } from './index.types';
import Play from '../../../assets/play.svg';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import LanguagePicker from '../../atoms/LanguagePicker';
import MultipleLinks from '../../atoms/MultipleLinks';

const Index = ({ opened, onClick }: NavigationProps) => {
  const [pathname, setPathname] = useState<string>();
  const { language, languages } = useI18next();
  const removeSlashes = (text?: string) => (text ? text.replace(/\//g, '') : '');
  const removeLang = (text?: string) => (text ? (language != 'it' ? text.substring(2) : text) : '');
  const { t } = useTranslation();

  useEffect(() => {
    if (isBrowser()) {
      setPathname(removeLang(removeSlashes(window.location.pathname)));
    }
  }, []);

  const linkElements = links(language).map((link, key) => {
    if (link.hide) return;
    if (link.multiple) return;
    // return (
    //   <MultipleLinks name={link.name} key={key} active={pathname?.startsWith(link.name.toLowerCase())}>
    //     {link.links.map((l, key) => (
    //       <Link
    //         key={key}
    //         className={styles.link}
    //         style={removeSlashes(pathname) === removeSlashes(l.to) ? { color: 'var(--nt-orange)' } : {}}
    //         to={l.to}
    //         onClick={onClick}
    //         // title={l.name}
    //       >
    //         {l.name}
    //       </Link>
    //     ))}
    //   </MultipleLinks>
    // );
    return (
      <Link
        key={key}
        className={styles.link}
        style={pathname === removeSlashes(link.to) ? { color: 'var(--nt-orange)' } : {}}
        to={link.to ?? ''}
        onClick={onClick}
        title={link.name}
      >
        {link.name}
      </Link>
    );
  });

  const button = (mobile?: boolean) => (
    <a
      title={t('NavCta')}
      target="_blank"
      rel="noopener noreferrer"
      href={'https://youtube.com/playlist?list=PLUPBawFanl496dZgv1Qyf5IWaPYvUOu0W&si=1MYjrDeLdQHmtPMY'}
      className={mobile ? styles.buttonMobile : styles.button}
      onClick={onClick}
    >
      <Play width={20} height={20} fill="var(--nt-green)" /> {t('NavCta')}
    </a>
  );

  return (
    <>
      <div
        className={styles.wrapMobile}
        style={opened ? { transform: 'translate(0, 0)', opacity: 1 } : { transform: 'translate(0, -100%)', opacity: 0 }}
      >
        <nav className={styles.linksMobile}>
          {linkElements}
          {button(true)}
          <LanguagePicker />
        </nav>
      </div>
      <div className={styles.wrapDesktop}>
        <nav className={styles.links}>{linkElements}</nav>
        {button()}
        <LanguagePicker />
      </div>
    </>
  );
};

export default Index;
