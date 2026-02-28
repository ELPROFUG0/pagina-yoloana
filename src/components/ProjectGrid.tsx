import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectGrid.module.css';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

interface ProjectGridProps {
  title?: string;
  description?: string;
  projects: Project[];
}

export default function ProjectGrid({ title, description, projects }: ProjectGridProps) {
  return (
    <section className={styles.section}>
      {(title || description) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}

      <div className={styles.grid}>
        {projects.map((project) => (
          <Link key={project.id} href={project.href} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 809px) 100vw, (max-width: 1199px) 50vw, 33vw"
              />
              <div className={styles.overlay} />
            </div>

            <div className={styles.info}>
              <span className={styles.category}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
