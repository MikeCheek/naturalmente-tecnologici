import React from 'react';
import Heading from '../Heading';
import * as styles from './index.module.scss';
// import { StaticImage } from 'gatsby-plugin-image';
import SectionImageCTA from '../../molecules/SectionImageCTA';
import ShowOnView from '../ShowOnView';
import Button from '../Button';
import { coords, mapsLink } from '../../../utilities/howToReach';
import BoscoCoste from '../../../assets/bosco_coste_low.mp4';
import BoscoCoste1 from '../../../assets/bosco_coste_1_low.mp4';

const Index = () => {
  return (
    <div className={styles.whenAndWhere}>
      <Heading text="Quando e dove?" />
      <ShowOnView>
        <h3>
          Basilicata, Grottole (MT)
          <br />
          11 &gt; 13 Agosto 2023
          <br />
          <br />
          <a rel="noopener noreferrer" target="_blank" title="Scopri la location" href={mapsLink}>
            @ Bosco Le Coste
            <b>
              <span>{coords[0]}</span> <span>{coords[1]}</span>
            </b>
          </a>
        </h3>
      </ShowOnView>
      <ShowOnView>
        <h4>
          Non sai come raggiungere la location?
          <br />
          Leggi la nostra guida nella pagina Info
        </h4>
        <Button text="Come raggiungerci" title="Come raggiungerci" href="/info/#come-raggiungerci" internal />
      </ShowOnView>
      <SectionImageCTA
        text={`Il festival avrà luogo presso Bosco Le Coste, tra Grassano e Grottole, tra le argillose colline lucane.<br/>
        Rientra nel territorio dell'oasi naturale di San Giuliano, non lontano da Matera. Si gode di una vista mozzafiato, in cui l'occhio
          spazia in ogni direzione, godendo lo spettacolo degli altopiani circostanti.<br/>
          Situato a pochi chilometri dall'abitato, è il più grosso polmone verde, appendice naturale dell'oasi predetta.
          Di notevole importanza
          ambientale sono anche la Foresta, un vasto territorio boschivo dove abbonda anche la presenza di macchia
          mediterranea e di specie floristiche e faunistiche molto rare.`}
        buttonText={'Scopri la location'}
        buttonHref={mapsLink}
        imageOrVideo={
          <video
            height={500}
            muted
            autoPlay
            controls={false}
            loop
            playsInline
            poster="../../../images/location/bosco-1-low.JPG"
          >
            <source src={BoscoCoste} type="video/mp4" />
            Your browser doesn't support video tag
          </video>
        }
      />
      <SectionImageCTA
        text={`Qui troverete un'area verde attrezzata dove ci
        si può immergere totalmente nella natura e farsi coccolare dai suoni che essa contiene.<br/>L'area si sviluppa in due piani, la parte superiore è un'area attrezzata con capanni per pic-nic forniti di illuminazione, giostrine
          per bambini, ristorante. Scendendo nel bosco invece si entra nel circuito ad anello che si sviluppa nel bosco
          per 5 Km, qui è possibile fare passeggiate a cavallo o mountain bike, trekking o respirare i profumi della
          natura nel sentiero didattico.`}
        buttonText={'Scopri la location'}
        buttonHref={mapsLink}
        imageOrVideo={
          <video
            height={500}
            muted
            autoPlay
            controls={false}
            loop
            playsInline
            poster="../../../images/location/bosco-2-low.JPG"
          >
            <source src={BoscoCoste1} type="video/mp4" />
            Your browser doesn't support video tag
          </video>
          // <StaticImage
          //   quality={80}
          //   alt="Bosco coste"
          //   src="../../../images/location/bosco-2.JPG"
          //   layout="constrained"
          //   width={700}
          //   height={500}
          // />
        }
        reversed
      />
    </div>
  );
};

export default Index;
