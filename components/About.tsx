import React from 'react';
import styles from './About.module.css';

// 1. O tipo aceita as DUAS refs
type AboutProps = {
  videoRef: React.Ref<HTMLVideoElement>;
  containerRef: React.Ref<HTMLDivElement>; // A nova ref para o container
}

export default function About({ videoRef, containerRef }: AboutProps) {
  return (
    <section id="sobre-nos" className={styles.aboutSection}>
      <div className={styles.textContent}>
        <h2 className={styles.sectionTitle}>SOBRE NÓS</h2>
        
        {/* SEU NOVO BLOCO DE TEXTO ATUALIZADO */}
        <p className={styles.sectionText}>
          A Clínica Girassol Azul nasceu do desejo da excelência dedicada ao 
          cuidado humano. Excelência através da combinação de profissionais capacitados, 
          manejo multiprofissional para resolver diferentes demandas do paciente e sua família, 
          recursos tecnológicos de última geração e práticas baseadas em evidências científicas. 
          Cuidado que enxerga além do diagnóstico, focando na sua singularidade.
        </p>
      </div>
      
      {/* A ref do container é anexada aqui */}
      <div ref={containerRef} className={styles.videoContainer}>
        <video
          ref={videoRef} // A ref do vídeo (para o play) continua aqui
          className={styles.video}
          src="/videos/video-institucional.mp4" 
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-fallback.jpg"
        />
      </div>
    </section>
  );
}