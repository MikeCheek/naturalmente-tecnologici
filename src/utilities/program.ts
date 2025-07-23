import guests, { GUEST_TYPE, GuestNames } from './guests'
import { info, OrganizersNames } from './organizers'

const GuestsList = guests.map(g => ({ ...g, href: '/programma/#' + g.image }))
const OrganizersList = info.map(o => ({
  ...o,
  href: '/chi-siamo/#comitato-organizzativo'
}))

const Stars = [...GuestsList, ...OrganizersList]

const findStar = (
  name: //string
  OrganizersNames | GuestNames
) => {
  return Stars.find(s => s.name == name)
}

export const nowActive = () => {
  const today = new Date()
  const [day, hours, minutes] = [
    today.getDate(),
    today.getHours(),
    today.getMinutes()
  ]
  const timeNow = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`
  const current = program.filter(e => e.numberDay === day)
  if (current.length > 0)
    return current[0].timeline
      .map(item => ({
        time: item.time,
        title: item.title,
        type: EVENT_TYPE.CONFERENZA, // or choose a sensible default or infer from title
        location: '', // or infer from title/note if possible
        starring: (item as any).starring ?? []
      }))
      .filter(event => {
        const time = event.time.split('-')
        if (time.length > 1) {
          const eventStarts = time[0].replace(' ', '')
          const eventEnds = time[1].replace(' ', '')
          return eventStarts <= timeNow && timeNow < eventEnds
        }
        return time[0] < timeNow
      })
      .reverse()
  return null
}

export enum EVENT_TYPE {
  MORNING_ROUTINE = 'Morning Routine',
  CONFERENZA = 'Conferenza',
  LABORATORIO = 'Laboratorio',
  DIALOGO = 'Dialogo',
  PERFORMANCE = 'Performance',
  CONCERTO = 'Concerto'
}

export type Event = {
  time: string
  title: string
  note?: string
  description?: string
  type?: EVENT_TYPE
  location: string
  starring?: any[]
}

const program = [
  {
    numberDay: 7,
    day: 'Giovedì 7 Agosto',
    name: '',
    timeline: [
      // {
      //   time: '09:15 - 09:30',
      //   title: 'SOLO CREW',
      //   note: 'Arrivo CREW'
      // },
      // {
      //   time: '09:30 - 09:45',
      //   title: 'Caffè CREW',
      //   note: 'Brief per la giornata'
      // },
      // {
      //   time: '10:00 - 02:00',
      //   title: 'APERTURA INFO POINT'
      // },
      {
        time: '10:00 - 10:30',
        title: 'Buongiorno, caffè tuttx insieme'
      },
      {
        time: '11:00 - 13:00',
        title: 'Pasquale Calluso',
        starring: [findStar('Pasquale Calluso')]
      },
      {
        time: '13:00 - 15:30',
        title: 'Pausa Pranzo',
        note: '150 min'
      },
      {
        time: '15:30 - 16:30',
        title: 'Momenti ricreativi'
      },
      {
        time: '16:30 - 17:30',
        title: 'Metti i tuoi dischi'
      },
      {
        time: '17:45 - 18:15',
        title: 'Talk di Benvenuto Syskrack',
        starring: [findStar('Syskrack')]
      },
      // {
      //   time: '18:15 - 18:30',
      //   title: 'Cambio palco'
      // },
      {
        time: '18:30 - 19:00',
        title: 'Merlot'
        // starring: [findStar('Merlot')],
      },
      // {
      //   time: '19:00 - 19:10',
      //   title: 'Cambio Palco'
      // },
      {
        time: '19:10 - 19:40',
        title: 'Circolo Infantino'
        // starring: [findStar('Circolo Infantino')],
      },
      // {
      //   time: '19:40 - 19:45',
      //   title: 'Cambio Palco'
      // },
      {
        time: '19:45 - 20:15',
        title: 'Talk Guido Gioioso',
        starring: [findStar('Guido Gioioso')]
      },
      {
        time: '20:15 - 22:00',
        title: 'Pausa Cena',
        note: 'Qui sound Check + CENA SOCIALE?'
      },
      {
        time: '22:00 - 23:30',
        title: 'Guido Gioioso',
        starring: [findStar('Guido Gioioso')]
      },
      // {
      //   time: '23:30 - 23:45',
      //   title: 'Cambio Palco'
      // },
      {
        time: '23:45 - 01:15',
        title: 'Acid Pepper',
        starring: [findStar('Acid Pepper')]
      }
    ] as Event[]
  },
  {
    numberDay: 8,
    day: 'Venerdì 8 Agosto',
    name: '',
    timeline: [
      // {
      //   time: '09:15 - 09:30',
      //   title: 'SOLO CREW',
      //   note: 'Arrivo CREW'
      // },
      // {
      //   time: '09:30 - 09:45',
      //   title: 'Caffè CREW',
      //   note: 'Brief per la giornata'
      // },
      {
        time: '10:00 - 10:30',
        title: 'Buongiorno, caffè tuttx insieme e Presenta:'
      },
      {
        time: '10:30 - 12:30',
        title: 'LAB FANZINE'
      },
      {
        time: '12:30 - 16:00',
        title: 'Pausa Pranzo',
        note: '3h'
      },
      {
        time: '15:30 - 17:30',
        title: 'Metti i tuoi dischi'
      },
      {
        time: '17:30 - 18:15',
        title: 'Talk assemblea Lucana',
        note: '45 min'
      },
      {
        time: '18:15 - 20:15',
        title: 'Giro a Bosco Coste',
        note: 'Sound Check'
      },
      {
        time: '20:15 - 21:45',
        title: 'Pausa Cena',
        note: '90 min'
      },
      {
        time: '21:45 - 00:15',
        title: 'Jam',
        note: '150 min'
      },
      {
        time: '23:00 - 00:30',
        title: '',
        note: '60 min'
      },
      {
        time: '00:30 - 01:30',
        title: '',
        note: '60 min'
      }
    ] as Event[]
  },
  {
    numberDay: 9,
    day: 'Sabato 9 Agosto',
    name: '',
    timeline: [
      // {
      //   time: '09:15 - 09:30',
      //   title: 'SOLO CREW',
      //   note: 'Arrivo CREW'
      // },
      // {
      //   time: '09:30 - 09:45',
      //   title: 'Caffè CREW',
      //   note: 'Brief per la giornata'
      // },
      // {
      //   time: '09:45 - 10:00',
      //   title: 'APERTURA INFO POINT'
      // },
      {
        time: '10:00 - 10:30',
        title: 'Buongiorno, caffè tuttx insieme'
      },
      {
        time: '10:30 - 12:30',
        title: 'Lab SkillsPage'
      },
      {
        time: '12:30 - 15:30',
        title: 'Pausa Pranzo'
      },
      {
        time: '14:30 - 15:30',
        title: 'Giochi e networking',
        note: 'Lab serigrafia?'
      },
      {
        time: '15:30 - 17:00',
        title: 'Lab serigrafia'
      },
      {
        time: '17:30 - 18:15',
        title: 'Apertura Talk',
        note: 'Presenta:'
      },
      {
        time: '18:15 - 18:45',
        title: 'Talk'
      },
      // {
      //   time: '18:45 - 18:55',
      //   title: 'Pausa Cambio Palco'
      // },
      {
        time: '18:55 - 19:25',
        title: 'Passeggiata nel Bosco',
        note: '???'
      },
      {
        time: '19:25 - 19:35',
        title: ''
      },
      {
        time: '19:35 - 20:05',
        title: ''
      },
      {
        time: '19:30 - 22:30',
        title: 'Pausa Cena',
        note: 'Qui sound Check'
      },
      {
        time: '21:30 - 23:20',
        title: 'SFINGE',
        starring: [findStar('SFINGE SOUND')]
      },
      {
        time: '23:00 - 01:40',
        title: 'StarGazing'
      }
    ] as Event[]
  },
  {
    numberDay: 10,
    day: 'Domenica 10 Agosto',
    name: '',
    timeline: [
      // {
      //   time: '09:15 - 09:30',
      //   title: 'SOLO CREW',
      //   note: 'Arrivo CREW'
      // },
      // {
      //   time: '09:30 - 09:45',
      //   title: 'Caffè CREW',
      //   note: 'Brief per la giornata'
      // },
      // {
      //   time: '09:45 - 10:00',
      //   title: 'APERTURA INFO POINT'
      // },
      {
        time: '10:00 - 10:30',
        title: 'Buongiorno, caffè tuttx insieme e Presenta:'
      },
      {
        time: '11:30 - 12:30',
        title: 'Laboratorio Modellazione Argilla'
      },
      {
        time: '10:30 - 12:30',
        title: 'Metti i tuoi dischi',
        note: '120 min'
      },
      {
        time: '12:30 - 15:30',
        title: 'Pausa Pranzo',
        note: '150 min'
      },
      {
        time: '14:30 - 16:00',
        title: 'Making pasta',
        note: '90 min'
      },
      {
        time: '16:30 - 18:00',
        title: 'TIPO',
        note: 'Chiedere a TAM “Quando vi dicono NT voi a che pensate? consigliare free book da leggere e di cui disquisire”'
      },
      {
        time: '18:30 - 19:15',
        title: 'Talk Manuel Schiavone',
        // starring: [findStar('Manuel Schiavone')],
        note: '45 min'
      },
      // {
      //   time: '19:15 - 19:30',
      //   title: 'Cambio Palco',
      //   note: '30 min'
      // },
      {
        time: '19:30 - 20:30',
        title: 'Talk Giandomenico',
        starring: [findStar('Giandomenico Mercadante')],
        note: '60 min'
      },
      {
        time: '20:30 - 22:30',
        title: ''
      },
      {
        time: '22:30',
        title: 'Apertura Stargazing'
      },
      {
        time: '22:30',
        title: 'Apertura Performance'
      }
    ] as Event[]
  }
]

export type TimelineItem = typeof program[number]
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

export default program
