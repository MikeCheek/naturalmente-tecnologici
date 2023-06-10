import React from 'react';
import { PartecipaData } from '../../utilities/partecipaData';
import * as styles from './index.module.scss';
import Seo from '../../components/atoms/Seo';
import { HeadProps } from 'gatsby';
import Layout from '../../components/organisms/Layout';
import Heading from '../../components/atoms/Heading';

interface IndexProps {
  pageContext: PartecipaData;
}

const Index = ({ pageContext }: IndexProps) => {
  console.log(pageContext);
  return (
    <Layout>
      <div className={styles.head}>
        <Heading text={pageContext.name} />
        <h4 dangerouslySetInnerHTML={{ __html: pageContext.description }}></h4>
      </div>
      <Heading text="Contattaci" />
      <iframe
        data-tally-src={`https://tally.so/embed/n9XpoK?type=${pageContext.name}&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="420"
        title="CONTATTACI"
        className={styles.form}
      ></iframe>
    </Layout>
  );
};

export default Index;

export const Head = ({ location, pageContext }: HeadProps) => {
  console.log(location, pageContext);

  const context = pageContext as PartecipaData;

  return (
    <Seo
      title={context.name + ' - Partecipa'}
      pathname={location.pathname}
      description={context.description}
      structuredData
    />
  );
};
