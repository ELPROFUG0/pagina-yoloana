import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'YOLOANA Arquitectura',
  description: 'Estudio de arquitectura contemporánea',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
