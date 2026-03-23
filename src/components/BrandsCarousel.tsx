'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './BrandsCarousel.module.css';

interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

interface BrandsCarouselProps {
  brands: Brand[];
}

export default function BrandsCarousel({ brands }: BrandsCarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;

      const firstItem = carousel.children[0] as HTMLElement;
      const gap = 60;
      const itemWidth = (firstItem?.offsetWidth || 100) + gap;
      const totalWidth = itemWidth * brands.length * 5;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [brands.length]);

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <section className={styles.carouselContainer}>
      <ul ref={carouselRef} className={styles.carousel}>
        {duplicatedBrands.map((brand, index) => (
          <li key={`${brand.name}-${index}`} className={styles.item}>
            <div className={styles.logoWrapper}>
              <span className={styles.brandName}>{brand.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
