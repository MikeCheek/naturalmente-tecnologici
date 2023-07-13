import Car from '../assets/infoUtili/car.svg';
import Bus from '../assets/infoUtili/bus.svg';
import Plane from '../assets/infoUtili/plane.svg';

export const coords = [`40°37'14.0"N`, `16°24'38.6"E`];
export const mapsLink = 'https://www.google.com/maps/place/' + coords.join(' ');

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

    La zona è fornita di parcheggio`,
    locationCta: true,
  },
  {
    name: 'Autobus',
    svg: Bus,
    info: `Se vieni in pullman troverai diverse compagnie che fanno tappa a Grassano Scalo (MT).
    Una volta arrivato, troverai un servizio navetta che ti porterà direttamente al luogo del festival.<br/><br/>
    Inoltre, con MARINO BUS, nostro mobility partner, hai diritto a uno sconto del 10% sulla tratta di andata e ritorno per il festival<br/><br/>
    Inserisci il codice "NATURATECH10" in fase di acquisto<br/>
    Valido su tutti i viaggi (andata e/o ritorno) effettuati dal 04/08/2023 al 20/08/2023 da e
    verso due destinazioni (o partenze) alternative: Matera (MT) o Grassano Scalo (MT)<br/><br/>
    Ma non è finita qui!<br/>
    Se viaggi con MARINO BUS avrai diritto a uno sconto del 10% anche sul biglietto del festival`,
  },
  {
    name: 'Aereo',
    svg: Plane,
    info: '',
  },
];
