'use client';

import styles from './GrabovoiNumbers.module.css';

const grabovoiNumbers = [
  { number: '11981', meaning: 'Armonía' },
  { number: '419 488 71', meaning: 'Abundancia' },
  { number: '71427321893', meaning: 'Equilibrio' },
  { number: '54121381948', meaning: 'Protección' },
  { number: '91688', meaning: 'Salud' },
  { number: '741', meaning: 'Éxito' },
  { number: '8888', meaning: 'Prosperidad' },
  { number: '519 7148', meaning: 'Bienestar' },
];

export default function GrabovoiNumbers() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Números de Grabovoi</p>
      <p className={styles.description}>Secuencias numéricas para la armonización energética de tus espacios</p>

      <div className={styles.orbit}>
        <div className={styles.track}>
          {[...grabovoiNumbers, ...grabovoiNumbers].map((item, index) => (
            <div key={index} className={styles.itemWrapper}>
              <div className={styles.item}>
                <span className={styles.number}>{item.number}</span>
                <span className={styles.meaning}>{item.meaning}</span>
              </div>
              <span className={styles.dot}>●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
