import HeroCarousel, { Slide } from '@/components/HeroCarousel';

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

export default function Home() {
  return (
    <main>
      <HeroCarousel slides={slides} />
    </main>
  );
}
