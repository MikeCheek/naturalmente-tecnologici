import React, { useEffect, useState } from 'react';
import { PartecipaData } from '../../utilities/partecipaData';
import * as styles from './index.module.scss';
import Seo from '../../components/atoms/Seo';
import { HeadProps } from 'gatsby';
import Layout from '../../components/organisms/Layout';
import Heading from '../../components/atoms/Heading';
import Loading from '../../components/molecules/Loading';

interface IndexProps {
  pageContext: PartecipaData;
}

const Index = ({ pageContext }: IndexProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (loaded) setLoading(false);
  }, [loaded]);

  return (
    <Layout>
      <div className={styles.head}>
        <Heading text={pageContext.name} />
        <h4 dangerouslySetInnerHTML={{ __html: pageContext.description }}></h4>
      </div>
      <Heading text="Contattaci" />
      <div className={styles.formWrap}>
        {loading ? <Loading noTitle /> : <></>}
        <iframe
          data-tally-src={`https://tally.so/embed/n9XpoK?type=${pageContext.name}&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
          loading="lazy"
          width="100%"
          height={loading ? '0' : '420'}
          title="CONTATTACI"
          className={styles.form}
          onLoad={() => setLoaded(true)}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Index;

export const Head = ({ location, pageContext }: HeadProps) => {
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
