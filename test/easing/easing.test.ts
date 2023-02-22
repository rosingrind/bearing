import { expect } from 'chai';
import { easeInBounce, easeOutBounce } from '../../src/easing';

describe('easing', function suite() {
  it('easeInBounce', function fn() {
    expect(easeInBounce(2)).to.equal(-6.5625);
  });
  it('easeOutBounce', function fn() {
    expect(easeOutBounce(2)).to.equal(9.25);
  });
});
