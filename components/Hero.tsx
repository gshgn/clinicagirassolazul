import Link from 'next/link';
import styles from './Hero.module.css';

// 1. MUDANÇA: O tipo agora aceita um "MouseEvent"
type HeroProps = {
  onCtaClick: (event: React.MouseEvent) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Excelência em cuidado multiprofissional. Foco na sua singularidade.
        </h1>
        <p className={styles.subheadline}>
          Acolhimento e atendimento para neurodivergentes (TEA, TDAH, etc) e bem-estar integral alinhados à saúde de precisão.
        </p>
        
        <Link 
          href="/#sobre-nos" // O href ainda é bom como fallback
          className={styles.heroButton}
          onClick={onCtaClick} // 2. MUDANÇA: A função agora passa o evento (e)
        >
          Conheça a Clínica Girassol Azul
        </Link>
      </div>
    </section>
  );
}