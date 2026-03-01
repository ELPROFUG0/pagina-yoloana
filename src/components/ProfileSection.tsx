'use client';

import Image from 'next/image';
import styles from './ProfileSection.module.css';

interface ProfileSectionProps {
  image: string;
  description: React.ReactNode;
}

export default function ProfileSection({
  image,
  description,
}: ProfileSectionProps) {
  return (
    <section className={styles.profileSection}>
      <div className={styles.content}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt="Profile"
              fill
              className={styles.image}
            />
            <div className={styles.tooltip}>
              <div className={styles.tooltipContent}>
                <p>Hola, Soy yo :)</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.textColumn}>
          <div className={styles.descriptionText}>
            {description}
          </div>

          <div className={styles.founderInfo}>
            <div className={styles.founderName}>
              <p>Yoloana Pichardo</p>
            </div>
            <div className={styles.founderTitle}>
              <p>Fundadora & Arquitecta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
