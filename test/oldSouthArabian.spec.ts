import { expect } from 'chai';
import {
  oldSouthArabianToTransliteration,
  transliterationToOldSouthArabian,
} from '../src/transliterate';
import { oldSouthArabianExamples } from './oldSouthArabianExamples';

describe('pahlavi.js', () => {
  describe('#oldSouthArabianToTransliteration', () => {
    it('should convert SAMEKH to SMALL S WITH ACUTE', () => {
      expect(oldSouthArabianToTransliteration('𐩯')).to.equal('ś');
    });

    it('should transliterate example senteces', () => {
      oldSouthArabianExamples.forEach((example) => {
        expect(oldSouthArabianToTransliteration(example.original))
          .to.equal(example.transliteration);
      });
    });
  });

  describe('#transliterationToOldSouthArabian', () => {
    it('should convert SMALL S WITH ACUTE to SAMEKH', () => {
      expect(transliterationToOldSouthArabian('ś')).to.equal('𐩯');
    });

    it('should reconvert a transliterated example senteces', () => {
      oldSouthArabianExamples.forEach((example) => {
        expect(transliterationToOldSouthArabian(example.transliteration))
          .to.equal(example.original);
      });
    });
  });
});
