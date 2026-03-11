'use client';

import Image from 'next/image';
import styles from './ContactSection.module.css';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon?: string;
  disabled?: boolean;
}

interface ContactSectionProps {
  title?: string;
  description?: string;
  links: ContactLink[];
  image?: string;
  name?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = '¿Listo para empezar?',
  description = 'Conectemos y hagamos realidad tu proyecto.',
  links,
  image,
  name = 'Yoloana',
  subtitle = 'Fundadora & Arquitecta',
}: ContactSectionProps) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.mainContent}>
        {image && (
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt={name}
                width={240}
                height={280}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.nameWrapper}>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <div className={styles.bottomMask}></div>
              </div>
            </div>

            <div className={styles.textButtonWrapper}>
              <div className={styles.textWrapper}>
                <p className={styles.smallText}>¿Tienes una idea?</p>
                <p className={styles.largeText}>Estamos listos para trabajar contigo.</p>
              </div>
              <a href="https://wa.me/525548873683" target="_blank" rel="noopener noreferrer" className={styles.bookButton}>
                Agenda una reunión
              </a>
            </div>
          </div>
        )}

        <div className={styles.contentWrapper}>
          <div className={styles.linkList}>
            {links.map((link, index) => (
              link.disabled ? (
                <div
                  key={index}
                  className={`${styles.contactLink} ${styles.disabled}`}
                >
                  <div className={styles.label}>
                    <p>{link.label}</p>
                  </div>
                  <div className={styles.valueWrapper}>
                    <div className={styles.value}>
                      <p>{link.value}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('/') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <div className={styles.label}>
                    <p>{link.label}</p>
                  </div>
                  <div className={styles.valueWrapper}>
                    <div className={styles.value}>
                      <p>{link.value}</p>
                    </div>
                    <div className={styles.arrow}>→</div>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
