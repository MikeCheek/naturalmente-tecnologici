import { graphql, useStaticQuery } from 'gatsby';

export enum GUEST_TYPE {
  TALK,
  MUSIC,
}

export default [
  {
    name: 'Donato Montesano',
    description: `Donato Montesano è nato a Tricarico nel 1991. In età adolescenziale, grazie alla musica rap e al cinema, scopre che la letteratura non è solo quella noiosa che gli impongono di studiare a scuola: si appassiona ad autori americani come John Fante, Charles Bukowski ed Edward Bunker, i quali utilizzano un linguaggio simile al parlato.
    Mescolando queste influenze alle storie di paese che gli venivano raccontate da sempre, inizia a scrivere storie sue, che gli varranno vari premi nazionali e la pubblicazione di due libri: "I grandi scrittori non mangiano", una raccolta di racconti, "Chi ha polvere spara", un romanzo dal ritmo cinematografico basato sulla storia vera dell'ex rapinatore lucano Pancrazio Chiruzzi.`,
    type: GUEST_TYPE.TALK,
  },
  {
    name: 'Lucanian Shitposting',
    description: `Dal 2017 meme igp sulla Basilicata. Una delle poche pagina a poter vantare minacce di
    querela da un deputato della repubblica, non per questo siamo dei gangster. Vogliamo solo
    raccontare la nostra regione in tutti i suoi difetti perchè dalla parte della ragione ci sono già
    tutti. Dal 2020, la pagina cambia pelle senza tradire sè stessa, riuscendo a raggiungere un
    pubblico più esteso, il quale ha progressivamente formato una community viva e dinamica
    attorno al racconto memetico di una regione in cui apparentemente non accade nulla.`,
    people: ['Giuseppe Sassano', 'Enzo Sansone'],
    type: GUEST_TYPE.TALK,
    field: ['Meme'],
  },
  {
    name: 'Guido Gioso',
    description: `Guido Gioioso ha conseguito la laurea in Ingegneria Informatica e un dottorato di ricerca in Robotica e Automazione all'Università di Siena.
    Autore di più di 20 articoli scientifici pubblicati sulle più quotate riviste di settore, libri e conferenze internazionali, ha focalizzato la sua attività di ricerca sullo sviluppo di algoritmi di controllo per mani robotiche e dispositivi per la digitalizzazione del senso del tatto.
    Oggi è uno dei fondatori e business leader di WEART, una startup che sviluppa device rivoluzionari pensati per aggiungere sensazioni tattili ad esperienze digitali.
    Ha intrapreso questa avventura imprenditoriale con l'obiettivo di portare sul mercato i risultati di anni di ricerca accademica, perché questi avessero un impatto reale e tangibile nelle vite delle persone, guidato dalla sua passione per i nuovi paradigmi di interazione digitale.
    Crede fortemente nel motto di Alan Key, uno dei pionieri della Silicon Valley, che recita: “Il miglior modo di predire il futuro è inventarlo”`,
    type: GUEST_TYPE.TALK,
  },
  {
    name: 'Anna Albanese',
    type: GUEST_TYPE.TALK,
  },
  {
    name: 'Mauro Acito',
    description: `Nel 2017 ci siamo messi in testa che avremmo potuto trasformare uno spazio incredibile riscoperto, per caso, nei Sassi di Matera in un museo d'arte contemporanea (senza sapere come si fa). Da questa idea è nato prima "Volevo solo aprire un museo", un canale per raccontare le difficoltà che abbiamo affrontato per cercare di fare impresa culturale a Matera e, dopo qualche anno, il museo TAM: un museo d'arte contemporanea che produce nuovi contenuti coinvolgendo artisti nazionali ed internazionali che ha l'obiettivo di ribaltare la retorica della città. Un museo, per noi, serve a non far musealizzare la città e continuiamo, ogni giorno, a chiederci: come si apre un museo d'arte contemporanea, se non sei una ricca fondazione?`,
    type: GUEST_TYPE.TALK,
    field: ['Volevo solo aprire un museo'],
  },

  {
    name: 'Davide Shorty',
    description: `Davide Shorty è un rapper, cantautore e producer di Palermo capace di far convivere la sua inconfondibile voce soul
    con sonorità e melodie contaminate da jazz e rap. Dopo varie esperienze nella scena hip hop siciliana nel 2010 si
    trasferisce a Londra dove, nel 2012, fonda la band Retrospective For Love con cui suonerà in tutto il Regno Unito ed
    in Europa.
    Dopo essersi posizionato 3 alla nona edizione di X Factor Italia (dicembre 2015) a febbraio 2017 pubblica il suo
    primo album ufficiale, "Straniero", che vanta prestigiose collaborazioni con Daniele Silvestri e Tormento.
    Nel corso della sua carriera condivide il palco artisti internazionali del calibro di Robert Glasper, Jordan Rakei, Bilal e
    mr jukes (Bombay Bicycle Club). Nel 2018 pubblica insieme ai Funk Shui Project l'album "Terapia di Gruppo", che
    viene apprezzato molto da pubblico e critica.
    La fortunata collaborazione tra Davide e i Funk Shui Project continua nel 2019 quando esce per Totally Imported
    l'album “La Soluzione”, che conferma la sinergia artistica tra il cantante e il collettivo torinese.
    Al disco segue la pubblicazione del reboot dello stesso: "La Soluzione Reboot" con all'interno l'inedito "Carillon" feat.
    Roy Paci. Nello stesso anno Daniele Silvestri lo invita a far parte del brano “Tempi modesti", mentre nel 2020 firma
    con l'etichetta indipendente Totally Imported. Nel 2021 partecipa alla 71^ edizione del Festival di Sanremo con il
    brano “Regina”, nella categoria “Nuove Proposte”, dove si classifica 2 e vince il “Premio della Sala Stampa Lucio
    Dalla”, il “Premio Enzo Jannacci NUOVO IMAIE 2021” e il “Premio Lunezia per Sanremo 2021” per il valore musicalletterario, essendo così l'artista più premiato di quella edizione del festival.
    Segue l'uscita del suo secondo album da solista, “fusion.”, che anche durante la pandemia, lo porta ad esibirsi sui
    palchi di tutta Italia.`,
    type: GUEST_TYPE.MUSIC,
    field: ['Rap', 'Hip Hop'],
  },
  {
    name: 'Millenium Van',
    type: GUEST_TYPE.MUSIC,
  },
].map((e) => ({ ...e, image: e.name.toLowerCase().replace(/ /g, '_') }));

export const images = () => {
  const guestsPhotos: Data = useStaticQuery(graphql`
    query GuestPhotos {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "src/images/guests/" } }
        sort: { name: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300, quality: 80)
            }
          }
        }
      }
    }
  `);

  return guestsPhotos;
};
