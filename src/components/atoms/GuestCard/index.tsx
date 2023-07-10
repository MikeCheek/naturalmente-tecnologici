import React, { useState } from 'react';
import ImageTemp from '../ImageTemp';
import * as styles from './index.module.scss';
import GuestCardProps from './index.types';

const GuestCard = ({ children, name, description, field }: GuestCardProps) => {
  const [more, setMore] = useState<boolean>(false);

  return (
    <div className={more ? styles.cardActive : styles.card}>
      {children ?? <ImageTemp name={name} />}
      <div className={styles.details}>
        <span className={styles.title}>
          <h3>{name}</h3>
          {field ? (
            <div className={styles.fieldWrap}>
              {field.map((elem, key) => (
                <h4 key={key} className={styles.field}>
                  {elem}
                </h4>
              ))}
            </div>
          ) : null}
        </span>

        <div className={`${more ? styles.aboutMore : styles.about}`}>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        <div className={styles.buttonWrap}>
          <button className={styles.buttonMore} onClick={() => setMore((state) => !state)}>
            Leggi di{more ? ' meno' : ' più'}
          </button>
          <div className={styles.fade}></div>
        </div>

        {/* {theme ? (
          <div className={styles.theme}>
            <span className={styles.pre}>Tema della conferenza</span>
            <div className={styles.quote}>
              <i>“{theme}„</i>
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default GuestCard;
