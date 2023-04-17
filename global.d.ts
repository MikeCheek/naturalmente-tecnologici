declare module '*.scss';

declare module '*.svg' {
  import React from 'react';

  const ReactComponent: SVG;

  export default ReactComponent;
}

declare type LinkType = 'internal' | 'external';

declare type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

declare type ImageDataType = {
  images: {
    fallback: {
      src: string;
    };
  };
  width: number;
  height: number;
};
