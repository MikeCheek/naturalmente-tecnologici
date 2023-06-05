import Ticket from '../assets/ticket-1.svg';
import Tickets from '../assets/ticket-2.svg';
// import Vip from '../assets/vip.svg';

export const organizers = [
  {
    name: 'Davide Saladino',
    role: 'President',
    image: 0,
  },
  {
    name: 'Giuseppe Becci',
    role: 'Project Manager',
    linkedin: 'https://www.linkedin.com/in/giuseppe-becci-3b8402171/',
    image: 1,
  },
  {
    name: 'Giuseppe Liuzzi',
    role: 'Community Manager<br/>CTO',
    linkedin: 'https://www.linkedin.com/in/giuseppe-liuzzi-pirat3/',
    website: 'https://giuseppeliuzzi.com',
    image: 2,
  },
  {
    name: 'Michele Pulvirenti',
    role: 'Developer',
    linkedin: 'https://www.linkedin.com/in/michele-pulvirenti/',
    website: 'https://michelepulvirenti.vercel.app/?r=nt',
    image: 3,
  },
  {
    name: 'Bernardo Forcillo',
    role: 'Developer',
    linkedin: 'https://www.linkedin.com/in/bernardoforcillo/',
    website: 'https://bernardoforcillo.com/',
    image: 4,
  },
  { name: 'Marouan Elkoura', role: 'Sponsor Specialist', image: 5 },
  { name: 'Grazia Muro', role: 'Segretaria', image: 6 },
  // { name: 'Teodosio Santagata', role: 'Stage Manager' },
  // { name: 'Giovanni Restaino', role: 'Stage Manager' },
];

export const DefaultTicketProps = {
  url: 'https://www.eventbrite.com/e/registrazione-naturalmente-tecnologici-23-ri-prendiamoci-il-futuro-640095231067',
  priceCurrency: 'EUR',
}

interface Ticket {
  icon?: SVG;
  name: string;
  price: number;
  description: string;
  availabilityStarts: string;
  availabilityEnds: string;
  validFrom: string;
  validThrough: string;
}

export const tickets: Ticket[] = [
  {
    icon: Tickets,
    name: 'Biglietto Interno - Early Bird',
    price: 72.22,
    description: 'Il festival offre l\'opzione di ingresso illimitato per tutti e tre i giorni dell\'evento, che include una vasta gamma di attività come laboratori, conferenze, workshop, spettacoli e musica. Inoltre, è possibile utilizzare l\'area camping per l\'intera durata del festival, compresi i servizi come postazioni per ricaricare gli smartphone, docce e bagni. L\'accesso all\'area camping può essere ottenuto a partire dalla sera del 10. La quota di partecipazione al festival comprende l\'accesso completo a tutte le attività dell\'evento, inclusi i workshop, le conferenze, lo stage musicale e gli spettacoli. Tuttavia, la quota non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    availabilityStarts: '2023-06-1T00:00:00.000Z',
    availabilityEnds: '2023-06-16T23:59:59.999Z',
    validFrom: '2023-08-10T18:00:00.000Z',
    validThrough: '2023-08-14T10:59:59.999Z',
  },
  {
    icon: Ticket,
    name: 'Biglietto Giornaliero (11 Agosto) - Early Bird',
    availabilityStarts: '2023-06-1T00:00:00.000Z',
    availabilityEnds: '2023-06-16T23:59:59.999Z',
    validFrom: '2023-08-11T00:00:00.000Z',
    validThrough: '2023-08-11T23:59:59.999Z',
    description: 'L\'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l\'accesso completo all\'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota di partecipazione al biglietto giornaliero non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    price: 17.22,
  },
  {
    icon: Ticket,
    name: 'Biglietto Giornaliero (12 Agosto) - Early Bird',
    availabilityStarts: '2023-06-1T00:00:00.000Z',
    availabilityEnds: '2023-06-16T23:59:59.999Z',
    validFrom: '2023-08-12T00:00:00.000Z',
    validThrough: '2023-08-12T23:59:59.999Z',
    description: 'L\'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l\'accesso completo all\'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota di partecipazione al biglietto giornaliero non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    price: 17.22,
  },
  {
    icon: Ticket,
    name: 'Biglietto Giornaliero (13 Agosto) - Early Bird',
    availabilityStarts: '2023-06-1T00:00:00.000Z',
    availabilityEnds: '2023-06-16T23:59:59.999Z',
    validFrom: '2023-08-13T00:00:00.000Z',
    validThrough: '2023-08-13T23:59:59.999Z',
    description: 'L\'ingresso giornaliero valido per il giorno 11 agosto 2023 offre la possibilità di partecipare alle attività del festival per quella specifica giornata. Ciò include l\'accesso completo all\'evento, compresi i workshop, le attività, lo stage musicale e gli spettacoli. La quota di partecipazione al biglietto giornaliero non copre i costi per cibi, bevande e merchandise, che devono essere acquistati separatamente. Per poter partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    price: 17.22,
  }
];