import React from 'react';

import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Section from '../Section';
import Bug from '../../../assets/bug.svg';
import Insects from '../../../assets/insects.svg';
import { info } from '../../../utilities/naturalmenteTecnologici';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <Heading text="Naturalmente Tecnologici" />
      <div></div>
      {info.map((item, key) => {
        return (
          <Section
            title={item.title}
            text={item.text}
            reversed={key % 2 == 1}
            key={key}
            Svg={key % 2 == 0 ? Bug : Insects}
            svgStyle={item.svgStyle}
          />
        );
      })}
    </div>
  );
};

export default Index;
