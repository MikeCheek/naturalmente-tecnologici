declare type SVG = React.FunctionComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGElement>>;
}

declare module '*.mp4';
declare module '*.webm';

declare type LinkType = 'internal' | 'external';

declare type ImageDataType = {
  images: {
    fallback: {
      src: string;
    };
  };
  width: number;
  height: number;
};

declare type Edge = {
  node: { childImageSharp: { gatsbyImageData: IGatsbyImageData }; name?: string };
};

declare type Data = {
  allFile?: { edges: Edge[] };
};

declare module '*.scss';
