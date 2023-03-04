import { expect } from 'chai';
import * as easing from '@easing';

describe('easing', function suite() {
  it('easeInQuad', function fn() {
    expect(easing.easeInQuad(0)).to.equal(0);
    expect(easing.easeInQuad(Math.random())).to.be.a('number');
  });
  it('easeOutQuad', function fn() {
    expect(easing.easeOutQuad(0)).to.equal(0);
    expect(easing.easeOutQuad(Math.random())).to.be.a('number');
  });
  it('easeInOutQuad', function fn() {
    expect(easing.easeInOutQuad(0)).to.equal(0);
    expect(easing.easeInOutQuad(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutQuad(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInCubic', function fn() {
    expect(easing.easeInCubic(0)).to.equal(0);
    expect(easing.easeInCubic(Math.random())).to.be.a('number');
  });
  it('easeOutCubic', function fn() {
    expect(easing.easeOutCubic(0)).to.equal(0);
    expect(easing.easeOutCubic(Math.random())).to.be.a('number');
  });
  it('easeInOutCubic', function fn() {
    expect(easing.easeInOutCubic(0)).to.equal(0);
    expect(easing.easeInOutCubic(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutCubic(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInQuart', function fn() {
    expect(easing.easeInQuart(0)).to.equal(0);
    expect(easing.easeInQuart(Math.random())).to.be.a('number');
  });
  it('easeOutQuart', function fn() {
    expect(easing.easeOutQuart(0)).to.equal(0);
    expect(easing.easeOutQuart(Math.random())).to.be.a('number');
  });
  it('easeInOutQuart', function fn() {
    expect(easing.easeInOutQuart(0)).to.equal(0);
    expect(easing.easeInOutQuart(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutQuart(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInQuint', function fn() {
    expect(easing.easeInQuint(0)).to.equal(0);
    expect(easing.easeInQuint(Math.random())).to.be.a('number');
  });
  it('easeOutQuint', function fn() {
    expect(easing.easeOutQuint(0)).to.equal(0);
    expect(easing.easeOutQuint(Math.random())).to.be.a('number');
  });
  it('easeInOutQuint', function fn() {
    expect(easing.easeInOutQuint(0)).to.equal(0);
    expect(easing.easeInOutQuint(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutQuint(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInSine', function fn() {
    expect(easing.easeInSine(0)).to.equal(0);
    expect(easing.easeInSine(Math.random())).to.be.a('number');
  });
  it('easeOutSine', function fn() {
    expect(easing.easeOutSine(0)).to.equal(0);
    expect(easing.easeOutSine(Math.random())).to.be.a('number');
  });
  it('easeInOutSine', function fn() {
    expect(easing.easeInOutSine(0)).to.equal(0);
    expect(easing.easeInOutSine(Math.random())).to.be.a('number');
  });
  it('easeInExpo', function fn() {
    expect(easing.easeInExpo(0)).to.equal(0);
    expect(easing.easeInExpo(Math.random())).to.be.a('number');
  });
  it('easeOutExpo', function fn() {
    expect(easing.easeOutExpo(1)).to.equal(1);
    expect(easing.easeOutExpo(Math.random())).to.be.a('number');
  });
  it('easeInOutExpo', function fn() {
    expect(easing.easeInOutExpo(0)).to.equal(0);
    expect(easing.easeInOutExpo(1)).to.equal(1);
    expect(easing.easeInOutExpo(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutExpo(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInCirc', function fn() {
    expect(easing.easeInCirc(0)).to.equal(0);
    expect(easing.easeInCirc(Math.random())).to.be.a('number');
  });
  it('easeOutCirc', function fn() {
    expect(easing.easeOutCirc(0)).to.equal(0);
    expect(easing.easeOutCirc(Math.random())).to.be.a('number');
  });
  it('easeInOutCirc', function fn() {
    expect(easing.easeInOutCirc(0)).to.equal(0);
    expect(easing.easeInOutCirc(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutCirc(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInBack', function fn() {
    expect(easing.easeInBack(0)).to.equal(0);
    expect(easing.easeInBack(Math.random())).to.be.a('number');
  });
  it('easeOutBack', function fn() {
    expect(easing.easeOutBack(0)).to.equal(0);
    expect(easing.easeOutBack(Math.random())).to.be.a('number');
  });
  it('easeInOutBack', function fn() {
    expect(easing.easeInOutBack(0)).to.equal(0);
    expect(easing.easeInOutBack(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutBack(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInElastic', function fn() {
    expect(easing.easeInElastic(0)).to.equal(0);
    expect(easing.easeInElastic(1)).to.equal(1);
    expect(easing.easeInElastic(Math.random())).to.be.a('number');
  });
  it('easeOutElastic', function fn() {
    expect(easing.easeOutElastic(0)).to.equal(0);
    expect(easing.easeOutElastic(1)).to.equal(1);
    expect(easing.easeOutElastic(Math.random())).to.be.a('number');
  });
  it('easeInOutElastic', function fn() {
    expect(easing.easeInOutElastic(0)).to.equal(0);
    expect(easing.easeInOutElastic(1)).to.equal(1);
    expect(easing.easeInOutElastic(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutElastic(Math.random() + 0.5)).to.be.a('number');
  });
  it('easeInBounce', function fn() {
    expect(easing.easeInBounce(0)).to.equal(0);
    expect(easing.easeInBounce(Math.random())).to.be.a('number');
  });
  it('easeOutBounce', function fn() {
    const d1 = 2.75;

    const c1 = 1 / d1;
    const c2 = 2 / d1;
    const c3 = 2.5 / d1;

    expect(easing.easeOutBounce(0)).to.equal(0);
    expect(easing.easeOutBounce(Math.random() * c1)).to.be.a('number');
    expect(easing.easeOutBounce(Math.random() * (c2 - c1) + c1)).to.be.a('number');
    expect(easing.easeOutBounce(Math.random() * (c3 - c2) + c2)).to.be.a('number');
  });
  it('easeInOutBounce', function fn() {
    expect(easing.easeInOutBounce(0)).to.equal(0);
    expect(easing.easeInOutBounce(Math.random() - 0.5)).to.be.a('number');
    expect(easing.easeInOutBounce(Math.random() + 0.5)).to.be.a('number');
  });
});
