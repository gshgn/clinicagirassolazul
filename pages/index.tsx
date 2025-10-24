import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// Importe as outras seções aqui quando as criarmos
// import About from '@/components/About';
// import Services from '@/components/Services';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Girassol Azul Clínica Multiprofissional | Excelência em Saúde</title>
        <meta name="description" content="Abordagens de ponta para neurodiversidade (TEA, TDAH) e bem-estar integral." />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        {/* As próximas seções entrarão aqui */}
        {/* <About /> */}
        {/* <Services /> */}
      </main>
      
      {/* O Footer entrará aqui */}
    </>
  );
}