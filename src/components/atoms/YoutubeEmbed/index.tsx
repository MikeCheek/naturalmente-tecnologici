import React from 'react';
import YoutubeEmbedProps from './index.types';
import * as styles from './index.module.scss';

const Index = ({ id }: YoutubeEmbedProps) => (
  <iframe
    width="853"
    height="480"
    src={`https://www.youtube.com/embed/${id}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    title="Embedded youtube video"
    loading="lazy"
    className={styles.video}
  />
);

export default Index;