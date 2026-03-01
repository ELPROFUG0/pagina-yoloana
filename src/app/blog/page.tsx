import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | Loto Blanco',
  description: 'Artículos sobre arquitectura holística, diseño consciente y bienestar espacial',
};

const blogPosts = [
  {
    id: 'feng-shui-arquitectura-holistica',
    title: 'Feng Shui en la Arquitectura Holística: Creando Espacios de Bienestar',
    excerpt: 'Descubre cómo los principios milenarios del Feng Shui se integran con la arquitectura moderna para crear espacios que nutren el cuerpo, la mente y el espíritu.',
    image: '/images/blog/feng-shui-hero.jpg',
    date: '1 de Marzo, 2026',
    readTime: '8 min lectura',
    category: 'Diseño Holístico',
  },
  {
    id: 'arquitectura-bioclimatica-2026',
    title: 'Arquitectura Bioclimática 2026: El Futuro del Diseño Sustentable',
    excerpt: 'Explora las tendencias más innovadoras en arquitectura bioclimática y cómo están transformando el diseño sustentable. Materiales inteligentes, tecnología invisible y naturaleza como infraestructura.',
    image: '/images/blog/bioclimatica-hero.jpg',
    date: '28 de Febrero, 2026',
    readTime: '10 min lectura',
    category: 'Sustentabilidad',
  },
  {
    id: 'que-es-arquitectura-holistica',
    title: '¿Qué es la Arquitectura Holística? Diseño Integral para el Bienestar',
    excerpt: 'Comprende los fundamentos de la arquitectura holística y cómo integra las cuatro dimensiones del ser humano: física, emocional, mental y espiritual en el diseño de espacios.',
    image: '/images/blog/holistica-hero.jpg',
    date: '27 de Febrero, 2026',
    readTime: '12 min lectura',
    category: 'Fundamentos',
  },
];

export default function BlogPage() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Explorando la intersección entre arquitectura, bienestar y diseño consciente
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className={styles.postsSection}>
        <div className={styles.postsGrid}>
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={styles.postCard}
            >
              <div className={styles.postImage}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.separator}>·</span>
                  <time className={styles.date}>{post.date}</time>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  <span>Leer más</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
