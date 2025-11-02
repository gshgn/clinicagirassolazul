import Head from 'next/head';
import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { Service } from '@/components/Servicos';
// A importação de 'Article' foi removida (Correto)

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Equipe from '@/components/Equipe';
import Servicos from '@/components/Servicos';
import Noticias from '@/components/Noticias';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('');
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  
  // O Gestor do Modal de Serviços (Correto)
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const openServiceModal = (service: Service) => setSelectedService(service);
  const closeServiceModal = () => setSelectedService(null);
  
  const handleHeroCtaClick = (event: React.MouseEvent) => {
    // ... (função idêntica)
    event.preventDefault(); 
    if (aboutContainerRef.current) {
      aboutContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
    if (aboutVideoRef.current) {
      aboutVideoRef.current.muted = false;
      aboutVideoRef.current.currentTime = 0;
      aboutVideoRef.current.play();
    }
  };

  // --- (Suas variáveis de SEO permanecem) ---
  const siteTitle = "Clínica Girassol Azul | Excelência em Saúde";
  const siteDescription = "Acolhimento e atendimento para neurodivergentes (TEA, TDAH, etc) e bem-estar integral alinhados à saúde de precisão.";
  const siteUrl = "https://www.clinicagirassolazul.com.br";
  const siteImage = "https://www.clinicagirassolazul.com.br/images/social-share.jpg";

  return (
    <>
      <Head>
        {/* ... (Tags de SEO) ... */}
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
      
      <Header 
        activeSection={activeSection} 
        variant="default"
      />
      
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
          onServiceClick={openServiceModal}
        />
        <Noticias
          setActiveSection={setActiveSection}
        />
        <Contato
          setActiveSection={setActiveSection}
        />
      </main>

      <Footer 
        variant="default"
      />

      {/* Modal 1 (Serviços) */}
      <Modal
        isOpen={selectedService !== null}
        onRequestClose={closeServiceModal}
        contentLabel="Detalhes do Serviço"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        closeTimeoutMS={300}
      >
        {/* --- ESTA É A CORREÇÃO (Ação 213) --- */}
        <button onClick={closeServiceModal} className="closeModalButton">×</button>
        {selectedService?.modalContent}
      </Modal>

      {/* O Modal de Artigos (REMOVIDO) */}
    </>
  );
}