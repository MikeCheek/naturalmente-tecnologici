import React from 'react';
import Seo from '../components/atoms/Seo';
import Layout from '../components/organisms/Layout';
import * as styles from '../styles/NotFound.module.scss';
import Button from '../components/atoms/Button';
import SingleSection from '../components/atoms/SingleSection';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={styles.wrap}>
        <SingleSection showOnView={false} fullWidth>
          <h1>{t('404Title')}</h1>
        </SingleSection>
        <p>{t('404Paragraph')}</p>
        <Button href="/" text={t('404cta')} title={t('404cta')} internal />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="404" description="Error 404, Syskrack not found" noIndex />;

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "404"] }, language: { eq: $language } }) {
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
