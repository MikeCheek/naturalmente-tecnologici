import React, { useState } from 'react';
import { MultipleLinksProps } from './index.types';
import * as styles from './index.module.scss';
import Down from '../../../assets/down.svg';

const Index = ({ name, active = false, children }: MultipleLinksProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={styles.wrap}>
      <p
        className={styles.name}
        onClick={() => setShow((curr) => !curr)}
        style={active ? { color: 'var(--nt-orange)' } : {}}
        onMouseEnter={() => setShow(true)}
      >
        {name}{' '}
        <Down
          width={20}
          height={20}
          style={{
            transform: show ? 'rotate(180deg)' : 'rotate(0)',
            fill: active ? 'var(--nt-orange)' : '',
          }}
        />
      </p>
      <div
        className={styles.links}
        onMouseLeave={() => setShow(false)}
        style={show ? { transform: 'translate(0, 0)', opacity: 1 } : { transform: 'translate(0, -20%)', opacity: 0 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Index;
