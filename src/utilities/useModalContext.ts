import { createContext, useContext } from 'react';

interface Context {
  setText: (title: string, description: string, badges?: string[]) => void;
}

export const ModalContext = createContext<Context>({
  setText: (_, __) => {},
});

const useModalContext = () => useContext(ModalContext);

export default useModalContext;
