import React from 'react';
import Heading from '../../atoms/Heading';
import data from './dataFAQ';
import Accordion from '../../atoms/Accordion';
import * as styles from './index.module.scss';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="FAQ" />
      {data.map((elem, key) =>
        elem.data.find((elem) => elem.text) ? <Accordion title={elem.title} data={elem.data} key={key} /> : <></>
      )}
    </div>
  );
};

export default Index;
