import React, { useCallback } from 'react';
import styles from './main.module.scss';
import bottomFlowers from '../__mocks__/bottom-flowers';

const Main = () => {
  const calculateWidth = useCallback((i: number, length: number): string | number => {
    const calculateItemLength = (index: number) => index * ((window.innerWidth - 200) / bottomFlowers.length);
    const temp = calculateItemLength(i + 1);
    return temp - (temp - calculateItemLength(i)) / 2;
  }, []);

  return (
    <div className={styles.main}>
      {bottomFlowers.map((Image, index) => {
        return (
          <span className={`${styles.bottom}`} style={{ left: calculateWidth(index, bottomFlowers.length) }} key={index}>
            <Image />
          </span>
        );
      })}
    </div>
  );
};
export default Main;
