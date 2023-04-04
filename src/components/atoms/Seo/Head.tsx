import React from 'react';
import { SEOProps } from './index.types';

const Head = ({ description = '', lang = 'it', title }: SEOProps): JSX.Element => {
  const image = '/logo-og.jpg';
  const fullTitle = title + ' - Naturalmente Tecnologici';

  return (
    <>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:locale" content={'it_IT'} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={'image/jpg'} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={'1200'} />
      <meta property="og:image:height" content={'630'} />
      <meta property="og:url" content={`https://nt22.syskrack.org`} />
      <meta property="og:site_name" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:card" content={'summary_large_image'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
