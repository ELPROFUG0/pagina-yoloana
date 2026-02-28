import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedSection.module.css';

interface FeaturedSectionProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  link?: {
    href: string;
    text: string;
  };
}

export default function FeaturedSection({
  tagline,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  link,
}: FeaturedSectionProps) {
  return (
    <section className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 809px) 100vw, 50vw"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.tagline}>{tagline}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {link && (
          <Link href={link.href} className={styles.link}>
            {link.text}
            <span className={styles.arrow}>→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
