import React, { useState } from 'react';
import * as styles from './index.module.scss';
import { SectionProps } from './index.types';
import ConnectionLeft from '../../../assets/connectionLeft.svg';
import ConnectionRight from '../../../assets/connectionRight.svg';

const Index = ({ title, text, Svg, reversed = false, svgStyle }: SectionProps) => {
  const [on, setOn] = useState<boolean>(false);

  const handleClick = () => {
    setOn(true);
    setTimeout(() => setOn(false), 10000);
  };

  return (
    <div className={reversed ? styles.wrapReversed : styles.wrap}>
      {reversed ? (
        <ConnectionRight className={styles.connectionRight} />
      ) : (
        <ConnectionLeft className={styles.connectionLeft} />
      )}
      <div className={reversed ? styles.textReversed : styles.text}>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
      {Svg ? (
        <Svg
          className={`${reversed ? styles.svgReversed : styles.svg} ${on ? '' : styles.svgAnimate}`}
          style={{ animationDelay: title.length / 5 + 's', ...svgStyle }}
          width={240}
          fill={on ? 'var(--nt-orange)' : 'var(--nt-light-green)'}
          onClick={handleClick}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Index;
