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
  CONFERENZA = 'Talk',
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

// PRE-FESTIVAL - MERCOLEDÌ 6 AGOSTO
const preFestival = [
  {
    numberDay: 6,
    day: 'Mercoledì 6 Agosto',
    name: 'Pre-Festival',
    timeline: [
      {
        time: '19:00 - 20:00',
        title: 'Conferenza Inaugurale',
        description:
          'Il festival esce dal Bosco: presentazione della nuova edizione e incontro con la popolazione',
        type: EVENT_TYPE.CONFERENZA,
        location: 'Castello Sichinulfo, Grottole',
        starring: []
      },
      {
        time: '20:00 - 21:00',
        title: 'Giro Turistico di Grottole',
        type: EVENT_TYPE.LABORATORIO,
        location: 'Grottole',
        starring: []
      },
      {
        time: '21:30 - 23:00',
        title: 'Cena da Podus',
        type: EVENT_TYPE.PERFORMANCE,
        location: 'Podus',
        starring: []
      }
    ] as Event[]
  }
]

// You can prepend this to your program array if you want to include pre-festival events:
const program = [
  ...preFestival,
  // rest of your program as before...
  {
    numberDay: 7,
    day: 'Giovedì 7 Agosto',
    name: '',
    timeline: [
      {
        time: '10:00 - 10:30',
        title: 'Buongiorno, caffè tuttx insieme'
      },
      {
        time: '11:00 - 13:00',
        title: 'Come rendere Sexy la Protesta in Basilicata',
        description:
          'Riflessione e pratica su come immaginare futuri queer dai territori marginalizzati, con metodologie non convenzionali come il cruising.',
        type: EVENT_TYPE.LABORATORIO,
        starring: [findStar('Pasquale Calluso')]
      },
      {
        time: '13:00 - 15:30',
        title: '🍽️ Pausa Pranzo'
      },
      {
        time: '15:30 - 16:30',
        title: 'Torneo Acid Pepper',
        description: 'Gioco/torneo musicale interattivo community',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('Acid Pepper')]
      },
      {
        time: '16:30 - 17:30',
        title: 'Metti i tuoi dischi!',
        description: 'Condivisione musicale aperta tutti',
        type: EVENT_TYPE.PERFORMANCE
      },
      {
        time: '17:45 - 18:15',
        title: 'Talk di Benvenuto: "Tra Natura e Tecnologia" Syskrack',
        description: 'Apertura ufficiale, manifesto comunità',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Syskrack')]
      },
      {
        time: '18:30 - 19:00',
        title: 'Tradire la tradizione - Guido Gioioso',
        description: 'Innovazione come ribellione costruttiva',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Guido Gioioso')]
      },
      {
        time: '19:00 - 19:30',
        title: 'I Denti Cariati e la Patria – Circolo Antonio Infantino',
        type: EVENT_TYPE.CONFERENZA
        // starring: [findStar('Circolo Infantino')]
      },
      {
        time: '20:15 - 22:00',
        title: '🍽️ Pausa Cena'
      },
      {
        time: '22:00 - 23:30',
        title: 'MUSIC | Performance',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('Guido Gioioso')]
      },
      {
        time: '23:30 - 01:15',
        title: 'MUSIC Performance',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('Acid Pepper')]
      }
    ] as Event[]
  },
  {
    numberDay: 8,
    day: 'Venerdì 8 Agosto',
    name: '',
    timeline: [
      {
        time: '10:30 - 13:00',
        title: 'Fanzine - TAM',
        description: 'Autoproduzione editoriale, narrazione dal basso',
        type: EVENT_TYPE.LABORATORIO
      },
      {
        time: '13:00 - 15:30',
        title: '🍽️ Pausa Pranzo'
      },
      {
        time: '15:30 - 16:30',
        title: 'Torneo Acid Pepper',
        description: 'Gioco/torneo musicale interattivo community',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('Acid Pepper')]
      },
      {
        time: '16:30 - 17:30',
        title: 'Metti i tuoi dischi!',
        description: 'Condivisione musicale aperta tutti',
        type: EVENT_TYPE.PERFORMANCE
      },
      {
        time: '16:00 - 18:15',
        title: 'No CPR - Assemblea Lucana',
        description: 'Diritti, migrazione, resistenza sociale',
        type: EVENT_TYPE.CONFERENZA
      },
      {
        time: '18:00 - 20:00',
        title: 'Passeggiata nel Bosco "Esplorazione & Scoperta"',
        type: EVENT_TYPE.LABORATORIO
      },
      {
        time: '20:00 - 21:45',
        title: '🍽️ Pausa Cena'
      },
      {
        time: '21:45 - 00:15',
        title: 'Jam Session - Tributo a Franco Varanzano',
        description: 'Musica collettiva, omaggio musicista',
        type: EVENT_TYPE.PERFORMANCE
      }
    ] as Event[]
  },
  {
    numberDay: 9,
    day: 'Sabato 9 Agosto',
    name: '',
    timeline: [
      {
        time: '10:30 - 12:30',
        title: 'SkillPage "Il Problema del Mismatching nel Mercato del Lavoro"',
        type: EVENT_TYPE.CONFERENZA
      },
      {
        time: '13:00 - 15:30',
        title: '🍽️ Pausa Pranzo'
      },
      {
        time: '15:30 - 16:30',
        title: 'Torneo Acid Pepper',
        description: 'Gioco/torneo musicale interattivo community',
        type: EVENT_TYPE.PERFORMANCE
      },
      {
        time: '16:30 - 17:30',
        title: 'Metti i tuoi dischi!',
        description: 'Condivisione musicale aperta tutti',
        type: EVENT_TYPE.PERFORMANCE
      },
      {
        time: '17:30 - 18:15',
        title: 'Lazy Farm "TALK - Rurali Digitali" con Vittoria Elena Simone',
        description: 'Permacultura, tecnologie appropriate rurali',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Vittoria Elena Simone')]
      },
      {
        time: '18:15 - 20:00',
        title: "Escursione nell'Azienda Agricola Montemurro",
        type: EVENT_TYPE.CONFERENZA
      },
      {
        time: '20:00 - 22:00',
        title: '🍽️ Pausa Cena'
      },
      {
        time: '22:00 - 23:20',
        title: 'MUSIC | Sfinge (& Friends)',
        description: 'Sfinge Sound System',
        type: EVENT_TYPE.PERFORMANCE,
        starring: [findStar('SFINGE SOUND')]
      }
    ] as Event[]
  },
  {
    numberDay: 10,
    day: 'Domenica 10 Agosto',
    name: '',
    timeline: [
      {
        time: '11:30 - 12:30',
        title: "Laboratorio di Modellazione dell'Argilla con Michele Schiavone",
        type: EVENT_TYPE.LABORATORIO
      },
      {
        time: '15:30 - 16:30',
        title: 'Torneo Acid Pepper',
        description: 'Gioco/torneo musicale interattivo community',
        type: EVENT_TYPE.PERFORMANCE
      },
      {
        time: '16:30 - 17:30',
        title: 'Metti i tuoi dischi!',
        description: 'Condivisione musicale aperta tutti',
        type: EVENT_TYPE.PERFORMANCE
      },
      {
        time: '17:30 - 19:30',
        title: 'Pasta Making - Noi Ortadini',
        description:
          "Esploreremo l'affascinante viaggio del grano, dalle sue antiche origini alla selezione delle varietà più innovative scoprendo come la scienza e la tecnologia influenzano la qualità e la lavorazione...Con le mani in pasta!",
        type: EVENT_TYPE.LABORATORIO,
        starring: [findStar('Noi Ortadini')]
      },
      {
        time: '18:30 - 19:15',
        title: 'Tra nostalgia e Arte',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('M.E.R.L.O.T. - Manuel Schiavone')]
      },
      {
        time: '19:30 - 20:30',
        title: '"Perchè non si vedono più le stelle?"',
        description: 'Astronomia e orientamento celeste',
        type: EVENT_TYPE.CONFERENZA,
        starring: [findStar('Giandomenico Mercadante')]
      },
      {
        time: '22:00 - 02:30',
        title: 'EXPERIENCE | Stargazing & Soundscaping',
        type: EVENT_TYPE.LABORATORIO
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

export const timelineGuests: any[] = program
  .flatMap(e => e.timeline)
  .filter(e => e.starring && e.starring.length > 0)
  .map(e => e.starring)
  .flat()

export default program
