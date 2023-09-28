import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/atoms/Seo';
import Layout from '../components/organisms/Layout';
import * as styles from '../styles/NotFound.module.scss';
import Button from '../components/atoms/Button';
import SingleSection from '../components/atoms/SingleSection';
import Thanks from '../components/molecules/Thanks';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.wrap}>
        <SingleSection showOnView={false} fullWidth>
          <h1>Syskrack not found</h1>
        </SingleSection>
        <p>Mi sa che sei fuori rotta!</p>
        <Button href="/" text="Torna alla home" title="Torna alla home" internal />
        <Thanks />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="404" description="Error 404, Syskrack not found" noIndex />;

export default NotFoundPage;
