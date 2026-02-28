import Link from 'next/link';
import Button from './Button';
import styles from './IntroSection.module.css';

interface IntroSectionProps {
  title: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink?: string;
}

export default function IntroSection({
  title,
  paragraphs,
  buttonText,
  buttonLink,
}: IntroSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.textContent}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {buttonText && buttonLink && (
        <div className={styles.buttonWrapper}>
          <Button href={buttonLink} variant="dark">
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  );
}
