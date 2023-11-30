import React from 'react';
import ContattaciCardProps from './index.types';
import * as styles from './index.module.scss';
import Button from '../Button';
import X from '../../../assets/x.svg';
import Heading from '../Heading';
import ShowOnView from '../ShowOnView';
import { useTranslation } from 'react-i18next';

const Index = ({ title, text, link, opened, minimized, open, close, style, children }: ContattaciCardProps) => {
  const { t } = useTranslation();
  return (
    <ShowOnView className={opened ? styles.cardOpened : minimized ? styles.cardMinimized : styles.card} style={style}>
      {opened ? (
        <div className={styles.close} onClick={close}>
          <X fill="var(--nt-orange" width={20} height={20} />
        </div>
      ) : (
        <></>
      )}
      {opened ? <Heading showOnView={false} text={title} marginTop /> : <h5 className={styles.title}>{title}</h5>}

      <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>

      <div className={styles.button}>
        <Button text={t('ButtonText')} title={t('ButtonText')} onClick={open} />
      </div>

      {children}
    </ShowOnView>
  );
};

export default Index;
