import styles from './Button.module.css';
import { FC, FormEvent, MouseEvent } from 'react';

export interface ButtonProps {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  onSubmit?: (e: FormEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC<ButtonProps> = ({
  label,
  onClick,
  ariaLabel,
  onSubmit,
}) => {
  const handleClickOrSubmit = (
    e: MouseEvent<HTMLButtonElement> | FormEvent<HTMLButtonElement>,
  ) => {
    if (e.type === 'click') {
      onClick?.(e as MouseEvent<HTMLButtonElement>);
    } else if (e.type === 'submit') {
      onSubmit?.(e as FormEvent<HTMLButtonElement>);
    }
  };

  return (
    <button
      className={styles.button}
      onClick={handleClickOrSubmit}
      aria-label={ariaLabel ?? 'read more'}
    >
      {label}
    </button>
  );
};

export default CustomButton;
