import React from 'react';
import Layout from '../components/organisms/Layout';
import HeroAbout from '../components/organisms/HeroAbout';
// import Loading from '../components/molecules/Loading';
import Seo from '../components/atoms/Seo';
import Syskrack from '../components/molecules/Syskrack';
import { images as syskrackImages } from '../utilities/syskrack';
import { images as organizersImages } from '../utilities/organizers';

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
  const images = syskrackImages().allFile!.edges.map(
    (image) => image.node.childImageSharp.gatsbyImageData.images.fallback.src
  );
  const organizers = organizersImages().allFile!.edges.map(
    (image) => image.node.childImageSharp.gatsbyImageData.images.fallback.src
  );

  return (
    <Seo
      title="Chi siamo"
      pathname="/chi-siamo/"
      description="Naturalmente Tecnologici è un evento organizzato dall'associazione Syskrack Giuseppe Porsia in quel di Grassano (Matera)"
      structuredData
      images={[...images, ...organizers]}
    />
  );
};

export default ChiSiamo;
