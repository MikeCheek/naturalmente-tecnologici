import React from 'react';

import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import HeardOn from '../../atoms/HeardOn';
import WhenAndWhere from '../WhenAndWhere';
import { useTranslation } from 'react-i18next';
import BigPictureSection from '../../atoms/BigPictureSection';
import { images as ntImages } from '../../../utilities/ntPhotos';
import Shorty from '../../../assets/video/webm/shorty_10s_low.webm';
import Moddilugitrix from '../../../assets/video/webm/moddilugitrix_10s_low.webm';
import Baldini from '../../../assets/video/webm/baldini_10s_low.webm';
import Millenium from '../../../assets/video/webm/millenium_10s_low.webm';
import VideoMasked from '../../atoms/VideoMasked';
import FastActions from '../FastActions';

const Index = () => {
  const { t } = useTranslation();
  const { music, activities, nature } = ntImages();

  return (
    <div className={styles.wrap}>
      <div className={styles.singleSectionsWrap}>
        {/* <Heading text={t('EventTitle')} smaller={false} simple showOnView={false} />
        <div className={styles.singleSections}>
          <VideoMasked />
          <p dangerouslySetInnerHTML={{ __html: t('EventDescription') }}></p>
        </div> */}
        <FastActions />
        <div style={{ width: '100%', height: '200px' }}> </div>
        <BigPictureSection
          images={music}
          videos={[Shorty, Moddilugitrix, Baldini, Millenium]}
          title={t('Value1')}
          text={t('ValueText1')}
        />
        <BigPictureSection images={activities} title={t('Value2')} text={t('ValueText2')} reverse />
        <BigPictureSection images={nature} title={t('Value3')} text={t('ValueText3')} />
      </div>
      <HeardOn />

      <WhenAndWhere />
    </div>
  );
};

export default Index;
