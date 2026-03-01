import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';
import ImageCarousel from '@/components/ImageCarousel';

interface ProjectDetailData {
  slug: string;
  category: string;
  title: string;
  availability: string;
  description: string;
  mainImage: string;
  carouselImages: string[];
  specs: {
    edition?: string;
    year?: string;
    dimensions?: string;
    materials?: string;
    production?: string;
  };
}

const projectsData: { [key: string]: ProjectDetailData } = {
  'mizu-storage-chest': {
    slug: 'mizu-storage-chest',
    category: 'Muebles',
    title: 'Mizu Storage Chest',
    availability: 'Disponible',
    description: 'Un cofre diseñado para la presencia tranquila. Mizu combina madera maciza con herrajes minimalistas, permitiendo que su entorno permanezca en foco. La forma se reduce a lo esencial, con cada detalle formado para servir el equilibrio entre funcionalidad y estética.',
    mainImage: '/images/project-1.jpg',
    carouselImages: [
      '/images/project-1.jpg',
      '/images/project-2.jpg',
      '/images/project-3.jpg',
    ],
    specs: {
      edition: '120 piezas',
      year: '2025',
      dimensions: '120 cm × 45 cm × 80 cm',
      materials: 'Madera de roble maciza, acabado a mano, herrajes de bronce',
      production: 'Hecho en México',
    },
  },
  'sora-pendant-lamp': {
    slug: 'sora-pendant-lamp',
    category: 'Iluminación',
    title: 'Sora Pendant Lamp',
    availability: 'Disponible',
    description: 'Una lámpara colgante diseñada para la presencia tranquila. Sora proyecta una luz suave y descendente, permitiendo que su entorno permanezca en foco. La forma se reduce a lo esencial, con cada detalle formado para servir el equilibrio entre metal y madera.',
    mainImage: '/images/project-2.jpg',
    carouselImages: [
      '/images/project-2.jpg',
      '/images/project-1.jpg',
      '/images/project-3.jpg',
    ],
    specs: {
      edition: '120 piezas',
      year: '2025',
      dimensions: 'Ø 28 cm × H 22 cm',
      materials: 'Pantalla de aluminio cepillado, roble acabado a mano, cable cubierto de tela',
      production: 'Hecho en México',
    },
  },
  'hibi-cabinet': {
    slug: 'hibi-cabinet',
    category: 'Muebles',
    title: 'Hibi Cabinet',
    availability: 'Disponible',
    description: 'Un gabinete minimalista que honra la tradición del diseño japonés. Hibi combina líneas limpias con artesanía excepcional, creando un mueble que se integra perfectamente en espacios contemporáneos mientras mantiene un profundo respeto por los materiales naturales.',
    mainImage: '/images/project-3.jpg',
    carouselImages: [
      '/images/project-3.jpg',
      '/images/project-1.jpg',
      '/images/project-2.jpg',
    ],
    specs: {
      edition: '80 piezas',
      year: '2025',
      dimensions: '90 cm × 40 cm × 120 cm',
      materials: 'Nogal macizo, puertas corredizas de papel washi, acabado natural',
      production: 'Hecho en México',
    },
  },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className={styles.notFound}>
        <h1>Proyecto no encontrado</h1>
        <Link href="/#proyectos">Volver a proyectos</Link>
      </main>
    );
  }

  return (
    <main className={styles.projectDetail}>
      <div className={styles.container}>
        <Link href="/#proyectos" className={styles.backLink}>
          ← Volver a proyectos
        </Link>

        <div className={styles.mainContent}>
          <div className={styles.leftColumn}>
            <div className={styles.categoryTitle}>
              <p className={styles.category}>{project.category}</p>
              <p className={styles.separator}>|</p>
              <p className={styles.availability}>{project.availability}</p>
            </div>

            <h1 className={styles.title}>{project.title}</h1>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.specs}>
              {project.specs.edition && (
                <div className={styles.specItem}>
                  <h3>Edición</h3>
                  <p>{project.specs.edition}</p>
                </div>
              )}
              {project.specs.year && (
                <div className={styles.specItem}>
                  <h3>Año</h3>
                  <p>{project.specs.year}</p>
                </div>
              )}
              {project.specs.dimensions && (
                <div className={styles.specItem}>
                  <h3>Dimensiones</h3>
                  <p>{project.specs.dimensions}</p>
                </div>
              )}
              {project.specs.materials && (
                <div className={styles.specItem}>
                  <h3>Materiales</h3>
                  <p>{project.specs.materials}</p>
                </div>
              )}
              {project.specs.production && (
                <div className={styles.specItem}>
                  <h3>Producción</h3>
                  <p>{project.specs.production}</p>
                </div>
              )}
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.carouselSection}>
          <ImageCarousel images={project.carouselImages} />
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}
