import HeroCarousel, { Slide } from '@/components/HeroCarousel';
import IntroSection from '@/components/IntroSection';
import FeaturedSection from '@/components/FeaturedSection';
import ProjectGrid, { Project } from '@/components/ProjectGrid';
import ProfileSection from '@/components/ProfileSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

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

const faqs = [
  {
    question: '¿Cuál es su proceso de diseño típico?',
    answer:
      'Nuestro proceso comienza con una consulta inicial para entender sus necesidades y visión. Luego desarrollamos conceptos preliminares, refinamos el diseño con su retroalimentación, y finalmente creamos documentación detallada para la construcción.',
  },
  {
    question: '¿Cuánto tiempo suele tomar un proyecto?',
    answer:
      'El tiempo varía según la escala y complejidad del proyecto. Un proyecto residencial típico puede tomar de 6 a 12 meses desde el concepto inicial hasta la finalización de la construcción.',
  },
  {
    question: '¿También manejan el desarrollo?',
    answer:
      'Sí, trabajamos con una red de constructores y artesanos de confianza. Supervisamos todo el proceso de construcción para asegurar que el diseño se ejecute según los más altos estándares.',
  },
  {
    question: '¿Pueden ayudarnos con nuestro pitch deck?',
    answer:
      'Absolutamente. Ofrecemos servicios de visualización arquitectónica y presentaciones profesionales que comunican efectivamente su visión a inversionistas y stakeholders.',
  },
  {
    question: '¿Cómo empezamos?',
    answer:
      'Simplemente contáctenos a través de nuestro formulario o por teléfono para agendar una consulta inicial. Discutiremos su proyecto, cronograma y presupuesto para determinar los mejores próximos pasos.',
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'hola@yoloana.com',
    href: 'mailto:hola@yoloana.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/yoloana',
    href: 'https://linkedin.com/company/yoloana',
  },
  {
    label: 'Linktree',
    value: 'linktr.ee/yoloana',
    href: 'https://linktr.ee/yoloana',
  },
  {
    label: 'Website',
    value: 'yoloana.com',
    href: 'https://yoloana.com',
  },
];

export default function Home() {
  return (
    <main>
      <HeroCarousel slides={slides} />

      <IntroSection
        title="Presentamos YOLOANA Estudio"
        paragraphs={[
          'Arraigado en las tradiciones de la arquitectura contemporánea, YOLOANA nace de un profundo respeto por la artesanía y los materiales atemporales. Honramos el patrimonio arquitectónico combinando técnicas probadas con simplicidad moderna.',
          'Cada proyecto que creamos lleva el espíritu de la elegancia discreta: una elegancia subestimada que se encuentra en el equilibrio de forma, función y naturaleza. Nuestra misión es crear espacios que inviten a la calma, la reflexión y la presencia duradera en la vida cotidiana.',
        ]}
        buttonText="Descubre nuestro estudio"
        buttonLink="/estudio"
      />

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

      <ProfileSection
        image="/images/yolo.png"
        description="Arquitecta mexicana especializada en diseño holístico. Formada con Jacqueline Santiago, fusiono sabiduría ancestral y arquitectura consciente para crear espacios que nutren el alma. Creo en el poder del Feng Shui Clásico para reconectar con el equilibrio profundo de nuestros entornos. Un honor acompañarte en este viaje hacia la armonía."
      />

      <FAQSection faqs={faqs} />

      <ContactSection links={contactLinks} />
    </main>
  );
}
