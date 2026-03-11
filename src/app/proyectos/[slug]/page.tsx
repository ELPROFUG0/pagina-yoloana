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
  'casa-piedra-viva': {
    slug: 'casa-piedra-viva',
    category: 'Residencial',
    title: 'Casa Piedra Viva',
    availability: 'Completado',
    description: 'Una residencia contemporánea que fusiona piedra natural y madera para crear espacios de calidez y elegancia. El diseño aprovecha la iluminación natural a través de amplios ventanales, mientras que los acabados artesanales en piedra aportan textura y presencia. Los jardines circundantes integran la arquitectura con el paisaje.',
    mainImage: '/images/project-1.jpg',
    carouselImages: [
      '/images/project-1.jpg',
      '/images/project-2.jpg',
      '/images/project-3.jpg',
    ],
    specs: {
      year: '2024',
      dimensions: '380 m² construidos',
      materials: 'Piedra volcánica, madera de parota, cristal templado',
      production: 'CDMX, México',
    },
  },
  'casa-entre-arboles': {
    slug: 'casa-entre-arboles',
    category: 'Arquitectura Bioclimática',
    title: 'Casa Entre Árboles',
    availability: 'Completado',
    description: 'Un proyecto que respeta y se integra con la vegetación existente. La estructura escalonada permite que cada nivel tenga contacto directo con la naturaleza, mientras que las terrazas abiertas y los grandes cristales difuminan los límites entre interior y exterior. Diseño bioclimático que aprovecha la ventilación natural.',
    mainImage: '/images/project-2.jpg',
    carouselImages: [
      '/images/project-2.jpg',
      '/images/project-1.jpg',
      '/images/project-3.jpg',
    ],
    specs: {
      year: '2024',
      dimensions: '290 m² construidos',
      materials: 'Estructura metálica, cristal, madera certificada',
      production: 'Valle de Bravo, México',
    },
  },
  'espacio-artesanal': {
    slug: 'espacio-artesanal',
    category: 'Interiorismo',
    title: 'Casa Luz Natural',
    availability: 'Completado',
    description: 'Un espacio donde la luz es protagonista. El tragaluz cenital inunda de claridad la estancia principal, mientras las puertas corredizas de cristal difuminan los límites entre interior y jardín. Pisos de madera cálida, cocina integrada con isla central y una paleta de tonos neutros que invitan a la calma.',
    mainImage: '/images/project-3.jpg',
    carouselImages: [
      '/images/project-3.jpg',
      '/images/project-1.jpg',
      '/images/project-2.jpg',
    ],
    specs: {
      year: '2024',
      dimensions: '220 m² de interiores',
      materials: 'Madera de encino, cristal templado, mármol travertino',
      production: 'CDMX, México',
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

      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}
