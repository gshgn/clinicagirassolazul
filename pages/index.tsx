import Head from 'next/head';
import { useRef, useState } from 'react';
import Modal from 'react-modal'; // 1. Importe o componente Modal
import { Service } from '@/components/Servicos'; // 2. Importe o "Tipo" de serviço

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Equipe from '@/components/Equipe';
import Servicos from '@/components/Servicos';

// 3. A importação duplicada de 'globals.css' foi REMOVIDA daqui.

export default function HomePage() {
  // --- (Estados do Scrollspy e Vídeo permanecem) ---
  const [activeSection, setActiveSection] = useState('');
  const aboutVideoRef = useRef<HTMLVideoElement>(null);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  
  // --- (Estado do Modal permanece) ---
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleHeroCtaClick = (event: React.MouseEvent) => {
    // ... (função idêntica à Ação 147)
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
  
  // --- (Funções do Modal permanecem) ---
  const openModal = (service: Service) => {
    setSelectedService(service);
  };
  const closeModal = () => {
    setSelectedService(null);
  };

  // --- (Suas variáveis de SEO permanecem) ---
  const siteTitle = "Clínica Girassol Azul | Excelência em Saúde";
  const siteDescription = "Acolhimento e atendimento para neurodivergentes (TEA, TDAH, etc) e bem-estar integral alinhados à saúde de precisão.";
  const siteUrl = "https://www.clinicagirassolazul.com.br";
  const siteImage = "https://www.clinicagirassolazul.com.br/images/social-share.jpg";

  return (
    <>
      <Head>
        {/* ... (Suas meta tags) ... */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale-1" />
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
          onServiceClick={openModal} // A função "open" permanece
        />
      </main>

      {/* --- O MODAL (Permanece igual) --- */}
      <Modal
        isOpen={selectedService !== null}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Serviço"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        closeTimeoutMS={300}
      >
        <button onClick={closeModal} className="closeModalButton">&times;</button>
        {selectedService?.modalContent}
      </Modal>
      
      {/* O Footer entrará aqui */}
    </>
  );
}