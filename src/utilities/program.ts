import guests, { GUEST_TYPE, GuestNames } from './guests';
import { info, OrganizersNames } from './organizers';

const GuestsList = guests.map((g) => ({ ...g, href: '/programma/#' + g.image }));
const OrganizersList = info.map((o) => ({ ...o, href: '/chi-siamo/#comitato-organizzativo' }));

const Stars = [...GuestsList, ...OrganizersList];

const findStar = (
  name: string
  // OrganizersNames | GuestNames
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
    name: 'Welcome Day',
    description: '',
    timeline: [
      {
        time: '10:00 - 10:30',
        title: 'Risveglio con ASJa',
        type: EVENT_TYPE.MORNING_ROUTINE,
      },
      {
        time: '10:30 - 13:00',
        title:
          'Esprimento in cui si cercherà di riprodurre il metodo di fabbricazione della ceramica utilizzando la materia prima e delle tecniche antiche',
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
        time: '16:00 - 16:30',
        title: `"Raccontare nuovi immaginare rurali: nuovi strumenti narrativi per creare progresso."`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Vittoria Elena Simone')],
      },
      {
        time: '16:30 - 17:00',
        title: `Dialogo generativo`,
        type: EVENT_TYPE.DIALOGO,
      },
      {
        time: '17:00 - 17:30',
        title: '"Guerriglia culturale: Il mondo del maestro infantino"',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Associazione Antonio Infantino')],
      },
      {
        time: '17:30 - 18:00',
        title: `Dialogo generativo`,
        type: EVENT_TYPE.DIALOGO,
      },
      {
        time: '18:00 - 18:30',
        title: 'Abitare',
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
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('Mattone su mattone')],
      },
      {
        time: '23:30 - 01:00',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('Ave Marianne')],
      },
      {
        time: '01:00 - 02:30',
        title: 'Chiusura',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('Dj Bomberone')],
      },
    ],
  },
  {
    numberDay: 10,
    day: 'Sabato 10 Agosto',
    name: '',
    timeline: [
      {
        time: '10:00 - 10:30',
        title: 'Morning Routine',
        type: EVENT_TYPE.MORNING_ROUTINE,
      },
      {
        time: '10:30 - 13:00',
        title: 'Laboratorio di riconoscimento del suolo',
        type: EVENT_TYPE.LABORATORIO,
        starring: [findStar('Noi ortadini')],
      },
      {
        time: '13:00 - 14:30',
        title: 'Pausa pranzo',
      },
      {
        time: '14:30 - 15:30',
        title: `Degustazione vinilica + Molky`,
        starring: [findStar('SFINGE SOUND'), findStar('Pisilli Rocco')],
      },
      {
        time: '15:30 - 16:30',
        title: `"Abitare il rurale del domani. Arte e persone per creare luoghi di abitabili"`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Stefania Dubla')],
      },
      {
        time: '16:30 - 17:00',
        title: `Dialogo generativo`,
        type: EVENT_TYPE.DIALOGO,
        starring: [findStar('Giacomo Castana')],
      },
      {
        time: '17:00 - 17:30',
        title: `Persone e piante. Comunicare con il luogo`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Giacomo Castana')],
      },
      {
        time: '17:30 - 18:00',
        title: `"Creare community in Basilicata. L'esmpio del molky"`,
        type: EVENT_TYPE.DIALOGO,
        starring: [findStar('Atomico')],
      },
      {
        time: '18:00 - 18:30',
        title: `Imparare dalla terra`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Atomico')],
      },
      {
        time: '19:00 - 20:30',
        title: 'Conferenza sul bosco',
        type: EVENT_TYPE.DIALOGO,
        starring: [findStar('Green e speculazioni')],
      },
      {
        time: '20:30 - 21:00',
        title: `Introduzione all'astro fotografia`,
        type: EVENT_TYPE.CONFERENZA,
      },
      {
        time: '21:00 - 22:00',
        title: 'Pausa cena, chill & networking',
      },
      {
        time: '22:00 - 23:30',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('LINBO')],
      },
      {
        time: '23:30 - 01:00',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('OBERDAN')],
      },
      {
        time: '01:00 - 02:30',
        title: 'Osservazione delle stelle',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('SLEEPING CONCERT')],
      },
      {
        time: '02:30 - 03:30',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('Giandomenico Mercadante')],
      },
      {
        time: '03:30 - 04:00',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('SFINGE SOUND')],
      },
    ],
  },
  {
    numberDay: 11,
    day: 'Domenica 11 Agosto',
    name: '',
    timeline: [
      {
        time: '10:00 - 10:30',
        title: 'Morning Routine',
        type: EVENT_TYPE.MORNING_ROUTINE,
      },
      {
        time: '10:30 - 13:00',
        title: 'Laboratorio di Arduino',
        type: EVENT_TYPE.LABORATORIO,
      },
      {
        time: '13:00 - 14:30',
        title: 'Pausa pranzo',
      },
      {
        time: '14:30 - 15:30',
        title: `Molky`,
      },
      {
        time: '15:30 - 16:00',
        title: `"10 anni di glocalità e ruralità"`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Syskrack')],
      },
      {
        time: '16:00 - 16:30',
        title: `"Restituzione & Output"`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Syskrack')],
      },
      {
        time: '16:30 - 17:00',
        title: `Dialogo generativo`,
        type: EVENT_TYPE.DIALOGO,
        starring: [findStar('Anna Albanese')],
      },
      {
        time: '17:00 - 17:30',
        title: `"Rompere il sistema. La storia di Michele Mulieri"`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Anna Albanese')],
      },
      {
        time: '17:30 - 18:00',
        title: `"Passaggio attraverso il teatro"`,
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('IAC')],
      },
      {
        time: '18:00 - 20:30',
        title: 'Performance IAC',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('LINBO')],
      },
      {
        time: '20:30 - 22:30',
        title: 'Pausa cena, chill & networking',
      },
      {
        time: '22:30 - 02:00',
        type: EVENT_TYPE.CONCERTO,
        starring: [findStar('SFINGE SOUND')],
      },
      {
        time: '05:00 - 06:00',
        title: 'Saluto al sole',
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
