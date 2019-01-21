import { expect } from 'chai';
import { transliterate } from '../src/pahlavi';

describe('pahlavi.js', () => {
  describe('#transliterated', () => {
    it('should convert SAMEKH to SMALL S WITH ACUTE', () => {
      expect(transliterate('𐩯')).to.equal('ś');
    })
  })
})