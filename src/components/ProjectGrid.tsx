import Image from 'next/image';
import Link from 'next/link';
import BrandsCarousel from './BrandsCarousel';
import styles from './ProjectGrid.module.css';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

interface ProjectGridProps {
  title?: string;
  description?: string;
  projects: Project[];
  brands?: Brand[];
}

export default function ProjectGrid({ title, description, projects, brands }: ProjectGridProps) {
  return (
    <section className={styles.section}>
      {(title || description) && (
        <div className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              {title && <h2 className={styles.title}>{title}</h2>}
            </div>
            <div className={styles.descriptionWrapper}>
              {description && <p className={styles.description}>{description}</p>}
              {brands && brands.length > 0 && (
                <div className={styles.brandsWrapper}>
                  <BrandsCarousel brands={brands} />
                </div>
              )}
            </div>
          </div>
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
