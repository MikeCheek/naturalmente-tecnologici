import contattaciData from './contattaciData';

export const links = [
  { name: 'Home', to: '/', position: 1, hide: true },
  // { name: 'Programma', to: '/programma', position: 2 },
  { name: 'Info', to: '/info', position: 2 },
  { name: 'Partner', to: '/partner', position: 2 },
  { name: 'Chi siamo', to: '/chi-siamo', position: 2 },
  { name: 'Contattaci', to: '/contattaci', position: 2 },
  // {
  //   name: 'Contattaci',
  //   multiple: true,
  //   links: [...contattaciData.map((data) => ({ name: data.name, to: `/contattaci/${data.pathName}`, position: 3 }))],
  // },
];
