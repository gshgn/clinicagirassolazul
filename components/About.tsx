import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    // O 'id' é a âncora para o link do menu
    <section id="sobre-nos" className={styles.aboutSection}>
      <div className={styles.textContent}>
        <h2 className={styles.sectionTitle}>SOBRE NÓS</h2>
        <p className={styles.sectionText}>
          A Clínica Girassol Azul é um centro de excelência dedicado ao 
          desenvolvimento humano em sua plenitude. Nascemos do desejo de 
          oferecer um cuidado que enxerga além do diagnóstico, focando na 
          singularidade de cada indivíduo.
        </p>
        <p className={styles.sectionText}>
          Nossa abordagem multiprofissional integrada garante que 
          nossos especialistas em neurologia, psicologia, fonoaudiologia e 
          terapia ocupacional trabalhem em conjunto, criando um plano 
          terapêutico unificado e coeso para pacientes neurodivergentes e 
          suas famílias.
        </p>
      </div>
      
      <div className={styles.videoContainer}>
        {/* Substitua pelo seu vídeo institucional */}
        <video
          className={styles.video}
          src="/videos/video-institucional.mp4" 
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-fallback.jpg" // Imagem de capa
        />
      </div>
    </section>
  );
}