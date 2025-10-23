import { useState, useEffect } from 'react';

const translations = {
  pt: {
    h1: 'Olá',
    p: 'Estou a renovar este espaço, novidades em breve.',
    btnContact: 'Contacto',
    btnNothing: 'Este botão não faz nada',
    toastTitle: 'Eu avisei...',
    toastWhen: 'Agora mesmo',
    toastText: 'Eu avisei que o botão não fazia nada, isto foi uma perda de tempo.'
  },
  en: {
    h1: 'Hi!',
    p: 'New site is coming. I swear.',
    btnContact: 'Contact',
    btnNothing: 'This does nothing at all',
    toastTitle: 'I told you...',
    toastWhen: 'just now',
    toastText: 'I tried to warn you that the button does nothing, this was a waste of time.'
  }
};

function getUserMainLanguage() {
  const languageList = navigator.languages || [navigator.language];
  const hasPT = languageList.some(lang => lang.startsWith('pt'));
  return hasPT ? 'pt' : 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const detectedLanguage = getUserMainLanguage();
    setLanguage(detectedLanguage);
  }, []);

  return {
    language,
    setLanguage,
    t: translations[language]
  };
}
