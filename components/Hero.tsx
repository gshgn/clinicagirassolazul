import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Vídeo de fundo - substitua 'video-bg.mp4' pelo seu vídeo */}
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-fallback.jpg" /* Imagem para carregar antes do vídeo */
      >
        <source src="/videos/video-bg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className={styles.overlay}></div>
      
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