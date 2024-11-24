import { useRef, FormEvent } from 'react';
import styles from './Form.module.css';
import CustomButton from '../Button/Button';

function Form() {
  const whatShapeRef = useRef<HTMLInputElement>(null);
  const whatAboutRef = useRef<HTMLTextAreaElement>(null);
  const whySquareRef = useRef<HTMLTextAreaElement>(null);

  const handleNavigation = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;

    if (target.name === 'age' && e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      whatShapeRef.current?.focus();
    } else if (target.name === 'what-shape' && e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      whySquareRef.current?.focus();
    } else if (target.name === 'why-square' && e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      whatShapeRef.current?.focus();
    } else if (target.name === 'what-about' && e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      whySquareRef.current?.focus();
    } else if (target.name === 'why-square' && e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      whatAboutRef.current?.focus();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper} id="you">
      <form className={styles.form} onKeyDown={handleNavigation}>
        <div className={styles.input_wrapper}>
          <span className={styles.label}>your name</span>
          <input type="text" name="name" />
        </div>

        <div className={styles.input_wrapper}>
          <span className={styles.label}>your age</span>
          <input type="number" name="age" />
        </div>

        <div className={styles.input_wrapper}>
          <span className={styles.label}>someones email</span>
          <input type="email" name="email" />
        </div>

        <div className={styles.input_wrapper}>
          <span className={styles.label}>what shape is your favorite</span>
          <input type="text" name="what-shape" ref={whatShapeRef} />
        </div>

        <div className={styles.input_wrapper}>
          <span className={styles.label}>what do you love about squares</span>
          <textarea name="what-about" ref={whatAboutRef} />
        </div>

        <div className={styles.input_wrapper}>
          <span className={styles.label}>why squares are the best</span>
          <textarea name="why-square" ref={whySquareRef} />
        </div>

        <CustomButton
          label="submit"
          onClick={(e: FormEvent<HTMLButtonElement>) => handleSubmit(e)}
        />
      </form>
    </div>
  );
}

export default Form;
