'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev! - 1
      );
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev! + 1
      );
    }
  };

  return (
    <>
      <div className={styles.carousel}>
        <button
          onClick={() => scroll('left')}
          className={`${styles.navButton} ${styles.prevButton}`}
          aria-label="Imagen anterior"
        >
          ←
        </button>

        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          {images.map((image, index) => (
            <button
              key={index}
              className={styles.imageItem}
              onClick={() => openModal(index)}
            >
              <Image
                src={image}
                alt={`Imagen ${index + 1}`}
                fill
                className={styles.image}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className={`${styles.navButton} ${styles.nextButton}`}
          aria-label="Siguiente imagen"
        >
          →
        </button>
      </div>

      {selectedImageIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <button
            onClick={goToPrevious}
            className={`${styles.modalNavButton} ${styles.modalPrevButton}`}
            aria-label="Imagen anterior"
          >
            ←
          </button>

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrapper}>
              <Image
                src={images[selectedImageIndex]}
                alt="Imagen ampliada"
                fill
                className={styles.modalImage}
              />

              <button
                onClick={goToPrevious}
                className={`${styles.modalNavButton} ${styles.modalPrevButton} ${styles.modalNavMobile}`}
                aria-label="Imagen anterior"
              >
                ←
              </button>

              <button
                onClick={goToNext}
                className={`${styles.modalNavButton} ${styles.modalNextButton} ${styles.modalNavMobile}`}
                aria-label="Siguiente imagen"
              >
                →
              </button>
            </div>
          </div>

          <button
            onClick={goToNext}
            className={`${styles.modalNavButton} ${styles.modalNextButton}`}
            aria-label="Siguiente imagen"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
