'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuModal from './MenuModal';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

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

            {/* Menu Button */}
            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={styles.bottomLeftContent}>
              <div className={styles.headingStack}>
                <p className={styles.subtitle}>Arquitectura holística</p>
                <h2 className={styles.secondaryTitle}>Espacios con alma</h2>
              </div>
              <p className={styles.description}>Diseño consciente que integra naturaleza, luz y bienestar.</p>
              <Link href="/#proyectos" className={styles.discoverButton}>
                <span>Ver Proyectos</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
