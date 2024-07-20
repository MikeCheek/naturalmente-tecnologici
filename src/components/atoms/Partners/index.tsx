import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../Heading';
import { ReactComponent as Syskrack } from '../../../assets/syskrack.svg';
import { ReactComponent as IBM } from '../../../assets/partner/IBM.svg';
import { ReactComponent as Podus } from '../../../assets/partner/podus.svg';
import { ReactComponent as Basilicata } from '../../../assets/partner/basilicata.svg';
// import { ReactComponent as MarinoBus } from '../../../assets/partner/marino-bus.svg';
// import { ReactComponent as Katzuma } from '../../../assets/partner/katzuma.svg';
import { ReactComponent as LaPotenzaDellArte } from '../../../assets/partner/lapotenzadellarte.svg';
import ShowOnView from '../ShowOnView';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <div className={styles.partners}>
      <Heading text="Powered By" />
      <ShowOnView className={styles.wrap}>
        <a href="https://www.syskrack.org/" rel="noopener noreferrer" title="Syskrack" target="_blank">
          <Syskrack className={styles.logoLong} width={250} />
        </a>
        <h4 dangerouslySetInnerHTML={{ __html: t('PartnersText') }}></h4>
      </ShowOnView>
      <Heading text={language === 'it' ? 'Con il patrocinio di' : 'Under the patronage of'} />
      <ShowOnView className={styles.wrap}>
        <StaticImage
          layout="constrained"
          src="../../../images/partners/comune_grottole.webp"
          className={styles.logoLong}
          alt="Comune di Grottole"
          width={250}
        />
      </ShowOnView>
      <Heading text="Location Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="https://podus.it/" title="Podus" rel="noopener noreferrer" target="_blank">
          <Podus className={styles.logoLong} width={400} />
        </a>
      </ShowOnView>
      <Heading text="Media Partner" />
      <ShowOnView className={styles.wrap}>
        <span style={{ width: '100%' }}>
          <StaticImage
            layout="constrained"
            src="../../../images/partners/logo-rfl.png"
            className={styles.logoLongBig}
            alt="Radio Frequenza Libera"
            width={400}
          />
        </span>
        <a href="https://border-radio.it/" title="Border Radio" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/border-radio.png"
            className={styles.logo}
            alt="Border Radio"
            width={100}
          />
        </a>
        <a href="https://www.italiachecambia.org/" title="Italia che cambia" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/italia-che-cambia.png"
            className={styles.logoLong}
            alt="Italia che cambia"
            width={100}
          />
        </a>
        <StaticImage
          layout="constrained"
          src="../../../images/partners/turbostudio.webp"
          className={styles.logo}
          alt="Turbo Studio - Sky"
          width={150}
        />
      </ShowOnView>
      <Heading text="Activity Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="" title="MAAP" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/maap.png"
            className={styles.logo}
            style={{ borderRadius: '50%' }}
            alt="Atomico"
            width={150}
          />
        </a>
        <a href="https://skillsbuild.org/" title="IBM" rel="noopener noreferrer" target="_blank">
          <IBM className={styles.logoHorizontal} height={40} />
        </a>
        <a href="" title="Atomico" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/atomico.jpg"
            className={styles.logo}
            style={{ borderRadius: '50%' }}
            alt="Atomico"
            width={150}
          />
        </a>
      </ShowOnView>
      <Heading text="Mobility Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="https://marinobus.it/" title="Marino Bus" rel="noopener noreferrer" target="_blank">
          {/* <MarinoBus className={styles.logoLong} width={200} style={{ maxHeight: '100px' }} /> */}
          <StaticImage
            layout="constrained"
            src="../../../images/partners/marino-bus.png"
            className={styles.logoLong}
            width={200}
            style={{ maxHeight: '100px' }}
            alt="MarinoBus"
          />
        </a>
      </ShowOnView>
      <Heading text="Sponsor" />
      <ShowOnView className={styles.wrap}>
        <a href="" title="EDEALAB" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/edealab.jpg"
            className={styles.logo}
            alt="EDEALAB"
            width={150}
          />
        </a>
        <a href="" title="Verre Gioielli" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/verre.jpg"
            className={styles.logo}
            alt="Verre Gioielli"
            width={150}
          />
        </a>
      </ShowOnView>
      <Heading text="Hospitality Partner" />
      <ShowOnView className={styles.wrap}>
        {/* <a href="" title="Wonder Grottole" rel="noopener noreferrer" target="_blank"> */}
        <StaticImage
          layout="constrained"
          src="../../../images/partners/wonder_grottole.jpg"
          className={styles.logo}
          alt="Wonder Grottole"
          width={150}
        />
        {/* </a> */}
      </ShowOnView>
      <Heading text="Community Partner" />
      <ShowOnView className={styles.wrap}>
        {/*<a href="http://www.hackability.it/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/hackability.jpg"
            className={styles.logo}
            alt="Hackability"
            width={150}
          />
        </a>*/}
        {/* <a href="" rel="noopener noreferrer" title="Potenza Urban Art" target="_blank"> */}
        <LaPotenzaDellArte className={styles.logoHorizontal} height={200} />
        <StaticImage
          layout="constrained"
          src="../../../images/partners/potenza_urban_art.jpg"
          className={styles.logo}
          style={{ borderRadius: '50%' }}
          alt="Potenza Urban Art"
          width={150}
        />
        {/* </a> */}
        <a href="https://www.ashoka.org" title="Ashoka" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/ashoka.jpg"
            className={styles.logo}
            alt="Potenza Urban Art"
            width={150}
          />
        </a>
        <Basilicata className={styles.logo} width={150} />
      </ShowOnView>
      <Heading text="Technical Partner" />
      <ShowOnView className={styles.wrap}>
        <a title="Centro Servizio Volontariato - Basilicata" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/cvs-basilicata.jpeg"
            className={styles.logoLong}
            alt="Centro Servizio Volontariato - Basilicata"
            width={200}
          />
        </a>
      </ShowOnView>
      <Heading text="Music Partner" />
      <ShowOnView className={styles.wrap}>
        <a href="" title="Katzuma" rel="noopener noreferrer" target="_blank">
          {/* <Katzuma className={styles.logoLong} width={200} /> */}
          <StaticImage
            layout="constrained"
            src="../../../images/partners/katzuma.png"
            className={styles.logoLong}
            width={200}
            alt="Katzuma"
          />
        </a>
        <a href="" title="Open Stage" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/openstage.png"
            className={styles.logoLong}
            alt="Open Stage"
            width={200}
          />
        </a>
        <a href="" title="Millenium Van" rel="noopener noreferrer" target="_blank">
          <StaticImage
            layout="constrained"
            src="../../../images/partners/millenium.png"
            className={styles.logoLong}
            alt="Millenium Van"
            width={200}
          />
        </a>
      </ShowOnView>
    </div>
  );
};

export default Index;
