import React from 'react';
import styles from './About.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type AboutProps = {
  videoRef: React.Ref<HTMLVideoElement>;
  containerRef: React.Ref<HTMLDivElement>;
  setActiveSection: (id: string) => void;
}

export default function About({ videoRef, containerRef, setActiveSection }: AboutProps) {
  const { ref, inView } = useInView({ threshold: 0.1 }); // Usando o threshold correto de 10%

  useEffect(() => {
    if (inView) {
      setActiveSection('sobre-nos');
    }
  }, [inView, setActiveSection]);

  const handleVideoClick = () => {
    // ... (função de clique do vídeo permanece idêntica) ...
    if (videoRef && 'current' in videoRef && videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  };

  return (
    <section id="sobre-nos" ref={ref} className={styles.aboutSection}>
      <div className={styles.textContent}>
        <h2 className={styles.sectionTitle}>SOBRE NÓS</h2>
        <p className={styles.sectionText}>
          A Clínica Girassol Azul nasceu do desejo da excelência dedicada ao 
          cuidado humano. Excelência através da combinação de profissionais capacitados, 
          manejo multiprofissional para resolver diferentes demandas do paciente e sua família, 
          recursos tecnológicos de última geração e práticas baseadas em evidências científicas. 
          Também sabemos que suporte integral, como as terapias recomendadas para Autismo, 
          muitas vezes enfrentam empecilhos dos serviços de saúde e planos, portanto também 
          oferecemos aconselhamento jurídico para garantir seus tratamentos recomendados. 
          Cuidado além do diagnóstico, focando na sua singularidade.
        </p>
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
          onClick={handleVideoClick}
          /* A linha "loading=lazy" foi removida */
        />
      </div>
    </section>
  );
}