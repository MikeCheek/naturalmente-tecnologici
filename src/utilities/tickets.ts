import { ReactComponent as TicketSvg } from '../assets/ticket-1.svg';
import { ReactComponent as Tickets } from '../assets/ticket-2.svg';
import { ReactComponent as Camping } from '../assets/reviews/camping.svg';
// import {ReactComponent as Vip} from '../assets/vip.svg';

export const PassUrl = 'https://syskracklab.cc/eventi/categoria/naturalmente-tecnologici/';

export const DefaultTicketProps = {
  url: PassUrl,
  offer: true,
  priceCurrency: 'EUR',
  endOffer: '2024-07-10T00:00:00.000+02:00',
};

interface Ticket {
  icon: SVG;
  name: string;
  price: number | number[];
  priceDiscount?: number | number[];
  bigger?: boolean;
  offer?: boolean;
  description: string;
  // availabilityStarts: string;
  // availabilityEnds: string;
  // validFrom: string;
  // validThrough: string;
  badges?: string[];
  date?: string;
  url: string;
  priceCurrency: string;
}

export const info: Ticket[] = [
  {
    icon: TicketSvg,
    name: 'Daily Pass (Camping incluso)',
    description:
      'Accesso al festival per 24 ore, incluso il camping. Vivi una giornata piena di scoperte e connessioni 🌟. La quota non copre i pasti e le bevande. Per poter acquistare il pass e partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    price: 17.0,
    priceDiscount: 13.0,
    date: 'Un solo giorno',
    badges: ['camping', 'conferenze', 'workshop', 'spettacoli', 'docce', 'bagni'],
    ...DefaultTicketProps,
  },
  {
    icon: Tickets,
    name: 'Community Pass 2/3 giorni/notti (Camping incluso)',
    price: [45, 30],
    priceDiscount: [37.0, 25.0],
    bigger: true,
    description:
      'Accesso completo al festival e al camping incluso per 3 giorni e 3 notti o 2 giorni e 2 notti. Goditi ogni momento di questo evento unico sotto le stelle ✨. La quota non copre i pasti e le bevande. Per poter acquistare il pass e partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    date: '2/3 giorni',
    badges: ['camping', 'conferenze', 'workshop', 'spettacoli', 'docce', 'bagni'],
    ...DefaultTicketProps,
  },
  {
    icon: Camping,
    name: 'Pass Serale (Ingresso serale)',
    description:
      "Goditi la musica autentica e l'intrattenimento. Accesso al festival per una singola serata (9, 10 o 11 agosto) dalle 20 fino alla chiusura. Immergiti nella magia della notte, tra musica 🎶 e nuove amicizie 🤝 (*campeggio escluso). Per poter acquistare il pass e partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
    price: 7.0,
    priceDiscount: 5.0,
    date: 'solo una sera',
    badges: ['spettacoli'],
    ...DefaultTicketProps,
  },
];

export const allBadges = info[1].badges;
