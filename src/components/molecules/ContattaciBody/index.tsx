import React, { useEffect, useRef, useState } from 'react';
import ShowOnView from '../../atoms/ShowOnView';
import * as styles from './index.module.scss';
import ContattaciCard from '../../atoms/ContattaciCard';
import { useTranslation } from 'react-i18next';

export interface ContattaciData {
  name: string;
  description: string;
  pathName: string;
}

const Index = () => {
  const [selected, setSelected] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const contattaciData: ContattaciData[] = [
    {
      name: t('Name1'),
      description: t('Description1'),
    },
    {
      name: t('Name2'),
      description: t('Description2'),
    },
    {
      name: t('Name3'),
      description: t('Description3'),
    },
    {
      name: t('Name4'),
      description: t('Description4'),
    },
  ].map((i) => ({ ...i, pathName: i.name.toLowerCase().replace(' ', '-') }));

  useEffect(() => {
    if (selected) ref.current?.scrollIntoView();
    //  window.scrollTo(0, -ref.current?.getBoundingClientRect().top!);
  }, [selected]);

  return (
    <>
      <div ref={ref} className={styles.contattaciCards}>
        {contattaciData.map((value, key) => (
          <ContattaciCard
            opened={selected === key}
            minimized={selected != undefined && selected != key}
            open={() => setSelected(key)}
            close={() => setSelected(undefined)}
            title={value.name}
            text={value.description}
            link={value.pathName}
            key={key}
            // style={selected === key ? { order: contattaciData.length } : {}}
          >
            {selected === key ? (
              <ShowOnView className={styles.formWrap}>
                <iframe
                  src={`https://tally.so/embed/n9XpoK?type=${value.name}&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                  data-tally-src={`https://tally.so/embed/n9XpoK?type=${value.name}&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                  loading="lazy"
                  width="100%"
                  title="CONTATTACI"
                  className={styles.form}
                ></iframe>
              </ShowOnView>
            ) : (
              <></>
            )}
          </ContattaciCard>
        ))}
      </div>
    </>
  );
};

export default Index;
