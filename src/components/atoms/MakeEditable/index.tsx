import React, { useEffect } from 'react';

const Index = () => {
  let typed = '';
  let enabled = false;
  const secret = 'mbarechedici';

  const sequenceChecker = (e: KeyboardEvent) => {
    typed += e.key;
    if (!secret.startsWith(typed)) typed = '';
    if (secret === typed) {
      enabled = !enabled;
      typed = '';
      const elements = [];
      const ps = document.getElementsByTagName('p');
      for (let i = 0; i < ps.length; i++) elements.push(ps[i]);
      for (let i = 1; i <= 6; i++) {
        const hs = document.getElementsByTagName('h' + i);
        for (let j = 0; j < hs.length; j++) elements.push(hs[j]);
      }
      elements.forEach((e) => e.setAttribute('contenteditable', enabled ? 'true' : 'false'));
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', sequenceChecker);
    return window.removeEventListener('keypress', () => {});
  }, []);
  return <></>;
};

export default Index;
