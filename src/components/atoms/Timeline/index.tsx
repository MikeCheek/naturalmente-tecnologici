import React from 'react';
import TimelineProps from './index.types';
import * as styles from './index.module.scss';
import Heading from '../Heading';
import { images } from '../../../utilities/guests';
import { images as orgImages } from '../../../utilities/organizers';
import GuestBadge from '../GuestBadge';
import ShowOnView from '../ShowOnView';

const slugify = function (str: string = "", separator = "-") {
  return str
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, separator);
};

const websiteUrl = 'https://www.nt.syskrack.org';

const Index = ({ data }: TimelineProps) => {
  const circle = <div className={styles.circle}></div>;
  const bar = <div className={styles.bar}></div>;

  const guestImages = images();
  const organizersImages = orgImages();

  const findImage = (name: string) =>
    organizersImages.allFile!.edges[Number(name) ?? 0]?.node.childImageSharp.gatsbyImageData ||
    guestImages.allFile!.edges.find((e) => e.node.name === name)?.node.childImageSharp.gatsbyImageData;

  return (
    <ShowOnView className={styles.wrap}>
      <Heading text={data.day} smaller showOnView={false} />
      <h4>{data.name}</h4>
      <p className={styles.desc}>{data.description}</p>
      <div className={styles.colWrap}>
        {bar}
        {data.timeline.map((item, key) => (
          <div key={key} className={styles.itemWrap} itemScope itemType='https://schema.org/Event'  itemID={webkitURL +'/programma#' + slugify(item.title)}>
            <div className={key % 2 == 0 ? styles.item : styles.itemReversed} key={key}>
              <p className={styles.title} itemProp='name' dangerouslySetInnerHTML={{ __html: item.title }}></p>
              {circle}
              <span className={styles.info}>
                <p className={styles.time}>{item.time}</p>
                {/* {item.type ? <p>{item.type}</p> : <></>} */}
                {item.location ? (
                  <p
                    className={styles.location}
                    style={key % 2 == 0 ? { marginRight: 'auto' } : { marginLeft: 'auto' }}
                  >
                    {item.location}
                  </p>
                ) : (
                  <></>
                )}
                {item.starring ? (
                  <div
                    className={styles.badges}
                    style={
                      key % 2 == 0
                        ? { marginRight: 'auto', alignItems: 'flex-start', textAlign: 'left' }
                        : { marginLeft: 'auto', alignItems: 'flex-end', textAlign: 'right' }
                    }
                  >
                    {item.starring.map((star, key) => {
                      console.log(star);
                      return (
                        <GuestBadge
                          name={star.name}
                          //@ts-ignore
                          href={star.href}
                          key={key}
                          image={findImage(star.image)}
                          //@ts-ignore
                          titles={star.field || star.role?.split('<br/>')}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ShowOnView>
  );
};

export default Index;
