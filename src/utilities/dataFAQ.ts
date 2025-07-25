import { info } from './tickets'

export const mail = ({
  subject,
  text
}: {
  subject?: string
  text?: string
}): string => {
  return `<a title="Mandaci una mail" rel="noopener noreferrer" target="_blank" href="mailto:direttivo@syskrack.org${
    subject ? `?subject=${subject}` : ''
  }">${text ?? 'direttivo@syskrack.org'}</a>`
}

const tickets = info.map(t => ({
  name: t.name
}))

export const faqIT = [
  // {
  //   title: 'Residenza Artistica',
  //   data: [
  //     {
  //       title: "Cos'è una Residenza Artistico-Scientifica?",
  //       text: `È un luogo in cui l'arte e la scienza si fondono consapevolmente, scambiandosi mutualmente valore.<br/>
  //     Per noi l'arte è un mezzo di comunicazione innovativo e potente, per certi versi inesplorato.<br/>
  //     La nostra idea è di immaginare un modo per veicolare complessi concetti scientifici attraverso il linguaggio non convenzionale dell'arte.<br/>
  //     Per fare questo lasciamo che le persone si incontrino, si conoscano e creino nuove connessioni generative in un ambiente incontaminato e rurale come quello di Grassano e del Forte Pallino.`,
  //     },
  //     {
  //       title: 'Posso candidare un progetto?',
  //       text: `Sì, hai tempo fino al <u>15 GIUGNO 2023</u> per candidare un progetto alla residenza artistica.<br/><br/>
  //       Per candidarti basta inviare una email a ${mail({
  //         subject: 'CANDIDATURA PROGETTO RESIDENZA ARTISTISTICA',
  //       })} con OGGETTO: CANDIDATURA PROGETTO RESIDENZA ARTISTISTICA descrivendo brevemente il progetto e le informazioni di contatto.<br/>
  //       Ti contatteremo per organizzare un confronto e valutare insieme la fattibilità e i requisiti del progetto.`,
  //     },
  //     {
  //       title: 'Quando sarà annunciato il programma?',
  //       text: `Il programma della residenza artistico-scientifica sarà rilasciato a fine giugno!`,
  //     },
  //     {
  //       title: 'Posso partecipare come visitatore?',
  //       text: `Certo!<br/>
  //       Organizzeremo delle visite guidate all'interno del Forte Pallino per scoprire cosa sta accandendo.<br/><br/>
  //       Si ricorda che l'accesso sarà riservato ai SOCI regolarmente tesserati esibendo la propria tessera.<br/>
  //       Non sei tesserato e vuoi tesserati? Clicca qui: <a title="Associati" rel="noopener noreferrer" target="_blank" href="https://syskrack.org/associati">https://syskrack.org/associati</a>`,
  //     },
  //     {
  //       title: 'Posso darvi una mano da volontario?',
  //       text: `Si, puoi darci una mano da volontario.<br/>
  //       Per candidarti invia un ${mail({
  //         text: 'email',
  //         subject: 'VOLONTARIO/A RESIDENZA ARTISTICO-SCIENTIFICA',
  //       })} con OGGETTO: VOLONTARIO/A RESIDENZA ARTISTICO-SCIENTIFICA`,
  //     },
  //     {
  //       title: 'Dove si terrà la residenza artistico-scientifica?',
  //       text: `La location non è ancora stata rilasciata!<br/>
  //       Iscriviti alla newsletter per non perderti le ultime novità!`,
  //     },
  //   ],
  // },
  {
    title: 'Festival',
    data: [
      {
        title: 'Dove si svolgerà il festival?',
        text: `Il festival si svolgerà in Basilicata presso <a href="/#quando-e-dove" title="Scopri la location" rel="noopener noreferrer">Bosco Coste</a>, Grottole (MT).<br/>
        Tuttavia alcune attività in programma come la Conferenza di Benvenuto e il caffè al Lab si svolgeranno a Grassano (MT).<br>`
        // Trovi tutti i dettagli sulla <a href="/programma" title="Vai al programma" rel="noopener noreferrer">pagina del programma</a>
      },
      {
        title: 'Cosa troverò a Naturalmente Tecnologici?',
        text: `Conferenze, workshop, laboratori, connessione con le persone e la natura che ti circonda.<br/>
        Un festival di innovazione sociale e tecnologica con ospiti da tutto il mondo, ma anche un festival musicale con artisti internazionali.`
      },
      // {
      //   title: "Quali sono i temi di quest'anno?",
      //   text: `<u>11 Agosto</u> - The hip hop Birthday: 50 anni dopo il primo block party<br/>
      // <u>12 Agosto</u> - Arte, tecnologia, persone e territorio<br/>
      // <u>13 Agosto</u> - Cogito ergo sum e Gran Finale<br/>`,
      // },
      {
        title: 'Posso proporre una collaborazione?',
        text: `Si, siamo felici di avere nuove idee e nuovi punti di vista.<br/>
        Mandaci un email a ${mail(
          {}
        )} per raccontarci la collaborazione che hai immaginato.`
      },
      {
        title:
          'Sono un professionista e vorrei sostenere e collaborare, posso farlo?',
        text: `Si, selezioniamo partner che abbiano voglia di investire nella cultura e nello sviluppo delle persone e del territorio e ad accettare la nostra sfida collettiva.<br/>
      Vogliamo un'esperienza di impatto positivo e di risonanza nella community e sul luogo.`
      }
      //   {
      //     title: 'Quando sarà pubblicato il programma dettagliato del festival?',
      //     text: `Il programma dettagliato sarà rilasciato a metà giugno.`,
      //   },
      //   {
      //     title: 'A che ora cominciano le attività e a che ora finiscono?',
      //     text: `Le attività cominceranno alle 10 del mattino, con pausa pranzo tra le 13 e le 16.<br/>
      // Riprenderanno dalle 16 alle 19 con momento cena fino alle 22.<br/><br/>
      // Il festival musicale comincerà alle 22 e finirà:<br/>
      //   Venerdì: alle 02:00<br/>
      //   Sabato: alle 02:00<br/>
      //   Domenica: all-night-long<br/>`,
      //   },
    ]
  },
  {
    title: 'PASS festival',
    data: [
      {
        title: 'Quali tipologie di PASS ci sono?',
        text: `Ci sono ${tickets.length} tipologie di PASS:<br/>
        ${tickets.map(t => ` - <b>${t.name}</b><br/>`).join('')}`
      },
      //       {
      //         title: 'Cosa copre il mio PASS?',
      //         text: `Intero 4 giorni (Welcome to Tijuana Camp incluso):<br/>
      //     <ul>
      // 		  <li>Ingresso al festival per tutti e 3 i giorni</li>
      //         <ul><li>Laboratori, conferenza, workshop, stage musicale, servizi igienici</li></ul>
      //       <li>Utilizzo area camping per tutti e 3 i giorni</li>
      //         <ul><li>Postazioni ricarica smartphone, docce e servizi igienici riservati</li></ul>
      //       <li>Utilizzo area camping per tutta la durata del festival</li>
      //     </ul>
      // 	        Giornaliero
      //     <ul>
      // 	    <li>Ingresso al festival dalle ore 10 a chiusura</li>
      //         <ul><li>Laboratori, conferenza, workshop, stage musicale, servizi igienici</li></ul>
      //     </ul>
      // `,
      //       },
      {
        title: 'Posso partecipare se sono minorenne?',
        text: `Si, dovrai essere accompagnato da un genitore.`
      },
      {
        title: 'Devo comprare un biglietto per il mio bambino?',
        text: `No, i bambini sotto i 14 anni non pagano`
      }
      // {
      //   title: 'Posso avere accesso a degli sconti?',
      //   text: `Se sei di Grassano puoi avere accesso allo sconto speciale.<br/>
      // Dovrai portare con te un documento di riconoscimento in corso di validità che sia rilasciato dal comune di Grassano.<br/><br/>
      // Le persone con ridotta mobilità pagano il prezzo dimezzato e gli accompagnatori non pagano.`,
      // },
    ]
  },
  {
    title: 'Il Welcome to Tijuana Camp',
    data: [
      {
        title: 'Quando apre il Welcome To Tijuana?',
        text: `Gli accessi saranno consentiti a partire dalle ore 10 fino alle ore 19`
      },
      {
        title: "Cosa mette a disposizione l'area camping?",
        text: `L'area camping mette a disposizione stazioni di ricarica per cellulari, servizi igienici e docce, spazio tenda 200*220cm.<br/><br/>
      Se la tua tenda è di dimensioni maggiori, scrivi a ${mail({
        subject: 'DIMENSIONE TENDA'
      })} con oggetto: DIMENSIONE TENDA e ti daremo ulteriori indicazioni.`
      },
      {
        title: 'Posso noleggiare una tenda da voi?',
        text: `Si, tuttavia il numero di tende noleggiabili è molto limitato.<br/>
    Per noleggiare la tenda è necessario farlo presente entro giorno <b><u>1 Agosto 2025</u></b>.<br/>
    Se hai intenzione di noleggiare  una tenda scrivi a ${mail({
      subject: 'NOLEGGIO TENDA'
    })} con oggetto: NOLEGGIO TENDA
  `
      },
      {
        title: 'Posso trovare cibo e bevande?',
        text: `Si, l'area sarà fornita di spazi per rifocillarsi`
      },
      {
        title: 'Posso portare il mio cibo e le mie bevande?',
        text: `Si, puoi portare il tuo cibo e le tue bevande.<br/><br/>
    Ricorda che è PROIBITO INTRODURRE VETRO ed è PROIBITO UTILIZZARE FIAMME LIBERE all'interno dell'area festival`
      },
      {
        title: "L'area camping è dotata dei servizi igienici?",
        text: `Sì, l'area camping è dotata di bagni chimici e di docce.`
      },
      {
        title: 'Sarà previsto un servizio di pronto soccorso medico?',
        text: `Sì, sarà presente una postazione mobile di soccorso.`
      },
      {
        title: 'Devo portare la mia tenda o è possibile acquistarla lì?',
        text: `Raccomandiamo di PORTARE LA TENDA.`
      },
      {
        title: 'Non ho mai campeggiato, cosa è necessario che io sappia?',
        text: `Il campeggio è un'esperienza stupenda, ma bisogna arrivarci preparati!<br/>
        Considera che le temperature possono oscillare rapidamente, quindi assicurati di avere con te vestiti leggeri e caldi.<br/><br/>
        Consigliamo anche di portare:
        <ul>
        <li>Torce elettriche</li>
        <li>Scarpe adeguate</li>
        <li>Abbigliamento antipioggia (non si sa mai)</li>
        <li>Sacco a pelo</li>
        <li>Tenda da campeggio</li>
        <li>Teli e costume da bagno</li>
        </ul>
        `
      }
    ]
  },
  {
    title: 'Partecipa',
    data: [
      {
        title:
          'Sono un artigiano e mi piacerebbe portare la mia arte al vostro festival, posso farlo?',
        text: `Si, vogliamo promuovere l'artigianato.<br/>
    Scrivi una email a ${mail({
      subject: 'RICHIESTA PARTNERSHIP'
    })} con oggetto: RICHIESTA PARTNERSHIP`
      },
      {
        title: 'Siamo un gruppo di persone, possiamo avere degli sconti?',
        text: `Si, favoriamo le community e i gruppi uniti.<br/>
        Per gruppi di più di 20 persone offriamo uno sconto speciale.<br/>
      Scrivi una email a ${mail({
        subject: 'RICHIESTA SCONTO GRUPPO'
      })} con oggetto: RICHIESTA SCONTO GRUPPO`
      }
    ]
  },
  {
    title: 'Altro',
    data: [
      {
        title: 'Possono entrare gli amici a quattro zampe?',
        text: `Se vuoi portare con te il tuo animale domestico, ti preghiamo di contattarci in anticipo.
      `
      }
    ]
  }
]

export const faqEN = [
  {
    title: 'Festival',
    data: [
      {
        title: 'Where will the festival take place?',
        text: `The festival will take place in Basilicata at <a href="/#quando-e-dove" title="Discover the location" rel="noopener noreferrer">Bosco Coste</a>, Grottole (MT).<br/>
        However, some scheduled activities such as the Welcome Conference and coffee at the Lab will take place in Grassano (MT).<br>`
        // You can find all the details on the <a href="/programma" title="Go to the program page" rel="noopener noreferrer">program page</a>
      },
      {
        title: 'What will I find at Naturalmente Tecnologici?',
        text: `Conferences, workshops, labs, connection with people and the surrounding nature.<br/>
        A festival of social and technological innovation with guests from all over the world, but also a music festival with international artists.`
      },
      {
        title: 'Can I propose a collaboration?',
        text: `Yes, we are happy to have new ideas and perspectives.<br/>
        Send us an email at ${mail(
          {}
        )} to tell us about the collaboration you have in mind.`
      },
      {
        title:
          'I am a professional and would like to support and collaborate, can I do that?',
        text: `Yes, we select partners who are willing to invest in culture and in the development of people and the territory and to accept our collective challenge.<br/>
      We want an experience of positive impact and resonance in the community and in the place.`
      }
    ]
  },
  {
    title: 'PASS festival',
    data: [
      {
        title: 'What types of PASS are available?',
        text: `There are ${tickets.length} types of PASS:<br/>
        ${tickets.map(t => ` - <b>${t.name}</b><br/>`).join('')}`
      },
      //       {
      //         title: 'What does my PASS cover?',
      //         text: `Full 4 days (Welcome to Tijuana Camp included):<br/>
      //     <ul>
      // 		  <li>Access to the festival for all 4 days</li>
      //         <ul><li>Workshops, conferences, workshops, music stage, toilets</li></ul>
      //       <li>Use of camping area for all 4 days</li>
      //         <ul><li>Smartphone charging stations, showers, reserved toilets</li></ul>
      //       <li>Use of camping area for the entire duration of the festival</li>
      //     </ul>
      // 	        Daily
      //     <ul>
      // 	    <li>Access to the festival from 10 am until closing</li>
      //         <ul><li>Workshops, conferences, workshops, music stage, toilets</li></ul>
      //     </ul>
      // `,
      //       },
      {
        title: 'Can minors participate?',
        text: `Yes, you will need to be accompanied by a parent.`
      },
      {
        title: 'Do I need to buy a ticket for my child?',
        text: `No, children under 14 do not pay`
      }
      // {
      //   title: 'Can I access discounts?',
      //   text: `If you are from Grassano, you can access a special discount.<br/>
      // You will need to bring a valid identification document issued by the municipality of Grassano.<br/><br/>
      // People with reduced mobility pay half price and accompanying persons do not pay.`,
      // },
    ]
  },
  {
    title: 'Welcome to Tijuana Camp',
    data: [
      {
        title: 'When does Welcome To Tijuana open?',
        text: `Access will be allowed from 10 am to 7 pm`
      },
      {
        title: 'What does the camping area provide?',
        text: `The camping area provides mobile phone charging stations, toilets and showers, tent space 200*220cm.<br/><br/>
      If your tent is larger, write to ${mail({
        subject: 'TENT SIZE'
      })} with the subject: TENT SIZE and we will give you further instructions.`
      },
      {
        title: 'Can I rent a tent from you?',
        text: `Yes, however the number of tents available for rent is very limited.<br/>
    To rent the tent you must do so by <b><u>August 1, 2025</u></b>.<br/>
    If you intend to rent a tent write to ${mail({
      subject: 'TENT RENTAL'
    })} with the subject: TENT RENTAL
  `
      },
      {
        title: 'Will food and drinks be available?',
        text: `Yes, the area will be equipped with refreshment areas`
      },
      {
        title: 'Can I bring my own food and drinks?',
        text: `Yes, you can bring your own food and drinks.<br/><br/>
    Remember that it is FORBIDDEN TO BRING GLASS and it is FORBIDDEN TO USE OPEN FLAMES inside the festival area`
      },
      {
        title: 'Is the camping area equipped with toilets?',
        text: `Yes, the camping area has chemical toilets and showers.`
      },
      {
        title: 'Will there be a medical first aid service?',
        text: `Yes, a mobile first aid station will be present.`
      },
      {
        title: 'Should I bring my own tent or can I buy one there?',
        text: `We recommend BRINGING YOUR OWN TENT.`
      },
      {
        title: 'I have never camped before, what do I need to know?',
        text: `Camping is a wonderful experience, but you need to be prepared!<br/>
        Consider that temperatures can change rapidly, so make sure to have both light and warm clothes with you.<br/><br/>
        We also recommend bringing:
        <ul>
        <li>Flashlights</li>
        <li>Appropriate footwear</li>
        <li>Rain gear (you never know)</li>
        <li>Sleeping bag</li>
        <li>Camping tent</li>
        <li>Towels and swimsuit</li>
        </ul>
        `
      }
    ]
  },
  {
    title: 'Participate',
    data: [
      {
        title:
          'I am a craftsman and would like to bring my art to your festival, can I do that?',
        text: `Yes, we want to promote craftsmanship.<br/>
    Write an email to ${mail({
      subject: 'PARTNERSHIP REQUEST'
    })} with the subject: PARTNERSHIP REQUEST`
      },
      {
        title: 'We are a group of people, can we get discounts?',
        text: `Yes, we favor communities and united groups.<br/>
        For groups of more than 20 people we offer a special discount.<br/>
      Write an email to ${mail({
        subject: 'GROUP DISCOUNT REQUEST'
      })} with the subject: GROUP DISCOUNT REQUEST`
      }
    ]
  },
  {
    title: 'Other',
    data: [
      {
        title: 'Can four-legged friends enter?',
        text: `If you want to bring your pet with you, please contact us in advance.`
      }
    ]
  }
]
