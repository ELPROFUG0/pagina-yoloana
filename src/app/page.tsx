import HeroCarousel, { Slide } from '@/components/HeroCarousel';
import FeaturedSection from '@/components/FeaturedSection';
import ProjectGrid, { Project } from '@/components/ProjectGrid';

const slides: Slide[] = [
  {
    image: '/images/slide-1.jpg',
    tagline: 'Diseño considerado',
    title: 'Espacios para una vida reflexiva',
    description: 'Cada proyecto está concebido con atención al detalle, diseñado para servir la vida cotidiana sin excesos.',
    buttonText: 'Descubre nuestros proyectos',
    buttonLink: '/proyectos',
  },
  {
    image: '/images/slide-2.jpg',
    tagline: 'Arquitectura contemporánea',
    title: 'Un estudio con profundas raíces',
    description: 'YOLOANA comenzó como una forma de preservar los valores del oficio, la familia y la forma. Continúa de la misma manera hoy.',
    buttonText: 'Conoce nuestra historia',
    buttonLink: '/estudio',
  },
  {
    image: '/images/slide-3.jpg',
    tagline: 'Construido con cuidado',
    title: 'Colaboración con artesanos locales',
    description: 'Trabajamos estrechamente con talleres selectos. Cada proyecto se construye con un alto estándar, con profundo respeto por los materiales.',
    buttonText: 'Explora nuestro método',
    buttonLink: '/metodo',
  },
];

const projects: Project[] = [
  {
    id: '1',
    title: 'Casa Mediterránea',
    category: 'Residencial',
    image: '/images/project-1.jpg',
    href: '/proyectos/casa-mediterranea',
  },
  {
    id: '2',
    title: 'Estudio Urbano',
    category: 'Comercial',
    image: '/images/project-2.jpg',
    href: '/proyectos/estudio-urbano',
  },
  {
    id: '3',
    title: 'Villa Contemporánea',
    category: 'Residencial',
    image: '/images/project-3.jpg',
    href: '/proyectos/villa-contemporanea',
  },
  {
    id: '4',
    title: 'Espacio Minimalista',
    category: 'Interiorismo',
    image: '/images/project-4.jpg',
    href: '/proyectos/espacio-minimalista',
  },
  {
    id: '5',
    title: 'Casa de Campo',
    category: 'Residencial',
    image: '/images/project-5.jpg',
    href: '/proyectos/casa-campo',
  },
  {
    id: '6',
    title: 'Loft Industrial',
    category: 'Interiorismo',
    image: '/images/project-6.jpg',
    href: '/proyectos/loft-industrial',
  },
];

export default function Home() {
  return (
    <main>
      <HeroCarousel slides={slides} />

      <FeaturedSection
        tagline="Nuestra filosofía"
        title="Diseño que respeta el entorno"
        description="Cada proyecto nace del diálogo entre el espacio, la luz y los materiales. Creamos arquitectura que honra su contexto, integrándose naturalmente en el paisaje mientras define su propia identidad."
        image="/images/featured-1.jpg"
        imageAlt="Arquitectura integrada en el entorno"
        link={{
          href: '/estudio',
          text: 'Conoce más sobre nosotros',
        }}
      />

      <ProjectGrid
        title="Proyectos Destacados"
        description="Una selección de nuestros trabajos más recientes en arquitectura residencial, comercial e interiorismo."
        projects={projects}
      />

      <FeaturedSection
        tagline="Nuestro proceso"
        title="Del concepto a la realidad"
        description="Trabajamos de cerca con cada cliente para entender sus necesidades y aspiraciones. Nuestro proceso combina creatividad, precisión técnica y atención meticulosa al detalle en cada fase del proyecto."
        image="/images/featured-2.jpg"
        imageAlt="Proceso de diseño arquitectónico"
        reverse
        link={{
          href: '/metodo',
          text: 'Descubre nuestro método',
        }}
      />
    </main>
  );
}
