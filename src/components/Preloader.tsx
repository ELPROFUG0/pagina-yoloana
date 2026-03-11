'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import styles from './Preloader.module.css';

const greetings = [
  'Bienvenido',
  'Welcome',
  'Bienvenue',
  'Benvenuto',
  'ようこそ',
  'Namaste',
];

const WORD_DURATION = 2400 / greetings.length;

export default function Preloader({
  onComplete,
  onExitStart,
}: {
  onComplete: () => void;
  onExitStart?: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, WORD_DURATION);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsExiting(true);
        onExitStart?.();
      }, WORD_DURATION);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onExitStart]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isExiting && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
          className={styles.preloader}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.15, ease: 'easeInOut' }}
              className={styles.greeting}
            >
              {greetings[currentIndex]}
            </motion.span>
          </AnimatePresence>

          <motion.svg
            className={styles.curve}
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="rgb(245, 242, 238)"
              initial={{ d: 'M0 0 L0 0 Q720 600 1440 0 L1440 0 Z' }}
              exit={{ d: 'M0 0 L0 0 Q720 0 1440 0 L1440 0 Z' }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
