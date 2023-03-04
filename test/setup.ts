import { DOMWindow, JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true, url: 'http://localhost:3000' });
const { document } = window;

function copyProps(src: DOMWindow, target: typeof global) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

Object.defineProperty(global, 'window', {
  value: window,
  writable: true,
});

Object.defineProperty(global, 'document', {
  value: document,
  writable: true,
});

Object.defineProperty(global, 'navigator', {
  value: {
    userAgent: 'node.js',
  },
  writable: true,
});

global.requestAnimationFrame = function requestAnimationFrame(callback) {
  return setTimeout(callback, 0);
};

global.cancelAnimationFrame = function cancelAnimationFrame(id) {
  clearTimeout(id);
};

copyProps(window, global);
