import React from 'react';
import NavBar from '../../molecules/NavBar';
import { LayoutProps } from './index.types';
import * as styles from './index.module.scss';

const Index = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main className={styles.wrap}>{children} </main>
    </div>
  );
};

export default Index;
