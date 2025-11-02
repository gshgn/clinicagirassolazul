import { useRouter } from 'next/router';
import Head from 'next/head';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import type { ArticleWithSlug } from '@/lib/articles';
import { GetStaticProps, GetStaticPaths } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from '@/styles/Artigo.module.css';

type ArtigoProps = {
  article: ArticleWithSlug;
};

export default function ArtigoPage({ article }: ArtigoProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>A carregar...</div>;
  }

  return (
    // 1. REMOVEMOS o wrapper styles.pageWrapper e confiamos no _app.tsx
    // O Flexbox (Ação 248) controla a altura
    <> 
      <Head>
        <title>{article.title} | Clínica Girassol Azul</title>
        <meta name="description" content={article.summary} />
      </Head>
      
      <Header 
        activeSection=""
        variant="inverted"
      />
      
      {/* 2. O <main> é agora o contentor semântico que vai esticar */}
      <main className={styles.articleBody}> 
        <div className={styles.contentWrapper}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.imageContainer}>
            <Image 
              src={article.imageUrl} 
              alt={`Imagem de capa para ${article.title}`}
              width={800}
              height={500}
              className={styles.articleImage}
              priority
            />
          </div>
          
          <div 
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: article.modalContent }}
          />

        </div>
      </main>
      
      <Footer 
        variant="inverted"
      />
    </>
  );
}

// (As funções GetStaticProps e GetStaticPaths permanecem idênticas)
export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles();
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = getArticleBySlug(params?.slug as string);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};