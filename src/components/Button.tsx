import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'light' | 'dark';
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'light', onClick }: ButtonProps) {
  const className = `${styles.button} ${variant === 'dark' ? styles.dark : styles.light}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        <span className={styles.text}>{children}</span>
        <svg className={styles.arrow} viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      <span className={styles.text}>{children}</span>
      <svg className={styles.arrow} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
