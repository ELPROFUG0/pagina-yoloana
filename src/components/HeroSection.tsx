'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  tagline?: string;
  title: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
}

export default function HeroSection({
  tagline,
  title,
  buttonText,
  buttonLink,
  image,
}: HeroSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
            <div className={styles.overlay}></div>

            <div className={styles.bottomLeftContent}>
              <div className={styles.headingStack}>
                <p className={styles.subtitle}>Everyday pieces, considered</p>
                <h2 className={styles.secondaryTitle}>Objects for thoughtful living</h2>
              </div>
              <p className={styles.description}>Each object is made in small numbers, shaped to serve daily life without excess.</p>
              <Link href="/objects" className={styles.discoverButton}>
                <span>Discover Our Objects</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
