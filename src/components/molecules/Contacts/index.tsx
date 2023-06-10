import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import { showPopUp } from '../../../utilities/newsletter';
import Button from '../../atoms/Button';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <Heading text="Contattaci" />
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

        {/* <p>
          Scrivici a{' '}
          <a title="Scrivici una mail" href="mailto:direttivo@syskrack.org">
            direttivo@syskrack.org
          </a>
        </p> */}
      </div>
      <div className={styles.section}>
        <Heading text="Newsletter" />
        <p>
          Ti sei iscritto alla nostra newsletter?
          <br />
          I biglietti dell'evento non sono ancora usciti.
          <br />
          <br />
          Iscriviti alla nostra newsletter per non perderti l'Early Bird!
        </p>
        <Button text="ISCRIVITI" title="Iscriviti alla Newsletter dell'associazione" onClick={showPopUp} />
      </div>
    </div>
  );
};

export default Index;
