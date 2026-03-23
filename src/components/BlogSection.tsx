'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

interface BlogSectionProps {
  title?: string;
  description?: string;
  posts: BlogPost[];
}

export default function BlogSection({
  title = 'Ideas, inspiraciones e historias detrás de interiores diseñados con cuidado.',
  description = 'Desde materiales hasta distribuciones, compartimos ideas que informan e inspiran mejores espacios.',
  posts,
}: BlogSectionProps) {
  return (
    <section className={styles.blogSection} aria-label="Blog">
      <div className={styles.content}>
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <div>
              <div className={styles.headerContent}>
                <h2 className={styles.sectionTitle}>Blog</h2>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>

            <Link href="/blog" className={styles.allArticlesButton}>
              <div className={styles.buttonContent}>
                <div className={styles.buttonTextWrapper}>
                  <p className={styles.buttonTitle}>Todos los Artículos</p>
                  <p className={styles.buttonDescription}>
                    Una mirada más cercana a nuestro proceso, ideas y enfoque de vida moderna.
                  </p>
                </div>
                <div className={styles.buttonArrow}>
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M5 12h14m-7-7l7 7-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.buttonImageContainer}>
                <div className={styles.buttonImageWrapper}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/images/holistica.jpg"
                      alt="Blog"
                      fill
                      className={styles.buttonImage}
                    />
                    <div className={styles.imageMask}></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.rightColumn}>
            {posts.map((post) => (
              <Link key={post.id} href={post.href} className={styles.postCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.postImage}
                  />
                  <div className={styles.imageMask}></div>
                </div>

                <div className={styles.badges}>
                  <div className={styles.dateBadge}>
                    <p>{post.date}</p>
                  </div>
                  <div className={styles.readTimeBadge}>
                    <p>{post.readTime}</p>
                  </div>
                </div>

                <div className={styles.postContent}>
                  <div className={styles.textWrapper}>
                    <h4 className={styles.postTitle}>{post.title}</h4>
                    <p className={styles.postDescription}>{post.description}</p>
                  </div>

                  <div className={styles.viewAction}>
                    <div className={styles.viewButton}>
                      <span>Ver Artículo</span>
                    </div>
                    <div className={styles.arrow}>
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M5 12h14m-7-7l7 7-7 7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
