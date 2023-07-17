import React from 'react';
import * as styles from './index.module.scss';
import Collina from '../../../assets/collina.svg';
import program from '../../../utilities/program';
import Timeline from '../../atoms/Timeline';
import Heading from '../../atoms/Heading';
import { Link } from 'gatsby';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="CRONOPROGRAMMA" />
      {/* <Banner text="IL PROGRAMMA NON È STATO RILASCIATO" /> */}
      <p className={styles.info}>
        L'evento avrà luogo a Grottole (MT) presso <Link to="/#quando-e-dove">Bosco Coste</Link>.
        <br />
        <br />
        Tuttavia, le attività di Giovedì 10 Agosto si svolgeranno a Grassano (MT).
      </p>
      <div className={styles.program}>
        {program.map((item, key) => (
          //@ts-ignore
          <Timeline key={key} data={item} />
        ))}
      </div>

      {/* <h3>Vuoi sapere quando verrà rilasciato?</h3>
      <h4>Rimani aggiornato iscrivendoti alla nostra newsletter!</h4>
      <div className={styles.buttonWrap}>
        <Button text="ISCRIVITI" hoverWhite title="Iscriviti alla Newsletter dell'associazione" onClick={showPopUp} />
      </div> */}
      <Collina width="1440" className={styles.collina} />
    </div>
  );
};

export default Index;
