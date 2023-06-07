import React from 'react';
import { SeoProps } from './index.types';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import { links } from '../../../hooks/navigation';
import { DefaultTicketProps, tickets } from '../../../hooks/useInfo';
import dataFAQ from '../../../hooks/dataFAQ';

const Index = ({
  lang = 'it',
  title,
  description,
  pathname,
  children,
  structuredData = false,
  keywords,
  noIndex,
  images = [],
}: SeoProps) => {
  const { metadata, featuredImage } = useSiteMetadata();

  const seo = {
    title: title && pathname != '/' ? title + ' | ' + metadata.title : metadata.title,
    description: description || metadata.description,
    url: `${metadata.siteUrl}${pathname || ``}`,
    image: featuredImage?.childImageSharp?.gatsbyImageData as unknown as ImageDataType,
    keywords: keywords || metadata.keywords,
  };

  const microData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://www.schema.org',
        '@type': 'WebSite',
        url: seo.url,
        name: seo.title,
        description: seo.description,
        image: [metadata.siteUrl + seo.image.images.fallback.src, ...images.map((image) => metadata.siteUrl + image)],
        inLanguage: 'IT',
      },
      {
        '@context': 'https://www.schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: links.map((link) => ({
          '@type': 'ListItem',
          position: link.position,
          name: link.name,
          item: metadata.siteUrl + link.to,
        })),
      },
      {
        '@context': 'https://www.schema.org',
        '@type': 'Event',
        name: 'Naturalmente Tecnologici',
        url: 'https://nt.syskrack.org/',
        description: "(Ri)-prendiamoci il futuro. Ragionamenti complessi sull'accelerazione dei nostri tempi.",
        image: [metadata.siteUrl + seo.image.images.fallback.src, ...images.map((image) => metadata.siteUrl + image)],
        startDate: '2023-08-11T09:00:00.000Z',
        endDate: '2023-08-13T23:59:59.999Z',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        isAccessibleForFree: false,
        inLanguage: 'IT',
        location: {
          '@type': 'Place',
          name: 'Podus - Bosco Coste',
          url: 'http://www.podus.it/',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bosco Coste',
            addressLocality: 'Grottole',
            addressRegion: 'MT',
            postalCode: '75010',
            addressCountry: 'Italy',
          },
          sameAs: ['https://goo.gl/maps/bVJXkHquwbvapgWR6', 'https://goo.gl/maps/YLQ778t7ZbGhkpHt9'],
        },
        organizer: {
          '@type': 'Organization',
          name: 'Syskrack Giuseppe Porsia',
          url: 'https://www.syskrack.org/',
          sameAs: ['https://www.wikidata.org/wiki/Q116907424', 'https://syskrack.org/'],
        },
        typicalAgeRange: '18-',
        offer: {
          '@type': 'AggregateOffer',
          availabilityStarts: '2023-06-1T00:00:00.000Z',
          availabilityEnds: '2023-08-13T23:59:59.999Z',
          validFrom: '2023-08-10T18:00:00.000Z',
          validThrough: '2023-08-14T10:59:59.999Z',
          highPrice: Math.max(...tickets.map((ticket) => ticket.price)),
          lowPrice: Math.min(...tickets.map((ticket) => ticket.price)),
          offerCount: tickets.length,
          sameAs: [
            'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
          ],
          offers: tickets.map((ticket) => ({
            '@type': 'Offer',
            url: DefaultTicketProps.url,
            name: ticket.name,
            availability: 'https://schema.org/PreOrder',
            availabilityStarts: ticket.availabilityStarts,
            availabilityEnds: ticket.availabilityEnds,
            validFrom: ticket.validFrom,
            validThrough: ticket.validThrough,
            description: ticket.description,
            price: ticket.price,
            priceCurrency: DefaultTicketProps.priceCurrency,
          })),
        },
        sameAs: [
          'https://www.wikidata.org/wiki/Q117883453', // INFO: (Link evento [2023] aggiunto su Wikidata)
          'https://www.wikidata.org/wiki/Q117881465', // INFO: (Link evento aggiunto su Wikidata)
          'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
        ],
      },
      {
        '@context': 'https://schema.org/',
        '@type': 'FAQPage',
        mainEntity: dataFAQ
          .map((data) => data.data)
          .reduce((elem1, elem2) => elem1.concat(elem2))
          .map((faq) => ({
            '@type': 'Question',
            name: faq.title,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.text,
            },
          })),
      },
    ],
  };

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={metadata.siteUrl + seo.image.images.fallback.src} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:locale" content={'it_IT'} />
      <meta property="og:image" content={metadata.siteUrl + seo.image.images.fallback.src} />
      <meta property="og:image:type" content={'image/jpg'} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:secure_url" content={metadata.siteUrl + seo.image.images.fallback.src} />
      <meta property="og:image:width" content={`${seo.image.width ?? '1200'}`} />
      <meta property="og:image:height" content={`${seo.image.height ?? '630'}`} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={metadata.siteUrl + seo.image.images.fallback.src} />

      <meta name="robots" content="max-image-preview:large" />

      {structuredData ? <script type="application/ld+json">{JSON.stringify(microData)}</script> : <></>}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : <></>}

      <script
        id="saro"
        defer
        dangerouslySetInnerHTML={{
          __html: `(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
      var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
      f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
      var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
      _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
      
      var ml_account = ml('accounts', '3548897', 'g2t5m4i7e2', 'load');
      var ml_webform_5919036 = ml_account('webforms', '5919036', 'd0q6a0', 'load');
      ml_webform_5919036('animation', 'fadeIn');
      `,
        }}
      ></script>
      <link rel="dns-prefetch" href="https://static.mailerlite.com/" />
      <link rel="dns-prefetch" href="https://www.google.com/" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://assets.mlcdn.com" />
      <link rel="preconnect" href="https://static.mailerlite.com/" />
      <link rel="preconnect" href="https://www.google.com/" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://assets.mlcdn.com" />

      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      {children}
    </>
  );
};

export default Index;
