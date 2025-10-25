import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Excelência em Cuidado Multiprofissional. 
          Foco na sua Singularidade.
        </h1>
        <p className={styles.subheadline}>
          Abordagens de ponta para neurodiversidade (TEA, TDAH) e bem-estar 
          integral em um ambiente de acolhimento e precisão.
        </p>
        <Link href="/servicos" className={styles.heroButton}>
          Conheça Nossos Serviços
        </Link>
      </div>
    </section>
  );
}