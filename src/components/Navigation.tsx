'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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

  return (
    <nav className={styles.nav}>
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
