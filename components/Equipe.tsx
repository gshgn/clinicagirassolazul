import React, { useState, useEffect } from 'react'; // 1. IMPORTAMOS O useState
import Image from 'next/image';
import styles from './Equipe.module.css';
import { useInView } from 'react-intersection-observer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper'; // 2. Importamos o "tipo" do Swiper

// (O seu array 'professionals' permanece idêntico ao da Ação 72)
const professionals = [
  { name: 'Luciana Baldino Lages', title: 'MÉDICA | CRM-RS 20.146', bio: 'Pediatra RQE 44598. Especialista em Saúde da Família. Especialista em Nutrologia Pediátrica pela Boston College. Certificação Dr Thiago Castro (CTC). Professora Universitária Titular.', imageUrl: '/images/luciana-mini.jpg' },
  { name: 'Fernanda Dias Almeida', title: 'MÉDICA | CRM-RS 22.385', bio: 'Neurologista RQE 16191. Especialista em Neurologia da Academia Brasileira de Neurologia (ABN). R4 em Neurologia Pediátrica. Certificada em Neurossonologia pela Academia Brasileira de Neurologia (ABN). Mestrado e Doutorado em Ciências da Saúde. Certificação Dr Thiago Castro (CTC). Professora Universitária Titular.', imageUrl: '/images/fernanda-mini.jpg' },
  { name: 'Guilherme Socoowski das Neves', title: 'MÉDICO | CRM-RS 54.166', bio: 'Autista e Superdotado. Membro da Associação Gaúcha de Apoio às Altas Habilidades / Superdotação (AGAAHSD). Membro da Mensa Brasil e da Mensa Internacional. Pós-graduando em Neurociências. Pós-graduando em Autismo.', imageUrl: '/images/guilherme-mini.jpg' },
  { name: 'Patrícia Menchaca', title: 'NEUROPSICÓLOGA | CRP 07/28824 (RS)', bio: 'Especialista em Neuropsicologia pelo Conselho Regional de Psicologia (CRP). Pós-graduada em Terapia Cognitivo Comportamental (TCC). Pós-graduada em Psicologia do Esporte e do Exercício. Pós-graduada em Psicologia Hospitalar. Pós-graduada em Transtorno do Espectro do Autismo (TEA). Pós-graduanda em ABA (Análise do Comportamento Aplicada). Pós-graduanda em Neurociências.', imageUrl: '/images/patricia-mini.jpg' },
  { name: 'Priscila Gomes', title: 'NEUROPSICOPEDAGOGA | CBO 2394-40', bio: 'Pedagoga Clínica e Institucional. Neuropsicopedagoga. Especialista em Educação Especial e Inclusiva. Especialista em Docência em Nível Superior. Pós-graduanda em ABA (Análise do Comportamento Aplicada). Pós-graduanda em Neurociências e Autismo.', imageUrl: '/images/priscila-mini.jpg' },
  { name: 'Laura Machado Almeida', title: 'ADVOGADA | OAB/RS 103.455B', bio: 'Mestrado em Direito e Informática em Potugal / Zona da União Europeia. Certificada como Gestora de Privacidade e Proteção de Dados Pessoais, Compliance-LGPD. Pós-graduanda em Práticas Jurídicas Aplicadas ao Direito Médico e à Saúde.', imageUrl: '/images/laura-mini.jpg' },
];

type EquipeProps = {
  setActiveSection: (id: string) => void;
}

export default function Equipe({ setActiveSection }: EquipeProps) {
  // Configuração do Sensor
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      setActiveSection('equipe');
    }
  }, [inView, setActiveSection]);

  // --- ESTA É A CORREÇÃO (Ação 185) ---
  // 3. Criamos um "estado" para saber o índice do slide ATIVO
  const [activeIndex, setActiveIndex] = useState(0);

  // 4. Esta função é chamada pelo Swiper SEMPRE que o slide muda
  const handleSlideChange = (swiper: SwiperCore) => {
    // A lógica do 'loop' significa que o índice "real" é o que importa
    setActiveIndex(swiper.realIndex); 
  };
  // --- FIM DA CORREÇÃO ---


  return (
    <section id="equipe" ref={ref} className={styles.equipeSection}>
      <h2 className={styles.sectionTitle}>EQUIPE</h2>
      
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        
        loop={true} // O seu scroll infinito (360)
        centeredSlides={true} // O seu slide centralizado
        
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 0, 
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        
        navigation
        pagination={{ clickable: true }}
        className={styles.carouselContainer}

        // 5. Dizemos ao Swiper para chamar a nossa função quando mudar
        onSlideChange={handleSlideChange} 
      >
        
        {professionals.map((professional, index) => (
          // 6. Verificamos se o índice DESTE slide é o índice ATIVO
          <SwiperSlide key={index} className={
            index === activeIndex 
              ? styles.slideActive // Se for, aplica a classe ATIVA
              : styles.slideInactive // Se não for, aplica a classe INATIVA
          }>
            <div className={styles.professionalCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={professional.imageUrl}
                  alt={`Retrato de ${professional.name}`}
                  width={600}
                  height={600}
                  className={styles.profileImage}
                />
              </div>
              <h3 className={styles.professionalName}>{professional.name}</h3>
              <p className={styles.professionalTitle}>{professional.title}</p>
              <p className={styles.professionalBio}>{professional.bio}</p>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  );
}