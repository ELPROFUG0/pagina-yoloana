'use client';

import styles from './ContactSection.module.css';

interface ContactLink {
  label: string;
  value: string;
  href: string;
}

interface ContactSectionProps {
  title?: string;
  description?: string;
  links: ContactLink[];
}

export default function ContactSection({
  title = '¿Listo para empezar?',
  description = 'Conectemos y hagamos realidad tu proyecto.',
  links,
}: ContactSectionProps) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.linkList}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
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
          ))}
        </div>
      </div>
    </section>
  );
}
