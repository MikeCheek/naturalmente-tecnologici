import Ticket from '../assets/ticket-1.svg';
import Tickets from '../assets/ticket-2.svg';
import Camping from '../assets/reviews/camping.svg';
// import Vip from '../assets/vip.svg';

export const Eventbrite =
  'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067';

export const DefaultTicketProps = {
  url: Eventbrite,
  priceCurrency: 'EUR',
};

interface Ticket {
  icon: SVG;
  name: string;
  price: number;
  description: string;
  availabilityStarts: string;
  availabilityEnds: string;
  validFrom: string;
  validThrough: string;
  badges?: string[];
  date?: string;
}

export const info: Ticket[] = [
  {
    icon: Tickets,
    name: 'Full Festival + Camping (3+1 giorni) - Early Bird',
    price: 69.88,
    description:
      "Il festival offre l'opzione di ingresso illimitato per tutti e tre i giorni dell'evento, che include una vasta gamma di attività come laboratori, conferenze, workshop, spettacoli e musica. Inoltre, è possibile utilizzare l'area camping per l'intera durata del festival, compresi i servizi come postazioni per ricaricare gli smartphone, docce e bagni. L'accesso all'area camping può essere ottenuto a partire dalla sera del 10. La quota di partecipazione al festival comprende l'accesso completo a tutte le attività dell'evento, inclusi i workshop, le conferenze, lo stage musicale e gli spettacoli. La quota non copre i pasti e le bevande. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
    availabilityStarts: '2023-06-15T00:00:00.000+02:00',
    availabilityEnds: '2023-07-10T23:59:59.999+02:00',
    validFrom: '2023-08-10T18:00:00.000+02:00',
    validThrough: '2023-08-14T10:59:59.999+02:00',
    date: '10-11-12-13 Agosto',
    badges: ['camping', 'conferenze', 'workshop', 'spettacoli', 'docce', 'bagni'],
  },
  {
    icon: Ticket,
    name: 'Ingresso giornaliero Festival () - Early Bird',
    availabilityStarts: '2023-06-15T00:00:00.000+02:00',
    availabilityEnds: '2023-07-10T23:59:59.999+02:00',
    validFrom: '2023-08-10T18:00:00.000+02:00',
    validThrough: '2023-08-14T10:59:59.999+02:00',
    description:
      "L'ingresso giornaliero offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l'accesso completo all'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota non copre i pasti e le bevande. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
    price: 15.0,
    date: 'Un solo giorno',
    badges: ['conferenze', 'workshop', 'spettacoli', 'bagni'],
  },
  // {
  //   icon: Ticket,
  //   name: 'Ingresso giornaliero Festival (11 Agosto) - Early Bird',
  //   availabilityStarts: '2023-06-15T00:00:00.000+02:00',
  //   availabilityEnds: '2023-07-10T23:59:59.999+02:00',
  //   validFrom: '2023-08-11T00:00:00.000+02:00',
  //   validThrough: '2023-08-11T23:59:59.999+02:00',
  //   description:
  //     "L'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l'accesso completo all'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota non copre i pasti e le bevande. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
  //   price: 15.0,
  //   badges: ['11 agosto', 'conferenze', 'workshop', 'spettacoli', 'bagni'],
  // },
  // {
  //   icon: Ticket,
  //   name: 'Ingresso giornaliero Festival (12 Agosto) - Early Bird',
  //   availabilityStarts: '2023-06-15T00:00:00.000+02:00',
  //   availabilityEnds: '2023-07-10T23:59:59.999+02:00',
  //   validFrom: '2023-08-12T00:00:00.000+02:00',
  //   validThrough: '2023-08-12T23:59:59.999+02:00',
  //   description:
  //     "L'ingresso giornaliero valido per il giorno 12 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l'accesso completo all'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota non copre i pasti e le bevande. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
  //   price: 15.0,
  //   badges: ['12 agosto', 'conferenze', 'workshop', 'spettacoli', 'bagni'],
  // },
  // {
  //   icon: Ticket,
  //   name: 'Ingresso giornaliero Festival (13 Agosto) - Early Bird',
  //   availabilityStarts: '2023-06-15T00:00:00.000+02:00',
  //   availabilityEnds: '2023-07-10T23:59:59.999+02:00',
  //   validFrom: '2023-08-13T00:00:00.000+02:00',
  //   validThrough: '2023-08-13T23:59:59.999+02:00',
  //   description:
  //     "L'ingresso giornaliero valido per il giorno 13 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l'accesso completo all'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota non copre i pasti e le bevande. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
  //   price: 15.0,
  //   badges: ['13 agosto', 'conferenze', 'workshop', 'spettacoli', 'bagni'],
  // },
  {
    icon: Camping,
    name: 'Integrazione Camping (Solo per ingresso giornaliero)',
    availabilityStarts: '2023-06-15T00:00:00.000+02:00',
    availabilityEnds: '2023-07-10T23:59:59.999+02:00',
    validFrom: '2023-08-13T00:00:00.000+02:00',
    validThrough: '2023-08-13T23:59:59.999+02:00',
    description:
      'Valido solo per ingresso giornaliero. Utilizzo area camping giornaliero, dura fino alle 10 del giorno dopo. Valido solo per biglietto giornaliero. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    price: 15.0,
    badges: ['camping', 'docce'],
  },
];

export const allBadges = info[0].badges;
