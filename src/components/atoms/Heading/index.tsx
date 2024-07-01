import React from 'react';
import * as styles from './index.module.scss';
import { HeadingProps } from './index.types';
import ShowOnView from '../ShowOnView';
import { textToId } from '../../../utilities/sanitizer';

const Index = ({
  text,
  marginTop = false,
  smaller = false,
  main = false,
  textWhite = false,
  showOnView = true,
  simple = true,
  id,
}: HeadingProps) => {
  const style = { color: simple ? 'var(--nt-orange)' : textWhite ? 'var(--nt-white)' : 'var(--nt-green)' };

  const Heading = (
    <div
      className={styles.headingWrap}
      id={id ?? textToId(text)}
      style={{
        marginTop: marginTop ? '70px' : '',
      }}
    >
      {simple ? <></> : <div className={styles.orange}></div>}

      {main ? (
        <h1 className={styles.heading} style={style} dangerouslySetInnerHTML={{ __html: text }}></h1>
      ) : smaller ? (
        <h3 className={styles.heading} style={style} dangerouslySetInnerHTML={{ __html: text }}></h3>
      ) : (
        <h2 className={styles.heading} style={style} dangerouslySetInnerHTML={{ __html: text }}></h2>
      )}
    </div>
  );

  return showOnView ? <ShowOnView>{Heading}</ShowOnView> : <>{Heading}</>;
};

export default Index;
