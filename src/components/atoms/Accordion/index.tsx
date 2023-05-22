import React, { useState } from 'react';
import AccordionProps from './index.types';
import * as styles from './index.module.scss';
import Down from '../../../assets/down.svg';

const Index = ({ title, data }: AccordionProps) => {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <div className={styles.wrap}>
      <h3>{title}</h3>
      <div className={styles.options}>
        {data.map((elem, key) =>
          elem.text ? (
            <div className={styles.optionWrap} style={key == 0 ? { borderTopWidth: '0' } : {}} key={key}>
              <div className={styles.optionTitle} onClick={() => setSelected((curr) => (curr === key ? -1 : key))}>
                <p>{elem.title}</p>
                <Down
                  width={30}
                  height={30}
                  style={selected === key ? { transform: 'rotate(180deg)' } : {}}
                  fill="var(--nt-orange)"
                />
              </div>

              <span className={styles.option} style={selected === key ? { maxHeight: '1000px' } : {}}>
                <p dangerouslySetInnerHTML={{ __html: elem.text ?? '' }}></p>
              </span>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Index;
