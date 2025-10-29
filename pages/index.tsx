import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Equipe from '@/components/Equipe';
// Importe as outras seções aqui quando as criarmos
// import About from '@/components/About';
// import Services from '@/components/Services';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Girassol Azul Clínica Multiprofissional | Excelência Acolhimento e em Saúde</title>
        <meta name="description" content="Abordagens de ponta para neurodiversidade (TEA, TDAH) e bem-estar integral." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Equipe /> {/* <-- SEÇÃO ADICIONADA */}
        {/* <Servicos /> */}
      </main>
      
      {/* O Footer entrará aqui */}
    </>
  );
}