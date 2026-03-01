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
  title = 'Ideas, inspirations, and stories behind thoughtfully designed interiors.',
  description = 'From materials to layouts, we share insights that inform and inspire better spaces.',
  posts,
}: BlogSectionProps) {
  return (
    <section className={styles.blogSection} aria-label="Blog">
      <div className={styles.content}>
        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <div>
              <div className={styles.headerContent}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} role="presentation" viewBox="0 0 24 24">
                    <path
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Blog</h2>
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>

            <Link href="/blog" className={styles.allArticlesButton}>
              <div className={styles.buttonContent}>
                <div className={styles.buttonTextWrapper}>
                  <p className={styles.buttonTitle}>All Articles</p>
                  <p className={styles.buttonDescription}>
                    A closer look at our process, ideas, and approach to modern living.
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
                  <Image
                    src="/images/holistica.jpg"
                    alt="Blog"
                    fill
                    className={styles.buttonImage}
                  />
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
                      <span>View Article</span>
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
