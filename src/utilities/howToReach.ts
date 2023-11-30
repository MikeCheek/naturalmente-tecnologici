import { mail } from './dataFAQ';

export const coords = [`40°37'14.0"N`, `16°24'38.6"E`];
export const mapsLink =
  'https://goo.gl/maps/pYpPNsTLSX5xBnkM9'; /*'https://www.google.com/maps/place/' + coords.join(' ')*/

export const linkMarinoBus =
  '<a title="Prenota con MarinoBus" target="_blank" rel="noopener noreferrer" href="https://www.marinobus.it">www.marinobus.it</a>';
export const linkBookingMarinoBus =
  '<a title="Prenota con MarinoBus" target="_blank" rel="noopener noreferrer" href="https://booking.marinobus.it">https://booking.marinobus.it</a>';
export const linkHelpMarinoBus =
  '<a title="Assistenza MarinoBus" target="_blank" rel="noopener noreferrer" href="mailto:info@marinobus.it">info@marinobus.it</a>';

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
