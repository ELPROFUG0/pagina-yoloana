'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuModal from './MenuModal';
import styles from './Header.module.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      const pastHero = currentScrollY > 200;
      const nearTop = currentScrollY < 100;

      // Mostrar header solo si: estamos scrolleando hacia arriba Y hemos pasado un poco Y NO estamos muy cerca del top
      setIsVisible(scrollingUp && pastHero && !nearTop);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Loto Blanco
          </Link>

          <nav className={styles.nav}>
            <Link
              href="/#proyectos"
              className={styles.link}
              onClick={(e) => handleSectionClick(e, 'proyectos')}
            >
              Proyectos
            </Link>
            <Link
              href="/#estudio"
              className={styles.link}
              onClick={(e) => handleSectionClick(e, 'estudio')}
            >
              Estudio
            </Link>
            <Link
              href="/#faqs"
              className={styles.link}
              onClick={(e) => handleSectionClick(e, 'faqs')}
            >
              FAQs
            </Link>
            <Link href="/blog" className={styles.link}>
              Blog
            </Link>
            <Link
              href="/#contacto"
              className={styles.link}
              onClick={(e) => handleSectionClick(e, 'contacto')}
            >
              Contacto
            </Link>
          </nav>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
