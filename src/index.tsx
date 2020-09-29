import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import './index.scss';
import Slide from './Slide';

const fadetime = parseFloat(styles.fadetime);
const imgsize = parseFloat(styles.imgsize);

const cx = classNames.bind(styles);

const Carousel: React.FC<{
  slides: string[];
  size: { width: number; height: number };
  animation: {
    timing: (x: number) => number;
    speed: number;
    interval?: number;
  };
}> = ({ slides: data, size, animation, animation: { interval } }) => {
  console.log(size);

  const [current, setCurrent] = useState(0);
  const [move, setMove] = useState(0);
  const [slides, setSlides] = useState(data);
  const [swipe, setSwipe] = useState<number | undefined>();

  useEffect(() => {
    if (data.length === 2) setSlides([...data, ...data]);
  }, [data]);

  useEffect(() => {
    if (interval) {
      if (typeof swipe !== 'undefined') clearInterval(swipe);
      setSwipe(setInterval(() => getNext(), interval));
    }
  }, [move, interval]);

  const getPrev = () => {
    setCurrent(current - 1 < 0 ? slides.length - 1 : current - 1);
    setMove(move + 1);
  };

  const getPos = (i: number) => {
    setCurrent(i);
    setMove(move - (i - current));
  };

  const getNext = () => {
    setCurrent(current + 1 >= slides.length ? 0 : current + 1);
    setMove(move - 1);
  };

  const getOffsets = () => {
    const half = Math.floor(slides.length / 2);
    const gap = half - current;
    let arr = slides.map((s, i) => i - half);
    gap > 0 ? arr.push(...arr.splice(0, gap)) : arr.unshift(...arr.splice(gap));

    return arr;
  };

  const cns = {
    dot: (selected: boolean) => cx({ dot: true, selected }),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div>
          <div>
            <img src={slides[0]} alt={slides[0]} />
          </div>
          {slides.map((s, key) => (
            <Slide
              key={key}
              src={s}
              animation={animation}
              offset={key}
              move={move}
              len={slides.length}
              imgsize={imgsize}
            />
          ))}
        </div>
        <span>
          <i className={styles.btn} onClick={() => getPrev()}>
            {' '}
          </i>
          <span className={styles.dots}>
            {data.map((i, key) => (
              <i
                key={key}
                className={cns.dot(key === current)}
                onClick={() => getPos(key)}
              ></i>
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
