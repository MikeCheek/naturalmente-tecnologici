export const links = (lang = 'it') => [
  { name: lang === 'it' ? 'Home' : 'Home', to: '/', position: 1, hide: true },
  // { name: 'Programma', to: '/programma', position: 2 },
  { name: lang === 'it' ? 'Info' : 'Info', to: '/info', position: 2 },
  { name: lang === 'it' ? 'Partner' : 'Partner', to: '/partner', position: 2 },
  { name: lang === 'it' ? 'Chi siamo' : 'Who', to: '/chi-siamo', position: 2 },
  { name: lang === 'it' ? 'Contattaci' : 'Contact us', to: '/contattaci', position: 2 },
  // {
  //   name: 'Contattaci',
  //   multiple: true,
  //   links: [...contattaciData.map((data) => ({ name: data.name, to: `/contattaci/${data.pathName}`, position: 3 }))],
  // },
];
