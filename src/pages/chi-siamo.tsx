import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
// import Loading from '../components/molecules/Loading';
import Seo from '../components/atoms/Seo';
import Syskrack from '../components/molecules/Syskrack';
import { images as syskrackImages } from '../utilities/syskrack';
import { images as organizersImages } from '../utilities/organizers';
import { HeadProps, graphql } from 'gatsby';

const ChiSiamo = () => {
  // const Organizers = lazy(() => import('../components/organisms/Organizers'));

  return (
    <Layout>
      <HeroAbout />
      <Syskrack />
      {/* <Suspense fallback={<Loading />}>
        <Organizers />
      </Suspense> */}
    </Layout>
  );
};

export const Head = ({ data, pageContext }: HeadProps) => {
  const t = (key: string) => JSON.parse((data as any).locales.edges[1].node.data)[key] ?? key;
  const images = syskrackImages().allFile!.edges.map(
    (image) => image.node.childImageSharp.gatsbyImageData.images.fallback.src
  );
  const organizers = organizersImages().allFile!.edges.map(
    (image) => image.node.childImageSharp.gatsbyImageData.images.fallback.src
  );

  return (
    <Seo
      lang={(pageContext as any).language}
      title={t('SEOTitle')}
      pathname="/chi-siamo/"
      description={t('SEODescription')}
      structuredData
      images={[...images, ...organizers]}
    />
  );
};

export default ChiSiamo;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "who"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
