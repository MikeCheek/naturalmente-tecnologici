// import { ReactComponent as TicketSvg } from '../assets/ticket-1.svg'
// import { ReactComponent as Tickets } from '../assets/ticket-2.svg'
// import { ReactComponent as Camping } from '../assets/reviews/camping.svg'
// import {ReactComponent as Vip} from '../assets/vip.svg';

export const TICKETS_ENABLED = false

export const PassUrl =
  'https://syskracklab.cc/evento/naturalmente-tecnologici-2026/'

export const DefaultTicketProps = {
  url: PassUrl,
  offer: TICKETS_ENABLED,
  priceCurrency: 'EUR',
  priceSymbol: ' €',
  endOffer: '2024-07-19T23:59:59.000+02:00'
}

export type Price = number
interface Ticket {
  name: string
  price: Price
  priceDiscount?: Price
  bigger?: boolean
  offer?: boolean
  description: string
  badges?: string[]
  date?: string
  url: string
  priceCurrency: string
  image: string
}

export const info: Ticket[] = [
  {
    name: 'Community Pass (4 giorni di campeggio) 🏕️',
    price: 40,
    priceDiscount: 30,
    bigger: true,
    description:
      'Vivi l’esperienza completa di #NT26 con 4 giorni e 4 notti di campeggio incluso! <br/>Accesso a tutte le attività, workshop, talk, spettacoli e area camping. <br/><b>NB:</b> Per accedere è necessario essere soci Syskrack (tessera annuale 10€).',
    date: '4 giorni / 4 notti',
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
    name: '2 Days Pass (2 giorni e 2 notti) 🌅',
    price: 20,
    priceDiscount: 15,
    description:
      'Partecipa a 2 giorni e 2 notti di festival con accesso completo a tutte le attività e al campeggio. <br/><b>NB:</b> Per accedere è necessario essere soci Syskrack (tessera annuale 10€).',
    date: '2 giorni / 2 notti',
    badges: [
      'camping',
      'conferenze',
      'workshop',
      'spettacoli',
      'docce',
      'bagni'
    ],
    image: 'DSC_0870',
    ...DefaultTicketProps
  },
  {
    name: '1 Day Pass (24 ore di esperienza completa) ⏰',
    price: 12,
    priceDiscount: 8,
    description:
      'Vivi una giornata piena di scoperte, connessioni e campeggio! <br/>Accesso a tutte le attività e area camping per 24 ore. <br/><b>NB:</b> Per accedere è necessario essere soci Syskrack (tessera annuale 10€).',
    date: '1 giorno / 1 notte',
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

export const allBadges = info[0].badges
