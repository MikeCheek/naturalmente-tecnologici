// import { ReactComponent as TicketSvg } from '../assets/ticket-1.svg'
// import { ReactComponent as Tickets } from '../assets/ticket-2.svg'
// import { ReactComponent as Camping } from '../assets/reviews/camping.svg'
// import {ReactComponent as Vip} from '../assets/vip.svg';

export const PassUrl =
  'https://syskracklab.cc/eventi/categoria/naturalmente-tecnologici/'

export const DefaultTicketProps = {
  url: PassUrl,
  offer: true,
  priceCurrency: 'EUR',
  priceSymbol: ' €',
  endOffer: '2024-07-10T00:00:00.000+02:00'
}

export type Price = number //| number[];
interface Ticket {
  //icon: SVG
  name: string
  price: Price
  priceDiscount?: Price
  bigger?: boolean
  offer?: boolean
  description: string
  // availabilityStarts: string;
  // availabilityEnds: string;
  // validFrom: string;
  // validThrough: string;
  badges?: string[]
  date?: string
  url: string
  priceCurrency: string
  image: string
}

export const info: Ticket[] = [
  {
    //icon: Camping,
    name: 'Community Pass 3 giorni/notti (Camping incluso)',
    price: 67,
    priceDiscount: 37.0,
    bigger: false,
    description:
      'Accesso completo al festival e al camping incluso per 3 giorni e 3 notti o 2 giorni e 2 notti. Goditi ogni momento di questo evento unico sotto le stelle ✨. <br/> La quota non copre i pasti e le bevande. Per poter acquistare il pass e partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    date: '2/3 giorni',
    badges: [
      'camping',
      'conferenze',
      'workshop',
      'spettacoli',
      'docce',
      'bagni'
    ],
    image: 'DSC_0852',
    ...DefaultTicketProps
  },
  {
    //icon: TicketSvg,
    name: 'Community Pass 3 giorni/notti (Camping incluso)',
    description:
      "Goditi la musica autentica e l'intrattenimento.<br/>Accesso al festival per una singola giornata (9, 10 o 11 agosto) ad ORARIO.<br/><b>- Dalle 9 alle 18</b> <br/><b>- Dalle 18 fino alla chiusura</b><br/><br/> Immergiti nella cultura, nei dibattiti e lasciati coinvolgere dai workshop di #nt24 oppure lasciati trasportare dalla magia della notte, tra musica 🎶 e nuove amicizie 🤝 (*campeggio escluso).<br/> La quota non copre i pasti e le bevande. Per poter acquistare il pass e partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.",
    price: 17.0,
    priceDiscount: 5.0,
    date: 'mezza giornata',
    badges: ['spettacoli', 'conferenze', 'workshop', 'docce', 'bagni'],
    image: 'DSC_0870',
    ...DefaultTicketProps
  },
  {
    //icon: Tickets,
    name: 'Community Pass giornaliero (Camping incluso)',
    description:
      'Accesso al festival per una giornata fino a chiusura, incluso il camping. Vivi una giornata piena di scoperte e connessioni 🌟. <br/>La quota non copre i pasti e le bevande. Per poter acquistare il pass e partecipare al festival, è obbligatorio diventare associati tramite il tesseramento, che può essere completato sul sito web https://syskrack.org/associati.',
    price: 30.0,
    priceDiscount: 13.0,
    date: 'Un solo giorno',
    badges: [
      'camping',
      'conferenze',
      'workshop',
      'spettacoli',
      'docce',
      'bagni'
    ],
    image: 'DSC_2573',
    ...DefaultTicketProps
  }
]

export const allBadges = info[1].badges
