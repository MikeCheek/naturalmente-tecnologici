import React from 'react';
import guests, { GUEST_TYPE, images } from '../../../utilities/guests';
import * as styles from './index.module.scss';
import Heading from '../../atoms/Heading';
import GuestCard from '../../atoms/GuestCard';
import { GatsbyImage } from 'gatsby-plugin-image';
import ImageTemp from '../../atoms/ImageTemp';
import Banner from '../../atoms/Banner';
import { timelineGuests } from '../../../utilities/program';

const Index = () => {
  // const talkGuests = guests.filter((e) => e.type === GUEST_TYPE.TALK);
  // const musicGuests = guests.filter((e) => e.type === GUEST_TYPE.MUSIC);
  // const activityGuests = guests.filter((e) => e.type === GUEST_TYPE.ACTIVITY);
  // const communityGuests = guests.filter((e) => e.type === GUEST_TYPE.COMMUNITY);

  // Remove duplicates by guest name
  const uniqueGuests = timelineGuests.filter(
    (guest, index, self) =>
      index === self.findIndex((g) => g.name === guest.name)
  );

  const talkGuests = uniqueGuests.filter((e) => e.type === GUEST_TYPE.TALK);
  const musicGuests = uniqueGuests.filter((e) => e.type === GUEST_TYPE.MUSIC);
  const activityGuests = uniqueGuests.filter((e) => e.type === GUEST_TYPE.ACTIVITY);
  const communityGuests = uniqueGuests.filter((e) => e.type === GUEST_TYPE.COMMUNITY);

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
          objectPosition={guest.imagePosition ?? 'center top'}
        />
      ) : (
        <ImageTemp name={guest.name} />
      )}
    </GuestCard>
  );

  return (
    <div className={styles.wrap}>
      <Banner text="IL PROGRAMMA È ANCORA IN AGGIORNAMENTO" />

      <Heading text="Performers" />
      <div className={styles.guests}>{musicGuests.map((guest, key) => Card(guest, key))}</div>

      <Heading text="Ospiti talks" />
      <div className={styles.guests}>{talkGuests.map((guest, key) => Card(guest, key))}</div>

      <Heading text="Ospiti attività" />
      <div className={styles.guests}>{activityGuests.map((guest, key) => Card(guest, key))}</div>

      <Heading text="Community" />
      <div className={styles.guests}>{communityGuests.map((guest, key) => Card(guest, key))}</div>
    </div>
  );
};

export default Index;
