import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './index.module.scss';
import { links, useNavigationContext } from '../../../utilities/navigation';
import { isBrowser } from '../../../utilities/browser';
import { NavigationProps } from './index.types';
import { ReactComponent as Play } from '../../../assets/play.svg';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { DefaultTicketProps } from '../../../utilities/tickets';
import LanguagePicker from '../../atoms/LanguagePicker';

const Index = ({ }: NavigationProps) => {
  const [pathname, setPathname] = useState<string>();
  const { language, languages } = useI18next();
  const { isOpen, close } = useNavigationContext();
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
        onClick={close}
        title={link.name}
      >
        {link.name}
      </Link>
    );
  });

  const button = () => (
    <a
      title={t('NavCta') + ' PASS'}
      target="_blank"
      rel="noopener noreferrer"
      href={DefaultTicketProps.url}
      className={styles.button}
      onClick={close}
    >
      <Play width={20} height={20} fill="var(--nt-green)" /> {t('NavCta') + ' PASS'}
    </a>
  );

  return (
    <>
      <div
        className={styles.wrap}
        style={isOpen ? { transform: 'translate(0, 0)', opacity: 1 } : { transform: 'translate(-100%, 0)', opacity: 0 }}
      >
        <nav className={styles.links}>
          {linkElements}
          {button()}
          <LanguagePicker />
        </nav>
      </div>
    </>
  );
};

export default Index;
