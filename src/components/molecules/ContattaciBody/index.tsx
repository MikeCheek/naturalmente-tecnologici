import React, { useEffect, useRef, useState } from 'react';
import ShowOnView from '../../atoms/ShowOnView';
import Heading from '../../atoms/Heading';
import * as styles from './index.module.scss';
import contattaciData from '../../../utilities/contattaciData';
import ContattaciCard from '../../atoms/ContattaciCard';

const Index = () => {
  const [selected, setSelected] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current?.getBoundingClientRect());
    if (selected) ref.current?.scrollIntoView();
    //  window.scrollTo(0, -ref.current?.getBoundingClientRect().top!);
  }, [selected]);

  useEffect(() => {
    console.log(selected);
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
