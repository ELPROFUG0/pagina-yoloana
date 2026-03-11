import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import PageWrapper from '@/components/PageWrapper';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Loto Blanco | Arquitectura Holística',
  description: 'Estudio de arquitectura holística',
  icons: {
    icon: '/images/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll />
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
