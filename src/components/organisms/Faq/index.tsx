import React from 'react';
import Heading from '../../atoms/Heading';
import { faqIT, faqEN } from '../../../utilities/dataFAQ';
import Accordion from '../../atoms/Accordion';
import * as styles from './index.module.scss';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Index = () => {
  const { language } = useI18next();
  const data = language === 'en' ? faqEN : faqIT;
  return (
    <div className={styles.wrap}>
      <Heading text="FAQ" />
      {data.length > 0 ? (
        data.map((elem, key) =>
          elem.data.find((elem) => elem.text) ? <Accordion title={elem.title} data={elem.data} key={key} /> : <></>
        )
      ) : (
        <p>Sorry, there are no FAQ available for this language</p>
      )}
    </div>
  );
};

export default Index;
