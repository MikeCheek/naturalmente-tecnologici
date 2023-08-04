import guests from './guests';
import { info } from './organizers';

export interface TimelineItem {
  day: string;
  name: string;
  description?: string;
  timeline: {
    time: string;
    title: string;
    location?: string;
    type?: string;
    starring?: typeof guests;
  }[];
}

const GuestsList = guests.map((g) => ({ ...g, href: '/programma/#' + g.image }));
const OrganizersList = info.map((o) => ({ ...o, href: '/chi-siamo/#comitato-organizzativo' }));

export default [
  {
    numberDay: 10,
    day: 'Giovedì 10 Agosto',
    name: 'Welcome Day',
    timeline: [
      {
        time: '16:00 - 16:30',
        title: 'Caffè di benvenuto al Laboratorio Syskrack Lab [APERTO A TUTTI E TUTTE]',
        location: 'Grassano',
      },
      {
        time: '16:30 - 17:00',
        title: `Conferenza di Benvenuto [GRATUITO E APERTO A TUTTI E TUTTE]
        10 anni senza Peps - Syskrack : 9 anni dopo`,
        type: 'Conferenza',
        location: 'Auditorium Grassano',
        starring: [
          OrganizersList.find((o) => o.name === 'Davide Saladino'),
          OrganizersList.find((o) => o.name === 'Giuseppe Becci'),
          OrganizersList.find((o) => o.name === 'Giuseppe Liuzzi'),
        ],
      },
      {
        time: '17:00 - 17:30',
        title: `[Conferenza Stampa] Presentazione del festival`,
        type: 'Conferenza',
        location: 'Auditorium Grassano',
        starring: [
          OrganizersList.find((o) => o.name === 'Giuseppe Becci'),
          OrganizersList.find((o) => o.name === 'Giuseppe Liuzzi'),
        ],
      },
      {
        time: '17:30 - 18:00',
        title: `[Conferenza Stampa] Presentazione residenza artistico scientifica`,
        type: 'Conferenza',
        location: 'Auditorium Grassano',
        starring: [OrganizersList.find((o) => o.name === 'Giuseppe Becci')],
      },
      {
        time: '19:00',
        title: 'Apertura Welcome to Tijuana Camp',
        location: 'Bosco Coste',
      },
      {
        time: '18:00 - 20:30',
        title: 'Esplorazione di più cantine Storiche',
        location: 'I cinti di Grassano',
        starring: [
          GuestsList.find((g) => g.name === 'Anna Albanese'),
          GuestsList.find((g) => g.name === 'Maria Mugnolo'),
          GuestsList.find((g) => g.name === 'Innocenzo Pontillo'),
        ],
      },
      {
        time: '22:00',
        title: 'Pre-party: Notte di San Lorenzo sotto le stelle',
      },
    ],
  },
  {
    numberDay: 11,
    day: 'Venerdì 11 Agosto',
    name: 'ART is Power',
    description:
      'Festeggiamo insieme il 50esimo compleanno della cultura Hip-Hop! Abbiamo preparato talk, presentazioni, estemporanee, battle di freestyle rap e un concerto che sarà la ciliegina sulla torta della giornata.',
    timeline: [
      {
        time: '08:00',
        title: 'Accoglienza ed accrediti',
      },
      {
        time: '8:00 - 10:30',
        title: 'Good Morning Routine',
        starring: [GuestsList.find((g) => g.name === 'Giacomo Castana')],
      },
      {
        time: '11:00 - 14:00',
        title: 'Good Morning Selecta / Djset',
        location: 'Botanical Stage',
      },
      {
        time: '11:30 - 12:30',
        title: 'Inaugurazione Mostre',
        location: 'Botanical Stage',
      },
      {
        time: '12:00 - 15:00',
        title: 'Live Painting',
        location: 'Botanical Stage',
      },
      {
        time: '13:00 - 15:30',
        title: 'Border Radio - Online streaming',
      },
      {
        time: '15:00-16:00',
        title: 'Degustazione di Vinili a cura di Sfinge Sound',
        location: 'Botanical Stage',
      },
      {
        time: '16:00 - 17:30',
        title: `Talk: Hip Hop Power! Un momento di condivisione e di confronto sui temi sociali che hanno caratterizzato i 50 anni di questa fantastica Cultura.`,
        location: 'Botanical Stage',
      },
      {
        time: '17:30',
        title: `Termine iscrizione Battle Rap Freestyle`,
        location: 'Botanical Stage',
      },
      {
        time: '18:00 - 20:00',
        title: `La Potenza del Rap - Battle Rap Freestyle *il comitato organizzativo invita tutti i partecipanti ad essere puntuali al fine di ripettare il programma del festival`, 
        location: 'Botanical Stage',
      },
      {
        time: '20:00',
        title: `Finale con Premiazione`,
        location: 'Botanical Stage',
      },
      {
        time: '21:30',
        title: `Showcase Dj Lugi`,
        location: 'Panoramic Stage',
      },
      {
        time: '23:00',
        title: `DAVIDE SHORTY - LIVE SOLO`,
        starring: [GuestsList.find((g) => g.name === 'Davide Shorty - Solo')],
        location: 'Panoramic Stage',
      },
      {
        time: '01:00 - 02:00',
        title: `Dj Set`,
      },
    ],
  },
  {
    numberDay: 12,
    day: 'Sabato 12 Agosto',
    name: 'DOING is Power',
    description:
      'Se ti piace sporcarti le mani, divertirti e fare festa sei nel posto giusto. Lasciati coinvolgere nelle attività che abbiamo preparato per te. Un percorso che parte dal Design Thinking, passando per nuovi immaginari rurali, immergendoti nelle legende dei boschi lucani fino ad arrivare al Naturalmente Tecnologici PARTY a cura di Moddi MC, Trix E DJ Lugi.',
    timeline: [
      {
        time: '09:00',
        title: 'Accoglienza ed accrediti',
      },
      {
        time: '09:30',
        title: 'Good Morning Routine',
        starring: [GuestsList.find((g) => g.name === 'Giacomo Castana')],
      },
      {
        time: '10:30',
        title: 'Good Morning Selecta / Dj Set',
      },
      {
        time: '10:00 - 13:00',
        title: `Workshop "Design Thinking" - IBM SkillsBuild<br/>
            Co-progettare empaticamente  usando il DESIGN THINKING per creare <br/>
        connessioni tra persone e realtà virtuose.<br/>
                LABORATORIO DA PRENOTARE`,
        starring: [
          GuestsList.find((g) => g.name === 'IBM SkillsBuild'),
          GuestsList.find((g) => g.name === 'Giuliana Bianchini'),
          GuestsList.find((g) => g.name === 'Sara Cricenti'),
        ],
      },
      {
        time: '11:30',
        title: 'Stand Espositivi ed estemporanee',
      },
      {
        time: '15:00-16:00',
        title: 'Degustazione di Vinili a cura di Sfinge Sound',
        starring: [GuestsList.find((g) => g.name === 'SFINGE SOUND')],
        location: 'Botanical Stage',
      },
      {
        time: '15:30',
        title: `IMMAGINARE UN FUTURO RURALE ECO TRANSFEMMINISTA<br/>
                a cura di Rocco Pisilli e CAT<br/>
        LABORATORIO DA PRENOTARE - 60 posti disponibili<br/>
        PRENOTAZIONE EFFETTUABILE VIA EMAIL DOPO AVER<br/>
        CONFERMATO`,
        starring: [GuestsList.find((g) => g.name === 'Pisilli Rocco')],
      },
      {
        time: '16:00',
        title: `Legende nei Boschi - Tra creature magiche e Briganti<br/>
        A cura di Alla Scoperta di Grassano`,
      },
      {
        time: '17:00',
        title: 'Experience',
      },
      {
        time: '21:00',
        title: 'Opening Show',
        location: 'Panoramic Stage',
      },
      {
        time: '22:00',
        title: 'Capsicum Set Party - Moddi, Trix e Dj Lugi',
        starring: [
          GuestsList.find((g) => g.name === 'Capsicum Set Party'),
          GuestsList.find((g) => g.name === 'Moddi MC'),
          GuestsList.find((g) => g.name === 'DJ Lugi'),
          GuestsList.find((g) => g.name === 'DJ Trix'),
        ],
        location: 'Panoramic Stage',
      },
    ],
  },
  {
    numberDay: 13,
    day: 'Domenica 13 Agosto',
    name: 'KNOWLEDGE IS/AS POWER',
    description: `Co(no)scienza, la musica e la natura si incontrano in un evento imperdibile. Ascolta le esperienze che contribuiscono a costruire il mondo del domani partendo da un immaginario collettivo. La sera GRAN FINALE con il DUB MASTER PAOLO BALDINI guardando, poi, l'alba con PNEUMATIX e ANGEL_ONE.`,
    timeline: [
      {
        time: '09:00',
        title: 'Accoglienza ed accrediti',
      },
      {
        time: '09:30',
        title: 'Good Morning Routine',
        starring: [GuestsList.find((g) => g.name === 'Giacomo Castana')],
      },
      {
        time: '10:30',
        title: `Toccare il futuro con Mano - La Tecnologia che unisce`,
        starring: [GuestsList.find((g) => g.name === 'Guido Gioioso')],
        location: 'Botanical Stage',
      },
      {
        time: '11:30',
        title: 'Il meme come nuovo linguaggio di comunicazione',
        location: 'Botanical Stage',
        starring: [GuestsList.find((g) => g.name === 'Lucanian Shitposting')],
      },
      {
        time: '13:00',
        title: 'Border Radio LIVE Streaming',
      },
      {
        time: '15:00-16:00',
        title: 'Degustazione di Vinili a cura di Sfinge Sound',
        starring: [GuestsList.find((g) => g.name === 'SFINGE SOUND')],
        location: 'Botanical Stage',
      },
      {
        time: '16:00',
        title: `Immaginare il futuro partendo dal passato`,
        starring: [
          GuestsList.find((g) => g.name === 'Anna Albanese'),
          GuestsList.find((g) => g.name === 'Innocenzo Bronzino'),
          GuestsList.find((g) => g.name === 'Domenico Lostrangio'),
        ],
        location: 'Botanical Stage',
      },
      {
        time: '17:30',
        title: `Creare una rivoluzione culturale dove non c'è mai stata`,
        location: 'Botanical Stage',
        starring: [GuestsList.find((g) => g.name === 'Mauro Acito')],
      },
      {
        time: '19:00',
        title: `L'arte è un crimine, il crimine è un arte<br/>
        Presentazione del libro "Chi ha polvere spara"`,
        type: 'Presentazione',
        location: 'Botanical Stage',
        starring: [GuestsList.find((g) => g.name === 'Donato Montesano')],
      },
      {
        time: '21:00',
        title: 'Brigante Sound System (FULL EQUIPMENT) MONTONE & BIG SIMON <br/>BIG SIMON (SHOWCASE)',
        starring: [GuestsList.find((g) => g.name === 'Brigante Sound System')],
        location: 'Panoramic Stage',
      },
      {
        time: '23:00',
        title: 'Paolo Baldini DubFiles Live',
        location: 'Panoramic Stage',
        starring: [GuestsList.find((g) => g.name === 'Paolo Baldini DubFiles')],
      },
      {
        time: '01:00',
        title: 'PNEUMATIX Live',
        location: 'Panoramic Stage',
        starring: [GuestsList.find((g) => g.name === 'Pneumatix')],
      },
      {
        title: 'Angel_One DJ Set',
        location: 'Panoramic Stage',
        starring: [GuestsList.find((g) => g.name === 'Angel_One')],
      },
      {
        time: '06:00',
        title: 'Alba e arrivederci NT23',
      },
    ],
  },
];
