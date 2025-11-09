'use client';
import { useLocale } from '@/context/LocaleContext';
import React from 'react';


export default function LanguageToggle() {
  const { locale, toggleLanguage } = useLocale();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
    >
      {locale === 'en' ? 'বাংলা' : 'English'}
    </button>
  );
}
