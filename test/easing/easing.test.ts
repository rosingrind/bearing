import { easeInBounce } from '../../src/easing';
import { expect } from 'chai';

describe('easing', () => {
    it('easeInBounce', () => {
        expect(easeInBounce(2)).to.equal(-6.5625);
    });
});
