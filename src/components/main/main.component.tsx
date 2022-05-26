import React, { FC, useCallback } from 'react';
import styles from './main.module.scss';
import { FlowersConfig } from '../../models/flowers-config.interface';
import Button from '../button/button.component';

interface Props {
  config: FlowersConfig[];
  content: {
    date: string;
    message: string;
    title: string;
    address: string;
  };
  goodButtonCallback: () => void;
  badButtonCallback: () => void;
}

const Main: FC<Props> = ({ config, content: { date, message, title, address } }) => {
  const calculateWidth = useCallback((i: number, length: number): string | number => {
    const calculateItemLength = (index: number) => index * ((window.innerWidth - 200) / length);
    const temp = calculateItemLength(i + 1);
    return temp - (temp - calculateItemLength(i)) / 2;
  }, []);

  return (
    <div className={styles.main}>
      {config.map(({ name, data, stylePoint, actualLength }) =>
        data.map((Image, index) => (
          <span className={styles[name]} style={{ [stylePoint]: calculateWidth(index, actualLength || data.length) }} key={index}>
            <Image />
          </span>
        )),
      )}
      <span className={styles.date}>{date}</span>
      <span className={styles.message}>{message}</span>
      <p className={styles.title}>
        <span>{title}</span>
      </p>
      <span className={styles.address}>{address}</span>
      <div className={styles.buttons}>
        <Button title="Приеду" onClick={() => null} isActive className={styles.button} />
        <Button title="К сожалению не смогу быть" onClick={() => null} />
      </div>
    </div>
  );
};
export default Main;
