import React from 'react';
import styles from './About.module.css';

// O tipo aceita as DUAS refs (para rolagem e para play)
type AboutProps = {
  videoRef: React.Ref<HTMLVideoElement>;
  containerRef: React.Ref<HTMLDivElement>;
}

export default function About({ videoRef, containerRef }: AboutProps) {

  // A função de "Play/Pause" por clique que implementamos
  const handleVideoClick = () => {
    if (videoRef && 'current' in videoRef && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section id="sobre-nos" className={styles.aboutSection}>
      <div className={styles.textContent}>
        <h2 className={styles.sectionTitle}>SOBRE NÓS</h2>
        
        {/* --- SEU NOVO TEXTO (LIMPO E EM PARÁGRAFO ÚNICO) --- */}
        <p className={styles.sectionText}>
          A Clínica Girassol Azul nasceu do desejo da excelência dedicada ao 
          cuidado humano. Excelência através da combinação de profissionais capacitados, 
          manejo multiprofissional para resolver diferentes demandas do paciente e sua família, 
          recursos tecnológicos de última geração e práticas baseadas em evidências científicas. 
          Também sabemos que suporte integral, como as terapias recomendadas para Autismo, 
          muitas vezes enfrentam empecilhos dos serviços de saúde e planos, portanto também 
          oferecemos aconselhamento jurídico para garantir seus tratamentos recomendados. 
          Cuidado que enxerga além do diagnóstico, focando na sua singularidade.
        </p>
        {/* --- FIM DO NOVO TEXTO --- */}
      </div>
      
      <div ref={containerRef} className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/videos/video-institucional.mp4" 
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-fallback.jpg"
          onClick={handleVideoClick} // A função de clique permanece
        />
      </div>
    </section>
  );
}