import { oldSouthArabianCharacterMap } from './OldSouthArabianCharacterMap';

export function oldSouthArabianToTransliteration(input: String): String {
  let convertedString: String = input;

  oldSouthArabianCharacterMap.forEach((char) => {
    const regex = new RegExp(char.original, 'g');
    convertedString = convertedString.replace(regex, char.transliteration);
  });

  return convertedString;
}

export function transliterationToOldSouthArabian(input: String): String {
  let convertedString: String = input;

  oldSouthArabianCharacterMap.forEach((char) => {
    const regex = new RegExp(char.transliteration, 'g');
    convertedString = convertedString.replace(regex, char.original);
  });

  return convertedString;
}

export default oldSouthArabianToTransliteration;
