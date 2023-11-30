import React from 'react';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import { showPopUp } from '../../../utilities/newsletter';
import Button from '../../atoms/Button';
import ShowOnView from '../../atoms/ShowOnView';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <Heading text={t('ContactsHeading1')} />
        <ShowOnView>
          <p dangerouslySetInnerHTML={{ __html: t('ContactsLetUsKnow') }}></p>
          <iframe
            data-tally-src="https://tally.so/embed/w7b1Xa?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="510"
            title={t('ContactsHeading1')}
            className={styles.form}
          ></iframe>
        </ShowOnView>
      </div>
      <div className={styles.section}>
        <Heading text="Newsletter" />
        <ShowOnView>
          <p dangerouslySetInnerHTML={{ __html: t('ContactsNewsletter') }}></p>
          <Button text={t('ContactsCtaText')} title={t('ContactsCtaTitle')} onClick={showPopUp} bigger />
        </ShowOnView>
      </div>
    </div>
  );
};

export default Index;
