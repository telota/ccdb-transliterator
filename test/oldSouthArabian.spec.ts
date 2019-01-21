import { expect } from 'chai';
import {
  oldSouthArabianToTransliteration,
  transliterationToOldSouthArabian,
} from '../src/transliterate';

describe('pahlavi.js', () => {
  describe('#oldSouthArabianToTransliteration', () => {
    it('should convert SAMEKH to SMALL S WITH ACUTE', () => {
      expect(oldSouthArabianToTransliteration('𐩯')).to.equal('ś');
    });

    it('should transliterate an example sentece', () => {
      const example: String = '𐩥𐩦𐩩𐩱𐩥𐩽𐩥𐩥𐩧𐩵𐩥';
      const expectation: String = 'wštʾw wwrdw';
      expect(oldSouthArabianToTransliteration(example)).to.equal(expectation);
    });
  });

  describe('#transliterationToOldSouthArabian', () => {
    it('should convert SMALL S WITH ACUTE to SAMEKH', () => {
      expect(transliterationToOldSouthArabian('ś')).to.equal('𐩯');
    });
  });
});
