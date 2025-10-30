import Link from 'next/link';
import styles from './Hero.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type HeroProps = {
  onCtaClick: (event: React.MouseEvent) => void;
  setActiveSection: (id: string) => void;
}

export default function Hero({ onCtaClick, setActiveSection }: HeroProps) {
  // MUDANÇA: Limiar recalibrado para 10%
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setActiveSection('inicio'); 
    }
  }, [inView, setActiveSection]);

  return (
    <section id="inicio" ref={ref} className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Excelência em cuidado multiprofissional. Foco na sua singularidade.
        </h1>
        <p className={styles.subheadline}>
          Acolhimento e atendimento para neurodivergentes (TEA, TDAH, etc) e bem-estar integral alinhados à saúde de precisão.
        </p>
        <Link 
          href="/#sobre-nos"
          className={styles.heroButton}
          onClick={onCtaClick}
        >
          Conheça a Clínica Girassol Azul
        </Link>
      </div>
    </section>
  );
}