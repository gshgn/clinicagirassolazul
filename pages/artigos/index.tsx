import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import styles from '@/styles/Artigo.module.css';

export default function ArtigosIndexPage() {
  const siteTitle = "Repositório Completo | Artigos Científicos e Insights";

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>{siteTitle} | Clínica Girassol Azul</title>
        <meta name="description" content="Navegue por todos os artigos e publicações da Clínica Girassol Azul, com filtros por tema, data e autoridade." />
      </Head>
      
      {/* Header Invertido */}
      <Header 
        activeSection="artigos"
        variant="inverted"
      />
      
      <main className={styles.articleBody}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.articleTitle}>Nossa Redação Completa</h1>
          
          <div className={styles.articleContent}>
            <p>
                AQUI SERÁ CONSTRUÍDA A PÁGINA DE REPOSITÓRIO E PESQUISA.
                <br /><br />
                Este é o local onde todos os 100+ artigos serão listados (com filtros, barras de pesquisa e paginação).
                <br /><br />
                Por enquanto, esta página serve apenas como o destino (o *link* real) para o seu botão na Home Page.
            </p>
          </div>
        </div>
      </main>
      
      <Footer 
        variant="inverted"
      />
    </div>
  );
}