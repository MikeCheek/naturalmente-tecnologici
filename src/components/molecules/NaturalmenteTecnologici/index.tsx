import React from 'react';
import * as styles from './index.module.scss';
import Section from '../Section';
import Bug from '../../../assets/bug.svg';
import Insects from '../../../assets/insects.svg';
import { SectionProps } from '../Section/index.types';
import Heading from '../../atoms/Heading';

const info: SectionProps[] = [
  {
    title: "Che cos'è?",
    text: `Naturalmente Tecnologici è un evento che si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio.<br/>
Crediamo fortemente nella concreta possibilità di cambiare il territorio cambiando le menti delle persone, sempre con particolare attenzione rivolta a quelle più giovani.`,
    Svg: Bug,
    svgStyle: { transform: 'rotate(4.72deg)' },
  },
  {
    title: "Come è strutturato l'evento?",
    text: `Tre giorni di campeggio, conferenze, laboratori, formazione informale ed esperienze di autocoscienza e musica.<br/>
  Persone di tutte le età si incontreranno a Grassano (MT) per immaginare nuovi orizzonti per uno sviluppo tecnologico etico e sostenibile dal punto di vista sociale ed ambientale.`,
    Svg: Insects,
  },
  {
    title: 'Perchè lo facciamo?',
    text: `Per noi è particolarmente importante questo evento perché riponiamo in esso la speranza di riuscire a creare qualcosa che possa lasciare il segno, soprattutto a livello territoriale, cercando di catalizzare le energie di tanti ragazzi e ragazze che si sono sparse in tutta Italia rifiutando la filosofia secondo cui “le cose giù sono più difficili e non si può fare niente”.`,
    Svg: Bug,
    svgStyle: { transform: 'rotate(94.72deg)' },
  },
];

const Index = () => {
  return (
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
  );
};

export default Index;
