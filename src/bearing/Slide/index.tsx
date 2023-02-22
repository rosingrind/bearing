import React from 'react';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';

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
  let start = performance.now();
  let pass = true;

  requestAnimationFrame(function animate(time: number) {
    let delta = (time - start) / duration;
    if (delta > 1) delta = 1;

    let calc = timing(delta);
    draw(calc);

    if (delta < 1 && pass) {
      requestAnimationFrame(animate);
    } else {
      callback();
    }
  });

  return { interrupt: () => (pass = false) };
};

const Slide: React.FC<{
  src: string;
  animation: { timing: (x: number) => number; speed: number };
  offset: number;
  move: number;
  len: number;
  size: {
    width: number;
    height: number;
  };
}> = ({ src, animation: { timing, speed }, offset, move, len, size }) => {
  const [current, setCurrent] = useState(offset);
  const [anim, setAnim] = useState<{ interrupt: () => void }>();

  const half = Math.floor(len / 2);
  useEffect(() => {
    anim?.interrupt();

    const start = current;
    const end = offset + move;
    const delta = end - start;

    if (timing) {
      setAnim(
        animate({
          timing: timing,
          draw: (p) => {
            const point = current + delta * p;
            setCurrent(point);
          },
          duration: speed,
        }),
      );
    }
  }, [offset, move]);

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
};

export default Slide;
