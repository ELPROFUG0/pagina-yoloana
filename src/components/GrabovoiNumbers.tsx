'use client';

import styles from './GrabovoiNumbers.module.css';

const grabovoiNumbers = [
  '11981',
  '419 488 71',
  '71427321893',
  '54121381948',
  '91688',
  '741',
  '8888',
  '519 7148',
];

export default function GrabovoiNumbers() {
  return (
    <section className={styles.section}>
      <div className={styles.orbit}>
        <div className={styles.track}>
          {[...grabovoiNumbers, ...grabovoiNumbers].map((number, index) => (
            <div key={index} className={styles.itemWrapper}>
              <span className={styles.number}>{number}</span>
              <span className={styles.dot}>●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
