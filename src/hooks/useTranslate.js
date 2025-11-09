'use client';
import { useEffect, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';
import { translateText } from '@/utils/translateText';

export default function useTranslate(text) {
  const { locale } = useLocale();
  const [translated, setTranslated] = useState(text);

  useEffect(() => {
    const doTranslate = async () => {
      const result = await translateText(text, locale);
      setTranslated(result);
    };
    doTranslate();
  }, [locale, text]);

  return translated;
}
