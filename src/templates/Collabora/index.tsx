import React from 'react';
import { CollaboraData } from '../../utilities/collaboraData';
import * as styles from './index.module.scss';
import Seo from '../../components/atoms/Seo';
import { HeadProps } from 'gatsby';
import Layout from '../../components/organisms/Layout';
import HeroPartecipa from '../../components/organisms/HeroPartecipa';
import Heading from '../../components/atoms/Heading';

interface IndexProps {
  pageContext: CollaboraData;
}

const Index = ({ pageContext }: IndexProps) => {
  return (
    <Layout>
      <HeroPartecipa heading={pageContext.name} />
      <div className={styles.head}>
        <h4 dangerouslySetInnerHTML={{ __html: pageContext.description }}></h4>
      </div>
      <Heading text="Contattaci" />
      <div className={styles.formWrap}>
        <iframe
          data-tally-src={`https://tally.so/embed/n9XpoK?type=${pageContext.name}&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
          loading="lazy"
          width="100%"
          height="420"
          title="CONTATTACI"
          className={styles.form}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Index;

export const Head = ({ location, pageContext }: HeadProps) => {
  const context = pageContext as CollaboraData;

  return (
    <Seo
      title={context.name + ' - Collabora'}
      pathname={location.pathname}
      description={context.description}
      structuredData
    />
  );
};
