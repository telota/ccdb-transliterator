import { expect } from 'chai';
import {
  syriacToTransliteration,
  transliterationToSyriac,
} from '../src/transliterate';
import { syriacExamples } from './syriacExamples';

describe('pahlavi.js', () => {
  describe('#syriacToTransliteration', () => {
    it('should convert SYRIAC LETTER BETH to LATIN SMALL LETTER B', () => {
      expect(syriacToTransliteration('ܒ')).to.equal('b');
    });
  });

  describe('#transliterationToOldSouthArabian', () => {
    it('should convert MODIFIER LETTER REVERSED COMMA to SYRIAC LETTER E', () => {
      expect(transliterationToSyriac('ʿ')).to.equal('ܥ');
    });
  });
});
