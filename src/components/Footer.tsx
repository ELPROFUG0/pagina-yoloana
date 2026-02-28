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
            <p>Calle de la Arquitectura 123</p>
            <p>Madrid, 28001</p>
            <p>España</p>

            <div className={styles.contactLinks}>
              <a href="tel:+34912345678" className={styles.linkWithLine}>
                <span>+34 912 345 678</span>
                <div className={styles.underline}></div>
              </a>
              <a href="mailto:hola@yoloana.com" className={styles.linkWithLine}>
                <span>hola@yoloana.com</span>
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
              <Link href="/privacidad" className={styles.privacyLink}>
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <div className={styles.bottomLine}></div>
          <Link href="/privacidad" className={styles.linkWithLine}>
            <span>Política de Privacidad</span>
            <div className={styles.underline}></div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
