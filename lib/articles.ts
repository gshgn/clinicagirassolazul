// O tipo 'Article' (Correto)
export type Article = {
  title: string;
  summary: string;
  imageUrl: string;
  modalContent: string; // Conteúdo é string de HTML
};

export type ArticleWithSlug = Article & {
  slug: string;
};

// 2. O conteúdo agora é uma string de HTML (SEM O TÍTULO)
const articles: ArticleWithSlug[] = [
  {
    slug: 'intervencao-precoce-autismo',
    title: 'A Importância da Intervenção Precoce no Autismo',
    summary: 'Estudos recentes demonstram que a intervenção comportamental e terapêutica iniciada antes dos 3 anos...',
    imageUrl: '/images/noticia-placeholder-1.jpg',
    modalContent: `
      <p>Estudos recentes demonstram que a intervenção comportamental e terapêutica iniciada antes dos 3 anos de idade tem um impacto exponencial no desenvolvimento da neuroplasticidade cerebral...</p>
      <p>(Aqui entraria o texto completo do seu artigo...)</p>
    ` // <-- O <h2> foi REMOVIDO
  },
  {
    slug: 'nutrologia-seletividade-alimentar-tea',
    title: 'Nutrologia e Seletividade Alimentar no TEA',
    summary: 'A Dra. Luciana Lages explica a complexa relação entre o trato gastrointestinal, deficiências nutricionais e...',
    imageUrl: '/images/noticia-placeholder-2.jpg',
    modalContent: `<p>Detalhes sobre Nutrologia...</p>` // <-- O <h2> foi REMOVIDO
  },
  {
    slug: 'direito-saude-tratamento',
    title: 'Direito da Saúde: Como Garantir o Tratamento Recomendado',
    summary: 'Planos de saúde e serviços públicos frequentemente criam barreiras burocráticas. A Dra. Laura Almeida detalha...',
    imageUrl: '/images/noticia-placeholder-3.jpg',
    modalContent: `<p>Detalhes sobre Direito da Saúde...</p>` // <-- O <h2> foi REMOVIDO
  },
  {
    slug: 'terapia-ocupacional-integracao-sensorial',
    title: 'O Papel da Terapia Ocupacional na Integração Sensorial',
    summary: 'Entenda como a Terapia Ocupacional com foco em Integração Sensorial de Ayres pode regular o sistema nervoso...',
    imageUrl: '/images/noticia-placeholder-4.jpg',
    modalContent: `<p>Detalhes sobre T.O....</p>` // <-- O <h2> foi REMOVIDO
  },
  {
    slug: 'dupla-excepcionalidade-autismo-superdotacao',
    title: 'Superdotação e Autismo (Dupla Excepcionalidade)',
    summary: 'O Dr. Guilherme Neves discute os desafios do diagnóstico e manejo da dupla excepcionalidade, onde...',
    imageUrl: '/images/noticia-placeholder-5.jpg',
    modalContent: `<p>Detalhes sobre Dupla Excepcionalidade...</p>` // <-- O <h2> foi REMOVIDO
  },
];

// Funções "helper" (permanecem iguais)
export const getAllArticles = () => {
  return articles;
};

export const getArticleBySlug = (slug: string) => {
  return articles.find((article) => article.slug === slug);
};