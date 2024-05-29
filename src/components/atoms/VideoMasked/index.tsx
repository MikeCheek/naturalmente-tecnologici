import React, { useEffect, useRef, useState } from 'react';
import VideoMaskedProps from './index.types';
import * as styles from './index.module.scss';
import BoscoCoste from '../../../assets/video/bosco_coste_forward.mp4';
import ShowOnView from '../ShowOnView';

const VideoMasked = ({ showOnView = false }: VideoMaskedProps) => {
  const [loadVideo, setLoadVideo] = useState<boolean>(false);

  useEffect(() => {
    setLoadVideo(true);
  }, []);

  const children = (
    <video height={500} muted autoPlay controls={false} loop playsInline>
      {loadVideo ? <source src={BoscoCoste} type="video/mp4" /> : <></>}
      Your browser doesn't support video tag
    </video>
  );

  return showOnView ? (
    <ShowOnView className={styles.videoWrap}>{children}</ShowOnView>
  ) : (
    <div className={styles.videoWrap}>{children}</div>
  );
};

export default VideoMasked;
