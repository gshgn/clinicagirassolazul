import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Equipe from '@/components/Equipe';
// Importe as outras seções aqui quando as criarmos
// import Services from '@/components/Services';

export default function HomePage() {
  // --- Suas variáveis de SEO atualizadas ---
  const siteTitle = "Clínica Girassol Azul | Excelência em Saúde";
  const siteDescription = "Acolhimento e atendimento para neurodivergentes (TEA, TDAH, etc) e bem-estar integral alinhados à saúde de precisão.";
  const siteUrl = "https://www.clinicagirassolazul.com.br";
  const siteImage = "https://www.clinicagirassolazul.com.br/images/social-share.jpg"; // (Mude se o nome for diferente)

  return (
    <>
      <Head>
        {/* --- Tags Padrão (Corrigidas) --- */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* (Precisaremos criar um favicon depois) */}

        {/* --- Tags Open Graph (Para WhatsApp, Facebook, LinkedIn) --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />

        {/* --- Tags Twitter Card (Para o Twitter) --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Equipe />
        {/* As próximas seções entrarão aqui */}
      </main>
      
      {/* O Footer entrará aqui */}
    </>
  );
}