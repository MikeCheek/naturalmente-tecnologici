import React from 'react';

import * as styles from './index.module.scss';
import Bug from '../../../assets/bug.svg';
import Heading from '../../atoms/Heading';
import Insects from '../../../assets/insects.svg';
import Section from '../Section';
import { SectionProps } from '../Section/index.types';

const info: SectionProps[] = [
  {
    title: "Cos'è?",
    text: `Un festival alla sua seconda edizione.<br/>
    Un evento di 3 giorni, un momento di incontro e di contaminazione della community Syskrack<br/>(in continua espansione).`,
    Svg: Bug,
    svgStyle: { transform: 'rotate(4.72deg)' },
  },
  {
    title: "Come è strutturato l'evento?",
    text: `3 giorni immersi in una location mozzafiato, selvaggia, tra le colline materane tra camping, laboratori, conferenze, esperienze, festival e incontro tra persone di ogni dove.
    <br/><br/>
    I partecipanti, gli abitanti del luogo e le community si scambieranno idee, visioni ed esperienze.`,
    Svg: Insects,
  },
  {
    title: 'Perché lo facciamo?',
    text: `L'obiettivo è indagare nuovi orizzonti dello sviluppo tecnologico, etici e sostenibili dal punto di vista sociale ed ambientale.
    <br/><br/>
    Vogliamo invertire il trend che la vede spopolarsi giorno dopo giorno e creare un
circolo virtuoso per attrarre menti innovatrici e portare nuova linfa ad un territorio spesso
considerato dormiente.`,
    Svg: Bug,
    svgStyle: { transform: 'rotate(94.72deg)' },
  },
  {
    title: 'La nostra terra',
    text: `Crediamo nel potenziale della nostra terra.
    <br/><br/>    
    Vogliamo offrire opportunità ai nomadi digitali e agli aspiranti tali promuovendo un approccio di “south-working” consapevole, equilibrato e socialmente innovativo.`,
    Svg: Insects,
    svgStyle: { transform: 'rotateY(180deg)' },
  },
];

const Index = () => {
  return (
    <>
      <div className={styles.wrap}>
        <Heading text="Naturalmente Tecnologici" />
        {info.map((item, key) => {
          return (
            <Section
              title={item.title}
              text={item.text}
              reversed={key % 2 == 1}
              key={key}
              Svg={item.Svg}
              svgStyle={item.svgStyle}
            />
          );
        })}
      </div>
    </>
  );
};

export default Index;
