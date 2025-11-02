import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Noticias.module.css';
import { useInView } from 'react-intersection-observer';
import { getAllArticles } from '@/lib/articles';

import type { Article } from '@/lib/articles';


type NoticiasProps = {
  setActiveSection: (id: string) => void;
}

const newsItems: Article[] = getAllArticles();

const getHierarchyClass = (index: number) => {
    if (index === 0) return styles.cardLarge;
    if (index === 1) return styles.cardMedium;
    if (index === 2) return styles.cardSmall;
    return ''; 
};


export default function Noticias({ setActiveSection }: NoticiasProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      setActiveSection('artigos'); 
    }
  }, [inView, setActiveSection]);

  return (
    <section id="artigos" ref={ref} className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>ARTIGOS</h2>
      <p className={styles.sectionSubtitle}>LEIA OS MAIS RECENTES</p>
      
      <div className={styles.newsListContainer}>
        {
        newsItems.slice(0, 3).map((item, index) => (
          
          <div key={index} className={`${styles.newsCard} ${getHierarchyClass(index)}`}> 
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
              
              {/* REMOVEMOS A DATA DO TOPO. O TÍTULO VOLTA A SER O PRIMEIRO ELEMENTO VISÍVEL NO FLUXO. */}
              
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardSummary}>{item.summary}</p>
              
              <div className={styles.cardFooter}>
                {/* 1. ESQUERDA: Botão */}
                <Link 
                  href={`/artigos/${item.slug}`}
                  className={styles.cardButton}
                >
                  Saiba mais
                </Link>
                
                {/* 2. CENTRO: Autor */}
                <span className={styles.cardAuthor}>
                    De: <strong>{item.author}</strong>
                </span>

                {/* 3. DIREITA: Data (Ação 288) */}
                <span className={styles.cardDate}>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.repositoryCtaWrapper}>
        <Link 
            href="/artigos" 
            className={styles.repositoryCtaButton}
        >
            Veja nossa redação completa de artigos
        </Link>
      </div>

    </section>
  );
}