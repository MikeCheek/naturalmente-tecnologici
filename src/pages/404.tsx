import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/atoms/Seo';
import Layout from '../components/organisms/Layout';
import * as styles from '../styles/NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.wrap}>
        <h1>Syskrack not found</h1>
        <p>Mi sa che sei fuori rotta!</p>
        <Link className={styles.button} to="/">
          Torna alla home
        </Link>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="404" description="Error 404, Syskrack not found" noIndex />;

export default NotFoundPage;
