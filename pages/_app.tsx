import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react'; // 1. Importa o Analytics
import { Playfair_Display, Montserrat } from 'next/font/google'; // 2. Importa as fontes
import '@/styles/globals.css'; // 3. Importa seu CSS global

// 4. Configura as fontes (como planejado no globals.css)
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'], // Incluímos os pesos que usaremos
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700'], // Incluímos os pesos que usaremos
});

// 5. Este é o seu componente "App" principal
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 6. Aplica as classes das fontes globalmente
    <main className={`${playfair.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
      <Analytics /> {/* 7. Adiciona o componente do Analytics aqui */}
    </main>
  );
}