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
    speaker: ['Giuseppe Sassano', 'Enzo Sansone'],
    type: GUEST_TYPE.TALK,
    field: ['Meme'],
  },
  {
    name: 'Guido Gioioso',
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
    name: 'Giacomo Castana',
    field: ['Prospettive Vegetali'],
    description: `Nato a Varese nel 1991, nel 2017 fonda il progetto <strong>Prospettive Vegetali</strong> e con esso si dedica ad esplorare il tema dell' <strong>interazione fra società umana e vegetale</strong>.<br/> 
    Tra i suoi successi c'è il documentario “<strong>Botanica per tutti</strong>”: un viaggio tra le persone capaci di raccontare l'importanza della botanica nel nostro paese.<br/>
    Secondo il Sole24Ore, Giacomo, è <em>il volto più anticonvenzionale tra i biofili della nuova generazione di attivisti italiani “green”</em>.<br/>
    Nel 2021 coordina la prima forma di “<strong>co-progettazione etnobotanica</strong>” rendendo economicamente indipendente la realizzazione di “<strong>Un orto al posto dell'asfalto</strong>” sostituendo 45 metri quadri di cemento con un orto sinergico al centro di Varese.<br/>
    Il progetto “Prospettive Vegetali” capace di azioni plurali in difesa dell'ambiente viene insignito del Premio Internazionale per la Pace “<strong>Book for Peace</strong>”.`,
    type: GUEST_TYPE.TALK,
  },

  {
    name: 'Davide Shorty - Solo',
    description: `<strong>Davide Shorty</strong> è un rapper, cantautore e producer di <strong>Palermo</strong> capace di far convivere la sua inconfondibile <strong>voce soul</strong>
    con sonorità e melodie contaminate da <strong>jazz</strong> e <strong>rap</strong>. Dopo varie esperienze nella scena <strong>hip hop siciliana</strong> nel <strong>2010</strong> si
    trasferisce a <strong>Londra</strong> dove, nel <strong>2012</strong>, fonda la band <strong>Retrospective For Love</strong> con cui suonerà in tutto il <strong>Regno Unito</strong> ed
    in <strong>Europa</strong>.<br/><br/>
    Dopo essersi posizionato <strong>3</strong> alla nona edizione di <strong>X Factor Italia</strong> (<strong>dicembre 2015</strong>) a <strong>febbraio 2017</strong> pubblica il suo
    primo album ufficiale, <strong>"Straniero"</strong>, che vanta prestigiose collaborazioni con <strong>Daniele Silvestri</strong> e <strong>Tormento</strong>.<br/>
    Nel corso della sua carriera condivide il palco <strong>artisti internazionali</strong> del calibro di <strong>Robert Glasper</strong>, <strong>Jordan Rakei</strong>, <strong>Bilal</strong> e
    <strong>mr jukes</strong> (<strong>Bombay Bicycle Club</strong>). Nel <strong>2018</strong> pubblica insieme ai <strong>Funk Shui Project</strong> l'album <strong>"Terapia di Gruppo"</strong>, che
    viene apprezzato molto da pubblico e critica.<br/>
    La fortunata collaborazione tra Davide e i Funk Shui Project continua nel <strong>2019</strong> quando esce per <strong>Totally Imported</strong>
    l'album <strong>“La Soluzione”</strong>, che conferma la <strong>sinergia artistica</strong> tra il cantante e il <strong>collettivo torinese</strong>.<br/><br/>
    Al disco segue la pubblicazione del <strong>reboot</strong> dello stesso: <strong>"La Soluzione Reboot"</strong> con all'interno l'inedito <strong>"Carillon"</strong> feat.
    <strong>Roy Paci</strong>. Nello stesso anno <strong>Daniele Silvestri</strong> lo invita a far parte del brano <strong>“Tempi modesti"</strong>, mentre nel <strong>2020</strong> firma
    con l'etichetta indipendente <strong>Totally Imported</strong>. Nel <strong>2021</strong> partecipa alla <strong>71^ edizione del Festival di Sanremo</strong> con il
    brano <strong>“Regina”</strong>, nella categoria <strong>“Nuove Proposte”</strong>, dove si classifica <strong>2</strong> e vince il <strong>“Premio della Sala Stampa Lucio
    Dalla”</strong>, il <strong>“Premio Enzo Jannacci NUOVO IMAIE 2021”</strong> e il <strong>“Premio Lunezia per Sanremo 2021”</strong> per il valore musicalletterario, essendo così l'<strong>artista più premiato</strong> di quella edizione del festival.<br/><br/>
    Segue l'uscita del suo <strong>secondo album</strong> da <strong>solista</strong>, <strong>“fusion.”</strong>, che anche durante la pandemia, lo porta ad esibirsi sui
    palchi di tutta Italia.`,
    type: GUEST_TYPE.MUSIC,
    field: ['Rap', 'Hip Hop'],
  },
  {
    name: 'Paolo Baldini DubFiles',
    type: GUEST_TYPE.MUSIC,
    description: `<strong>Paolo Baldini</strong> è nato a <strong>Pordenone</strong>, nel <strong>1975</strong>. Con la sua prima band <strong>B.R. Stylers</strong>, si è distinto nel <strong>panorama reggae
    italiano</strong> grazie al massiccio utilizzo dell'<strong>elettronica</strong> e di <strong>sonorità</strong> di ispirazione britannica, che sono rimaste a lungo una
    delle sue caratteristiche distintive. Nel <strong>2006</strong> Baldini è entrato a far parte della più longeva <strong>band reggae italiana</strong>, gli
    <strong>Africa Unite</strong>, di cui ha coprodotto due album (<strong>"Controlli"</strong> e <strong>“Rootz"</strong>). La collaborazione con <strong>Madaski</strong> ha dato origine al
    progetto <strong>The Dub Sync</strong>, in cui <strong>Baldini</strong> ha lavorato sia come <strong>produttore</strong> (vennero realizzati 2 album) che come <strong>bassista</strong>
    per gli show dal vivo.<br/><br/>
    Nel <strong>2014</strong> Baldini ha debuttato con il suo progetto solista <strong>Paolo Baldini DubFiles</strong>, incentrato sul suo lavoro come
    <strong>dubmaster</strong> realizzando l'<strong>omonimo album</strong>. Nel <strong>febbraio 2015</strong> si è recato in <strong>Giamaica</strong> per registrare quello che sarebbe
    diventato il suo secondo album, intitolato <strong>"At Song Embassy Papine Kingston 6"</strong> che vede protagonisti numerosi
    featuring di artisti dell'isola. Negli anni seguenti, ha girato molto in <strong>Europa</strong> e in <strong>America</strong>, esibendosi in alcuni dei più
    grandi <strong>festival reggae</strong> del mondo come <strong>Rototom Sunsplash</strong> (Spagna), <strong>No Logo</strong> (Francia), <strong>Jamming Festival</strong>
    (Colombia) e <strong>Sierra Nevada World Music Festival</strong> (USA).<br/><br/>
    Il biennio <strong>2018/2019</strong> è molto prolifico dal punto di vista del lavoro in studio: Baldini produce <strong>To the Foundation</strong> di
    <strong>Forelock & Arawak</strong>, <strong>Large</strong> di <strong>Mellow Mood</strong> ed il loro rispettivo seguito dub: <strong>"To the foundation of dub"</strong> e <strong>"Large Dub"</strong>.
    Tutti questi album sono pubblicati dall'etichetta di Baldini, <strong>La Tempesta Dub</strong>, che gestisce insieme a <strong>Mellow Mood</strong>.
    All'inizio del <strong>2020</strong>, Baldini ha pubblicato un album in collaborazione con <strong>Dan I</strong> e <strong>Imperial Sound Army</strong>, intitolato
    <strong>"Dolomites Rockers”</strong>. Nel <strong>2020</strong> e <strong>2021</strong>, non essendoci la possibilità di svolgere attività live causa Covid, sono diverse
    le produzioni realizzate in studio tra cui la <strong>collaborazione</strong> con la storica <strong>label Pressure Sounds</strong> e la realizzazione di <strong>2
    album</strong> di dub versions per la <strong>Echo Beach</strong> in cui Baldini ha “riletto" storici successi dei <strong>Dubblestandart</strong> e dei
    <strong>Noiseshaper</strong>.`,
    field: ['Reggae'],
  },
  {
    name: 'Pneumatix',
    type: GUEST_TYPE.MUSIC,
    description: `Pneumatix è un produttore musicale rumeno che ha iniziato la sua carriera musicale nel 2005 nella scena musicale underground come produttore musicale indipendente e deejay, la sua musica è un mix di suoni spaziali, accordi house con influenze techno e progressive mescolati nel suo stile Tekno per creare suoni vibrazioni chill e groove tek. Nel 2012 ha fondato "SleepNot! Soundsystem", un sound system con una comunità di appassionati di musica in continua crescita. La maggior parte della sua attività è stata svolta nella scena musicale underground della Romania e ultimamente in ambito europeo, negli ultimi dieci anni ha partecipato a diversi eventi e organizzato vari rave tekno con SleepNot! e altri sound system e collaborazioni nazionali o internazionali.
    Ha all'attivo una vastissima discografia e questo lo rende uno dei produttori piu' prolifici e completi di tutto il  panorama europeo.`,
  },
  {
    name: 'Angel_One',
    type: GUEST_TYPE.MUSIC,
    description: `La sua vasta conoscenza musicale e l'amicizia con importanti produttori lo hanno spinto nel 2017 a iniziare a mixare.
    Si unisce a Psylosophia, un'etichetta psytrance napoletana come DJ, e dal 2017 al 2020 ha eseguito quasi mensilmente un set ai loro party.
    Nel 2019 si è trasferito a Bucarest e ha iniziato a organizzare attivamente party con SleepNot Soundsystem di cui faceva già parte dal 2015.
    Crede fermamente che non ci debbano essere barriere tra i generi musicali, soprattutto quello elettronico, per questo oltre ai set notturni di tekno tribe e psytrance si esibisce con piacere anche in set deep house, tech-house e italo dance 90-00.
    Feste in cui ha mixato a: Capodanno a Cluj, Rotek 2019-2022, Albaniatek2022, TekOver, Blahna, Bucharest Tekno Unit, Step Evolution 2022, Smotek Party Zagreb, BulgariaTEk 2020, Various Italians Freeparty, Psylosophia Psytrance party, Tribal Ritual , Rave4 Base Czech republic`,
    field: ['DJ Tekno Tribe', 'Psytrance', 'Deephouse', 'Deep Techno'],
  },
  {
    name: 'Moddi MC',
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'Millenium Van',
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'DJ Lugi',
    type: GUEST_TYPE.MUSIC,
  },
].map((e) => {
  const splitted = e.name.toLowerCase().split(' ');
  return { ...e, image: splitted.length > 1 ? [splitted[0], splitted[1]].join('_') : splitted[0] };
});

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
