import React from 'react';
import * as styles from './index.module.scss';
import { CloudProps } from './index.types';
import ShowOnView from '../ShowOnView';

const Index = ({ text }: CloudProps) => {
  return (
    <ShowOnView className={styles.wrap}>
      <div className={styles.cloud}>
        <em dangerouslySetInnerHTML={{ __html: `"${text}"` }}></em>
      </div>
      <div className={styles.smallOne}></div>
      <div className={styles.smallTwo}></div>
    </ShowOnView>
  );
};

export default Index;
