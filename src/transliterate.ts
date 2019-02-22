import { oldSouthArabianCharacterMap } from './OldSouthArabianCharacterMap';
import { syriacCharacterMap } from './syriacCharacterMap';

export function oldSouthArabianToTransliteration(input: String): String {
  let convertedString: String = input;

  oldSouthArabianCharacterMap.forEach((char) => {
    const regex = new RegExp(char.original, 'g');
    convertedString = convertedString.replace(regex, char.transliteration);
  });

  return convertedString;
}

export function syriacToTransliteration(input: String): String {
  let convertedString: String = input;

  syriacCharacterMap.forEach((char) => {
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

export function transliterationToSyriac(input: String): String {
  let convertedString: String = input;

  syriacCharacterMap.forEach((char) => {
    const regex = new RegExp(char.transliteration, 'g');
    convertedString = convertedString.replace(regex, char.original);
  });

  return convertedString;
}

export default oldSouthArabianToTransliteration; syriacToTransliteration;
