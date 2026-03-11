'use client';

import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

interface Testimonial {
  id: string;
  text: React.ReactNode;
  name: string;
  company: string;
  image?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.content}>
        <div className={styles.headerText}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>Testimonials</h2>
          </div>
          <h3 className={styles.title}>Client Highlights</h3>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>{testimonial.text}</p>
              </div>
              <div className={styles.imageNameCompany}>
                <div className={styles.profileImage}>
                  {testimonial.image && (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className={styles.nameCompany}>
                  <p className={styles.clientName}>{testimonial.name}</p>
                  <p className={styles.clientCompany}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
