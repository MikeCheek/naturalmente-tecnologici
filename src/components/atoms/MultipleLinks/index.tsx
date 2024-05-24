import React, { useState } from 'react';
import { MultipleLinksProps } from './index.types';
import * as styles from './index.module.scss';
import Down from '../../../assets/down.svg';
import { Link } from 'gatsby';

const Index = ({ name, active = false, children }: MultipleLinksProps) => {
  const [show, setShow] = useState<boolean>(false);
  console.log('Mounted multiple links');
  return (
    <div className={show ? styles.wrapShown : styles.wrap}>
      <p
        className={styles.name}
        onClick={() => setShow((curr) => !curr)}
        style={active ? { color: 'var(--nt-orange)' } : {}}
        // onMouseEnter={() => setShow(true)}
      >
        <span>{name}</span>
        {/* <Down
          width={20}
          height={20}
          style={{
            transform: show ? 'rotate(180deg)' : 'rotate(0)',
            fill: active ? 'var(--nt-orange)' : '',
          }}
        /> */}
      </p>
      <div
        className={styles.links}
        // onMouseLeave={() => setShow(false)}
        style={show ? { transform: 'translate(0, 0)', opacity: 1, pointerEvents: 'auto' } : {}}
      >
        {children}
      </div>
    </div>
  );
};

export default Index;
