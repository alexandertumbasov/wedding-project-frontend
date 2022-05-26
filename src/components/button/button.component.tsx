import React, { FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  title: string;
  isActive?: boolean;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ title, isActive = false, className }) => {
  return <button className={`${styles.button} ${isActive ? styles.active : ''} ${className || ''}`}>{title}</button>;
};

export default Button;
