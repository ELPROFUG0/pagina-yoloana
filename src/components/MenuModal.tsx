'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './MenuModal.module.css';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/slide-2.jpg"
              alt="Menu background"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            <span></span>
            <span></span>
          </button>

          <div className={styles.content}>
            <div className={styles.logo}>YOLOANA</div>

            <div className={styles.contactInfo}>
              <p className={styles.contactLabel}>Contact</p>
              <a href="mailto:hola@yoloana.com" className={styles.contactEmail}>
                hola@yoloana.com
              </a>
            </div>

            <nav className={styles.navigation}>
              <Link href="/" className={styles.navLink} onClick={onClose}>
                Home
              </Link>
              <Link href="/estudio" className={styles.navLink} onClick={onClose}>
                Studio
              </Link>
              <Link href="/proyectos" className={styles.navLink} onClick={onClose}>
                Projects
              </Link>
              <Link href="/metodo" className={styles.navLink} onClick={onClose}>
                Method
              </Link>
              <Link href="/objects" className={styles.navLink} onClick={onClose}>
                Objects
              </Link>
              <Link href="/contacto" className={styles.navLink} onClick={onClose}>
                Contact
              </Link>
            </nav>
          </div>

          <div className={styles.footer}>
            <div className={styles.footerLinks}>
              <a href="https://linkedin.com/company/yoloana" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://linktr.ee/yoloana" target="_blank" rel="noopener noreferrer">
                Linktree
              </a>
            </div>
            <p className={styles.copyright}>© 2026 YOLOANA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
