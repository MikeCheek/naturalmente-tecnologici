// Types
export type SeoProps = {
  description?: string;
  lang?: string;
  title: string;
  children?: React.ReactElement;
  pathname?: string;
  structuredData?: boolean;
  keywords?: string;
};

export type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>;

export type PropertyMetaObj = {
  property: string;
  content: string;
};

export type NameMetaObj = {
  name: string;
  content: string;
};

export type QueryTypes = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
};
