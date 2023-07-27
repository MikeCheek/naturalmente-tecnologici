import { graphql, useStaticQuery } from 'gatsby';

export enum GUEST_TYPE {
  TALK,
  MUSIC,
  ACTIVITY,
}

export default [
  {
    name: 'Donato Montesano',
    field: ['Chi ha polvere spara'],
    description: `<strong>Donato Montesano</strong> è nato a Tricarico nel 1991.<br/>
    In età adolescenziale, grazie alla musica rap e al cinema, scopre che <strong>la letteratura non è solo quella noiosa</strong> che gli impongono di studiare a scuola: si appassiona ad autori americani come John Fante, Charles Bukowski ed Edward Bunker, i quali utilizzano un <strong>linguaggio simile al parlato</strong>.<br/><br/>
    Mescolando queste influenze alle <strong>storie di paese</strong> che gli venivano raccontate da sempre, inizia a scrivere <strong>storie sue</strong>, che gli varranno vari <strong>premi nazionali</strong> e la pubblicazione di due libri: 
    <ul>
    <li><strong>"I grandi scrittori non mangiano"</strong>,<br/>
     una raccolta di racconti;<br/><br/>
    <li><strong>"Chi ha polvere spara"</strong>,<br/>
    un romanzo dal ritmo cinematografico basato sulla storia vera dell'ex rapinatore lucano Pancrazio Chiruzzi.`,
    type: GUEST_TYPE.TALK,
  },
  {
    name: 'Lucanian Shitposting',
    description: `Dal 2017 <strong>meme igp</strong> sulla Basilicata.<br/>
    Una delle poche pagine a poter vantare <strong>minacce di querela</strong> da un deputato della repubblica, non per questo siamo dei gangster.<br/>
    Vogliamo solo <strong>raccontare la nostra regione</strong> in tutti i suoi difetti perchè dalla parte della ragione ci sono già tutti.<br/><br/>
    Dal 2020, la pagina <strong>cambia pelle</strong> senza tradire sè stessa, riuscendo a raggiungere un <strong>pubblico più esteso</strong>, 
    il quale ha progressivamente formato una <strong>community</strong> viva e dinamica attorno al racconto memetico di una regione in cui <strong>apparentemente non accade nulla</strong>.`,
    mentor: ['Giuseppe Sassano', 'Enzo Sansone'],
    type: GUEST_TYPE.TALK,
    field: ['Meme'],
  },
  {
    name: 'Guido Gioioso',
    description: `Guido Gioioso ha conseguito la <strong>laurea in Ingegneria Informatica</strong> e un <strong>dottorato</strong> di ricerca in <strong>Robotica e Automazione</strong> all'Università di Siena.<br/>
    Autore di <strong>più di 20 articoli</strong> scientifici pubblicati sulle più quotate riviste di settore, libri e conferenze internazionali, ha focalizzato la sua attività di ricerca sullo <strong>sviluppo di algoritmi di controllo</strong> per mani robotiche e dispositivi per la digitalizzazione del <strong>senso del tatto</strong>.<br/><br/>
    Oggi è uno dei fondatori e business leader di <strong>WEART</strong>, una startup che sviluppa device rivoluzionari pensati per aggiungere <strong>sensazioni tattili</strong> ad esperienze digitali.<br/>
    Ha intrapreso questa avventura imprenditoriale con l'obiettivo di portare sul mercato i risultati di <strong>anni di ricerca accademica</strong>, perché questi avessero un <strong>impatto reale e tangibile</strong> nelle vite delle persone, guidato dalla sua passione per i nuovi paradigmi di interazione digitale.<br/><br/>
    Crede fortemente nel motto di <strong>Alan Key</strong>, uno dei pionieri della Silicon Valley, che recita: <strong>“Il miglior modo di predire il futuro è inventarlo”</strong>`,
    type: GUEST_TYPE.TALK,
  },
  {
    name: 'Anna Albanese',
    type: GUEST_TYPE.TALK,
  },
  {
    name: 'Mauro Acito',
    description: `Nel 2017 ci siamo messi in testa che <strong>avremmo potuto trasformare</strong> uno spazio incredibile riscoperto, per caso,
    nei Sassi di Matera in un <strong>museo d'arte contemporanea</strong> (senza sapere come si fa).<br/><br/>
    Da questa idea è nato prima <strong>"Volevo solo aprire un museo"</strong>, un canale per raccontare le <strong>difficoltà</strong> che abbiamo affrontato per cercare di fare <strong>impresa culturale</strong> a Matera
    e, dopo qualche anno, il <strong>museo TAM</strong>: un museo <strong>d'arte contemporanea</strong> che produce nuovi contenuti coinvolgendo artisti nazionali ed internazionali che ha l'obiettivo di <strong>ribaltare la retorica</strong> della città.<br/><br/>
    Un museo, per noi, serve a non far <strong>musealizzare la città</strong> e continuiamo, ogni giorno, a chiederci: <strong>come si apre un museo d'arte contemporanea, se non sei una ricca fondazione?</strong>`,
    type: GUEST_TYPE.TALK,
    field: ['Volevo solo aprire un museo', 'Museo TAM'],
  },
  {
    name: 'Barbara Siebenlist Palomar',
    type: GUEST_TYPE.ACTIVITY,
  },
  {
    name: 'Teodosio Santagata',
    type: GUEST_TYPE.ACTIVITY,
  },
  {
    name: 'Pisilli Rocco',
    type: GUEST_TYPE.ACTIVITY,
  },
  {
    name: 'Giuliana Bianchini',
    description: `Maceratese di nascita, romana d'adozione, Giuliana è Business Transformation Consultant di IBM Italia ed è specializzata nelle aree di Intelligenza Artificiale e Analytics. Lavora, quindi, 
    come consulente informatico e supporta la trasformazione digitale delle aziende del nostro Paese da 6 anni, dopo un'esperienza di oltre due anni in una grande banca italiana.`,
    field: ['Workshop - "Design Thinking"'],
    type: GUEST_TYPE.ACTIVITY,
  },
  {
    name: 'Sara Cricenti',
    description: `Program Manager per l'area Education di IBM Italia è referente delle iniziative di formazione per studenti, giovani, persone in cerca di lavoro ed organizzazioni. 
    Vice-presidente del Soroptimist International Net Lead; primo e-club Soroptimist dedicato all'empowerment femminile under 35. Laureata in Diritto e Genere ha approfondito i suoi 
    studi attraverso il Master in Gestione delle Diversità, Inclusione ed Equità presso l'Università di Trento.`,
    field: ['Workshop - "Design Thinking"'],
    type: GUEST_TYPE.ACTIVITY,
  },
  {
    name: 'IBM SkillsBuild',
    field: ['Workshop - "Design Thinking"'],
    description: `<strong>Design Thinking</strong><br/><br/>
    Bee Green Italia, una community IBM che si ispira ai principi della sostenibilità a 360°, è lieta di invitarvi al <strong>“Solutioning workshop di Design Thinking”</strong> dedicato ai partecipanti di SYSKRACK, Naturalmente Tecnologici ed. 2023.<br/>
    In particolare, il workshop si soffermerà sull'ideazione di prodotti e soluzioni capaci di coniugare sostenibilità (ambientale, sociale, economica) e innovazione.<br/>
    Per poter prendere parte al workshop, i partecipanti saranno invitati a frequentare almeno uno dei due corsi dedicati al Design Thinking disponibili sulla piattaforma mondiale di formazione digitale gratuita <strong>IBM SkillsBuild</strong> <a title="IBM - SkillsBuild" href="https://skillsbuild.org/" target="_blank" rel="noopener noreferrer">https://skillsbuild.org/</a> che offre ai propri utenti 1000 corsi in ambito STEM & ICT tradotti in 19 lingue per il miglioramento delle skills tecnologiche e digitali dei cittadini.<br/>
    <ul>
    <li><a title="AGILE & DESIGN THINKING" href="https://skills.yourlearning.ibm.com/channel/CNL_LCB_1637851064346" target="_blank" rel="noopener noreferrer">
    <strong>AGILE & DESIGN THINKING</strong> - 2,5 H (ITA)
    </a>
    </li>
    <li>
    <a title="ENTERPRISE DESIGN THINKING" href="https://skills.yourlearning.ibm.com/activity/URL-F2C2D663869E" target="_blank" rel="noopener noreferrer">
    <strong>ENTERPRISE DESIGN THINKING</strong> - 2 H (ENG)
    </a>
    </li>
    </ul>
    Nel corso del workshop, della durata di 3 ore, i partecipanti saranno suddivisi in gruppi eterogenei, ideeremo perciò più prodotti/soluzioni e verrà tracciato il percorso che l'utente finale sarà chiamato a fare tenendo in considerazione tutti gli aspetti dei singoli prodotti/soluzioni ideati; come le fasi di utilizzo e di interfaccia. Inoltre, andremo ad individuare le potenziali tecnologie abilitanti di cui l'utente finale potrà avvalersi; sarà una sessione sfidante e corale!
    Nel corso del workshop, della durata di 3 ore, conosceremo e prenderemo confidenza con strumenti come l'”Empathy map” e la “User journey” e non mancheranno post-it, cartelloni e pennarelli per dare libero sfogo alla creatività e alle vostre mille fantastiche idee!
    Il workshop si concluderà con la progettazione di una cd. “Blueprint” che mostrerà come l'utente finale usufruirà del prodotto/servizio step-by-step e l'individuazione delle azioni che ogni singolo gruppo potrà adottare e mettere in campo per perfezionare ed implementare il proprio progetto o la propria soluzione.
    Questo perché, e lo ripeteremo durante il workshop, tutte le nostre idee e soluzioni si possono ancora e ancora migliorare grazie al contributo di tutti e tutte!`,
    type: GUEST_TYPE.ACTIVITY,
    mentor: ['Sara Cricenti', 'Giuliana Bianchini'],
  },
  {
    name: 'Giacomo Castana',
    field: ['Prospettive Vegetali'],
    description: `Nato a Varese nel 1991, nel 2017 fonda il progetto <strong>Prospettive Vegetali</strong> e con esso si dedica ad esplorare il tema dell' <strong>interazione fra società umana e vegetale</strong>.<br/> 
    Tra i suoi successi c'è il documentario “<strong>Botanica per tutti</strong>”: un viaggio tra le persone capaci di raccontare l'importanza della botanica nel nostro paese.<br/>
    Secondo il Sole24Ore, Giacomo, è <em>il volto più anticonvenzionale tra i biofili della nuova generazione di attivisti italiani “green”</em>.<br/>
    Nel 2021 coordina la prima forma di “<strong>co-progettazione etnobotanica</strong>” rendendo economicamente indipendente la realizzazione di “<strong>Un orto al posto dell'asfalto</strong>” sostituendo 45 metri quadri di cemento con un orto sinergico al centro di Varese.<br/>
    Il progetto “Prospettive Vegetali” capace di azioni plurali in difesa dell'ambiente viene insignito del Premio Internazionale per la Pace “<strong>Book for Peace</strong>”.`,
    type: GUEST_TYPE.ACTIVITY,
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
    name: 'Capsicum Set Party',
    description: `Capsicum Set Party è un proggetto musicale, nato dalle sinergie di Dj Trix , Moddi MC e Dj Lugi`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'Katzuma Aka Deda',
    description: `Katzuma è il progetto disco/house di Deda. Nasce nel 2004
    dall'amore verso i generi musicali dominati dal groove,
    con l'intento di rielaborare quei suoni dimenticati
    attraverso un minuzioso lavoro di produzione. Il
    risultato è la creazione di sonorità completamente nuove
    ma dalle vibrazioni familiari, seducenti atmosfere disco
    che invitano al dancefloor. Da questo gioco vedranno la
    luce tre album e numerosi singoli assieme ad una serie di
    remix di prestigio: John Morales , LTJ Experience, Al
    Kent di Million Dollar Disco, Ajello. Da quasi 20 anni,
    l'approccio empatico e autentico verso la musica e il suo
    pubblico, ha fatto viaggiare i djset di Katzuma tra
    festival internazionali e gli house party più
    underground.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'DJHtt1',
    description: `HTT1 è un codice da decifrare, un algoritmo difettoso dietro il quale si cela un misterioso producer/dj 
    del quale si sa poco e nulla. Ha pubblicato da poco il suo primo EP in formato tape “Detriti Digitali” con la label 
    romagnola Spalato Wyale con la quale farà uscire a breve altro materiale. Nei dj set esplora una sua personale 
    geografia sonora usando il funk come bussola per orientarsi.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'DJ Lugi',
    description: `Mc, Dj e beatmaker di origine etiope, ma cosentino d'adozione, Lugi ha una storia artistica che nasce a cavallo tra gli anni '80 e '90, durante i quali animò la scena musicale calabra con i South Posse. Tra le sue numerose incisioni lo ricordiamo in tutti i 
    dischi di rap di Neffa da "I Messaggeri della Dopa" in poi, indimenticabile in "Novecinquanta" di Fritz Da Cat e autore di un primo disco solista, "Ca'Pù" nel 2000. Timbro vocale nasale e ondeggiante, flow morbido e pieno di ritmo, Lugi ricorda i migliori protagonisti 
    della "Daisy Age" americana e la sua impronta nell'hip hop italico è indelebile e massiccia come il patrimonio di rime che ha depositato nei suoi tanti lustri di carriera.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'Moddi MC',
    description: `Tarantino, nomade per ispirazione, Moddi è il più autentico e completo Maestro di Cerimonia della nostra penisola. Dotato di una cassa toracica che pare fatta in abete come un contrabbasso antico, la voce dell'mc pugliese vibra ad una potenza micidiale, che lui 
    sa gestire con sapienza e rara ironia. Campione indiscusso e imbattuto di freestyle da ben prima che la disciplina sbarcasse sulle tv italiche, Moddi è un vero artista da palcoscenico, poco incline a chiudersi in uno studio di registrazione. Tra le sue sporadiche e preziose 
    comparse su disco ricordiamo l'esordio con il collettivo Pooglia Tribe e la sua affiliazione al leggendario gruppo bolognese Melma e Merda.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'DJ Trix',
    description: `Tarantino di nascita ma stazionario in Emilia Romagna da tutta la sua carriera, Dj Trix ha accompagnato 
    la storia dell'hip hop bolognese da inossidabile protagonista. Alle ruote d'acciaio dai primi anni '90, è stato uno 
    dei cardini della storica Zona Dopa, progetto nato all'interno dello spazio sociale Livello 57, manipolando i suoni 
    per artisti del calibro di Sangue Misto,  Kaos One, Melma e Merda. Da sempre è conosciuto come instancabile dispensatore 
    di cultura roots e hip hop in molteplici forme, dall'organizzazione di eventi storici come il contest 2 The Beat, 
    alla fondazione del Trix Shop, corner bolognese dedicato allo smazzo di vinili e luogo d'incontro per appassionati.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'Pneumatix',
    type: GUEST_TYPE.MUSIC,
    description: `<strong>Pneumatix</strong> è un produttore musicale rumeno che ha iniziato la sua carriera musicale nel 2005 nella scena musicale underground come <strong>produttore musicale indipendente e deejay</strong>, la sua musica è un mix di <strong>suoni spaziali</strong>, 
    accordi <strong>house</strong> con influenze <strong>techno</strong> e progressive mescolati nel suo stile <strong>Tekno</strong> per creare suoni <strong>vibrazioni chill e groove tek</strong>.<br/><br/>
    Nel 2012 ha fondato <strong>"SleepNot! Soundsystem"</strong>, un sound system con una comunità di appassionati di musica in continua crescita.<br/>
    La maggior parte della sua attività è stata svolta nella scena musicale <strong>underground</strong> della Romania e ultimamente in ambito <strong>europeo</strong>,
    negli ultimi dieci anni ha partecipato a diversi eventi e organizzato vari rave tekno con SleepNot! e altri sound system e collaborazioni <strong>nazionali o internazionali</strong>.<br/><br/>
    Ha all'attivo una <strong>vastissima discografia</strong> e questo lo rende uno dei produttori piu' <strong>prolifici e completi</strong> di tutto il panorama europeo.`,
  },
  {
    name: 'Angel_One',
    type: GUEST_TYPE.MUSIC,
    description: `La sua <strong>vasta conoscenza musicale</strong> e l'amicizia con importanti produttori lo hanno spinto nel 2017 a iniziare a <strong>mixare</strong>.<br/>
    Si unisce a <strong>Psylosophia</strong>, un'etichetta psytrance napoletana come DJ, e dal 2017 al 2020 ha eseguito quasi mensilmente un set ai loro party.<br/><br/>
    Nel 2019 si è trasferito a Bucarest e ha iniziato a organizzare attivamente <strong>party</strong> con SleepNot Soundsystem di cui faceva già parte dal 2015.<br/>
    Crede fermamente che <strong>non ci debbano essere barriere</strong> tra i generi musicali, soprattutto quello elettronico, per questo oltre ai set notturni di tekno tribe e psytrance si esibisce con piacere anche in set deep house, tech-house e italo dance 90-00.<br/><br/>
    Feste in cui ha mixato a: Capodanno a Cluj, Rotek 2019-2022, Albaniatek2022, TekOver, Blahna, Bucharest Tekno Unit, Step Evolution 2022, Smotek Party Zagreb, BulgariaTEk 2020, Various Italians Freeparty, Psylosophia Psytrance party, Tribal Ritual , Rave4 Base Czech republic`,
    field: ['DJ Tekno Tribe', 'Psytrance', 'Deephouse', 'Deep Techno'],
  },
  {
    name: 'Millenium Van',
    type: GUEST_TYPE.MUSIC,
    description: `Millenium Van è un collettivo di artisti che viaggia a bordo di un furgoncino indipendente da tutti i punti di vista!
    Tramite un sistema fotovoltaico, il suo palco mobile si sposta ovunque nell'universo irradiando il cammino di energia e good vibes senza doversi alimentare.
    Tutti i suoi spettacoli sono gratuiti e incentrati sull'interazione attiva con il pubblico che non solo funge da spettatore ma prende parte direttamente allo spettacolo!`,
  },
  {
    name: 'SFINGE SOUND',
    description: `SFINGE è un progetto Tosco-Lucano nato a Pisa nel corso del 2022. Come prima parte di questo
    progetto il gruppo si è focalizzato sulla costruzione di un Sound System e sulla strutturazione di
    una collezione di vinili che ricopre un'ampia gamma di stili, dalla Roots alla Dub più
    contemporanea, muovendo così i loro primi passi nel mondo della musica.
    In occasione del festival Naturalmente Tecnologici il gruppo proporrà varie sessioni musicali
    durante le quali intratterrà e farà ballare con dischi dello scenario nazionale e internazionale: dalla
    Jamaica alla UK, dalla Francia alle produzioni più nostrane. Il tutto amplificato fedelmente dal loro
    Sound System nel Botanical Stage del festival.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'Brigante Sound System',
    description: `Brigante Sound System nasce nel 1999 in Lucania, da una forte passione per la musica jamaicana e per 
    promuovere la stessa rendendola veicolo di aggregazione e unione in un contesto sociale abbandonato e destinato ad 
    essere periferico. Il gruppo operativo è composto, come la tradizione dei sound system insegna, da selectors ed mc. 
    Al microfono si alternano Big Simon e Manuel (dalla Krikka Reggae), mentre Danilo e Montone curano le selezioni 
    musicali e si occupano della manutenzione del sound system. I dischi selezionati nelle dancehall, rigorosamente 
    in vinile, variano dal rocksteady al roots, dal new roots al bashment, ripercorrendo la storia musicale senza 
    tralasciare le ultime produzioni e tendenze del suono jamaicano.
    Tantissime le collaborazioni accumulate in questi anni: Anthony Johnson, ospitato per tre volte ai microfoni del 
    Brigante Sound, Lion Face, Joseph Cotton Pinchers, Murgia Youth, One Love Hi Powa, High Grade, Erbapipa, Fido Guido, 
    Mama Marjas, Gramigna, Marina, Ranking Lele, Papaleu, Mad Kid, Moddi MC, Pier Tosi, Tonico 70, Kianka Town, 
    Running Irie, Ishu MC, Cool Runnings, Bunna, Villa Ada Posse, Sud Sound System, David Rodigan e tanti altri. 
    Il sound si cimenta spesso anche nella produzione di remix molto particolari e apprezzati nell'ambiente tali da 
    sfociare in una autoproduzione di due mixtape quasi totalmente composti da remix. Il Brigante Sound inoltre è 
    promotore di numerose rassegne e serate sulle coste ioniche d'estate e d'inverno ospitando ogni volta altre grandi 
    realtà della scena reggae nazionale ed internazionale.`,
    type: GUEST_TYPE.MUSIC,
  },
  {
    name: 'Shark Emcee',
    description: `Shark Emcee è il pioniere del Rap made in Sannio. Coinvolgente, ironico, impegnato e in perfetto
    equilibrio tra tradizione e rinnovamento. lo stile compositivo di Shark Emcee è essenziale e
    contemporaneamente ricco di eccitanti sfumature.
    Il suo disco d'esordio “La trappola” viene pubblicato nel 2007. Il progetto genera un notevole
    interesse e diversi live sul territorio, ampliando la platea dei fan.
    Successivamente nel 2010 esce Made in Sann-Yo che rappresenta un'evoluzione rispetto al primo
    disco aumentando notevolmente il suo seguito.
    Nel dicembre dello stesso anno Shark Emcee pubblica il primo singolo da solista: “Orgoglio
    Sannita”, che spinge il rapper beneventano al di fuori del circuito underground.
    Interessante la citazione e la messa in onda del brano Orgoglio Sannita, nel programma radiofonico
    condotto da Linus “Deejay chiama Italia”, come pezzo rap dedicato alle città italiane con più alto
    numero di segnalazioni del pubblico.
    
    L'attività di Shark Emcee lo vede sempre più spesso protagonista di battles lungo lo stivale, che con
    il tempo forgiano la sua personalità ed il suo stile. Riesce a guadagnare il titolo di campione
    nazionale al prestigioso contest “Microphone masta”
    Nel 2011 arriva il secondo singolo “Ad ogni signorina” , il clip con – regia di Valerio Vestoso –
    conquista il secondo posto al più importante concorso per videoclip italiani “PIVI”. Grazie a tale
    risultato il videoclip va in rotazione sui monitor delle metro di Roma e Milano, sui voli nazionali
    Alitalia e in vari cinema del Paese.
    Nel 2012 con il singolo “Fattell ‘na risat”, ed il featuring con il gruppo folk campano dei Sancto
    Ianne nel singolo “Guardame Sienteme” fondono il folk ed il rap in un impasto sonoro atipico ed
    emozionante.
    Il 22 dicembre del 2012 Shark Emcee lancia il suo primo EP da solista: “I was a b.boy, please gimme
    a job”.
    Nello stesso anno è stato anche protagonista con Rocco Hunt, Fabio Mef, Doc Shock e Lucariello di
    “Il suono che parla”, progetto di scrittura rap per i detenuti all'istituto per minori di Airola, dopo il
    quale sono stati pubblicati un libro ed un cd.
    Nel 2014 Shark Emcee si posiziona tra i primi 6 classificati del torneo nazionale di freestyle “Passa il
    microfono” all'Alcatraz di Milano.
    Nel 2015 presenta il singolo “Non ho bisogno” alle selezioni di Sanremo Giovani. Il rapper riesce a
    superare la prima selezione entrando nei 60 finalisti su 660 brani presentati.
    Nel 2016 presenta il singolo “Delle volte”. Nella stagione calcistica 2017/18 Shark Emcee è stato
    scelto come inviato dallo stadio per la trasmissione “Quelli che il calcio” in concomitanza dei match
    Napoli-Benevento e Crotone-Benevento; occasioni in cui il rapper beneventano ha dimostrato le
    proprie abilità con l'improvvisazione in rima.
    Nel 2019/2020 torna sulla scena con i singoli “Fuoco sulla traccia” e “Boom”.
    Le sue doti da freestyler inoltre lo hanno portato più volte a condividere il palco con artisti di
    rilievo nel mondo musicale nazionale (Clementino, Rocco Hunt, Ghemon, Lucariello, Mama Marjas,
    Luca Aquino, Daniele Sepe e tanti altri).
    Dopo aver rilasciato i singoli "Accussì mò", "'Na man' aizàt" e “VIP” è attualmente in promozione
    con il nuovo singolo "Quello che so" e del disco dal titolo “Dopo un po” in uscita il 14 aprile 2023
    per l'etichetta Dischi Rurali e distribuito da Artist First.`,
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
