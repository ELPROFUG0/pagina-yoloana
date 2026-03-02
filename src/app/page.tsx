import HeroSection from '@/components/HeroSection';
import HeroCarousel, { Slide } from '@/components/HeroCarousel';
import IntroSection from '@/components/IntroSection';
import ProjectGrid, { Project, Brand } from '@/components/ProjectGrid';
import ProfileSection from '@/components/ProfileSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ScrollReveal from '@/components/ScrollReveal';
import testimonialsStyles from '@/components/TestimonialsSection.module.css';
import profileStyles from '@/components/ProfileSection.module.css';

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
    description: 'Loto Blanco comenzó como una forma de preservar los valores del oficio, la familia y la forma. Continúa de la misma manera hoy.',
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
    category: 'Muebles',
    image: '/images/project-1.jpg',
    href: '/proyectos/mizu-storage-chest',
  },
  {
    id: '2',
    title: 'Sora Pendant Lamp',
    category: 'Iluminación',
    image: '/images/project-2.jpg',
    href: '/proyectos/sora-pendant-lamp',
  },
  {
    id: '3',
    title: 'Hibi Cabinet',
    category: 'Muebles',
    image: '/images/project-3.jpg',
    href: '/proyectos/hibi-cabinet',
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

const blogPosts = [
  {
    id: '1',
    title: '¿Qué es la Arquitectura Holística?',
    description: 'Integra cuerpo, mente y espíritu para crear espacios que nutren tu bienestar.',
    date: '27 de Febrero, 2026',
    readTime: '12 min lectura',
    image: '/images/blog/holistica-hero.jpg',
    href: '/blog/que-es-arquitectura-holistica',
  },
];

const testimonials = [
  {
    id: '1',
    text: (
      <>
        Trabajar con Loto Blanco <span className={testimonialsStyles.highlight}>transformó completamente mi hogar</span>. Profesionalismo excepcional y resultados impecables.
      </>
    ),
    name: 'María González',
    company: 'Cliente Residencial',
  },
  {
    id: '2',
    text: (
      <>
        <span className={testimonialsStyles.highlight}>El equilibrio perfecto entre funcionalidad y diseño</span>. Superaron todas nuestras expectativas.
      </>
    ),
    name: 'Carlos Ramírez',
    company: 'Proyecto Comercial',
  },
  {
    id: '3',
    text: (
      <>
        Una experiencia única. <span className={testimonialsStyles.highlight}>La sensibilidad y atención al detalle son excepcionales</span>.
      </>
    ),
    name: 'Ana Martínez',
    company: 'Renovación Integral',
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'contacto@lotoblancoarq.com',
    href: 'mailto:contacto@lotoblancoarq.com',
    icon: '/images/Mail-Featured-image.png',
  },
  {
    label: 'WhatsApp',
    value: '+52 55 4887 3683',
    href: 'https://wa.me/525548873683',
    icon: '/images/text-to-png-630ca410-5675-45ac-8015-1f1dc15b7d48.png',
  },
  {
    label: 'Instagram',
    value: '@loto_blanco_arq',
    href: 'https://www.instagram.com/loto_blanco_arq',
    icon: '/images/linktree.webp',
  },
  {
    label: 'Linktree',
    value: 'linktr.ee/LotoBlanco.Arq',
    href: 'https://linktr.ee/LotoBlanco.Arq',
    icon: '/images/linktree.webp',
  },
  {
    label: 'Nuestros productos',
    value: 'Ver catálogo',
    href: '/productos',
    icon: '/images/shopify.png',
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection
        title="Espacios que Transforman Vidas"
        buttonText="Conoce más"
        buttonLink="/contacto"
        image="/images/loto.jpg"
      />

      <ScrollReveal>
        <IntroSection
          title="Presentamos Loto Blanco"
          paragraphs={[
            'Arraigado en las tradiciones de la arquitectura contemporánea, Loto Blanco nace de un profundo respeto por la artesanía y los materiales atemporales. Honramos el patrimonio arquitectónico combinando técnicas probadas con simplicidad moderna.',
            'Cada proyecto que creamos lleva el espíritu de la elegancia discreta: una elegancia subestimada que se encuentra en el equilibrio de forma, función y naturaleza. Nuestra misión es crear espacios que inviten a la calma, la reflexión y la presencia duradera en la vida cotidiana.',
          ]}
          buttonText="Descubre nuestro estudio"
          buttonLink="/estudio"
        />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div id="proyectos">
          <ProjectGrid
            title="Proyectos Destacados"
            description="Una selección de nuestros trabajos más recientes en arquitectura residencial, comercial e interiorismo."
            projects={projects}
            brands={brands}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div id="estudio">
          <ProfileSection
            image="/images/yolo.png"
            description={
              <>
                Arquitecta mexicana con profunda pasión por el mundo sutil. Formada en <span className={profileStyles.highlight}>arquitectura holística</span> con Jacqueline Santiago, pionera en este enfoque. Mi vocación es acompañar a las personas a habitar plenamente sus espacios, integrando <span className={profileStyles.highlight}>sabiduría ancestral</span> y <span className={profileStyles.highlight}>diseño consciente</span>. Aunque el <span className={profileStyles.highlight}>Feng Shui Clásico</span> ha sido desplazado por prácticas modernas, sigo creyendo en su poder para reconectar con el equilibrio profundo. Especializada en <span className={profileStyles.highlight}>interiorismo</span>, <span className={profileStyles.highlight}>consultoría</span> y <span className={profileStyles.highlight}>diseño bioclimático</span> para crear <span className={profileStyles.highlight}>espacios armónicos</span>. Es un honor caminar contigo en este viaje.
              </>
            }
          />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div id="faqs">
          <FAQSection faqs={faqs} image="/images/holistica.jpg" />
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <TestimonialsSection testimonials={testimonials} />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <BlogSection posts={blogPosts} />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div id="contacto">
          <ContactSection links={contactLinks} image="/images/yolo.png" />
        </div>
      </ScrollReveal>
    </main>
  );
}
