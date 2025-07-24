import { graphql, useStaticQuery } from 'gatsby'

export enum GUEST_TYPE {
  TALK,
  MUSIC,
  ACTIVITY,
  COMMUNITY
}

interface Guest {
  name: string
  field?: string[]
  description?: string
  type: GUEST_TYPE
  mentor?: string[]
  image: string
  imagePosition?: string
}

const guests = [
  {
    name: 'Syskrack',
    type: GUEST_TYPE.COMMUNITY,
    description: `L'associazione Syskrack Giuseppe Porsia è un'associazione senza scopo di lucro con sede a Grassano nata in memoria del nostro Peps, scomparso prematuramente il 5 Luglio 2013.
Syskrack è una community glocale
(globale + locale), connessa tramite internet, tramite che agisce localmente attraverso luoghi fisici, i laboratori.

Syskrack era il nickname di Giuseppe Porsia e significa:
System + Kracking = "Rompere il sistema". Come? trovando i bug della società per riuscire ad hackerarla, modificarne il comportamento, riportandolo alla consapevolezza, all'umanità, alla scienza e alla natura.

Crediamo fortemente che chi, in un modo o nell'altro, abbia un privilegio debba metterlo a disposizione di chi non lo ha per per far sì che possa acquisirlo.`
  },
  // {
  //   name: 'Donato Montesano',
  //   field: ['Chi ha polvere spara'],
  //   description: `<strong>Donato Montesano</strong> è nato a Tricarico nel 1991.<br/>
  //   In età adolescenziale, grazie alla musica rap e al cinema, scopre che <strong>la letteratura non è solo quella noiosa</strong> che gli impongono di studiare a scuola: si appassiona ad autori americani come John Fante, Charles Bukowski ed Edward Bunker, i quali utilizzano un <strong>linguaggio simile al parlato</strong>.<br/><br/>
  //   Mescolando queste influenze alle <strong>storie di paese</strong> che gli venivano raccontate da sempre, inizia a scrivere <strong>storie sue</strong>, che gli varranno vari <strong>premi nazionali</strong> e la pubblicazione di due libri:
  //   <ul>
  //   <li><strong>"I grandi scrittori non mangiano"</strong>,<br/>
  //    una raccolta di racconti;<br/><br/>
  //   <li><strong>"Chi ha polvere spara"</strong>,<br/>
  //   un romanzo dal ritmo cinematografico basato sulla storia vera dell'ex rapinatore lucano Pancrazio Chiruzzi.`,
  //   type: GUEST_TYPE.TALK,
  // },
  // {
  //   name: 'Lucanian Shitposting',
  //   description: `Dal 2017 <strong>meme igp</strong> sulla Basilicata.<br/>
  //   Una delle poche pagine a poter vantare <strong>minacce di querela</strong> da un deputato della repubblica, non per questo siamo dei gangster.<br/>
  //   Vogliamo solo <strong>raccontare la nostra regione</strong> in tutti i suoi difetti perchè dalla parte della ragione ci sono già tutti.<br/><br/>
  //   Dal 2020, la pagina <strong>cambia pelle</strong> senza tradire sè stessa, riuscendo a raggiungere un <strong>pubblico più esteso</strong>,
  //   il quale ha progressivamente formato una <strong>community</strong> viva e dinamica attorno al racconto memetico di una regione in cui <strong>apparentemente non accade nulla</strong>.`,
  //   mentor: ['Giuseppe Sassano', 'Enzo Sansone'],
  //   type: GUEST_TYPE.TALK,
  //   field: ['Meme'],
  // },
  {
    name: 'Guido Gioioso',
    description: `Guido Gioioso ha conseguito la <strong>laurea in Ingegneria Informatica</strong> e un <strong>dottorato</strong> di ricerca in <strong>Robotica e Automazione</strong> all'Università di Siena.<br/>
    Autore di <strong>più di 20 articoli</strong> scientifici pubblicati sulle più quotate riviste di settore, libri e conferenze internazionali, ha focalizzato la sua attività di ricerca sullo <strong>sviluppo di algoritmi di controllo</strong> per mani robotiche e dispositivi per la digitalizzazione del <strong>senso del tatto</strong>.<br/><br/>
    Oggi è uno dei fondatori e business leader di <strong>WEART</strong>, una startup che sviluppa device rivoluzionari pensati per aggiungere <strong>sensazioni tattili</strong> ad esperienze digitali.<br/>
    Ha intrapreso questa avventura imprenditoriale con l'obiettivo di portare sul mercato i risultati di <strong>anni di ricerca accademica</strong>, perché questi avessero un <strong>impatto reale e tangibile</strong> nelle vite delle persone, guidato dalla sua passione per i nuovi paradigmi di interazione digitale.<br/><br/>
    Crede fortemente nel motto di <strong>Alan Key</strong>, uno dei pionieri della Silicon Valley, che recita: <strong>“Il miglior modo di predire il futuro è inventarlo”</strong>`,
    type: GUEST_TYPE.TALK
  },
  // {
  //   name: 'Domenico Lostrangio',
  //   type: GUEST_TYPE.TALK,
  // },
  // {
  //   name: 'Innocenzo Bronzino',
  //   type: GUEST_TYPE.TALK,
  // },
  // {
  //   name: 'Innocenzo Pontillo',
  //   type: GUEST_TYPE.ACTIVITY,
  // },
  // {
  //   name: 'Maria Mugnolo',
  //   type: GUEST_TYPE.ACTIVITY,
  // },
  {
    name: 'Anna Albanese',
    description: `Anna Albanese è nata a Tricarico il 31 ottobre 1988. Dopo la laurea triennale in Lettere Moderne presso l'Università di Basilicata nel 2012 consegue la magistrale in Storia e Civiltà Europee presso lo stesso dipartimento nel 2014, con una tesi intitolata “La politica delle arti all'interno dei Regimi Dittatoriali”.
    Nel 2015 si specializza in produzione e distribuzione cinematografica. Organizza diverse estemporanee di pittura e mostre collettive, tra le quali spicca il primo memoriale in onore del grafico pubblicitario Orlando Orlandi.
    È vicepresidente dell'associazione Parco dei Cinti Grassano, associazione di promozione turistica culturale fondata da suo padre Andrea Albanese vent'aanni prima con lo scopo di ridare valore storico alla zona Cinti e alla storia dimenticata di Grassano.
    Collabora attivamente alla prima (11 agosto 2013) e seconda edizione (10 agosto 2014) della Rievocazione  settecentesca dell'arrivo del Commendatore, “Alla Commenda  di Grassano”, ideata dalla associazione Parco dei Cinti.
    Accompagnatore nelle visite guidate, nel 2017/2018 è stata Tutor Fai responsabile per ITC Carlo Levi di Grassano.
    Nel febbraio 2021 è una delle due curatrici del libro: Michele Mulieri: una stanchezza da meditare, pubblicata da Cisu nella collana Antropologia del patrimonio.`,
    type: GUEST_TYPE.TALK,
    field: ['Alla scoperta di Grassano']
  },
  // {
  //   name: 'Mauro Acito',
  //   description: `Nel 2017 ci siamo messi in testa che <strong>avremmo potuto trasformare</strong> uno spazio incredibile riscoperto, per caso,
  //   nei Sassi di Matera in un <strong>museo d'arte contemporanea</strong> (senza sapere come si fa).<br/><br/>
  //   Da questa idea è nato prima <strong>"Volevo solo aprire un museo"</strong>, un canale per raccontare le <strong>difficoltà</strong> che abbiamo affrontato per cercare di fare <strong>impresa culturale</strong> a Matera
  //   e, dopo qualche anno, il <strong>museo TAM</strong>: un museo <strong>d'arte contemporanea</strong> che produce nuovi contenuti coinvolgendo artisti nazionali ed internazionali che ha l'obiettivo di <strong>ribaltare la retorica</strong> della città.<br/><br/>
  //   Un museo, per noi, serve a non far <strong>musealizzare la città</strong> e continuiamo, ogni giorno, a chiederci: <strong>come si apre un museo d'arte contemporanea, se non sei una ricca fondazione?</strong>`,
  //   type: GUEST_TYPE.TALK,
  //   field: ['Volevo solo aprire un museo', 'Museo TAM'],
  // },
  // {
  //   name: 'Thelucagna',
  //   type: GUEST_TYPE.TALK,
  //   field: ['Meme', 'Inteligenza Artificiale'],
  // },
  // {
  //   name: 'Barbara Siebenlist Palomar',
  //   type: GUEST_TYPE.ACTIVITY,
  //   imagePosition: 'center 80%',
  // },
  // {
  //   name: 'Teodosio Santagata',
  //   type: GUEST_TYPE.ACTIVITY,
  //   imagePosition: 'center 80%',
  // },
  {
    name: 'Pisilli Rocco',
    type: GUEST_TYPE.ACTIVITY,
    imagePosition: 'center 80%'
  },
  // {
  //   name: 'Giuliana Bianchini',
  //   description: `Maceratese di nascita, romana d'adozione, Giuliana è Business Transformation Consultant di IBM Italia ed è specializzata nelle aree di Intelligenza Artificiale e Analytics. Lavora, quindi,
  //   come consulente informatico e supporta la trasformazione digitale delle aziende del nostro Paese da 6 anni, dopo un'esperienza di oltre due anni in una grande banca italiana.`,
  //   field: ['Workshop - "Design Thinking"'],
  //   type: GUEST_TYPE.ACTIVITY,
  // },
  // {
  //   name: 'Sara Cricenti',
  //   description: `Program Manager per l'area Education di IBM Italia è referente delle iniziative di formazione per studenti, giovani, persone in cerca di lavoro ed organizzazioni.
  //   Vice-presidente del Soroptimist International Net Lead; primo e-club Soroptimist dedicato all'empowerment femminile under 35. Laureata in Diritto e Genere ha approfondito i suoi
  //   studi attraverso il Master in Gestione delle Diversità, Inclusione ed Equità presso l'Università di Trento.`,
  //   field: ['Workshop - "Design Thinking"'],
  //   type: GUEST_TYPE.ACTIVITY,
  // },
  // {
  //   name: 'IBM SkillsBuild',
  //   field: ['Workshop - "Design Thinking"'],
  //   description: `<strong>Design Thinking</strong><br/><br/>
  //   Bee Green Italia, una community IBM che si ispira ai principi della sostenibilità a 360°, è lieta di invitarvi al <strong>“Solutioning workshop di Design Thinking”</strong> dedicato ai partecipanti di SYSKRACK, Naturalmente Tecnologici ed. 2023.<br/>
  //   In particolare, il workshop si soffermerà sull'ideazione di prodotti e soluzioni capaci di coniugare sostenibilità (ambientale, sociale, economica) e innovazione.<br/>
  //   Per poter prendere parte al workshop, i partecipanti saranno invitati a frequentare almeno uno dei due corsi dedicati al Design Thinking disponibili sulla piattaforma mondiale di formazione digitale gratuita <strong>IBM SkillsBuild</strong> <a title="IBM - SkillsBuild" href="https://skillsbuild.org/" target="_blank" rel="noopener noreferrer">https://skillsbuild.org/</a> che offre ai propri utenti 1000 corsi in ambito STEM & ICT tradotti in 19 lingue per il miglioramento delle skills tecnologiche e digitali dei cittadini.<br/>
  //   <ul>
  //   <li><a title="AGILE & DESIGN THINKING" href="https://skills.yourlearning.ibm.com/channel/CNL_LCB_1637851064346" target="_blank" rel="noopener noreferrer">
  //   <strong>AGILE & DESIGN THINKING</strong> - 2,5 H (ITA)
  //   </a>
  //   </li>
  //   <li>
  //   <a title="ENTERPRISE DESIGN THINKING" href="https://skills.yourlearning.ibm.com/activity/URL-F2C2D663869E" target="_blank" rel="noopener noreferrer">
  //   <strong>ENTERPRISE DESIGN THINKING</strong> - 2 H (ENG)
  //   </a>
  //   </li>
  //   </ul>
  //   Nel corso del workshop, della durata di 3 ore, i partecipanti saranno suddivisi in gruppi eterogenei, ideeremo perciò più prodotti/soluzioni e verrà tracciato il percorso che l'utente finale sarà chiamato a fare tenendo in considerazione tutti gli aspetti dei singoli prodotti/soluzioni ideati; come le fasi di utilizzo e di interfaccia. Inoltre, andremo ad individuare le potenziali tecnologie abilitanti di cui l'utente finale potrà avvalersi; sarà una sessione sfidante e corale!
  //   Nel corso del workshop, della durata di 3 ore, conosceremo e prenderemo confidenza con strumenti come l'”Empathy map” e la “User journey” e non mancheranno post-it, cartelloni e pennarelli per dare libero sfogo alla creatività e alle vostre mille fantastiche idee!
  //   Il workshop si concluderà con la progettazione di una cd. “Blueprint” che mostrerà come l'utente finale usufruirà del prodotto/servizio step-by-step e l'individuazione delle azioni che ogni singolo gruppo potrà adottare e mettere in campo per perfezionare ed implementare il proprio progetto o la propria soluzione.
  //   Questo perché, e lo ripeteremo durante il workshop, tutte le nostre idee e soluzioni si possono ancora e ancora migliorare grazie al contributo di tutti e tutte!`,
  //   type: GUEST_TYPE.ACTIVITY,
  //   mentor: ['Sara Cricenti', 'Giuliana Bianchini'],
  // },
  // {
  //   name: 'Giacomo Castana',
  //   field: ['Prospettive Vegetali'],
  //   description: `Nato a Varese nel 1991, nel 2017 fonda il progetto <strong>Prospettive Vegetali</strong> e con esso si dedica ad esplorare il tema dell' <strong>interazione fra società umana e vegetale</strong>.<br/>
  //   Tra i suoi successi c'è il documentario “<strong>Botanica per tutti</strong>”: un viaggio tra le persone capaci di raccontare l'importanza della botanica nel nostro paese.<br/>
  //   Secondo il Sole24Ore, Giacomo, è <em>il volto più anticonvenzionale tra i biofili della nuova generazione di attivisti italiani “green”</em>.<br/>
  //   Nel 2021 coordina la prima forma di “<strong>co-progettazione etnobotanica</strong>” rendendo economicamente indipendente la realizzazione di “<strong>Un orto al posto dell'asfalto</strong>” sostituendo 45 metri quadri di cemento con un orto sinergico al centro di Varese.<br/>
  //   Il progetto “Prospettive Vegetali” capace di azioni plurali in difesa dell'ambiente viene insignito del Premio Internazionale per la Pace “<strong>Book for Peace</strong>”.`,
  //   type: GUEST_TYPE.ACTIVITY,
  // },
  // {
  //   name: 'Davide Shorty - Solo',
  //   description: `<strong>Davide Shorty</strong> è un rapper, cantautore e producer di <strong>Palermo</strong> capace di far convivere la sua inconfondibile <strong>voce soul</strong>
  //   con sonorità e melodie contaminate da <strong>jazz</strong> e <strong>rap</strong>. Dopo varie esperienze nella scena <strong>hip hop siciliana</strong> nel <strong>2010</strong> si
  //   trasferisce a <strong>Londra</strong> dove, nel <strong>2012</strong>, fonda la band <strong>Retrospective For Love</strong> con cui suonerà in tutto il <strong>Regno Unito</strong> ed
  //   in <strong>Europa</strong>.<br/><br/>
  //   Dopo essersi posizionato <strong>3</strong> alla nona edizione di <strong>X Factor Italia</strong> (<strong>dicembre 2015</strong>) a <strong>febbraio 2017</strong> pubblica il suo
  //   primo album ufficiale, <strong>"Straniero"</strong>, che vanta prestigiose collaborazioni con <strong>Daniele Silvestri</strong> e <strong>Tormento</strong>.<br/>
  //   Nel corso della sua carriera condivide il palco <strong>artisti internazionali</strong> del calibro di <strong>Robert Glasper</strong>, <strong>Jordan Rakei</strong>, <strong>Bilal</strong> e
  //   <strong>mr jukes</strong> (<strong>Bombay Bicycle Club</strong>). Nel <strong>2018</strong> pubblica insieme ai <strong>Funk Shui Project</strong> l'album <strong>"Terapia di Gruppo"</strong>, che
  //   viene apprezzato molto da pubblico e critica.<br/>
  //   La fortunata collaborazione tra Davide e i Funk Shui Project continua nel <strong>2019</strong> quando esce per <strong>Totally Imported</strong>
  //   l'album <strong>“La Soluzione”</strong>, che conferma la <strong>sinergia artistica</strong> tra il cantante e il <strong>collettivo torinese</strong>.<br/><br/>
  //   Al disco segue la pubblicazione del <strong>reboot</strong> dello stesso: <strong>"La Soluzione Reboot"</strong> con all'interno l'inedito <strong>"Carillon"</strong> feat.
  //   <strong>Roy Paci</strong>. Nello stesso anno <strong>Daniele Silvestri</strong> lo invita a far parte del brano <strong>“Tempi modesti"</strong>, mentre nel <strong>2020</strong> firma
  //   con l'etichetta indipendente <strong>Totally Imported</strong>. Nel <strong>2021</strong> partecipa alla <strong>71^ edizione del Festival di Sanremo</strong> con il
  //   brano <strong>“Regina”</strong>, nella categoria <strong>“Nuove Proposte”</strong>, dove si classifica <strong>2</strong> e vince il <strong>“Premio della Sala Stampa Lucio
  //   Dalla”</strong>, il <strong>“Premio Enzo Jannacci NUOVO IMAIE 2021”</strong> e il <strong>“Premio Lunezia per Sanremo 2021”</strong> per il valore musicalletterario, essendo così l'<strong>artista più premiato</strong> di quella edizione del festival.<br/><br/>
  //   Segue l'uscita del suo <strong>secondo album</strong> da <strong>solista</strong>, <strong>“fusion.”</strong>, che anche durante la pandemia, lo porta ad esibirsi sui
  //   palchi di tutta Italia.`,
  //   type: GUEST_TYPE.MUSIC,
  //   field: ['Rap', 'Hip Hop'],
  // },
  // {
  //   name: 'Paolo Baldini DubFiles',
  //   type: GUEST_TYPE.MUSIC,
  //   description: `<strong>Paolo Baldini</strong> è nato a <strong>Pordenone</strong>, nel <strong>1975</strong>. Con la sua prima band <strong>B.R. Stylers</strong>, si è distinto nel <strong>panorama reggae
  //   italiano</strong> grazie al massiccio utilizzo dell'<strong>elettronica</strong> e di <strong>sonorità</strong> di ispirazione britannica, che sono rimaste a lungo una
  //   delle sue caratteristiche distintive. Nel <strong>2006</strong> Baldini è entrato a far parte della più longeva <strong>band reggae italiana</strong>, gli
  //   <strong>Africa Unite</strong>, di cui ha coprodotto due album (<strong>"Controlli"</strong> e <strong>“Rootz"</strong>). La collaborazione con <strong>Madaski</strong> ha dato origine al
  //   progetto <strong>The Dub Sync</strong>, in cui <strong>Baldini</strong> ha lavorato sia come <strong>produttore</strong> (vennero realizzati 2 album) che come <strong>bassista</strong>
  //   per gli show dal vivo.<br/><br/>
  //   Nel <strong>2014</strong> Baldini ha debuttato con il suo progetto solista <strong>Paolo Baldini DubFiles</strong>, incentrato sul suo lavoro come
  //   <strong>dubmaster</strong> realizzando l'<strong>omonimo album</strong>. Nel <strong>febbraio 2015</strong> si è recato in <strong>Giamaica</strong> per registrare quello che sarebbe
  //   diventato il suo secondo album, intitolato <strong>"At Song Embassy Papine Kingston 6"</strong> che vede protagonisti numerosi
  //   featuring di artisti dell'isola. Negli anni seguenti, ha girato molto in <strong>Europa</strong> e in <strong>America</strong>, esibendosi in alcuni dei più
  //   grandi <strong>festival reggae</strong> del mondo come <strong>Rototom Sunsplash</strong> (Spagna), <strong>No Logo</strong> (Francia), <strong>Jamming Festival</strong>
  //   (Colombia) e <strong>Sierra Nevada World Music Festival</strong> (USA).<br/><br/>
  //   Il biennio <strong>2018/2019</strong> è molto prolifico dal punto di vista del lavoro in studio: Baldini produce <strong>To the Foundation</strong> di
  //   <strong>Forelock & Arawak</strong>, <strong>Large</strong> di <strong>Mellow Mood</strong> ed il loro rispettivo seguito dub: <strong>"To the foundation of dub"</strong> e <strong>"Large Dub"</strong>.
  //   Tutti questi album sono pubblicati dall'etichetta di Baldini, <strong>La Tempesta Dub</strong>, che gestisce insieme a <strong>Mellow Mood</strong>.
  //   All'inizio del <strong>2020</strong>, Baldini ha pubblicato un album in collaborazione con <strong>Dan I</strong> e <strong>Imperial Sound Army</strong>, intitolato
  //   <strong>"Dolomites Rockers”</strong>. Nel <strong>2020</strong> e <strong>2021</strong>, non essendoci la possibilità di svolgere attività live causa Covid, sono diverse
  //   le produzioni realizzate in studio tra cui la <strong>collaborazione</strong> con la storica <strong>label Pressure Sounds</strong> e la realizzazione di <strong>2
  //   album</strong> di dub versions per la <strong>Echo Beach</strong> in cui Baldini ha “riletto" storici successi dei <strong>Dubblestandart</strong> e dei
  //   <strong>Noiseshaper</strong>.`,
  //   field: ['Reggae'],
  // },
  // {
  //   name: 'Capsicum Set Party',
  //   description: `Capsicum Set Party è un proggetto musicale, nato dalle sinergie di Dj Trix , Moddi MC e Dj Lugi`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'Katzuma Aka Deda',
  //   description: `Katzuma è il progetto disco/house di Deda. Nasce nel 2004
  //   dall'amore verso i generi musicali dominati dal groove,
  //   con l'intento di rielaborare quei suoni dimenticati
  //   attraverso un minuzioso lavoro di produzione. Il
  //   risultato è la creazione di sonorità completamente nuove
  //   ma dalle vibrazioni familiari, seducenti atmosfere disco
  //   che invitano al dancefloor. Da questo gioco vedranno la
  //   luce tre album e numerosi singoli assieme ad una serie di
  //   remix di prestigio: John Morales , LTJ Experience, Al
  //   Kent di Million Dollar Disco, Ajello. Da quasi 20 anni,
  //   l'approccio empatico e autentico verso la musica e il suo
  //   pubblico, ha fatto viaggiare i djset di Katzuma tra
  //   festival internazionali e gli house party più
  //   underground.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'DJHtt1',
  //   description: `HTT1 è un codice da decifrare, un algoritmo difettoso dietro il quale si cela un misterioso producer/dj
  //   del quale si sa poco e nulla. Ha pubblicato da poco il suo primo EP in formato tape “Detriti Digitali” con la label
  //   romagnola Spalato Wyale con la quale farà uscire a breve altro materiale. Nei dj set esplora una sua personale
  //   geografia sonora usando il funk come bussola per orientarsi.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'DJ Lugi',
  //   description: `Mc, Dj e beatmaker di origine etiope, ma cosentino d'adozione, Lugi ha una storia artistica che nasce a cavallo tra gli anni '80 e '90, durante i quali animò la scena musicale calabra con i South Posse. Tra le sue numerose incisioni lo ricordiamo in tutti i
  //   dischi di rap di Neffa da "I Messaggeri della Dopa" in poi, indimenticabile in "Novecinquanta" di Fritz Da Cat e autore di un primo disco solista, "Ca'Pù" nel 2000. Timbro vocale nasale e ondeggiante, flow morbido e pieno di ritmo, Lugi ricorda i migliori protagonisti
  //   della "Daisy Age" americana e la sua impronta nell'hip hop italico è indelebile e massiccia come il patrimonio di rime che ha depositato nei suoi tanti lustri di carriera.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'Moddi MC',
  //   description: `Tarantino, nomade per ispirazione, Moddi è il più autentico e completo Maestro di Cerimonia della nostra penisola. Dotato di una cassa toracica che pare fatta in abete come un contrabbasso antico, la voce dell'mc pugliese vibra ad una potenza micidiale, che lui
  //   sa gestire con sapienza e rara ironia. Campione indiscusso e imbattuto di freestyle da ben prima che la disciplina sbarcasse sulle tv italiche, Moddi è un vero artista da palcoscenico, poco incline a chiudersi in uno studio di registrazione. Tra le sue sporadiche e preziose
  //   comparse su disco ricordiamo l'esordio con il collettivo Pooglia Tribe e la sua affiliazione al leggendario gruppo bolognese Melma e Merda.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'DJ Trix',
  //   description: `Tarantino di nascita ma stazionario in Emilia Romagna da tutta la sua carriera, Dj Trix ha accompagnato
  //   la storia dell'hip hop bolognese da inossidabile protagonista. Alle ruote d'acciaio dai primi anni '90, è stato uno
  //   dei cardini della storica Zona Dopa, progetto nato all'interno dello spazio sociale Livello 57, manipolando i suoni
  //   per artisti del calibro di Sangue Misto,  Kaos One, Melma e Merda. Da sempre è conosciuto come instancabile dispensatore
  //   di cultura roots e hip hop in molteplici forme, dall'organizzazione di eventi storici come il contest 2 The Beat,
  //   alla fondazione del Trix Shop, corner bolognese dedicato allo smazzo di vinili e luogo d'incontro per appassionati.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'Brigante Sound System',
  //   description: `Brigante Sound System nasce nel 1999 in Lucania, da una forte passione per la musica jamaicana e per
  //   promuovere la stessa rendendola veicolo di aggregazione e unione in un contesto sociale abbandonato e destinato ad
  //   essere periferico. Il gruppo operativo è composto, come la tradizione dei sound system insegna, da selectors ed mc.
  //   Al microfono si alternano Big Simon e Manuel (dalla Krikka Reggae), mentre Danilo e Montone curano le selezioni
  //   musicali e si occupano della manutenzione del sound system. I dischi selezionati nelle dancehall, rigorosamente
  //   in vinile, variano dal rocksteady al roots, dal new roots al bashment, ripercorrendo la storia musicale senza
  //   tralasciare le ultime produzioni e tendenze del suono jamaicano.
  //   Tantissime le collaborazioni accumulate in questi anni: Anthony Johnson, ospitato per tre volte ai microfoni del
  //   Brigante Sound, Lion Face, Joseph Cotton Pinchers, Murgia Youth, One Love Hi Powa, High Grade, Erbapipa, Fido Guido,
  //   Mama Marjas, Gramigna, Marina, Ranking Lele, Papaleu, Mad Kid, Moddi MC, Pier Tosi, Tonico 70, Kianka Town,
  //   Running Irie, Ishu MC, Cool Runnings, Bunna, Villa Ada Posse, Sud Sound System, David Rodigan e tanti altri.
  //   Il sound si cimenta spesso anche nella produzione di remix molto particolari e apprezzati nell'ambiente tali da
  //   sfociare in una autoproduzione di due mixtape quasi totalmente composti da remix. Il Brigante Sound inoltre è
  //   promotore di numerose rassegne e serate sulle coste ioniche d'estate e d'inverno ospitando ogni volta altre grandi
  //   realtà della scena reggae nazionale ed internazionale.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'Pneumatix',
  //   type: GUEST_TYPE.MUSIC,
  //   description: `<strong>Pneumatix</strong> è un produttore musicale rumeno che ha iniziato la sua carriera musicale nel 2005 nella scena musicale underground come <strong>produttore musicale indipendente e deejay</strong>, la sua musica è un mix di <strong>suoni spaziali</strong>,
  //   accordi <strong>house</strong> con influenze <strong>techno</strong> e progressive mescolati nel suo stile <strong>Tekno</strong> per creare suoni <strong>vibrazioni chill e groove tek</strong>.<br/><br/>
  //   Nel 2012 ha fondato <strong>"SleepNot! Soundsystem"</strong>, un sound system con una comunità di appassionati di musica in continua crescita.<br/>
  //   La maggior parte della sua attività è stata svolta nella scena musicale <strong>underground</strong> della Romania e ultimamente in ambito <strong>europeo</strong>,
  //   negli ultimi dieci anni ha partecipato a diversi eventi e organizzato vari rave tekno con SleepNot! e altri sound system e collaborazioni <strong>nazionali o internazionali</strong>.<br/><br/>
  //   Ha all'attivo una <strong>vastissima discografia</strong> e questo lo rende uno dei produttori piu' <strong>prolifici e completi</strong> di tutto il panorama europeo.`,
  // },
  // {
  //   name: 'Angel_One',
  //   type: GUEST_TYPE.MUSIC,
  //   description: `La sua <strong>vasta conoscenza musicale</strong> e l'amicizia con importanti produttori lo hanno spinto nel 2017 a iniziare a <strong>mixare</strong>.<br/>
  //   Si unisce a <strong>Psylosophia</strong>, un'etichetta psytrance napoletana come DJ, e dal 2017 al 2020 ha eseguito quasi mensilmente un set ai loro party.<br/><br/>
  //   Nel 2019 si è trasferito a Bucarest e ha iniziato a organizzare attivamente <strong>party</strong> con SleepNot Soundsystem di cui faceva già parte dal 2015.<br/>
  //   Crede fermamente che <strong>non ci debbano essere barriere</strong> tra i generi musicali, soprattutto quello elettronico, per questo oltre ai set notturni di tekno tribe e psytrance si esibisce con piacere anche in set deep house, tech-house e italo dance 90-00.<br/><br/>
  //   Feste in cui ha mixato a: Capodanno a Cluj, Rotek 2019-2022, Albaniatek2022, TekOver, Blahna, Bucharest Tekno Unit, Step Evolution 2022, Smotek Party Zagreb, BulgariaTEk 2020, Various Italians Freeparty, Psylosophia Psytrance party, Tribal Ritual , Rave4 Base Czech republic`,
  //   field: ['DJ Tekno Tribe', 'Psytrance', 'Deephouse', 'Deep Techno'],
  // },
  {
    name: 'SFINGE SOUND',
    description: `SFINGE è un progetto nato a Pisa nel corso del 2023 con l'obbiettivo di prendere parte e sostenere la scena ricreativa e culturale locale. In questi due primi anni di attività il gruppo ha preso parte ad eventi di intrattenimento iniziando a collaborare con associazioni, collettivi, club e realtà di quartiere, in toscana e non solo.
 
Il progetto si è fino ad ora focalizzato su due aspetti principali.
Il primo, la costruzione del soundsystem, ovvero un impianto hifi, totalmente fatto a mano mettendo assieme, testando e portando in session vari design di casse di risonanza.
Il secondo riguarda la selezione musicale di dischi in vinile, tracce digitali e dubplate. collezionando dischi, dalla roots alla dnb e iniziando a collaborare con artisti nazionali e internazionali.`,
    type: GUEST_TYPE.MUSIC,
    imagePosition: 'center center'
  },
  // {
  //   name: 'Shark Emcee',
  //   description: `Shark Emcee è il pioniere del Rap made in Sannio. Coinvolgente, ironico, impegnato e in perfetto
  //   equilibrio tra tradizione e rinnovamento. lo stile compositivo di Shark Emcee è essenziale e
  //   contemporaneamente ricco di eccitanti sfumature.
  //   Il suo disco d'esordio “La trappola” viene pubblicato nel 2007. Il progetto genera un notevole
  //   interesse e diversi live sul territorio, ampliando la platea dei fan.
  //   Successivamente nel 2010 esce Made in Sann-Yo che rappresenta un'evoluzione rispetto al primo
  //   disco aumentando notevolmente il suo seguito.
  //   Nel dicembre dello stesso anno Shark Emcee pubblica il primo singolo da solista: “Orgoglio
  //   Sannita”, che spinge il rapper beneventano al di fuori del circuito underground.
  //   Interessante la citazione e la messa in onda del brano Orgoglio Sannita, nel programma radiofonico
  //   condotto da Linus “Deejay chiama Italia”, come pezzo rap dedicato alle città italiane con più alto
  //   numero di segnalazioni del pubblico.

  //   L'attività di Shark Emcee lo vede sempre più spesso protagonista di battles lungo lo stivale, che con
  //   il tempo forgiano la sua personalità ed il suo stile. Riesce a guadagnare il titolo di campione
  //   nazionale al prestigioso contest “Microphone masta”
  //   Nel 2011 arriva il secondo singolo “Ad ogni signorina” , il clip con – regia di Valerio Vestoso –
  //   conquista il secondo posto al più importante concorso per videoclip italiani “PIVI”. Grazie a tale
  //   risultato il videoclip va in rotazione sui monitor delle metro di Roma e Milano, sui voli nazionali
  //   Alitalia e in vari cinema del Paese.
  //   Nel 2012 con il singolo “Fattell ‘na risat”, ed il featuring con il gruppo folk campano dei Sancto
  //   Ianne nel singolo “Guardame Sienteme” fondono il folk ed il rap in un impasto sonoro atipico ed
  //   emozionante.
  //   Il 22 dicembre del 2012 Shark Emcee lancia il suo primo EP da solista: “I was a b.boy, please gimme
  //   a job”.
  //   Nello stesso anno è stato anche protagonista con Rocco Hunt, Fabio Mef, Doc Shock e Lucariello di
  //   “Il suono che parla”, progetto di scrittura rap per i detenuti all'istituto per minori di Airola, dopo il
  //   quale sono stati pubblicati un libro ed un cd.
  //   Nel 2014 Shark Emcee si posiziona tra i primi 6 classificati del torneo nazionale di freestyle “Passa il
  //   microfono” all'Alcatraz di Milano.
  //   Nel 2015 presenta il singolo “Non ho bisogno” alle selezioni di Sanremo Giovani. Il rapper riesce a
  //   superare la prima selezione entrando nei 60 finalisti su 660 brani presentati.
  //   Nel 2016 presenta il singolo “Delle volte”. Nella stagione calcistica 2017/18 Shark Emcee è stato
  //   scelto come inviato dallo stadio per la trasmissione “Quelli che il calcio” in concomitanza dei match
  //   Napoli-Benevento e Crotone-Benevento; occasioni in cui il rapper beneventano ha dimostrato le
  //   proprie abilità con l'improvvisazione in rima.
  //   Nel 2019/2020 torna sulla scena con i singoli “Fuoco sulla traccia” e “Boom”.
  //   Le sue doti da freestyler inoltre lo hanno portato più volte a condividere il palco con artisti di
  //   rilievo nel mondo musicale nazionale (Clementino, Rocco Hunt, Ghemon, Lucariello, Mama Marjas,
  //   Luca Aquino, Daniele Sepe e tanti altri).
  //   Dopo aver rilasciato i singoli "Accussì mò", "'Na man' aizàt" e “VIP” è attualmente in promozione
  //   con il nuovo singolo "Quello che so" e del disco dal titolo “Dopo un po” in uscita il 14 aprile 2023
  //   per l'etichetta Dischi Rurali e distribuito da Artist First.`,
  //   type: GUEST_TYPE.MUSIC,
  // },
  // {
  //   name: 'Millenium Van',
  //   type: GUEST_TYPE.MUSIC,
  //   description: `Millenium Van è un collettivo di artisti che viaggia a bordo di un furgoncino indipendente da tutti i punti di vista!
  //   Tramite un sistema fotovoltaico, il suo palco mobile si sposta ovunque nell'universo irradiando il cammino di energia e good vibes senza doversi alimentare.
  //   Tutti i suoi spettacoli sono gratuiti e incentrati sull'interazione attiva con il pubblico che non solo funge da spettatore ma prende parte direttamente allo spettacolo!`,
  //   imagePosition: 'center 80%',
  // },
  {
    name: 'Vittoria Elena Simone',
    type: GUEST_TYPE.TALK,
    description: `Vittoria Elena Simone è una filmmaker, fotografa e content creator pugliese, attualmente
impegnata nella realizzazione di diverse tipologie di contenuti con focus quali la riscoperta
e risignificazione della cultura meridionale, la critica ai sistemi di produttivi di massa e le
possibili risposte a problemi socio-economici della sua generazione, con una particolare
attenzione all'utilizzo responsabile di strumenti e linguaggi digitali d'avanguardia.
Nasce ad Altamura, e inizia a lavorare come fotografa da molto giovane. A 18 anni si sposta
a Milano dove consegue una laurea in Media Design e Arti Multimediali presso la NABA di
Milano, dove, grazie ad alcuni corsi e docenti, inizia il suo percorso di ricerca nell'ambito
dei linguaggi multimediali, della decostruzione delle piattaforme online e dei mezzi di
comunicazione di massa, della fenomenologia delle arti contemporanee e del rapporto tra
media e società.
Inizia a lavorare a Milano, inserendosi nel contesto dell'advertising e dei videoclip
sperimentali, collaborando con diverse agenzie, case di produzione ed etichette
discografiche.
A fine 2022 torna in Puglia con l'intento di mettere a disposizione le competenze acquisite
negli anni di studio e lavoro allo sviluppo economico e culturale del suo territorio d'origine,
proponendo ai suoi clienti un lavoro sugli immaginari che permetta al “Sud” di liberarsi del
pregiudizio di “arretratezza” imposto dall'esterno, riappropriandosi con orgoglio degli
elementi che caratterizzano l'autenticità della cultura meridionale.
Attualmente vive e concentra la sua professione ad Altamura, continuando però a
intrattenere rapporti lavorativi in tutta Italia per stimolare uno scambio di linguaggi e risorse
tra le diverse realtà economiche e subregioni che caratterizzano il nostro territorio.`
  },
  {
    name: 'Marina Berardi',
    type: GUEST_TYPE.TALK,
    description: `Marina Berardi PhD, antropologa, fotografa, specialista in Beni demoetnoantropologici,
Assegnista di ricerca presso Università degli studi della Basilicata nell'ambito del progetto
PRIN (Progetto di Rilevante interesse Nazionale) “Abitare i margini, oggi”, docente a
contratto di Antropologia visuale presso l'Università di Foggia e docente presso il WSP
Photography a Roma. Dal 2023 ha un incarico in qualità di fotografa dall'ICPI (Istituto
Centrale per il Patrimonio Immateriale) nell'ambito del progetto “Legami intangibili nei
paesaggi festivi” del Ministero della Cultura - Direzione Generale Creatività Contemporanea
- Strategia Fotografia 2022. È in corso di pubblicazione una monografia sugli aspetti
antropologici delle dinamiche demografiche in Basilicata e sulla rappresentazione locale.
Lavora come antropologa visuale sul patrimonio immateriale e materiale (Beni DEA), storie
di vita, pratiche migranti. Nell&#39;ambito della ricerca di Dottorato (Università degli studi della
Basilicata) ha analizzato etnograficamente le politiche, le retoriche, i processi di abbandono e
l&#39;immaginario vernacolare in alcuni piccoli paesi della Basilicata.
Nel Novembre 2016 ha partecipato alla Missione Archeologica Italo-Irachena dell'Università
di Roma “La Sapienza” ad Abu Tbeirah (Iraq meridionale) come antropologa visuale. Alcuni
scatti del lavoro fotografico Dreaming Iraq sono stati pubblicati da National Geographic
Italia.
Dal 2019 è Photo-Essay Editor di Visual Ethnography Journal (rivista di Classe A) e dal 2022
fa parte della redazione della rivista Archivio di Etnografia (rivista di classe A).
Nel 2020 è co-curatrice del volume Michele Mulieri. Una stanchezza da meditare edito da
CISU.
Nel 2024 pubblica il volume monografico Flussi, abbandoni e transiti. Antropologia tra
retoriche, forme di memoria e immaginario vernacolare in un&#39;area del Materano, Edizioni di
Pagina.
Alcune opere fotografiche hanno ricevuto menzioni e premi in ambito nazionale e
internazionale tra cui Nikon Talents, Sony World Award, Metropolis 2017, nel 2019 è tra le
vincitrici del concorso fotografico MAVI (Museo Antropologico Visivo Irpino) e sono state
esposte nell'ambito di mostre e festival. Nel 2024 riceve il premio speciale alla 25esima
edizione del Premio letterario Carlo Levi.
www.marinaberardi.net`
  },
  {
    name: 'Stefania Dubla',
    type: GUEST_TYPE.TALK,
    field: ['MAAP'],
    description: `Stefania Dubla (Matera, 1990), curatrice d'arte pubblica.
Laureata a Siena in Storia dell'Arte e dell'Architettura Contemporanea, ha lavorato come assistente curatrice per il Musée d'Orsay a Parigi e curato mostre e azioni artistiche nello spazio pubblico di tutta Italia, tra cui il progetto della Silent Academy di Matera Capitale Europea della Cultura 2019. È stata direttrice artistica di MAAP Fiera di Arte Pubblica, promossa e sostenuta dalla DGCC del Ministero della Cultura, e curatrice delle residenze artistiche di Paratissima a Torino. Con il collettivo curatoriale MAAP - Atelier d'Arte Pubblica è oggi impegnata nella formulazione e sperimentazione nei paesi lucani della città empatica, un progetto che coniuga metodologie artistiche a pratiche transfemministe di riconfigurazione e fruizione dello spazio pubblico.`
  },
  {
    name: 'Mattone su mattone',
    type: GUEST_TYPE.MUSIC,
    description: `Mi chiamo Arcangelo Cortese, in arte Mattone su Mattone. Ho 30 anni, sono nato
e cresciuto a Tricarico, ma ora vivo a Roma per lavoro. Suono la chitarra ed alcune
percussioni e, da circa tre anni, mi sono avvicinato al mondo della produzione
musicale e del beatmaking. Questa passione sta diventando, per me, sempre più
importante.
Ho avuto la fortuna e l'onore di far parte della Scuola del Maestro Antonio
Infantino in cui ho suonato il cubba cubba e le percussioni dal 2011 fino al 2018.
Grazie a questa esperienza ho avuto la possibilità di partecipare a diversi festival
importanti e di condividere il palco anche con artisti di calibro internazionale.
Dal 2018, faccio parte della formazione percussiva di Ago Trance, con cui
portiamo avanti l'idea di musica del Maestro Infantino, combinando poliritmia e
istinto ritmico.`
  },
  {
    name: 'Kalura - Meridionalismo',
    type: GUEST_TYPE.MUSIC,
    imagePosition: 'center 80%',
    description: `Si parte con il laboratorio di canto: Viva cu canta! E cu canta vive cent'anni!
Il canto ha da sempre accompagnato le nostre comunitá, i momenti di gioia, i momenti di dolore, la fatica e la celebrazione.
Riprendiamo a cantare insieme e a riunirci in cerchio!
Trascorreremo un pomeriggio in compagnia di Beatrice Candreva alla scoperta della propria voce, della relazione nel canto, e della musica popolare.
Impareremo insieme un canto di trasmisione orale del tempo della mietitura, il canto de "Lu nigghie"
che verrá riproposto all'interno dello spettacolo "MunnuEra!".
Nello spettacolo "MunnuEra! Canti, cunti e riti antichi" torneranno in scena le anime dei nostri antenati, con le maschere, i colori,
i campanacci, le danze e i suoni del carnevale lucano, che ci riporteranno a quella stagione epica che è stato il dopoguerra per il Mezzogiorno,
tra lotte contadine, i versi di Scotellaro ed il Canto di Arneo. Furono tempi in cui nelle terre del Sud giunsero molti ricercatori per studiarci e, ai piedi del Pollino,
trovarono i braccianti che spogliavano il padrone con la falce.
Kalura unisce la grande storia ai culti cosmico-agrari per la rigenerazione della vita: morte e rinascita del Mezzogiorno, lo spirito del grano che muore,
il Caprio sacrificato, e lo spirito del grano che rinasce, la Sposa del grano, si susseguono nella "Cerimonia della mietitura di San Giorgio Lucano",
che Kalura reinterpreta insieme alla partecipazione attiva del pubblico.
Per concludere non poteva mancare certo un tema molto caro alla cultura del Sud che è il tarantismo, ma alla "terra del rimorso" la Compagnia de la Kalura
preferisce la "terra della rinascita", cioè a quell'approccio di molti studiosi che dissentono dalle teorie demartiniane sul tarantismo per individuare nel rito
della taranta elementi orfico-pitagorici e che ritroviamo anche nel pensiero e nella musica di Antonio Infantino.
Tarantismo calabrese e tarantelle come momento di purificazione e rigenerazione energetica. Suono, danza e colore per ritrovare l'armonia dell'individo nella comunità e nel cosmo.
L'azione teatrale di Kalura sarà tutto questo, un vero e proprio rito di passaggio, un viaggio emozionale, interattivo e coinvolgente.`
  },
  {
    name: 'LINBO',
    type: GUEST_TYPE.MUSIC,
    description: `Il progetto LINBO nasce dall'incontro di Filippo Rabottini (produttore e sound designer) e Elia Notarandrea
(pianista e compositore) nella provincia di Pescara (Abruzzo). Il progetto si focalizza sull' interazione tra sound
design ed improvvisazione: una performance dal vivo con la fruibilità di un dj set, in un limbo sospeso tra Dance,
House e improvvisazione.

Nel 2022 il progetto si esibisce in diverse zone d'Italia, tra cui il prestigioso Ypsigrock Festival, dove Linbo vince
il concorso “Avanti il prossimo 2022”. Nell'ottobre dello stesso anno partecipano inoltre a JägerMusic Lab, un
concorso rivolto ai migliori talenti emergenti della musica elettronica italiana, rilasciando la traccia “Siero”
all'interno della compilation ufficiale. Il 2023 è l'anno dell'album di esordio CALESOLE a cui segue il tour in Italia
che ha portato lo spettacolo live dall'hinterland milanese ai boschi del sud italia, passando per spiagge, ville e
piazze spesso accompagnato dalla performance video a cura di Segmento Futuro. Dopo il tour estivo in Italia, i
due musicisti reintepretano il lavoro di ricerca sonora con la selezione di collaborazioni da diversi artisti del
panorama italiano di musica elettronica indipendente. CALESOLE RMX è volutamente un progetto difficilmente
circoscrivibile in un unico genere musicale in cui le sonorità elettroniche miscelate con strumenti acustici e
campionamenti vocali dell'album originale sono state dematerializzate e ricostruite.
Nell'estate 2024 il duo presenta al pubblico il nuovo live che anticipa la prossima uscita discografica in uscita in
autunno: JUMP MUSIC.`
  },
  {
    name: 'Noi Ortadini',
    type: GUEST_TYPE.ACTIVITY
  },
  {
    name: 'Simone Ritunnano',
    type: GUEST_TYPE.ACTIVITY,
    description: `Laureato in Storia all'Alma Mater, frequenta attualmente la facoltà di Archeologia e Culture del Mondo Antico.
Ha partecipato ad alcuni scavi: al castello di Rontana nella zona ravennate e al sito della città romana di Suasa.
Sta cercando si specializzarsi nello studio della landscape achaeology o archeologia del paesaggio, una disciplina delle scienze storiche e archeologiche che documenta e analizza la complessa fenomenologia del rapporto tra ambiente, territorio e mobilità umana. 
Scopo della sua ricerca è quello di comprendere chi abitava la Lucania antica, nello specifico la regione tra Basento e Bradano, e come queste popolazioni hanno abitato il territorio nel corso dei secoli: come si spostavano, come costruivano, che materiali utilizzavano, che tipo di alimentazione avevano, come commerciavano ecc.  ma anche come passavano il tempo libero, come comunicavano, in cosa credevano.`
  },
  {
    name: 'OBERDAN',
    type: GUEST_TYPE.MUSIC,
    imagePosition: 'center center',
    description: `Leonardo Antinori, in arte “Oberdan”, è un artista polistrumentista classe '95 nato e
cresciuto a Pesaro.
Con una formazione prevalentemente rock (Pixies, Bloc Party, Arctic Monkeys,
Babyshambles, Queens Of The Stone Age, Nine Inch Nails, Klaxons, Nick Cave &
The Bad Seeds) all'età di circa 13 anni comincia a scrivere le prime canzoni per poi
esordire ufficialmente nel 2013 come batterista e cantante nel duo stoner rock
"Jumping The Shark” con cui comincerà a suonare nei primi locali e festival
sull'intero territorio italiano.
Nel 2017 comincia un nuovo capitolo con il progetto musicale “Gastone”. Questa
nuova formazione, composta da Leonardo Antinori (batteria, chitarra, tastiere e voce
in studio, chitarra e voce nei live) e Marco Bertuccioli (chitarra) esordisce con il loro
disco omonimo, pubblicato per Mattonella Records e co-edito da Bomba Dischi.
Il magazine Ondarock lo definisce “baroque pop, con ritmi matematici che
scandiscono un universo sonoro fatto di arpeggi eterei e psichedelici, sfuggendo ai
canoni del nuovo cantautorato pop.”
Il primo album porta la band a esibirsi su palchi importanti come quello del MI AMI
Festival, e cattura l'attenzione di artisti come Giorgio Poi o i Phoenix, che li
inseriscono nella playlist Ti Amo Paris, in rotazione per tutta la durata del loro festival
parigino.
Col secondo disco, dal titolo “(II)”, la band entra nel roster di Panico Concerti che
permetterà di sostenere un tour nei più grandi locali italiani, interrotto solo dall'arrivo
della pandemia.
Nel 2018 (contemporaneamente all'attività musicale coi Gastone) la passione per la
cassa dritta e la voglia di far muovere il corpo, unite a un sequencer, una 808 e un
registratore a 8 piste dimenticate in camera, lo inducono alla nascita del progetto
musicale elettronico solista “Oberdan”.
Il 29 marzo 2019 vede la luce il primo singolo “Scorpione”, brano techno dal sapore
volutamente retrò, pubblicato dall'etichetta romana Mattonella Records. Il videoclip,
arrivato in finale al Cortinametraggio 2020, diretto da Cristiano Pedrocco, spinge
deciso l'acceleratore sul citazionismo in uno scenario onirico, dipingendo una storia
di fuga e amore a colpi di zoomate anni Settanta.
Il secondo singolo, dal titolo “Espandersi”, assume invece sonorità più orecchiabili,
accompagnandosi a un video western-pop.

Il nuovo album, “Forever Noi”, scritto, suonato e registrato tra la fine del 2020 e
l'inizio del 2021 in pieno periodo di coprifuoco, si immerge in territori più tenebrosi e
legati a una forte spiritualità. Influenzato particolarmente da “What's your pleasure”
di Jessie Ware, “Róisín Machine” di Róisín Murphy e “Outrun” di Kavisnky, l'album
vede la luce a ottobre 2022 per FLUIDOSTUDIO.`
  },
  {
    name: 'Avemarianne',
    type: GUEST_TYPE.MUSIC,
    imagePosition: 'center center',
    description: `Marianna Amendola, in arte Avemarianne è una selecter e cantante calabro-napoletana con attuale sede a Napoli.

Già singer/mc, selecter e promoter per Pull Up Sound, (Calabria, since 2014). Il suo aka in questi anni è Lady Mi-Fi

Ciò le fornisce una formazione su base street, in particolare su base dancehall, hip hop, reggae, soul. In questi anni sta a contatto con vari artisti della scena urban nazionale e internazionale e si appassiona al mondo dei dubplate realizzandone lei stessa alcuni con l'aka Lady Mi-Fire. Million Stylez, Mama Marjas, Dj Shocca, Dj Delta sono solo alcuni nomi che segnano il suo percorso in questi anni grazie al lavoro di promotion e grazie alle apparizioni in warm up dei suddetti artisti.

Con Pull Up, affiancata da Dj Rice e Mistaga, si spinge fino al centro/nord Italia, esibendosi in luoghi storici come il Leoncavallo o il Sottotetto.

Gli anni bolognesi ampliano la sua visione, dapprima nel canto in collaborazione con varie realtà, in particolar modo col chitarrista Andrea Manni, insieme a cui rilascia l'inedito "These Days", e poi mettendola a stretto contatto con generi puramente elettronici come techno, d&b, breakbeat, glitch, anche grazie a BUM, una realtà bolognese che spinge drum & bass e affini sotto la guida di Lizard aka Enrico Sandron.

Nel 2023 la mappa di Avemarianne segna almeno due tappe da menzionare mentre collabora con Vesuvi-ha come dj della Ballroom scene di Napoli e mentre affianca la cantante e performer Miriam Ayaba come cantante e dj: realizza un dj set per Radio Raheem e si esibisce in apertura a Meg in occasione del compleanno dello Scugnizzo Liberato, Napoli.

Da poco ha rilasciato il suo EP HyperVrnzl, un tentativo di narrazione fedele della Napoli contemporanea in unione al gusto per la musica elettronica, in collaborazione con Angelo Ferlaino (Bologna).

`
  },
  {
    name: 'Dj Bomberone',
    type: GUEST_TYPE.MUSIC
  },
  {
    name: 'Giandomenico Mercadante',
    type: GUEST_TYPE.ACTIVITY
  },
  {
    name: 'MAS',
    type: GUEST_TYPE.COMMUNITY,
    imagePosition: 'center center',
    description: `Il Movimento per l'Autocoscienza del Sud nasce nel 2023. Vogliamo creare un Movimento per il Sud che possa strutturare, organizzare e dare voce alle diverse soggettività meridionali, con una progettualità che vada oltre la singola riforma o il singolo momento storico.


Siamo un collettivo meridionalista, non neoborbonico, ecologista, antirazzista,  transfemminista, anticapitalista, antiabilista. Utilizziamo un approccio intersezionale perché siamo consapevoli della complessità della realtà e delle nostre identità. 

Alle discriminazioni per ciò che siamo e che rappresentiamo, si aggiunge il peso di problemi e carenze legate al divario tra Nord e Sud del Paese sul piano economico, di accesso ai servizi di base e alle risorse. 


Rifiutiamo, però, il pensiero del Sud come “non ancora Nord” e vogliamo costruire un futuro diverso.

Pensiamo al Sud come concetto rivoluzionario, tenendo l'autocoscienza come centro e motore della nostra metodologia.


Vogliamo intraprendere un percorso condiviso di scoperta e rivendicazione della lotta meridionalista all'interno di uno spazio più ampio, affinché possa accendere una luce sulla questione, intrecciarsi e rafforzare le altre lotte che sentiamo vicine, collaborando con le realtà che le portano avanti.`
  },
  {
    name: 'Pupa Antezz',
    type: GUEST_TYPE.MUSIC
  },
  {
    name: 'Terra Terra Sound',
    type: GUEST_TYPE.MUSIC
  },
  {
    name: 'Atomico',
    imagePosition: 'center center',
    description: `Atomico è una rete aperta di persone che hanno deciso di immaginare e vivere il  margine come spazio di possibilità, creando sinergie, prendendosi cura dei territori attraverso pratiche artistiche, culturali e sociali.`,
    type: GUEST_TYPE.COMMUNITY
  },
  {
    name: 'Pasquale Calluso',
    type: GUEST_TYPE.TALK,
    description: `Pasquale Calluso porta avanti una ricerca che intreccia queerness e Basilicata, dopo un percorso dedicato alla storia dei movimenti omosessuali in Italia. 
    Ha conseguito una laurea magistrale in Studi di Genere e Letteratura Postcoloniale all'interno del programma GEMMA Erasmus Mundus, studiando tra l'Università di Granada e l'Università di Bologna. 
    In precedenza ha studiato Storia all'Università di Torino, con un minor in Diversity Studies svolto durante un periodo all'Università di Maastricht. 
    Ha collaborato con l'ONG IASIS ad Atene, dove si è occupato di workshop su tematiche di genere con pratiche di educazione non formale.`
  },
  {
    name: 'Acid Pepper',
    type: GUEST_TYPE.MUSIC,
    description: `Acid Pepper è il progetto musicale di Giuseppe Palazzo, graphic designer e docente di grafica. 
    Come producer, propone live set con campionatore e sintetizzatori, mescolando sonorità elettroniche ispirate a techno, dub e trance. 
    Il suo approccio è ibrido e artigianale, orientato alla sperimentazione ritmica e timbrica.`
  },
  {
    name: 'Bagworm Studio',
    type: GUEST_TYPE.ACTIVITY,
    description: `Bagworm Studio è un progetto di design di Alessia Nobile e Giuseppe Palazzo. 
    Realizzano oggetti con materiali ecosostenibili e di recupero, tra cui agende in carta riciclata, accessori cuciti, stampe linoleografiche e giochi di carte. 
    Negli eventi portano anche giochi in legno autocostruiti pensati per l'interazione e il gioco condiviso.`
  }
] as const

export type GuestNames = typeof guests[number]['name']

const guestsOut = guests.map(e => {
  const splitted = e.name.toLowerCase().split(' ')
  return {
    ...e,
    image:
      splitted.length > 1 ? [splitted[0], splitted[1]].join('_') : splitted[0]
  }
})

export const images = () => {
  const guestsPhotos: Data = useStaticQuery(graphql`
    query GuestPhotos {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { regex: "src/images/guests/" }
        }
        sort: { name: ASC }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 300
                quality: 80
              )
            }
          }
        }
      }
    }
  `)

  return guestsPhotos
}

export default guestsOut as Guest[]
