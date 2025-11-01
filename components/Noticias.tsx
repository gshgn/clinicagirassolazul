import React from 'react';
import Image from 'next/image';
import styles from './Noticias.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// (O array 'newsItems' permanece o mesmo, Ação 141.R)
const newsItems = [
  {
    title: 'A Importância da Intervenção Precoce no Autismo',
    summary: 'Estudos recentes demonstram que a intervenção comportamental e terapêutica iniciada antes dos 3 anos de idade tem um impacto exponencial no desenvolvimento...',
    imageUrl: '/images/noticia-placeholder-1.jpg',
    linkUrl: '#',
  },
  {
    title: 'Nutrologia e Seletividade Alimentar no TEA',
    summary: 'A Dra. Luciana Lages explica a complexa relação entre o trato gastrointestinal, deficiências nutricionais e o comportamento em pacientes com TEA...',
    imageUrl: '/images/noticia-placeholder-2.jpg',
    linkUrl: '#',
  },
  {
    title: 'Direito da Saúde: Como Garantir o Tratamento Recomendado',
    summary: 'Planos de saúde e serviços públicos frequentemente criam barreiras burocráticas. A Dra. Laura Almeida detalha os caminhos legais para garantir...',
    imageUrl: '/images/noticia-placeholder-3.jpg',
    linkUrl: '#',
  },
  {
    title: 'O Papel da Terapia Ocupacional na Integração Sensorial',
    summary: 'Entenda como a Terapia Ocupacional com foco em Integração Sensorial de Ayres pode regular o sistema nervoso e melhorar a autonomia...',
    imageUrl: '/images/noticia-placeholder-4.jpg',
    linkUrl: '#',
  },
  {
    title: 'Superdotação e Autismo (Dupla Excepcionalidade)',
    summary: 'O Dr. Guilherme Neves discute os desafios do diagnóstico e manejo da dupla excepcionalidade, onde a superdotação pode mascarar...',
    imageUrl: '/images/noticia-placeholder-5.jpg',
    linkUrl: '#',
  },
];


type NoticiasProps = {
  setActiveSection: (id: string) => void;
}

export default function Noticias({ setActiveSection }: NoticiasProps) {
  // MUDANÇA (Ação 154): Limiar do sensor
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      // MUDANÇA (Ação 154): ID do sensor
      setActiveSection('artigos'); 
    }
  }, [inView, setActiveSection]);

  return (
    // MUDANÇA (Ação 154): ID da secção
    <section id="artigos" ref={ref} className={styles.newsSection}>
      
      {/* MUDANÇA (Ação 154): Título da secção */}
      <h2 className={styles.sectionTitle}>ARTIGOS</h2>
      
      <div className={styles.newsListContainer}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsCard}>
            <div className={styles.imageContainer}>
              <Image
                src={item.imageUrl}
                alt={`Imagem da notícia: ${item.title}`}
                width={400}
                height={400}
                className={styles.newsImage}
              />
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSummary}>{item.summary}</p>
              <button className={styles.cardButton}>
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}