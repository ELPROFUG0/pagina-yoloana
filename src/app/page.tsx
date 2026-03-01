import HeroSection from '@/components/HeroSection';
import HeroCarousel, { Slide } from '@/components/HeroCarousel';
import IntroSection from '@/components/IntroSection';
import FeaturedSection from '@/components/FeaturedSection';
import ProjectGrid, { Project, Brand } from '@/components/ProjectGrid';
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
    title: 'Mizu Storage Chest',
    category: 'Furniture',
    image: '/images/project-1.jpg',
    href: '/objects/mizu-storage-chest',
  },
  {
    id: '2',
    title: 'Sora Pendant Lamp',
    category: 'Lighting',
    image: '/images/project-2.jpg',
    href: '/objects/sora-pendant-lamp',
  },
  {
    id: '3',
    title: 'Hibi Cabinet',
    category: 'Furniture',
    image: '/images/project-3.jpg',
    href: '/objects/hibi-cabinet',
  },
];

const brands: Brand[] = [
  {
    name: 'Marca 1',
    logo: 'https://framerusercontent.com/images/rS1qYXMXwHsXXEoBkpWgE06wN4U.svg',
    width: 188,
    height: 48,
  },
  {
    name: 'Marca 2',
    logo: 'https://framerusercontent.com/images/H2wXOYXRTXqbDD6nOfOUiMJ5LM.svg',
    width: 219,
    height: 48,
  },
  {
    name: 'Marca 3',
    logo: 'https://framerusercontent.com/images/UqGYwrmovtTKkqW7eYK3rFNmLA0.svg',
    width: 145,
    height: 48,
  },
  {
    name: 'Marca 4',
    logo: 'https://framerusercontent.com/images/aUqibLN8aNJI9vZgAVttSMVQlA.svg',
    width: 177,
    height: 48,
  },
  {
    name: 'Marca 5',
    logo: 'https://framerusercontent.com/images/H0KKUTpHfFG6WGbKSRSsycow5o.svg',
    width: 221,
    height: 48,
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
    icon: '/images/Mail-Featured-image.png',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/yoloana',
    href: 'https://linkedin.com/company/yoloana',
    icon: '/images/text-to-png-630ca410-5675-45ac-8015-1f1dc15b7d48.png',
  },
  {
    label: 'Linktree',
    value: 'linktr.ee/yoloana',
    href: 'https://linktr.ee/yoloana',
    icon: '/images/linktree.webp',
  },
  {
    label: 'Nuestros productos',
    value: 'Ver catálogo',
    href: '/productos',
    icon: '/images/shopify.png',
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
      <HeroSection
        title="Espacios que Transforman Vidas"
        buttonText="Conoce más"
        buttonLink="/contacto"
        image="/images/slide-2.jpg"
      />

      <IntroSection
        title="Presentamos YOLOANA Estudio"
        paragraphs={[
          'Arraigado en las tradiciones de la arquitectura contemporánea, YOLOANA nace de un profundo respeto por la artesanía y los materiales atemporales. Honramos el patrimonio arquitectónico combinando técnicas probadas con simplicidad moderna.',
          'Cada proyecto que creamos lleva el espíritu de la elegancia discreta: una elegancia subestimada que se encuentra en el equilibrio de forma, función y naturaleza. Nuestra misión es crear espacios que inviten a la calma, la reflexión y la presencia duradera en la vida cotidiana.',
        ]}
        buttonText="Descubre nuestro estudio"
        buttonLink="/estudio"
      />

      <ProjectGrid
        title="Proyectos Destacados"
        description="Una selección de nuestros trabajos más recientes en arquitectura residencial, comercial e interiorismo."
        projects={projects}
        brands={brands}
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
        description="Arquitecta mexicana con profunda pasión por el mundo sutil. Formada en arquitectura holística con Jacqueline Santiago, pionera en este enfoque. Mi vocación es acompañar a las personas a habitar plenamente sus espacios, integrando sabiduría ancestral y diseño consciente. Aunque el Feng Shui Clásico ha sido desplazado por prácticas modernas, sigo creyendo en su poder para reconectar con el equilibrio profundo. Es un honor caminar contigo en este viaje."
        badges={[
          { text: 'Arquitectura Holística', rotation: -4 },
          { text: 'Feng Shui Clásico', rotation: 9 },
          { text: 'Diseño Consciente', rotation: -15 },
          { text: 'Sabiduría Ancestral', rotation: 7 },
          { text: 'Espacios Armónicos', rotation: -10 },
          { text: 'Interiorismo', rotation: -9 },
          { text: 'Consultoría', rotation: -7 },
          { text: 'Diseño Bioclimático', rotation: 3 },
        ]}
      />

      <FAQSection faqs={faqs} />

      <ContactSection links={contactLinks} image="/images/yolo.png" />
    </main>
  );
}
