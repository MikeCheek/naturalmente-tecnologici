import Car from '../assets/infoUtili/car.svg';
import Bus from '../assets/infoUtili/bus.svg';
import Plane from '../assets/infoUtili/plane.svg';
import { mail } from './dataFAQ';

export const coords = [`40°37'14.0"N`, `16°24'38.6"E`];
export const mapsLink = 'https://goo.gl/maps/pYpPNsTLSX5xBnkM9' /*'https://www.google.com/maps/place/' + coords.join(' ')*/;

export const linkMarinoBus =
  '<a title="Prenota con MarinoBus" target="_blank" rel="noopener noreferrer" href="https://www.marinobus.it">www.marinobus.it</a>';
export const linkBookingMarinoBus =
  '<a title="Prenota con MarinoBus" target="_blank" rel="noopener noreferrer" href="https://booking.marinobus.it">https://booking.marinobus.it</a>';
export const linkHelpMarinoBus =
  '<a title="Assistenza MarinoBus" target="_blank" rel="noopener noreferrer" href="mailto:info@marinobus.it">info@marinobus.it</a>';

export default [
  {
    name: 'Macchina',
    svg: Car,
    info: `Se vieni in auto puoi raggiungerci in poco tempo dalle città più vicine.<br/>
    La location del festival dista da:
    <ul>
      <li>Grottole -> 15 minuti</li>
      <li>Matera -> 25 minuti</li>
      <li>Grassano -> 25 minuti</li>
      <li>Altamura -> 40 minuti</li>
      <li>Potenza -> 1 ora</li>
    </ul>

    La zona del festival è fornita di parcheggio`,
    locationCta: true,
  },
  {
    name: 'Autobus',
    svg: Bus,
    info: `Se vieni in pullman ti consigiamo di scendere a Grassano Scalo (MT) e di raggiungere il paese
    di Grassano tramite le linee urbane presenti (dai un'occhiata alle linee urbane su <a title="Vedi le linee" target="_blank" rel="noopener noreferrer" href="https://www.grassani.it/linee/?t=grassano-scalo&a=grassano">www.grassani.it</a>).<br/><br/>
    Per raggiungere Grassano Scalo (MT) puoi prenotare un posto in autobus con MARINOBUS.<br/>
    MARINOBUS è Mobility Partner di Naturalmente Tecnologici e acquistando un biglietto per il festival hai diritto a uno sconto del 10% sulla tratta di andata e ritorno.<br/>
    Inserisci il codice che trovi nella guida qui sotto in fase di acquisto.<br/><br/>
    Da Matera è possibile raggiungere Grottole tramite il servizio pullman di <a title="Vedi gli orari" target="_blank" rel="noopener noreferrer" href="https://www.sitasudtrasporti.it/archivio/Download/corse/sitasud/Basilicata/Matera/ccebfbb7-4c10-41b5-b2ab-98144d50356e_Linea_352_Salandra_Grottole_Miglionico_Matera.pdf/0">SITA SUD</a>.<br/><br/>
    `,
    // Ma non è finita qui!<br/>
    // Se viaggi con MARINO BUS avrai diritto a uno sconto del 10% anche sul biglietto del festival!<br/><br/>
    infoMarinoBus: true,
  },
  {
    name: 'Aereo',
    svg: Plane,
    info: `L'aeroporto più vicino è quello di Bari.<br/><br/>
    Dall'aeroporto di Bari puoi raggiungere Matera in due modi:<br/>
    <ul>
    <li>
    Prendere un bus navetta gestito da Pugliairbus.<br/>
    La navetta parte dalla zona antistante l'ingresso ARRIVI dell' aeroporto internazionale di Bari e effettua l'unica fermata a Matera in Piazza Giacomo Matteotti.
    I bus sono riconoscibili dalla tabella sul parabrezza con la dicitura “Navetta Bari Aeroporto - Matera“.<br/>
    L' acquisto del biglietto del bus navetta COTRAP e COTRAB può essere effettuato online sul 
    <a title="Navetta Bari-Matera" href="https://bari.airports.aeroportidipuglia.it/puglia-airbus/" rel="noopener noreferrer" target="_blank">loro sito</a> 
    o direttamente dall'autista a bordo della navetta (pagamenti in contanti) previa disponibilità dei posti.<br/><br/></li>
    <li>Prendere un classico TAXI o NCC che vi porterà comodamente a Matera.</li>
    </ul>`,
  },
];

export const MarinoBusInfo = {
  title: `Istruzioni per l'attivazione della tariffa convenzionata`,
  subTitle: `Codice sconto: NATURATECH10`,
  text: `<ol>
  <li>Il soggetto che intende usufruire dell'agevolazione accede al sito MarinoBus (${linkMarinoBus}) 
  e procede alla registrazione inserendo i propri dati e una mail di sua proprietà;<br/>
  Per registrarsi occorre cliccare su "Area Personale" in alto a destra nella home page del sito ${linkMarinoBus}
  e poi su "Registrati"</li>
  <li>Una volta completata la procedura di registrazione, il soggetto in possesso del codice sconto (coupon)
  procederà all'acquisto del biglietto direttamente dal home page del sito ${linkMarinoBus} o dall'area booking ${linkBookingMarinoBus} selezionando la data e la tratta in cui intende viaggiare.<br/><br/>
  <span style="opacity:0.7">N.B. per poter usufruire dell'agevolazione il viaggio deve essere effettuato nel periodo compreso tra il 04/08/2023 e il 20/08/2023 e una delle fermate (partenza o arrivo) del viaggio deve essere obbligatoriamente
  Matera (MT) o Grassano Scalo (MT).</span></li>
  <li>Una volta selezionato il viaggio di proprio interesse, dopo aver verificato i dettagli della prenotazione, scelto il proprio posto (opzionale)
  e selezionata la modalità di pagamento desiderata, dovrà inserire all'interno del campo preposto il codice sconto (coupon) e cliccare su "Associa"
  in basso a sinistra prima di finalizzare l'acquisto. Così facendo potrà verificare l'applicazione dell'agevolazione nella voce "Prezzo totale"
  e finalizzare l'acquisto cliccando su "Continua"</li>
</ol>
<br/>
Per informazioni e assistenza si prega di contattare ${mail({})}`,
};
