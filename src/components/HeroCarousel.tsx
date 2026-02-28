'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroCarousel.module.css';
import Button from './Button';

export interface Slide {
  image: string;
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoplayInterval?: number;
}

export default function HeroCarousel({ slides, autoplayInterval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [currentIndex, autoplayInterval]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={index === 0}
              />
              <div className={styles.tint} />
            </div>

            <div className={styles.content}>
              <div className={styles.textContent}>
                <div className={styles.headingStack}>
                  <p className={styles.tagline}>{slide.tagline}</p>
                  <h1 className={styles.title}>{slide.title}</h1>
                </div>
                <p className={styles.description}>{slide.description}</p>
              </div>

              <Button href={slide.buttonLink} variant="light">
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.arrow}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          ←
        </button>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.arrow}
          onClick={handleNext}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
}
