'use client';

import Image from 'next/image';
import styles from './ProfileSection.module.css';

interface ProfileSectionProps {
  image: string;
  caption?: string;
  description: string;
}

export default function ProfileSection({
  image,
  caption = 'Hola, soy yo :)',
  description,
}: ProfileSectionProps) {
  return (
    <section className={styles.profileSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="Profile"
              width={400}
              height={400}
              className={styles.image}
            />
            <div className={styles.caption}>
              <div className={styles.captionBubble}>
                <p>{caption}</p>
              </div>
              <div className={styles.arrow}>↗</div>
            </div>
          </div>
        </div>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}
