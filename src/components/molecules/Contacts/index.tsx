import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import { showPopUp } from '../../../hooks/newsletter';
import Button from '../../atoms/Button';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <Heading text="Facci sentire la tua voce!" />
        <p>
          Hai un'idea?
          <br />
          Vuoi proporre una collaborazione?
          <br />
          Vuoi saperne di più sull'evento?
        </p>
        <p>
          Scrivici a{' '}
          <a title="Scrivici una mail" href="mailto:direttivo@syskrack.org">
            direttivo@syskrack.org
          </a>
        </p>
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
