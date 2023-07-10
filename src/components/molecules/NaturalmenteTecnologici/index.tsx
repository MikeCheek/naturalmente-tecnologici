import React from 'react';

import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import Bug from '../../../assets/bug.svg';
import Insects from '../../../assets/insects.svg';
import Section from '../Section';
import { info, whatIs } from '../../../utilities/naturalmenteTecnologici';
import SingleSection from '../../atoms/SingleSection';
import Button from '../../atoms/Button';
import { Eventbrite } from '../../../utilities/tickets';
import HeardOn from '../../atoms/HeardOn';
import WhenAndWhere from '../../atoms/WhenAndWhere';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.singleSectionsWrap}>
        {whatIs.map((item, key) => (
          <div className={styles.singleSections} style={item.big ? {} : { maxWidth: '500px' }} key={key}>
            <Heading text={item.name} smaller={key != 0} />
            <SingleSection>
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              {item.eventbrite ? (
                <Button
                  text={'Riserva il tuo posto qui!'}
                  href={'#biglietti'}
                  internal
                  title={'Riserva il tuo posto qui!'}
                ></Button>
              ) : (
                <></>
              )}
            </SingleSection>
          </div>
        ))}
      </div>
      <HeardOn />
      <WhenAndWhere />
      <Heading text="Cosa faremo" />
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
