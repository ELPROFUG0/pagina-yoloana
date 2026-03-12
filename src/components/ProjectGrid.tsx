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
  const firstTwo = projects.slice(0, 2);
  const third = projects[2];

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

      <div className={styles.objectsContainer}>
        {firstTwo.map((project) => (
          <div key={project.id} className={styles.objectItem}>
            <Link href={project.href} className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.imageInner}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 809px) 100vw, 33vw"
                    loading="eager"
                  />
                </div>
              </div>

              <div className={styles.info}>
                <h5 className={styles.category}>{project.category}</h5>
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>
            </Link>
          </div>
        ))}

        {third && (
          <div className={styles.objectItemTall}>
            <Link href={third.href} className={styles.card}>
              <div className={styles.imageContainer}>
                <div className={styles.imageInner}>
                  <Image
                    src={third.image}
                    alt={third.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 809px) 100vw, 33vw"
                    loading="eager"
                  />
                </div>
              </div>

              <div className={styles.info}>
                <h5 className={styles.category}>{third.category}</h5>
                <h2 className={styles.projectTitle}>{third.title}</h2>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
