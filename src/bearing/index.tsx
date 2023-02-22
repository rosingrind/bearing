import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import './index.scss';
import Slide from './Slide';

type Props = {
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
};

const cx = classNames.bind(styles);

export default function Carousel(props: Props) {
  const {
    slides: data, size, animation, animation: { interval },
  } = props;

  const [current, setCurrent] = useState(0);
  const [move, setMove] = useState(0);
  const [slides] = useState(data.length <= 3 ? [...data, ...data, ...data] : data);
  const [focused, setFocused] = useState(true);
  const [reduced] = useState(data);

  const getPrev = (m = move, c = current) => {
    setMove(m + 1);
    setCurrent(c - 1 < 0 ? reduced.length - 1 : c - 1);
  };

  const getPos = (i: number) => {
    setMove(move - (i - current));
    setCurrent(i);
  };

  const getNext = useCallback((m = move, c = current) => {
    setMove(m - 1);
    setCurrent(c + 1 >= reduced.length ? 0 : c + 1);
  }, [current, move, reduced.length]);

  useEffect(() => {
    window.addEventListener('blur', () => setFocused(false));
    window.addEventListener('focus', () => setFocused(true));
    const int = interval ? setInterval(() => focused && getNext(), interval) : 0;

    return () => {
      window.removeEventListener('blur', () => setFocused(false));
      window.removeEventListener('focus', () => () => setFocused(true));
      if (interval) clearInterval(int);
    };
  }, [focused, getNext, interval]);

  const cns = {
    dot: (selected: boolean) => cx({
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
              key={s}
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
          <button type="button" className={styles.btn} onClick={() => getPrev()}>
            {' '}
          </button>
          <span className={styles.dots}>
            {data.map((i, key) => (
              <button type="button" key={i} className={cns.dot(key === current)} onClick={() => getPos(key)}>
                {' '}
              </button>
            ))}
          </span>
          <button type="button" className={styles.btn} onClick={() => getNext()}>
            {' '}
          </button>
        </span>
      </div>
    </div>
  );
}
