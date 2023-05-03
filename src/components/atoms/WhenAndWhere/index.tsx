import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';

const Index = () => {
  return (
    <div className={styles.whenAndWhere}>
      <Heading text="Quando e dove?" />
      <h3>
        11-13 Agosto 2023
        <br />
        <br />A Grassano (Matera), tra le argillose colline lucane.
      </h3>
    </div>
  );
};

export default Index;
