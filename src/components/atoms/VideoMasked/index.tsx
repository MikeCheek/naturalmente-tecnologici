import React from 'react';
import VideoMaskedProps from './index.types';
import * as styles from './index.module.scss';
import BoscoCoste from '../../../assets/video/webm/bosco_coste_forward.webm';
import ShowOnView from '../ShowOnView';
import Player from 'react-player/lazy';
import { ReactComponent as NT24 } from '../../../assets/nt24.svg';

const VideoMasked = ({ showOnView = false }: VideoMaskedProps) => {
  const children = (
    <Player
      fallback={<NT24 className={styles.placeholder} height="100%" style={{ fill: 'var(--nt-dark-green)' }} />}
      url={BoscoCoste}
      height={500}
      muted
      autoPlay
      playing
      controls={false}
      loop
      playsInline
    />
  );

  return showOnView ? (
    <ShowOnView className={styles.videoWrap}>{children}</ShowOnView>
  ) : (
    <div className={styles.videoWrap}>{children}</div>
  );
};

export default VideoMasked;
