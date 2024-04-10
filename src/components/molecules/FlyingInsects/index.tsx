import React, { useEffect, useState } from 'react';
import FlyingInsect from '../../atoms/FlyingInsect';
import * as styles from './index.module.scss';
import Flocking from '../../atoms/Flocking';
import detectBrowser from '../../../utilities/detectBrowser';

const isBrowser = typeof window !== 'undefined';

const Index = () => {
  // const [catched, setCatched] = useState<number>(0);
  // const handleClick = () => setCatched((old) => old + 1);

  // useEffect(() => {
  //   console.log(catched);
  // }, [catched]);

  // function toggleFullScreen() {
  //   if ((!document.fullscreenElement) || (!document.webkitFullscreenElement)){
  //     try{
  //       document.documentElement.webkitRequestFullscreen();
  //     }
  //     catch(e){
  //       document.documentElement.requestFullscreen();
  //     }

  //   } else {
  //     if ((document.exitFullscreen) || (document.webkitExitFullscreen)){
  //       try{
  //         document.webkitExitFullscreen();
  //       }
  //       catch(e){
  //         document.exitFullscreen();
  //       }
  //     }
  //   }
  // }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className={styles.wrap}>
      {/* <FlyingInsect top={30} onClick={handleClick} />
      <FlyingInsect top={50} onClick={handleClick} />
      <FlyingInsect top={70} onClick={handleClick} />
      <FlyingInsect top={20} onClick={handleClick} /> */}
      {isBrowser && detectBrowser() != 'Safari' ? (
        <button className={styles.zen} onClick={toggleFullscreen}>
          Zen Mode
        </button>
      ) : (
        <></>
      )}
      <Flocking />
    </div>
  );
};

export default Index;
