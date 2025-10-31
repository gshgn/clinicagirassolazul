import Head from 'next/head';
import { useRef, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Equipe from '@/components/Equipe';
import Servicos from '@/components/Servicos';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('');
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);

  // --- (Suas variáveis de SEO permanecem) ---
  const siteTitle = "Clínica Girassol Azul | Excelência em Saúde";
  const siteDescription = "Acolhimento e atendimento para neurodivergentes (TEA, TDAH, etc) e bem-estar integral alinhados à saúde de precisão.";
  const siteUrl = "https://www.clinicagirassolazul.com.br";
  const siteImage = "https://www.clinicagirassolazul.com.br/images/social-share.jpg";

  const handleHeroCtaClick = (event: React.MouseEvent) => {
    event.preventDefault(); 
    if (aboutContainerRef.current) {
      aboutContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    if (aboutVideoRef.current) {
      aboutVideoRef.current.muted = false;
      // --- ESTA É A CORREÇÃO (linha 30) ---
      aboutVideoRef.current.currentTime = 0; // Era 'aboutVideoVef'
      aboutVideoRef.current.play();
    }
  };

  return (
    <>
      <Head>
        {/* ... (Todas as suas meta tags permanecem iguais) ... */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
      </Head>
      
      <Header activeSection={activeSection} />
      
      <main>
        <Hero 
          onCtaClick={handleHeroCtaClick} 
          setActiveSection={setActiveSection} 
        />
        <About 
          videoRef={aboutVideoRef} 
          containerRef={aboutContainerRef} 
          setActiveSection={setActiveSection}
        />
        <Equipe 
          setActiveSection={setActiveSection}
        />
        <Servicos
          setActiveSection={setActiveSection}
        />
      </main>
      
      {/* O Footer entrará aqui */}
    </>
  );
}