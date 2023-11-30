import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
// import Loading from '../components/molecules/Loading';
import Seo from '../components/atoms/Seo';
import Syskrack from '../components/molecules/Syskrack';
import { images as syskrackImages } from '../utilities/syskrack';
import { images as organizersImages } from '../utilities/organizers';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

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

export const Head = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const images = syskrackImages().allFile!.edges.map(
    (image) => image.node.childImageSharp.gatsbyImageData.images.fallback.src
  );
  const organizers = organizersImages().allFile!.edges.map(
    (image) => image.node.childImageSharp.gatsbyImageData.images.fallback.src
  );

  return (
    <Seo
      lang={language}
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
