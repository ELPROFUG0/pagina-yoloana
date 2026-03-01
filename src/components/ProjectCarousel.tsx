'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCarousel.module.css';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

interface ProjectCarouselProps {
  title?: string;
  description?: string;
  projects: Project[];
}

export default function ProjectCarousel({ title, description, projects }: ProjectCarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position -= speed;

      // Reset position when first set of items has scrolled completely
      const itemWidth = carousel.children[0]?.clientWidth || 0;
      const gap = 42;
      const totalWidth = (itemWidth + gap) * projects.length;

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
  }, [projects.length]);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          {title && <h2 className={styles.title}>{title}</h2>}
        </div>
        <div className={styles.descriptionWrapper}>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <ul ref={carouselRef} className={styles.carousel}>
          {duplicatedProjects.map((project, index) => (
            <li key={`${project.id}-${index}`} className={styles.item}>
              <Link href={project.href} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="400px"
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.info}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
