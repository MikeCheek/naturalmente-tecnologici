import guests, { GUEST_TYPE, GuestNames } from './guests';
import { info, OrganizersNames } from './organizers';

const GuestsList = guests.map((g) => ({ ...g, href: '/programma/#' + g.image }));
const OrganizersList = info.map((o) => ({ ...o, href: '/chi-siamo/#comitato-organizzativo' }));

const Stars = [...GuestsList, ...OrganizersList];

const findStar = (
  name: //string
  OrganizersNames | GuestNames
) => {
  return Stars.find((s) => s.name == name);
};

export const nowActive = () => {
  const today = new Date();
  const [day, hours, minutes] = [today.getDate(), today.getHours(), today.getMinutes()];
  const timeNow = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  const current = program.filter((e) => e.numberDay === day);
  if (current.length > 0)
    return (current[0].timeline as Event[])
      .filter((event) => {
        const time = event.time.split('-');
        if (time.length > 1) {
          const eventStarts = time[0].replace(' ', '');
          const eventEnds = time[1].replace(' ', '');
          return eventStarts <= timeNow && timeNow < eventEnds;
        }
        return time[0] < timeNow;
      })
      .reverse();
  return null;
};

export enum EVENT_TYPE {
  MORNING_ROUTINE = 'Morning Routine',
  CONFERENZA = 'Conferenza',
  LABORATORIO = 'Laboratorio',
  DIALOGO = 'Dialogo',
  PERFORMANCE = 'Performance',
  CONCERTO = 'Concerto',
}

export type Event = {
  time: string;
  title: string;
  type: EVENT_TYPE;
  location: string;
  starring: any[];
};

const program = [
  {
    numberDay: 9,
    day: 'Venerdì 9 Agosto',
    name: '',
    description: '',
    timeline: [
      {
        time: '10:30 - 13:00',
        title: '"Archeologia Sperimentale: Modellare l\'argilla con la tecnica del colombino"',
        type: EVENT_TYPE.LABORATORIO,
        starring: [findStar('Simone Ritunnano')],
      },
      {
        time: '13:00 - 13:30',
        title: 'Networking & Chill',
      },
      {
        time: '13:30 - 14:30',
        title: 'Pausa pranzo',
      },
      {
        time: '14:30 - 15:00',
        title: `Laboratorio di canto`,
        type: EVENT_TYPE.LABORATORIO,
        starring: [findStar('Kalura - Meridionalismo')],
      },
      {
        time: '15:00 - 16:00',
        title: `Molky`,
      },
      {
        time: '16:00 - 17:00',
        title: `"Raccontare nuovi immaginare rurali: nuovi strumenti narrativi per creare progresso."`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Vittoria Elena Simone')],
      },
      {
        time: '17:00 - 18:00',
        title: 'Il maestro Infantino: innovazione e progresso nel mondo del maestro',
        type: EVENT_TYPE.CONFERENZA,
        // starring: [findStar('Associazione Antonio Infantino')],
      },
      {
        time: '18:00 - 19:00',
        title: '"Abitare: antropologia, fotografia vernacolare e intelligenza artificiale"',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Marina Berardi')],
      },
      {
        time: '19:00 - 21:30',
        title: `Munnuera`,
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('Kalura - Meridionalismo')],
      },
      {
        time: '21:30 - 22:30',
        title: 'Pausa cena',
      },
      {
        time: '22:30 - 23:30',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('Mattone su mattone')],
      },
      {
        time: '23:30 - 01:00',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('Avemarianne')],
      },
      {
        time: '01:00 - 02:30',
        title: 'Performance fino a chiusura',
        type: EVENT_TYPE.CONCERTO,
        // starring: [findStar('Dj Bomberone')],
      },
    ],
  },
  {
    numberDay: 10,
    day: 'Sabato 10 Agosto',
    name: '',
    timeline: [
      {
        time: '11:00 - 13:00',
        title: 'Analisi sperimentali del suolo: conosciamo la terra',
        type: EVENT_TYPE.LABORATORIO,
        starring: [findStar('Noi ortadini')],
      },
      {
        time: '13:00 - 15:00',
        title: 'Pausa pranzo',
      },
      {
        time: '15:00 - 16:00',
        title: `Conclusione - Analisi sperimentali del suolo: conosciamo la terra`,
      },
      {
        time: '16:00 - 17:30',
        title: `"Riformulare i luoghi attraverso l'arte sulla base dei bisogni delle soggettività."`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Stefania Dubla')],
      },
      {
        time: '17:30 - 19:00',
        title: `"Nuovi immaginari rurali: L'esempio del molky"`,
        type: EVENT_TYPE.DIALOGO,
        starring: [findStar('Atomico')],
      },
      // {
      //   time: '19:00 - 20:30',
      //   title: 'Conferenza sul bosco',
      //   type: EVENT_TYPE.DIALOGO,
      //   // starring: [findStar('Green e speculazioni')],
      // },
      // {
      //   time: '20:30 - 21:00',
      //   title: `Introduzione all'astro fotografia`,
      //   type: EVENT_TYPE.CONFERENZA,
      //   // starring: [findStar('Giandomenico Mercadante')];
      // },
      {
        time: '21:00 - 22:00',
        title: 'Chill & networking',
      },
      {
        time: '22:00 - 23:30',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('LINBO')],
      },
      {
        time: '23:30 - 01:00',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('OBERDAN')],
      },
      {
        time: '01:00 - 02:30',
        title: 'Osservazione delle stelle',
        type: EVENT_TYPE.CONCERTO,
        // starring: [findStar('SLEEPING CONCERT')],
      },
      // {
      //   time: '03:30 - 04:00',
      //   type: EVENT_TYPE.CONCERTO,
      //   starring: [findStar('SFINGE SOUND')],
      // },
    ],
  },
  {
    numberDay: 11,
    day: 'Domenica 11 Agosto',
    name: '',
    timeline: [
      // {
      //   time: '10:30 - 13:00',
      //   title: 'Laboratorio di Arduino',
      //   type: EVENT_TYPE.LABORATORIO,
      // },
      // {
      //   time: '13:00 - 14:30',
      //   title: 'Pausa pranzo',
      // },
      // {
      //   time: '14:30 - 15:30',
      //   title: `Molky`,
      // },
      // {
      //   time: '15:30 - 16:00',
      //   title: `"10 anni di glocalità e ruralità"`,
      //   type: EVENT_TYPE.CONFERENZA,
      //   // starring: [findStar('Syskrack')],
      // },
      {
        time: '16:00 - 17:00',
        title: `"Disobbedienza come strumento di innovazione: la storia di Michele Mulieri"`,
        type: EVENT_TYPE.DIALOGO,
        starring: [findStar('Anna Albanese')],
      },
      {
        time: '17:00 - 18:00',
        title: `"Glocalità, la nostra pratica di resilienza"`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Giuseppe Becci'), findStar('Giuseppe Liuzzi')],
      },
      {
        time: '18:30 - 19:30',
        title: `Aperi Mas`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('MAS')],
      },
      {
        time: '21:00 - 22:30',
        title: 'Performance Freestyle',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('LINBO')],
      },
      {
        time: '22:30 - 04:00',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('SFINGE SOUND')],
      },
      {
        time: '00:00 - 01:00',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        // starring: [findStar('Pupa Antezz')],
      },
      {
        time: '01:00 - 02:00',
        title: 'Performance',
        type: EVENT_TYPE.CONCERTO,
        // starring: [findStar('Terra Terra Sound')],
      },
    ],
  },
];

export type TimelineItem = (typeof program)[number];
// {
//   day: string;
//   name: string;
//   description?: string;
//   timeline: {
//     time: string;
//     title: string;
//     location?: string;
//     type?: GUEST_TYPE;
//     starring?: typeof guests;
//   }[];
// }

export default program;
