import React from 'react';
import * as styles from './index.module.scss';
import Separator from '../../atoms/Separator';
import Banner from '../../atoms/Banner';

const explanation = [
  {
    title: `Etimologia`,
    text: `Dal latino <b>bubulcus</b> <em>"guardiano di buoi, chi guida i buoi nell'aratura"</em>,
  poi diventato bufuculus per un probabile passaggio attraverso l'osco-umbro o l'etrusco`,
  },
  {
    title: `Perchè lo diciamo?`,
    text: `Privato della sua accezione negativa, il termine è diventato un rimando a una dimensione bucolica, atavica, a cui sentiamo di appartenere con il nostro essere <b>Naturalmente Tecnologici</b>`,
  },
  {
    title: `Significato`,
    text: `Appartiene a quel vasto novero di parole che raccontano lo screanzato e l'ignorante, evocando personaggi della campagna`,
  },
];

const Index = () => {
  return (
    <div>
      <Banner text="LO SAI COSA SIGNIFICA ESSERE BIFOLCO?" />
      <div className={styles.paragraphs}>
        {explanation.map((item, key) => {
          return (
            <>
              <div key={key} className={styles.paragraph}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              </div>
              {key != explanation.length - 1 ? (
                <>
                  <span className={styles.separator}>
                    <Separator width={'150px'} vertical />
                  </span>
                  <span className={styles.separatorMobile}>
                    <Separator width={'150px'} />
                  </span>
                </>
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Index;