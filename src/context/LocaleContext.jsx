'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved) setLocale(saved);
  }, []);

  const toggleLanguage = () => {
    const newLang = locale === 'en' ? 'bn' : 'en';
    setLocale(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
