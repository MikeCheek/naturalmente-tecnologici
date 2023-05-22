import React from 'react';
import * as styles from './index.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';
import { info, images } from '../../../hooks/useHeardOn';
import InfiniteCarousel from '../../atoms/InfiniteCarousel';

const Index = () => {
  const data = images();

  return (
    <div className={styles.wrapper}>
      <h2>CI HAI VISTO SU</h2>
      <InfiniteCarousel>
        {info.map((elem, key) => (
          <div className={styles.slide} key={key}>
            <span>
              {elem.image ? (
                data.allFile ? (
                  <GatsbyImage
                    alt={elem.name}
                    loading="lazy"
                    objectFit="contain"
                    image={
                      data.allFile.edges.find((value) => value.node.name == elem.image)?.node.childImageSharp
                        .gatsbyImageData
                    }
                    className={styles.image}
                  />
                ) : (
                  <></>
                )
              ) : elem.svg ? (
                <elem.svg width={170} className={styles.image} />
              ) : (
                <></>
              )}
              {elem.showName ? <span>{elem.name}</span> : <></>}
            </span>
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
};

export default Index;
