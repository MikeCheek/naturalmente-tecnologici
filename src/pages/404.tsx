import React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/atoms/Seo';
import Layout from '../components/organisms/Layout';
import FlyingInsects from '../components/molecules/FlyingInsects';
import * as styles from '../styles/NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <Layout>
      <FlyingInsects />
      <div className={styles.wrap}>
        <h1>
          404
          <br />
          Syskrack not found
        </h1>
        <p>We couldn't find what you were looking for.</p>
        <Link className={styles.button} to="/">
          Go home
        </Link>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="404" description="Error 404, Syskrack not found" />;

export default NotFoundPage;
