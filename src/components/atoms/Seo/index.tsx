import React from 'react';
import { SeoProps } from './index.types';
import useSiteMetadata from '../../../hooks/useSiteMetadata';
//import { tickets } from '../../../hooks/useInfo';
import { links } from '../../../hooks/navigation';

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
        availabilityStarts: '2023-06-1T00:00:00.000Z',
        availabilityEnds: '2023-08-13T23:59:59.999Z',
        validFrom: '2023-08-10T18:00:00.000Z',
        validThrough: '2023-08-14T10:59:59.999Z',
        offers: {
          '@type': 'AggregateOffer',
          highPrice: '72.22',
          lowPrice: '17.22',
          offerCount: 3,
          priceCurrency: 'EUR',
          offer: [
            {
              '@type': 'Offer',
              url: 'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
              name: 'Biglietto Interno - Early Bird',
              availability: 'https://schema.org/PreOrder',
              availabilityStarts: '2023-06-1T00:00:00.000Z',
              availabilityEnds: '2023-06-16T23:59:59.999Z',
              validFrom: '2023-08-10T18:00:00.000Z',
              validThrough: '2023-08-14T10:59:59.999Z',
              description: 'Il festival offre l\'opzione di ingresso illimitato per tutti e tre i giorni dell\'evento, che include una vasta gamma di attività come laboratori, conferenze, workshop, spettacoli e musica. Inoltre, è possibile utilizzare l\'area camping per l\'intera durata del festival, compresi i servizi come postazioni per ricaricare gli smartphone, docce e bagni. L\'accesso all\'area camping può essere ottenuto a partire dalla sera del 10. La quota di partecipazione al festival comprende l\'accesso completo a tutte le attività dell\'evento, inclusi i workshop, le conferenze, lo stage musicale e gli spettacoli. Tuttavia, la quota non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
              price: '72.22',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              url: 'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
              name: 'Biglietto Giornaliero (11 Agosto) - Early Bird',
              availability: 'https://schema.org/PreOrder',
              availabilityStarts: '2023-06-1T00:00:00.000Z',
              availabilityEnds: '2023-06-16T23:59:59.999Z',
              validFrom: '2023-08-11T00:00:00.000Z',
              validThrough: '2023-08-11T23:59:59.999Z',
              description: 'L\'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l\'accesso completo all\'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota di partecipazione al biglietto giornaliero non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
              price: '17.22',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              url: 'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
              name: 'Biglietto Giornaliero (12 Agosto) - Early Bird',
              availability: 'https://schema.org/PreOrder',
              availabilityStarts: '2023-06-1T00:00:00.000Z',
              availabilityEnds: '2023-06-16T23:59:59.999Z',
              validFrom: '2023-08-12T00:00:00.000Z',
              validThrough: '2023-08-12T23:59:59.999Z',
              description: 'L\'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l\'accesso completo all\'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota di partecipazione al biglietto giornaliero non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
              price: '17.22',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              url: 'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
              name: 'Biglietto Giornaliero (13 Agosto) - Early Bird',
              availability: 'https://schema.org/PreOrder',
              availabilityStarts: '2023-06-1T00:00:00.000Z',
              availabilityEnds: '2023-06-16T23:59:59.999Z',
              validFrom: '2023-08-13T00:00:00.000Z',
              validThrough: '2023-08-13T23:59:59.999Z',
              description: 'L\'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l\'accesso completo all\'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota di partecipazione al biglietto giornaliero non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
              price: '17.22',
              priceCurrency: 'EUR',
            }
          ],
          //offer: tickets.map((ticket) => ({
          //  '@type': 'Offer',
          //  url: ticket.url,
          //  name: ticket.name,
          //  availability: 'https://schema.org/PreOrder',
          //  validFrom: '2023-08-11T09:00:00.000Z',
          //  validThrough: '2023-08-13T23:59:59.999Z',
          //  description: ticket.name,
          //  price: ticket.price,
          //  priceCurrency: 'EUR',
          //})),
         },
        sameAs: [
          'https://www.wikidata.org/wiki/Q117883453', // INFO: (Link evento [2023] aggiunto su Wikidata)
          'https://www.wikidata.org/wiki/Q117881465', // INFO: (Link evento aggiunto su Wikidata)
          'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067?utm-campaign=social,email&utm-content=attendeeshare&utm-medium=discovery&utm-source=strongmail&utm-term=listing'
        ],
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
