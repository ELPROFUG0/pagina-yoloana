import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPost.module.css';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: React.ReactNode;
  relatedPosts?: Array<{
    id: string;
    title: string;
    image: string;
    date: string;
  }>;
}

export default function BlogPost({
  title,
  date,
  author,
  readTime,
  image,
  content,
  relatedPosts
}: BlogPostProps) {
  return (
    <article className={styles.article}>
      {/* Hero Image */}
      <div className={styles.heroImage}>
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Article Header */}
      <header className={styles.header}>
        <div className={styles.meta}>
          <time className={styles.date}>{date}</time>
          <span className={styles.separator}>·</span>
          <span className={styles.readTime}>{readTime}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.author}>Por {author}</p>
      </header>

      {/* Article Content */}
      <div className={styles.content}>
        {content}
      </div>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <aside className={styles.relatedPosts}>
          <h2 className={styles.relatedTitle}>Artículos Relacionados</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className={styles.relatedCard}>
                <div className={styles.relatedImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.relatedInfo}>
                  <time className={styles.relatedDate}>{post.date}</time>
                  <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      )}

      {/* Back to Blog */}
      <div className={styles.backLink}>
        <Link href="/blog">← Volver al Blog</Link>
      </div>
    </article>
  );
}
