import { expect } from 'chai';
import { easeInBounce } from '../../src/easing';

describe('easing', function fn() {
  it('easeInBounce', function () {
    expect(easeInBounce(2)).to.equal(-6.5625);
  });
});
