import { useRouter } from 'next/router';
import Head from 'next/head';
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import type { ArticleWithSlug } from '@/lib/articles';
import { GetStaticProps, GetStaticPaths } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from '@/styles/Artigo.module.css';

// 1. Componente para Ícones e Feedback (lucide-react)
import { X, Facebook, Send, Link as LinkIcon } from 'lucide-react'; 
import React, { useState } from 'react'; // Para o useState

type ArtigoProps = {
  article: ArticleWithSlug;
};

// --- O Componente Bloco de Partilha (Novo) ---
const ShareBlock = ({ article }: { article: ArticleWithSlug }) => {
  const isBrowser = typeof window !== 'undefined';
  const url = isBrowser ? window.location.href : `https://www.clinicagirassolazul.com.br/artigos/${article.slug}`;
  
  const title = article.title;
  const twitterHandle = 'Clínica Girassol Azul';
  
  const [copyStatus, setCopyStatus] = useState('Copiar Link');

  // Funções de Partilha
  const shareLinks = {
    whatsapp: `whatsapp://send?text=${encodeURIComponent(title)}%20%E2%80%94%20${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=${twitterHandle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(`Artigo: ${title}`)}&body=${encodeURIComponent(`Encontrei este artigo na Clínica Girassol Azul: ${title} \n\nLeia mais em: ${url}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  // Função para Copiar Link
  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        setCopyStatus('Link Copiado!');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopyStatus('Link Copiado!');
      }
      setTimeout(() => setCopyStatus('Copiar Link'), 3000);
    } catch (err) {
      setCopyStatus('Erro ao Copiar');
      setTimeout(() => setCopyStatus('Copiar Link'), 3000);
    }
  };

  return (
    <div className={styles.shareBlock}>
      <span className={styles.shareTitle}>COMPARTILHAR ESTE ARTIGO</span>
      <div className={styles.shareButtons}>
        
        <a href={shareLinks.email} target="_blank" rel="noopener noreferrer" className={styles.shareButton} title="Partilhar por E-mail"><Send size={20} /></a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.shareButton} title="Partilhar no WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.039 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.767.498 3.483 1.458 4.965l-1.57 4.887 5.03-1.393c1.475.98 3.167 1.545 4.97 1.545 5.506 0 9.988-4.482 9.988-9.988s-4.482-9.988-9.988-9.988zm4.498 12.871c-.08-.135-.27-.215-.55-.36l-.167-.066c-.327-.134-.648-.255-.953-.362s-.59-.168-.908.169c-.43.43-.86.858-1.29.858-.43 0-.86-.215-1.42-.56-1.57-1.127-2.61-3.04-2.88-3.414-.145-.188-.115-.36-.115-.544 0-.173-.015-.41.246-.622.215-.172.48-.344.577-.457.098-.106.13-.172.214-.344s.047-.36-.026-.505c-.077-.144-.7-.914-.88-.914-.055 0-.115.01-.173.04s-.215.11-.295.167c-.08.056-.174.12-.53.48-.358.358-.695.77-.854.93s-.295.344-.43.515c-.135.172-.255.36-.36.564s-.172.43-.172.68c0 .28.056.54.344.858s.72.78 1.696 1.15c.6.215 1.05.375 1.5.54.45.162.9.23 1.25.23.48 0 .89-.153 1.16-.368s.45-.515.53-.78z"/></svg></a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className={styles.shareButton} title="Partilhar no X/Twitter"><X size={20} /></a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.shareButton} title="Partilhar no Facebook"><Facebook size={20} /></a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.shareButton} title="Partilhar no LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.511-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.316 7 3.996v5.239z"/></svg></a>
        
        <button onClick={copyToClipboard} className={styles.copyButton} title={copyStatus}>
          <LinkIcon size={16} />
          <span>{copyStatus}</span>
        </button>
      </div>
    </div>
  );
};
// --- Fim do Componente Bloco de Partilha ---


// --- O COMPONENTE PRINCIPAL ---
export default function ArtigoPage({ article }: ArtigoProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>A carregar...</div>;
  }

  return (
    <> 
      <Head>
        <title>{article.title} | Clínica Girassol Azul</title>
        <meta name="description" content={article.summary} />
      </Head>
      
      <Header 
        activeSection=""
        variant="inverted"
      />
      
      <main className={styles.articleBody}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          
          <ShareBlock article={article} />

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

// --- FUNÇÕES ESTÁTICAS (NO FUNDO DO FICHEIRO) ---

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