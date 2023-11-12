export interface ContattaciData {
  name: string;
  description: string;
  pathName: string;
}

const contattaciData: ContattaciData[] = [
  {
    name: 'Info Festival',
    pathName: 'info-festival',
    description: `Compila questo modulo per ottenere informazioni di base sul festival, come biglietti, camping, servizi ...`,
  },
  {
    name: 'Collaborazioni',
    pathName: 'collaborazioni',
    description: `Se hai un'idea o un progetto e vuoi vederlo prendere vita al nostro festival, allora stai nel posto giusto!<br/><br/>
    Compila il modulo qui sotto con le tue proposte di collaborazione.<br/><br/>
    Che tu gestisca un'attività, un mercato o uno stand, siamo aperti a tutte le idee.<br/><br/>
    Grazie per essere parte della nostra avventura!<br/><br/>
    Aspettiamo con impazienza di conoscerti e di creare insieme qualcosa di unico!`,
  },
  {
    name: 'Volontariato',
    pathName: 'volontario',
    description: `Grazie per il tuo interesse a diventare parte integrante della nostra famiglia di volontari e volontarie al festival!<br/>
    Collabora con un team dinamico, contribuisci al successo del festival e crea ricordi indelebili insieme a una comunità appassionata.<br/>
    Compila il modulo qui sotto per esprimere il tuo interesse.<br/><br/>

    Unisciti a noi nel plasmare un evento indimenticabile per tutti i partecipanti. Grazie per il tuo impegno e per essere parte della magia del nostro festival!`,
  },
  {
    name: 'Assistenza sito',
    pathName: 'assistenza-sito',
    description: `Hai riscontrato qualche problema mentre esploravi il nostro mondo online?<br/><br/>
        Segnalalo attraverso questo form e il nostro team di supporto tecnico si impegnerà a garantire che la tua esperienza sul sito sia senza intoppi.`,
  },
];

export default contattaciData;
