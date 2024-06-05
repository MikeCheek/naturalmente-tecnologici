import { graphql, useStaticQuery } from 'gatsby';
import { ReactComponent as AgenziaGiovani } from '../assets/heardOn/agenziagiovani.svg';
import { ReactComponent as Wired } from '../assets/heardOn/wired.svg';
import { ReactComponent as Tedx } from '../assets/heardOn/tedx.svg';

const images = () => {
  const data: Data = useStaticQuery(graphql`
    query HeardOn {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/heardOn/" } }
        sort: { id: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300, quality: 80)
            }
          }
        }
      }
    }
  `);

  return data;
};

const info = [
  { name: 'TEDx', svg: Tedx },
  { name: 'WIRED', svg: Wired },
  { name: 'TGR', image: 'tgr' },
  { name: 'VITA', image: 'vita' },
  {
    name: 'AGENZIA DI STAMPA GIOVANILE',
    image: 'stampagiovanile',
    showName: true,
  },
  {
    name: 'AGENZIA NAZIONALE GIOVANI',
    svg: AgenziaGiovani,
  },
  {
    name: 'RomaReport',
    image: 'romareport',
    showName: true,
  },
  {
    name: 'Basilicata 24',
    image: 'basilicata24',
  },
  {
    name: 'Sassi live',
    image: 'sassilive',
  },
  {
    name: 'Tecnica della scuola',
    image: 'tecnicascuola',
    showName: true,
  },
  { name: 'TRM Network', image: 'trm' },
];

export { images, info };
