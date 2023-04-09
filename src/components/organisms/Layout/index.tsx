import React from 'react';
import NavBar from '../../molecules/NavBar';
import { LayoutProps } from './index.types';
import * as styles from './index.module.scss';
import FlyingInsects from '../../molecules/FlyingInsects';
import Footer from '../../molecules/Footer';

const Index = ({ children, insects = true }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {insects ? <FlyingInsects /> : <></>}
      <main className={styles.wrap}>{children}</main>
      <Footer />
    </div>
  );
};

export default Index;
