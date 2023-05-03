import React from 'react';
import * as styles from './index.module.scss';
import Cloud from '../../atoms/Cloud';
import CardPerson from '../../molecules/CardPerson';
import { StaticImage } from 'gatsby-plugin-image';
import { organizers } from '../../../hooks/useInfo';
import Heading from '../../atoms/Heading';

const Index = () => {
  const organizer = organizers[1];

  return (
    <>
      <Heading text="Tema" />
      <div className={styles.wrap}>
        <h3>
          RIPRENDIAMOCI IL FUTURO.
          <br />
          RAGIONAMENTI COMPLESSI SULL'ACCELERAZIONE DEI NOSTRI TEMPI
        </h3>
      </div>
      <div className={styles.theme}>
        <Cloud
          text="Ciao sono Giuseppe Becci, l'organizzatore dell'evento Naturalmente Tecnologici.<br/><br/>Se l'innovazione non è anche sociale, allora è speculazione sull'ignoranza degli altri.<br/>
Abbiamo scelto questo tema perché crediamo che lo sviluppo tecnologico necessiti di un ragionamento sulla direzione in cui lo si sta spingendo. Vogliamo che le persone possano assumere una posizione cosciente, per questo investiamo molte risorse nella formazione."
        />
        <CardPerson
          name={organizer.name}
          role={organizer.role}
          linkedin={organizer.linkedin}
          website={organizer.website}
          noMargin
          image={
            <StaticImage
              src="../../../images/crew/becci.JPG"
              width={200}
              height={250}
              quality={80}
              placeholder="blurred"
              className={styles.becci}
              alt="Giuseppe Becci"
              layout="constrained"
            />
          }
        />
      </div>
    </>
  );
};

export default Index;
