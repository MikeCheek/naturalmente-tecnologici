import partecipaData from './partecipaData';

export const links = [
  { name: 'Home', to: '/', position: 1, hide: true },
  { name: 'Programma', to: '/programma', position: 2 },
  { name: 'Info', to: '/info', position: 2 },
  { name: 'Partner', to: '/partner', position: 2 },
  { name: 'Chi siamo', to: '/chi-siamo', position: 2 },
  {
    name: 'Partecipa',
    multiple: true,
    links: [...partecipaData.map((data) => ({ name: data.name, to: `/partecipa/${data.pathName}`, position: 3 }))],
  },
];
