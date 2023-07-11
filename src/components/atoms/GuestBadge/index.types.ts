import { IGatsbyImageData } from 'gatsby-plugin-image';

export default interface GuestBadgeProps {
  name: string;
  href: string;
  image: IGatsbyImageData;
  titles?: string[];
}
