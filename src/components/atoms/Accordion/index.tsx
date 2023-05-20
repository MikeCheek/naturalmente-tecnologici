import React, { useState } from 'react';
import AccordionProps from './index.types';
import * as styles from './index.module.scss';

const Index = ({ title, data }: AccordionProps) => {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <div className={styles.wrap}>
      <h3>{title}</h3>
      <div className={styles.options}>
        {data.map((elem, key) => (
          <div className={styles.optionWrap} style={key == 0 ? { borderTopWidth: '0' } : {}} key={key}>
            <p className={styles.optionTitle} onClick={() => setSelected((curr) => (curr === key ? -1 : key))}>
              {elem.title}
            </p>
            <span className={selected === key ? styles.optionSelected : styles.option}>
              <p dangerouslySetInnerHTML={{ __html: elem.text ?? '' }}></p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
