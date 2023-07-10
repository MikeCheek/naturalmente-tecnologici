import { IGatsbyImageData } from 'gatsby-plugin-image';

export default interface GuestBadgeProps {
  name: string;
  id: string;
  image: IGatsbyImageData;
}
