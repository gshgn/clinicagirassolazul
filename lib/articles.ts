// O tipo 'Article' (Correto)
export type Article = {
  title: string;
  summary: string;
  imageUrl: string;
  modalContent: string;
  date: string; // Conteúdo é string
  author: string;
};

export type ArticleWithSlug = Article & {
  slug: string;
};

// O conteúdo agora é uma string de HTML (SEM O TÍTULO)
const articles: ArticleWithSlug[] = [
  {
    slug: 'intervencao-precoce-autismo',
    title: 'A Importância da Intervenção Precoce no Autismo',
    summary: 'Estudos recentes demonstram que a intervenção comportamental e terapêutica iniciada antes dos 3 anos...',
    imageUrl: '/images/noticia-placeholder-1.jpg',
    date: '02 / 11 / 2025', // <-- CORREÇÃO
    author: 'Dr. Guilherme Socoowski das Neves',
    modalContent: `
      <p>Estudos recentes demonstram que a intervenção comportamental e terapêutica iniciada antes dos 3 anos de idade tem um impacto exponencial no desenvolvimento da neuroplasticidade cerebral...</p>
      <p>(Aqui entraria o texto completo do seu artigo...)</p>
    `
  },
  {
    slug: 'nutrologia-seletividade-alimentar-tea',
    title: 'Nutrologia e Seletividade Alimentar no TEA',
    summary: 'A Dra. Luciana Lages explica a complexa relação entre o trato gastrointestinal, deficiências nutricionais e...',
    imageUrl: '/images/noticia-placeholder-2.jpg',
    date: '15 / 10 / 2025', // <-- CORREÇÃO
    author: 'Dra. Luciana Baldino Lages',
    modalContent: `<h2>Nutrologia e Seletividade Alimentar no TEA</h2><p>Detalhes...</p>`
  },
  {
    slug: 'direito-saude-tratamento',
    title: 'Direito da Saúde: Como Garantir o Tratamento Recomendado',
    summary: 'Planos de saúde e serviços públicos frequentemente criam barreiras burocráticas. A Dra. Laura Almeida detalha...',
    imageUrl: '/images/noticia-placeholder-3.jpg',
    date: '01 / 10 / 2025', // <-- CORREÇÃO
    author: 'Dra. Laura Machado Almeida',
    modalContent: `<h2>Direito da Saúde: Como Garantir o Tratamento Recomendado</h2><p>Detalhes...</p>`
  },
  {
    slug: 'terapia-ocupacional-integracao-sensorial',
    title: 'O Papel da Terapia Ocupacional na Integração Sensorial',
    summary: 'Entenda como a Terapia Ocupacional com foco em Integração Sensorial de Ayres pode regular o sistema nervoso...',
    imageUrl: '/images/noticia-placeholder-4.jpg',
    date: '28 / 09 / 2025', // <-- CORREÇÃO
    author: 'Equipe T.O. Girassol Azul',
    modalContent: `<h2>O Papel da Terapia Ocupacional na Integração Sensorial</h2><p>Detalhes...</p>`
  },
  {
    slug: 'dupla-excepcionalidade-autismo-superdotacao',
    title: 'Superdotação e Autismo (Dupla Excepcionalidade)',
    summary: 'O Dr. Guilherme Neves discute os desafios do diagnóstico e manejo da dupla excepcionalidade, onde...',
    imageUrl: '/images/noticia-placeholder-5.jpg',
    date: '10 / 09 / 2025', // <-- CORREÇÃO
    author: 'Dr. Guilherme Socoowski das Neves',
    modalContent: `<h2>Superdotação e Autismo (Dupla Excepcionalidade)</h2><p>Detalhes...</p>`
  },
];

// Funções "helper" (permanecem iguais)
export const getAllArticles = () => {
  return articles;
};

export const getArticleBySlug = (slug: string) => {
  return articles.find((article) => article.slug === slug);
};