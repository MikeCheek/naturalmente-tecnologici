import React from 'react';
import { FastActionProps } from './index.types';
import * as styles from './index.module.scss';
import { useInView } from 'react-intersection-observer';
import Button from '../Button';
import { GatsbyImage } from 'gatsby-plugin-image';
import { images as ntImages } from '../../../utilities/ntPhotos';

const Index = ({
  text,
  //icon,
  image,
  buttonHref,
  buttonText,
  linkType = 'external',
  description,
  tag,
  Info,
  infoClick,
  glowing,
  special,
  primary,
}: FastActionProps) => {
  const [ref, inView, _entry] = useInView({
    threshold: 0.5,
    // rootMargin: '5% 0px -20% 0px',
    fallbackInView: true,
    triggerOnce: true,
  });

  const { activities } = ntImages()
  console.log(activities)

  return (
    <div
      onClick={infoClick}
      className={inView ? (primary ? styles.wrapBig : styles.wrap) : styles.wrapHidden}
      ref={ref}
    >
      {image && (
        <div className={styles.backgroundImage}>
          <GatsbyImage
            image={activities.edges?.find(edge => edge.node.name === image)?.node?.childImageSharp?.gatsbyImageData}
            alt={typeof text === 'string' ? text : 'Card background'}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              borderRadius: 'inherit',
            }}
            imgStyle={{
              objectFit: 'cover',
              borderRadius: 'inherit',
            }}
            aria-hidden="true"
            draggable={false}
          />
        </div>
      )}
      {tag ? <p className={styles.tag}>{tag}</p> : <></>}
      {Info && infoClick ? (
        <div className={styles.info}>
          <Info width={35} height={35} fill="var(--nt-orange)" />
        </div>
      ) : (
        <></>
      )}
      {/* {icon} */}
      {/* <p className={styles.bigText} dangerouslySetInnerHTML={{ __html: text }}></p> */}
      <p className={styles.name}>{text}</p>
      {special ? (
        <div className={styles.special}>
          {special[1] ? (
            <>
              <p className={styles.cutted}>{special[0]}</p>
              <p className={styles.primary}>{special[1]}</p>
            </>
          ) : (
            <p className={styles.primary}>{special[0]}</p>
          )}
        </div>
      ) : (
        <></>
      )}
      {description ? <p dangerouslySetInnerHTML={{ __html: description }}></p> : <></>}
      <Button text={buttonText} title={buttonText} href={buttonHref} internal={linkType == 'internal'} />
    </div>
  );
};

export default Index;
