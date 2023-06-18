import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../../molecules/SectionImageCTA';
import ShowOnView from '../ShowOnView';

const Index = () => {
  const coords = [`40°37'14.0"N`, `16°24'38.6"E`];

  return (
    <div className={styles.whenAndWhere}>
      <Heading text="Quando e dove?" />
      <ShowOnView>
        <h3>
          11 &gt; 13 Agosto 2023
          <br />
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            title="Scopri la location"
            href={'https://www.google.com/maps/place/' + coords.join(' ')}
          >
            @ Bosco Le Coste
            <b>
              <span>{coords[0]}</span> <span>{coords[1]}</span>
            </b>
          </a>
        </h3>
      </ShowOnView>
      <SectionImageCTA
        text={` Presso Bosco Le Coste, tra Grassano e Grottole, tra le argillose colline lucane.<br/>
        Rientra nel territorio dell'oasi naturale di San Giuliano, non lontano da Matera. Si gode di una vista mozzafiato, in cui l'occhio
          spazia in ogni direzione, godendo lo spettacolo degli altopiani circostanti.<br/>
          Situato a pochi chilometri dall'abitato, è il più grosso polmone verde, appendice naturale dell'oasi predetta.
          Di notevole importanza
          ambientale sono anche la Foresta, un vasto territorio boschivo dove abbonda anche la presenza di macchia
          mediterranea e di specie floristiche e faunistiche molto rare.`}
        buttonText={'Scopri la location'}
        buttonHref={'https://www.google.com/maps/place/' + coords.join(' ')}
        image={
          <StaticImage
            quality={80}
            alt="Bosco coste"
            src="../../../images/location/bosco-coste.jpg"
            layout="constrained"
            width={700}
            height={500}
          />
        }
      />
      <SectionImageCTA
        text={`Qui troverete un'area verde attrezzata dove ci
        si può immergere totalmente nella natura e farsi coccolare dai suoni che essa contiene.<br/>L'area si sviluppa in due piani, la parte superiore è un'area attrezzata con capanni per pic-nic forniti di illuminazione, giostrine
          per bambini, ristorante. Scendendo nel bosco invece si entra nel circuito ad anello che si sviluppa nel bosco
          per 5 Km, qui è possibile fare passeggiate a cavallo o mountain bike, trekking o respirare i profumi della
          natura nel sentiero didattico.`}
        buttonText={'Scopri la location'}
        buttonHref={'https://www.google.com/maps/place/' + coords.join(' ')}
        image={
          <StaticImage
            quality={80}
            alt="Bosco coste"
            src="../../../images/location/bosco-2.JPG"
            layout="constrained"
            width={700}
            height={500}
          />
        }
        reversed
      />
    </div>
  );
};

export default Index;
