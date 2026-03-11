import Link from 'next/link';
import Image from 'next/image';
import styles from './Servicios.module.css';

const servicios = [
  {
    id: 'purificacion',
    title: 'Servicio de Purificación',
    description: 'Limpieza energética de espacios para renovar las vibraciones y crear ambientes de paz y armonía.',
    image: '/images/servicio-purificacion.jpg',
    pdfUrl: '/pdfs/servicio-purificacion.pdf',
  },
  {
    id: 'feng-shui',
    title: 'Feng Shui',
    description: 'Armonización de espacios siguiendo los principios ancestrales del Feng Shui para mejorar el flujo de energía.',
    image: '/images/servicio-feng-shui.jpg',
    pdfUrl: '/pdfs/feng-shui.pdf',
  },
  {
    id: 'ceremonias',
    title: 'Ceremonias Holísticas',
    description: 'Rituales y ceremonias para inaugurar espacios, bendecir hogares y conectar con la energía del lugar.',
    image: '/images/servicio-ceremonias.jpg',
    pdfUrl: '/pdfs/ceremonias-holisticas.pdf',
  },
];

export default function ServiciosPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Volver al inicio
        </Link>

        <div className={styles.header}>
          <p className={styles.label}>Nuestros Servicios</p>
          <h1 className={styles.title}>Servicios Holísticos</h1>
          <p className={styles.description}>
            Ofrecemos servicios complementarios para armonizar tus espacios más allá de la arquitectura física.
          </p>
        </div>

        <div className={styles.grid}>
          {servicios.map((servicio) => (
            <div key={servicio.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={servicio.image}
                  alt={servicio.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{servicio.title}</h2>
                <p className={styles.cardDescription}>{servicio.description}</p>
                <a
                  href={servicio.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  Ver PDF
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
