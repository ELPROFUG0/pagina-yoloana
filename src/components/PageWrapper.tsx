'use client';

import { useState } from 'react';
import Preloader from './Preloader';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

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
