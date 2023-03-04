import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import { expect } from 'chai';
import Carousel from '@bearing';
import { easeInOutSine } from '@easing';

describe('Carousel', function suite() {
  let rootContainer: HTMLElement;

  beforeEach(function fn() {
    rootContainer = document.createElement('div');
    document.body.appendChild(rootContainer);
  });

  afterEach(function fn() {
    document.body.removeChild(rootContainer);
    window.close();
  });

  it('img', function fn() {
    act(() => {
      const root = ReactDOM.createRoot(rootContainer as HTMLElement);
      const props = {
        slides: [
          'test1.png',
          'test2.png',
          'test3.png',
          'test4.png',
        ],
        animation: {
          timing: easeInOutSine,
          speed: 500,
          interval: 2000,
        },
        size: {
          width: 100,
          height: 100,
        },
      };
      root.render(
        <React.StrictMode>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Carousel {...props} />
        </React.StrictMode>,
      );
    });

    const images = rootContainer.querySelectorAll('img');
    expect(images).to.be.an.instanceof(NodeList);

    for (const img of images) {
      expect(img?.src).to.match(/http:\/\/localhost:3000\/test\d\.png/);
    }
  });
});
