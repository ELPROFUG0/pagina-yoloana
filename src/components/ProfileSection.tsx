'use client';

import Image from 'next/image';
import styles from './ProfileSection.module.css';

interface Badge {
  text: string;
  rotation: number;
}

interface ProfileSectionProps {
  image: string;
  description?: string;
  badges?: Badge[];
}

export default function ProfileSection({
  image,
  description,
  badges = [],
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
          </div>

          <div className={styles.badgesWrapper}>
            {badges.map((badge, index) => (
              <div
                key={index}
                className={styles.badge}
                style={{
                  '--rotation': `${badge.rotation}deg`,
                } as React.CSSProperties}
              >
                <p>{badge.text}</p>
              </div>
            ))}
          </div>
        </div>

        {description && (
          <div className={styles.mobileDescription}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
