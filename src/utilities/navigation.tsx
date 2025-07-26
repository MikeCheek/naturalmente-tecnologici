import edizioniData from './edizioniData'

export const links = (lang = 'it') => [
  { name: lang === 'it' ? 'Home' : 'Home', to: '/', position: 1, hide: false },
  {
    name: lang === 'it' ? 'Chi siamo' : 'About',
    to: '/chi-siamo',
    position: 2
  },
  { name: 'Line Up', to: '/programma', position: 2 },
  { name: lang === 'it' ? 'Partner' : 'Partner', to: '/partner', position: 2 },
  { name: lang === 'it' ? 'Info' : 'Info', to: '/info', position: 2 },
  {
    name: lang === 'it' ? 'Contattaci' : 'Contact us',
    to: '/contattaci',
    position: 2
  },
  {
    name: lang === 'it' ? 'Edizioni' : 'Editions',
    multiple: true,
    links: edizioniData
      .sort((a, b) => (a.year > b.year ? -1 : 1))
      .map(ed => ({
        name: ed.year,
        to: `/edizioni/${ed.year}`,
        position: 3
      }))
  }
  // {
  //   name: 'Esempio',
  //   multiple: true,
  //   links: [
  //     ...Array(4)
  //       .fill(0)
  //       .map((data) => ({ name: 'Mbare', to: `/contattaci/${data}`, position: 3 })),
  //   ],
  // },
]

import React, { createContext, useContext, useState, ReactNode } from 'react';

type NavigationContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);

  return (
    <NavigationContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};