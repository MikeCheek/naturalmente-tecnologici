import React, { useEffect, useState } from 'react';
import FlyingInsect from '../../atoms/FlyingInsect';
import * as styles from './index.module.scss';
import Flocking from '../../atoms/Flocking';

const Index = () => {
  // const [catched, setCatched] = useState<number>(0);

  // const handleClick = () => {
  //   setCatched((old) => old + 1);
  // };

  // useEffect(() => {
  //   console.log(catched);
  // }, [catched]);

  return (
    <div className={styles.wrap}>
      {/* <FlyingInsect top={30} onClick={handleClick} />
      <FlyingInsect top={50} onClick={handleClick} />
      <FlyingInsect top={70} onClick={handleClick} />
      <FlyingInsect top={20} onClick={handleClick} /> */}
      <Flocking />
    </div>
  );
};

export default Index;
