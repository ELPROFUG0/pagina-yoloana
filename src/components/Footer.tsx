import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>YOLOANA</h3>
            <p className={styles.tagline}>Arquitectura Contemporánea</p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Navegación</h4>
              <nav className={styles.nav}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/proyectos" className={styles.link}>Proyectos</Link>
                <Link href="/estudio" className={styles.link}>Estudio</Link>
                <Link href="/metodo" className={styles.link}>Método</Link>
                <Link href="/contacto" className={styles.link}>Contacto</Link>
              </nav>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contacto</h4>
              <div className={styles.contact}>
                <a href="mailto:hola@yoloana.com" className={styles.link}>
                  hola@yoloana.com
                </a>
                <a href="tel:+34000000000" className={styles.link}>
                  +34 000 000 000
                </a>
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Síguenos</h4>
              <div className={styles.social}>
                <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} YOLOANA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
