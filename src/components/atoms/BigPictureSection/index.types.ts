export interface BigPictureSectionProps {
  title: string;
  text?: string;
  reverse?: boolean;
  images: { edges: Edge[] };
}
