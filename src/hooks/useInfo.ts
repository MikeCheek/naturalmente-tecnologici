import Ticket from '../assets/ticket-1.svg';
import Tickets from '../assets/ticket-2.svg';
import Vip from '../assets/vip.svg';

export const organizers = [
  {
    name: 'Giuseppe Becci',
    role: 'Organizer',
    linkedin: 'https://www.linkedin.com',
    website: 'https://mbare.comm',
    image: 0,
  },
  { name: 'Giuseppe Liuzzi', role: 'Mbare', website: 'https://mbare.comm', image: 1 },
  { name: 'Michele Pulvirenti', role: 'Developer', linkedin: 'https://www.linkedin.com', image: 2 },
  { name: 'Saro Calamaro', role: 'Mbarissimo' },
];

export const tickets = [
  {
    icon: Ticket,
    name: 'Biglietto giornaliero',
    price: 25,
    url: 'https://syskrack.org',
  },

  {
    icon: Tickets,
    name: 'Biglietto 3 giorni',
    price: 70,
    url: 'https://syskrack.org',
  },
  {
    icon: Vip,
    name: 'Biglietto Super Show',
    price: 30,
    url: 'https://syskrack.org',
  },
];

export const discount = 10;
