import { graphql, useStaticQuery } from 'gatsby';

interface Info {
  name: string;
  role: string;
  linkedin?: string;
  website?: string;
  image: number;
}

export const info = [
  {
    name: 'Davide Saladino',
    role: 'President',
    image: 0,
  },
  {
    name: 'Giuseppe Becci',
    role: '',
    // role: 'Project Manager',
    linkedin: 'https://www.linkedin.com/in/giuseppe-becci-3b8402171/',
    image: 1,
  },
  {
    name: 'Giuseppe Liuzzi',
    // role: 'Community Manager<br/>CTO',
    linkedin: 'https://www.linkedin.com/in/giuseppe-liuzzi-pirat3/',
    website: 'https://giuseppeliuzzi.com',
    image: 2,
  },
  {
    name: 'Michele Pulvirenti',
    role: 'Developer',
    linkedin: 'https://www.linkedin.com/in/michele-pulvirenti/',
    website: 'https://michelepulvirenti.vercel.app/?r=nt',
    image: 3,
  },
  {
    name: 'Bernardo Forcillo',
    role: 'Developer',
    linkedin: 'https://www.linkedin.com/in/bernardoforcillo/',
    website: 'https://bernardoforcillo.com/',
    image: 4,
  },
  { name: 'Marouan Elkoura', role: 'Sponsor Specialist', image: 5 },
  { name: 'Grazia Muro', role: 'Segretaria', image: 6 },
  { name: 'Teodosio Santagata', role: 'Direttore Artistico', image: 7 },
  { name: 'Giovanni Restaino', role: 'Direttore Artistico', image: 8 },
] as const;

export const images = () => {
  const data: Data = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/crew/" } }
        sort: { name: ASC }
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

export type OrganizersNames = (typeof info)[number]['name'];
