'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from './Preloader';

const PAGES_WITHOUT_PRELOADER = ['/servicios', '/blog'];

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldShowPreloader = !PAGES_WITHOUT_PRELOADER.some(page => pathname.startsWith(page));

  const [showPreloader, setShowPreloader] = useState(shouldShowPreloader);
  const [contentVisible, setContentVisible] = useState(!shouldShowPreloader);

  useEffect(() => {
    if (!shouldShowPreloader) {
      setShowPreloader(false);
      setContentVisible(true);
    }
  }, [shouldShowPreloader]);

  return (
    <>
      {showPreloader && (
        <Preloader
          onComplete={() => setShowPreloader(false)}
          onExitStart={() => setContentVisible(true)}
        />
      )}
      <div style={{ opacity: contentVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        {children}
      </div>
    </>
  );
}
