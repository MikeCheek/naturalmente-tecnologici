import React from 'react';
import guests, { GUEST_TYPE, images } from '../../../utilities/guests';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import GuestCard from '../../atoms/GuestCard';
import { GatsbyImage } from 'gatsby-plugin-image';
import ImageTemp from '../../atoms/ImageTemp';

const Index = () => {
  const talkGuests = guests.filter((e) => e.type === GUEST_TYPE.TALK);
  const musicGuests = guests.filter((e) => e.type === GUEST_TYPE.MUSIC);
  const activityGuests = guests.filter((e) => e.type === GUEST_TYPE.ACTIVITY);

  const guestsPhotos = images();

  const Card = (guest: (typeof guests)[0], key: number) => (
    <GuestCard
      key={key}
      name={guest.name}
      description={guest.description ?? ''}
      field={guest.field}
      id={guest.image}
      mentor={guest.mentor}
    >
      {guestsPhotos.allFile!.edges.find((e) => e.node.name === guest.image) ? (
        <GatsbyImage
          alt={guest.name}
          image={
            guestsPhotos.allFile!.edges.find((e) => e.node.name === guest.image)?.node.childImageSharp.gatsbyImageData
          }
          loading="lazy"
          className={styles.image}
          objectPosition={'center top'}
        />
      ) : (
        <ImageTemp name={guest.name} />
      )}
    </GuestCard>
  );

  return (
    <div className={styles.wrap}>
      <Heading text="Ospiti musicali" />
      <div className={styles.guests}>{musicGuests.map((guest, key) => Card(guest, key))}</div>

      <Heading text="Ospiti conferenze" />
      <div className={styles.guests}>{talkGuests.map((guest, key) => Card(guest, key))}</div>

      <Heading text="Ospiti attività" />
      <div className={styles.guests}>{activityGuests.map((guest, key) => Card(guest, key))}</div>
    </div>
  );
};

export default Index;
