import React from 'react';
import * as styles from './index.module.scss';
import { SeparatorProps } from './index.types';

const Index = ({
  width = '80%',
  height = '3px',
  color = 'var(--nt-orange)',
  vertical = false,
  style,
}: SeparatorProps) => {
  return (
    <div
      style={{ ...style, width: vertical ? height : width, height: vertical ? width : height, backgroundColor: color }}
      className={styles.separator}
    ></div>
  );
};

export default Index;
