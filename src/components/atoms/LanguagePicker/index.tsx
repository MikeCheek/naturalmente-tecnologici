import { useI18next, Link } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import * as styles from './index.module.scss';
import Down from '../../../assets/down.svg';
import Italy from '../../../assets/flags/italy.svg';
import UK from '../../../assets/flags/united-kingdom.svg';

const Index = () => {
  const { languages, language, originalPath } = useI18next();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const Flag = (value: string) => (value == 'it' ? <Italy className={styles.flag} /> : <UK className={styles.flag} />);
  return (
    <div className={styles.languagePicker} onMouseLeave={() => setDropdown(false)}>
      <p onClick={() => setDropdown((v) => !v)}>
        {Flag(language)}
        {language.toUpperCase()}
        {/* <Down width={10} height={10} /> */}
      </p>
      <div className={dropdown ? styles.dropdown : styles.dropdownClosed}>
        {languages.map((lng, key) => (
          <div key={lng} className={styles.languageWrap}>
            <Link
              className={language === lng ? styles.languageActive : styles.language}
              to={originalPath}
              language={lng}
            >
              {Flag(lng)} {lng.toUpperCase()}
            </Link>
            {key % 2 === 0 ? <div className={styles.separator}></div> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
