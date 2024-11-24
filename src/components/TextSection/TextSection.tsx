import { FC } from 'react';
import styles from './TextSection.module.css';
import combineClasses from '../../helpers/combineClasses';

interface TextSectionProps {
  title: string;
  imageSrc: string;
  text: string;
  altText?: string;
  imageFirst?: boolean;
  url: string;
  ariaLabel?: string;
  linkText: string;
  id: string;
}

const TextSection: FC<TextSectionProps> = ({
  title,
  imageSrc,
  text,
  imageFirst,
  altText,
  url,
  ariaLabel,
  linkText,
  id,
}) => {
  const flexDirectionClass = imageFirst ? styles.image_first : undefined;

  return (
    <div className={combineClasses(styles.section, flexDirectionClass)} id={id}>
      <img className={styles.image} src={imageSrc} alt={altText ?? imageSrc} />
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
        <a href={url} aria-label={ariaLabel ?? linkText}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TextSection;
