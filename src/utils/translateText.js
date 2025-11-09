export async function translateText(text, targetLang) {
  if (targetLang === 'en') return text;

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data[0][0][0];
  } catch (err) {
    console.error('Translation error:', err);
    return text;
  }
}
