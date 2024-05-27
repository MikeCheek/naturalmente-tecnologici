import React, { useEffect, useRef, useState } from 'react';
import VideoMaskedProps from './index.types';
import * as styles from './index.module.scss';
import BoscoCoste from '../../../assets/bosco_coste_low.mp4';
import ShowOnView from '../ShowOnView';

const VideoMasked = ({}: VideoMaskedProps) => {
  return (
    <ShowOnView className={styles.videoWrap}>
      <video height={500} muted autoPlay controls={false} loop playsInline poster="/images/bosco-1-low.JPG">
        <source src={BoscoCoste} type="video/mp4" />
        Your browser doesn't support video tag
      </video>
    </ShowOnView>
  );
};

export default VideoMasked;
