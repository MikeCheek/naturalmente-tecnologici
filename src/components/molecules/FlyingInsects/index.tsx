import React, { useEffect, useState } from 'react';
import FlyingInsect from '../../atoms/FlyingInsect';

const Index = () => {
  const [catched, setCatched] = useState<number>(0);

  const handleClick = () => {
    setCatched((old) => old + 1);
  };

  useEffect(() => {
    console.log(catched);
  }, [catched]);

  return (
    <>
      <FlyingInsect top={30} onClick={handleClick} />
      <FlyingInsect top={50} onClick={handleClick} />
      <FlyingInsect top={70} onClick={handleClick} />
      <FlyingInsect top={20} onClick={handleClick} />
    </>
  );
};

export default Index;
