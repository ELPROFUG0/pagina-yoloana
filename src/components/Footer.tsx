'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Address Section */}
          <div className={styles.address}>
            <p>Ciudad de México</p>
            <p>CDMX, México</p>

            <div className={styles.contactLinks}>
              <a href="https://wa.me/525548873683" className={styles.linkWithLine}>
                <span>+52 55 4887 3683</span>
                <div className={styles.underline}></div>
              </a>
              <a href="mailto:contacto@lotoblancoarq.com" className={styles.linkWithLine}>
                <span>contacto@lotoblancoarq.com</span>
                <div className={styles.underline}></div>
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <nav className={styles.sitemap}>
            <Link href="/" className={styles.linkWithLine}>
              <span>Home</span>
              <div className={styles.underline}></div>
            </Link>
            <Link href="/proyectos" className={styles.linkWithLine}>
              <span>Proyectos</span>
              <div className={styles.underline}></div>
            </Link>
            <Link href="/estudio" className={styles.linkWithLine}>
              <span>Estudio</span>
              <div className={styles.underline}></div>
            </Link>
            <Link href="/metodo" className={styles.linkWithLine}>
              <span>Método</span>
              <div className={styles.underline}></div>
            </Link>
            <Link href="/blog" className={styles.linkWithLine}>
              <span>Blog</span>
              <div className={styles.underline}></div>
            </Link>
            <Link href="/contacto" className={styles.linkWithLine}>
              <span>Contacto</span>
              <div className={styles.underline}></div>
            </Link>
          </nav>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.submit}>
                SIGN UP
              </button>
            </form>
            <p className={styles.privacy}>
              Al suscribirte aceptas nuestra{' '}
              <Link href="/politica-privacidad" className={styles.privacyLink}>
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <div className={styles.bottomLine}></div>
          <Link href="/politica-privacidad" className={styles.linkWithLine}>
            <span>Política de Privacidad</span>
            <div className={styles.underline}></div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
