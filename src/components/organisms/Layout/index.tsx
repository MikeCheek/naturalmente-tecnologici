import React from 'react';
import NavBar from '../../molecules/NavBar';
import { LayoutProps } from './index.types';
import * as styles from './index.module.scss';
import FlyingInsects from '../../molecules/FlyingInsects';

const Index = ({ children, insects = true }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {insects ? <FlyingInsects /> : <></>}
      <main className={styles.wrap}>{children}</main>
    </div>
  );
};

export default Index;
