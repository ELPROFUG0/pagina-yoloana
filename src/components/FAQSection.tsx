'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './FAQSection.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQ[];
  image?: string;
}

export default function FAQSection({
  title = 'Preguntas Frecuentes',
  description = '',
  faqs,
  image,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? openIndex : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <svg className={styles.icon} role="presentation" viewBox="0 0 25 25">
            <path
              d="M12.5 2L2 7.5v10l10.5 5.5L23 17.5v-10L12.5 2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <ul className={styles.faqList}>
            {faqs.map((faq, index) => (
              <li key={index} className={styles.faqItem}>
                <div
                  className={`${styles.faqButton} ${
                    openIndex === index ? styles.open : styles.closed
                  }`}
                  onClick={() => toggleFAQ(index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={openIndex === index}
                >
                  <div className={styles.questionWrapper}>
                    <p className={styles.question}>{faq.question}</p>
                    <div
                      className={`${styles.toggleIcon} ${
                        openIndex === index ? styles.iconOpen : ''
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <div className={styles.answer}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {image && (
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={image}
                alt="FAQ"
                fill
                className={styles.image}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
