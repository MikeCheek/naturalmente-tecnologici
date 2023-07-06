export interface TimelineItem {
  day: string;
  name: string;
  description?: string;
  timeline: {
    time: string;
    title: string;
    location?: string;
    type?: string;
  }[];
}

export default [
  {
    day: '10 Agosto',
    name: 'Welcome Day',
    timeline: [
      {
        time: '16:00 - 16:30',
        title: 'Caffè di benvenuto al Laboratorio Syskrack Lab [APERTO A TUTTI E TUTTE]',
      },
      {
        time: '16:30 - 17:30',
        title: `Conferenza di Benvenuto [GRATUITO E APERTO A TUTTI E TUTTE]
        10 anni senza Peps - Syskrack : 9 anni dopo`,
        //         Relatori:
        // Davide Saladino (Presidente APS Syskrack Giuseppe Porsia)
        // Giuseppe Liuzzi ( Community Manager)
        // Naturalmente Tecnologici '23: (Ri)prendiamoci il futuro
        // Giuseppe Becci (organizzatore )
        // Davide Saladino (Presidente APS Syskrack Giuseppe Porsia)
        // Giuseppe Liuzzi ( Community Manager)
        // Teodosio Santagata
        type: 'Conferenza',
        location: 'Auditorium',
      },
      {
        time: '18:00',
        title: 'Apertura camping "Welcome to Tijuana"',
        location: 'Camping',
      },
      {
        time: '18:30 - 20:00',
        title: 'Visita nel geosito dei Cinti e Esplorazione di una cantina Storica a cura di Alla Scoperta di Grassano',
      },
      {
        time: '22:00',
        title: 'Pre-party: Notte di San Lorenzo sotto le stelle',
      },
    ],
  },
  {
    day: '11 Agosto',
    name: 'ART is Power',
    description:
      'Festeggiamo insieme il 50esimo compleanno della cultura Hip-Hop! Abbiamo preparato talk, presentazioni, estemporanee, battle di freestyle rap e un concerto che sarà la ciliegina sulla torta della giornata.',
    timeline: [
      {
        time: '09:00',
        title: 'Accoglienza ed accrediti',
      },
      {
        time: '09:30',
        title: 'Good Morning Routine con Giacomo Castana "Prospettive Vegetali"',
      },
      {
        time: '10:30',
        title: 'Good Morning Selecta / Djset - To Be Annouced Soon',
      },
      {
        time: '11:00',
        title: 'Attività di Estemporanea - TBA',
      },
      {
        time: '13:00',
        title: 'Border Radio - Online streaming',
      },
      {
        time: '16:00 - 17:30',
        title: `Talk "Music is Power! L'Hiphop lucano 50 anni dopo"<br/>
        Presentazione  Libri Hip Opera Foundation<br/>
        Accredito Battle Rap con montepremi<br/>`,
      },
      {
        time: '18:00 - 20:00',
        title: `La Potenza del Rap - Battle Rap Freestyle`,
      },
      {
        time: '20:00',
        title: `Finale con Premiazione`,
      },
      {
        time: '21:30',
        title: `Showcase Dj Lugi`,
      },
      {
        time: '23:00',
        title: `DAVIDE SHORTY - LIVE SOLO`,
        location: 'Main Stage',
      },
      {
        time: '01:00 - 02:00',
        title: `Dj Set`,
      },
    ],
  },
  {
    day: '12 Agosto',
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
        title: 'Good Morning Routine con Giacomo Castana "Prospettive Vegetali"',
      },
      {
        time: '10:30',
        title: 'Good Morning Selecta / Dj Set - TBA',
      },
      {
        time: '10:00 - 13:00',
        title: `Workshop "Design Thinking" - IBM SkillsBuild<br/>
            Co-progettare empaticamente  usando il DESIGN THINKING per creare <br/>
        connessioni tra persone e realtà virtuose.<br/>
                LABORATORIO DA PRENOTARE`,
      },
      {
        time: '11:30',
        title: 'Stand Espositivi ed estemporanee - TBA soon',
      },
      {
        time: '15:30',
        title: `IMMAGINARE UN FUTURO RURALE ECO TRANSFEMMINISTA<br/>
                a cura di Rocco Pisilli e CAT<br/>
        LABORATORIO DA PRENOTARE - 60 posti disponibili<br/>
        PRENOTAZIONE EFFETTUABILE VIA EMAIL DOPO AVER<br/>
        CONFERMATO`,
      },
      {
        time: '16:00',
        title: `Legende nei Boschi - Tra creature magiche e Briganti<br/>
        A cura di Alla Scoperta di Grassano`,
      },
      {
        time: '17:00',
        title: 'Experience - TBA soon',
      },
      {
        time: '21:00',
        title: 'Opening Show - TBA soon',
      },
      {
        time: '22:00',
        title: '"Naturalmente Party" - Moddi, Trix e Dj Lugi',
        location: 'Main Stage',
      },
    ],
  },
  {
    day: '13 Agosto',
    name: 'KNOWLEDGE IS/AS POWER',
    description: `Co(no)scienza, la musica e la natura si incontrano in un evento imperdibile. Ascolta le esperienze che contribuiscono a costruire il mondo del domani partendo da un immaginario collettivo. La sera GRAN FINALE con il DUB MASTER PAOLO BALDINI guardando, poi, l'alba con PNEUMATIX e ANGEL_ONE.`,
    timeline: [
      {
        time: '09:00',
        title: 'Accoglienza ed accrediti',
      },
      {
        time: '09:30',
        title: 'Morning routine con Giacomo Castana aka Prospettive Vegetali',
      },
      {
        time: '10:30',
        title: `Creare una rivoluzione culturale dove non c'è mai stata`,
      },
      {
        time: '11:30',
        title: `L'arte è un crimine, il crimine è un arte<br/>
        Presentazione del libro "Chi ha polvere spara"`,
        type: 'Presentazione',
      },
      {
        time: '13:00',
        title: 'Border Radio LIVE Streaming',
      },
      {
        time: '16:00',
        title: `Toccare il futuro con Mano - La Tecnologia che unisce`,
      },
      {
        time: '17:30',
        title: `Immaginare il futuro partendo dal passato`,
      },
      {
        time: '19:00',
        title: 'Il meme come nuovo linguaggio',
      },
      {
        time: '21:00',
        title: 'Brigante Sound System (FULL EQUIPMENT) MONTONE & BIG SIMON <br/>BIG SIMON (SHOWCASE)',
      },
      {
        time: '23:00',
        title: 'Paolo Baldini Live',
      },
      {
        time: '01:00',
        title: 'PNEUMATIX Live',
      },
    ],
  },
];
