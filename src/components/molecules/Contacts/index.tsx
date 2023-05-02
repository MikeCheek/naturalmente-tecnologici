import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="Facci sentire la tua voce!" />
      <p>
        Hai un'idea?
        <br />
        Vuoi proporre una collaborazione?
        <br />
        Vuoi saperne di più sull'evento?
      </p>
      <p>
        Scrivici su{' '}
        <a title="Scrivici una mail" href="mailto:direttivo@syskrack.org">
          direttivo@syskrack.org
        </a>
      </p>
    </div>
  );
};

export default Index;
