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
  { name: 'Michele Pulvirenti', role: 'Developer', linkedin: 'https://www.linkedin.com', image: 1 },
  { name: 'Giuseppe Liuzzi', role: 'Mbare', website: 'https://mbare.comm' },
  { name: 'Saro Calamaro', role: 'Mbarissimo' },
];

export const tickets = [
  {
    icon: Ticket,
    name: 'Biglietto giornaliero',
    price: 25,
  },

  {
    icon: Tickets,
    name: 'Biglietto 3 giorni',
    price: 70,
  },
  {
    icon: Vip,
    name: 'Biglietto Super Show',
    price: 30,
  },
];

export const discount = 10;
