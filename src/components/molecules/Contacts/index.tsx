import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import { showPopUp } from '../../../utilities/newsletter';
import Button from '../../atoms/Button';
import ShowOnView from '../../atoms/ShowOnView';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <Heading text="Contattaci" />
        <ShowOnView>
          <p>
            Non hai trovato quello che cercavi?
            <br />
            Facci sentire la tua voce!
          </p>
          <iframe
            data-tally-src="https://tally.so/embed/w7b1Xa?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="510"
            title="CONTATTACI"
            className={styles.form}
          ></iframe>
        </ShowOnView>
      </div>
      <div className={styles.section}>
        <Heading text="Newsletter" />
        <ShowOnView>
          <p>
            Ti sei iscritto alla nostra newsletter?
            <br />
            <br />
            Iscriviti per restare sempre aggiornato sulle novità dell'evento!
          </p>
          <Button text="ISCRIVITI" title="Iscriviti alla Newsletter dell'associazione" onClick={showPopUp} bigger />
        </ShowOnView>
      </div>
    </div>
  );
};

export default Index;
