import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import { expect } from 'chai';
import Slide from '@bearing/Slide';
import { easeInOutSine } from '@easing';

describe('Slide', function suite() {
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
        src: 'test.png',
        animation: {
          timing: easeInOutSine,
          speed: 500,
        },
        offset: 0,
        move: 0,
        len: 1,
        size: {
          width: 100,
          height: 100,
        },
      };
      root.render(
        <React.StrictMode>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Slide {...props} />
        </React.StrictMode>,
      );
    });

    const img = rootContainer.querySelector('img');
    expect(img?.src).to.equal('http://localhost:3000/test.png');
  });
});
