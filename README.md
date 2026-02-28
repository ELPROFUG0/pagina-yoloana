# YOLOANA Arquitectura

Sitio web de arquitectura contemporánea construido con Next.js y React, inspirado en diseño minimalista japonés.

## Características

- ✨ Diseño minimalista inspirado en estética japonesa
- 🎨 Navegación con brackets interactivos
- 🖼️ Carrusel de imágenes a pantalla completa con autoplay
- 📱 Totalmente responsive (Desktop, Tablet, Mobile)
- ⚡ Construido con Next.js 16 y React 19
- 🎯 TypeScript para seguridad de tipos
- 🎨 CSS Modules para estilos encapsulados

## Estructura del Proyecto

```
.
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   ├── proyectos/         # Página de proyectos
│   │   ├── estudio/           # Página del estudio
│   │   ├── metodo/            # Página del método
│   │   └── contacto/          # Página de contacto
│   ├── components/            # Componentes reutilizables
│   │   ├── Navigation.tsx     # Navegación principal
│   │   ├── HeroCarousel.tsx   # Carrusel hero
│   │   └── Button.tsx         # Componente de botón
│   └── styles/                # Estilos globales
│       └── globals.css
├── public/
│   └── images/                # Imágenes estáticas
└── package.json
```

## Empezar

### Instalación

```bash
npm install
```

### Agregar Imágenes

Coloca tus imágenes en `public/images/`:
- `slide-1.jpg` - Primera imagen del carrusel
- `slide-2.jpg` - Segunda imagen del carrusel
- `slide-3.jpg` - Tercera imagen del carrusel

Las imágenes recomendadas deben ser de alta resolución (mínimo 1920x1080px).

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## Personalización

### Colores

Edita las variables CSS en `src/styles/globals.css`:

```css
:root {
  --color-bg: rgb(245, 242, 238);        /* Fondo beige */
  --color-text: rgb(51, 48, 42);         /* Texto oscuro */
  --color-text-light: rgb(245, 242, 238); /* Texto claro */
}
```

### Slides del Carrusel

Edita el array `slides` en `src/app/page.tsx`:

```typescript
const slides: Slide[] = [
  {
    image: '/images/slide-1.jpg',
    tagline: 'Tu tagline',
    title: 'Tu título',
    description: 'Tu descripción',
    buttonText: 'Texto del botón',
    buttonLink: '/tu-enlace',
  },
  // ... más slides
];
```

### Navegación

Edita los enlaces en `src/components/Navigation.tsx`:

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/proyectos', label: 'Proyectos' },
  // ... más enlaces
];
```

## Breakpoints Responsive

- **Desktop**: ≥1200px
- **Tablet**: 810px - 1199px
- **Mobile**: ≤809px

## Tecnologías

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules

## Licencia

MIT
