import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Noticias.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { getAllArticles } from '@/lib/articles'; // Importamos os dados

// 1. O tipo 'Article' e 'onArticleClick' foram REMOVIDOS
// (Este componente já não precisa de saber sobre Modals)
type NoticiasProps = {
  setActiveSection: (id: string) => void;
}

const newsItems = getAllArticles();

export default function Noticias({ setActiveSection }: NoticiasProps) {
  // Configuração do Sensor (igual a antes)
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      setActiveSection('artigos'); 
    }
  }, [inView, setActiveSection]);

  return (
    <section id="artigos" ref={ref} className={styles.newsSection}>
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
              
              {/* O Link (Ação 201) permanece correto */}
              <Link 
                href={`/artigos/${item.slug}`}
                className={styles.cardButton}
              >
                Saiba mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}