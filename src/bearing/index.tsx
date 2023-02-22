import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import './index.scss';
import Slide from './Slide';

const cx = classNames.bind(styles);

const Carousel: React.FC<{
  slides: string[];
  size: {
    width: number;
    height: number;
  };
  animation: {
    timing: (x: number) => number;
    speed: number;
    interval?: number;
  };
}> = ({ slides: data, size, animation, animation: { interval } }) => {
  const [current, setCurrent] = useState(0);
  const [move, setMove] = useState(0);
  const [slides, setSlides] = useState(data.length <= 3 ? [...data, ...data] : data);
  const [swipe, setSwipe] = useState<number | undefined>();
  const [focused, setFocused] = useState(true);
  const [rnd, setRnd] = useState(0);
  const [reduced, setReduced] = useState(data);

  useEffect(() => {
    window.addEventListener('blur', () => setFocused(false));
    window.addEventListener('focus', () => setFocused(true));
    const int = interval ? setInterval(() => setRnd(Math.random() * 10), interval) : 0;

    return () => {
      window.removeEventListener('blur', () => setFocused(false));
      window.removeEventListener('focus', () => () => setFocused(true));
      if (interval) clearInterval(int);
    };
  }, []);

  useEffect(() => {
    if (focused) getNext();
  }, [rnd]);

  const getPrev = (m = move, c = current) => {
    setMove(m + 1);
    setCurrent(c - 1 < 0 ? reduced.length - 1 : c - 1);
  };

  const getPos = (i: number) => {
    setMove(move - (i - current));
    setCurrent(i);
  };

  const getNext = (m = move, c = current) => {
    setMove(move - 1);
    setCurrent(c + 1 >= reduced.length ? 0 : c + 1);
  };

  const getOffsets = () => {
    const half = Math.floor(slides.length / 2);
    const gap = half - current;
    let arr = slides.map((s, i) => i - half);
    gap > 0 ? arr.push(...arr.splice(0, gap)) : arr.unshift(...arr.splice(gap));

    return arr;
  };

  const cns = {
    dot: (selected: boolean) =>
      cx({
        dot: true,
        selected,
      }),
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.carousel}
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
      >
        <div>
          {slides.map((s, key) => (
            <Slide
              key={key}
              src={s}
              animation={animation}
              offset={key}
              move={move}
              len={slides.length}
              size={size}
            />
          ))}
        </div>
        <span>
          <i className={styles.btn} onClick={() => getPrev()}>
            {' '}
          </i>
          <span className={styles.dots}>
            {data.map((i, key) => (
              <i key={key} className={cns.dot(key === current)} onClick={() => getPos(key)}></i>
            ))}
          </span>
          <i className={styles.btn} onClick={() => getNext()}>
            {' '}
          </i>
        </span>
      </div>
    </div>
  );
};

export default Carousel;
