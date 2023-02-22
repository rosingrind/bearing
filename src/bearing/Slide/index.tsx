import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

type Props = {
  src: string;
  animation: { timing: (x: number) => number; speed: number };
  offset: number;
  move: number;
  len: number;
  size: {
    width: number;
    height: number;
  };
};

const animate = ({
  timing,
  draw,
  duration,
  callback = () => {},
}: {
  timing: (x: number) => number;
  draw: (p: number) => void;
  duration: number;
  callback?: any;
}) => {
  const start = performance.now();
  requestAnimationFrame(function frameCallback(time: number) {
    let delta = (time - start) / duration;
    if (delta > 1) delta = 1;

    const calc = timing(delta);
    draw(calc);

    if (delta < 1) {
      requestAnimationFrame(frameCallback);
    } else {
      callback();
    }
  });
};

export default function Slide(props: Props) {
  const {
    src, animation: { timing, speed }, offset, move, len, size,
  } = props;

  const [current, setCurrent] = useState(offset);

  const half = Math.floor(len / 2);
  useEffect(() => {
    const start = current;
    const end = offset + move;
    const delta = end - start;

    animate({
      timing,
      draw: (p) => {
        const point = current + delta * p;
        setCurrent(point);
      },
      duration: speed,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, move, speed, timing]);

  const pos = (((current % len) + len) % len) - half;
  return (
    <div
      className={styles.slide}
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        left: `${pos * size.width}px`,
      }}
    >
      <img src={src} alt={src} />
    </div>
  );
}
