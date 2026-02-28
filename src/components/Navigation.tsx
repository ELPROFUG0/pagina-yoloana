'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/estudio', label: 'Estudio' },
  { href: '/metodo', label: 'Método' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animateLinks, setAnimateLinks] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const wasAtTop = lastScrollY < 100;
      const nowAtTop = currentScrollY < 100;

      // Determinar si estamos en la parte superior
      setIsAtTop(nowAtTop);

      // Disparar animación cuando entramos al hero
      if (!wasAtTop && nowAtTop) {
        setAnimateLinks(true);
        setTimeout(() => setAnimateLinks(false), 1000);
      }

      if (currentScrollY < 100) {
        // Visible en el hero
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolleando hacia arriba
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolleando hacia abajo
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden} ${isAtTop ? styles.transparent : styles.solid} ${animateLinks ? styles.animate : ''}`}>
      <div className={styles.logo}>
        <Link href="/">YOLOANA</Link>
      </div>

      <div className={styles.links}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              <div className={styles.bracket}>
                <span className={styles.bracketText}>[  ]</span>
                {isActive && <div className={styles.circle} />}
              </div>
              <span className={styles.label}>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
