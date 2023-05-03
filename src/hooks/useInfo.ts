import Ticket from '../assets/ticket-1.svg';
import Tickets from '../assets/ticket-2.svg';
import Vip from '../assets/vip.svg';

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
    website: 'https://michelepulvirenti.vercel.app',
    image: 3,
  },
  {
    name: 'Bernardo Forcillo',
    role: 'Developer',
    linkedin: 'https://www.linkedin.com/in/bernardoforcillo/',
    website: 'https://bernardoforcillo.com/',
    image: 4,
  },
  // { name: 'Teodosio Santagata', role: 'Stage Manager' },
  // { name: 'Giovanni Restaino', role: 'Stage Manager' },
  // { name: 'Marouan Elkoura', role: 'Sponsor Specialist' },
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
