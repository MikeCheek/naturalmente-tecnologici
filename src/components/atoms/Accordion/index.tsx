import React, { useState } from 'react';
import AccordionProps from './index.types';
import * as styles from './index.module.scss';
import { ReactComponent as Down } from '../../../assets/down.svg';
import ShowOnView from '../ShowOnView';

const Index = ({ title, data }: AccordionProps) => {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <ShowOnView className={styles.wrap}>
      <h3>{title}</h3>
      <div className={styles.options}>
        {data
          .map((elem, key) => ({ ...elem, id: key }))
          .map((elem, key) =>
            elem.text ? (
              <div className={styles.optionWrap} style={elem.id == 0 ? { borderTopWidth: '0' } : {}} key={key}>
                <div
                  className={styles.optionTitle}
                  onClick={() => setSelected((curr) => (curr === elem.id ? -1 : elem.id))}
                >
                  <p>{elem.title}</p>
                  <Down
                    width={30}
                    height={30}
                    style={selected === key ? { transform: 'rotate(180deg)' } : {}}
                    fill="var(--nt-orange)"
                  />
                </div>

                <span
                  className={styles.option}
                  style={selected === elem.id ? { maxHeight: '1000px', opacity: 1 } : { opacity: 0.5 }}
                >
                  <p dangerouslySetInnerHTML={{ __html: elem.text ?? '' }}></p>
                </span>
              </div>
            ) : (
              <></>
            )
          )}
      </div>
    </ShowOnView>
  );
};

export default Index;
