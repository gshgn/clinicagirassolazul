import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
// MUDANÇA 1: Importamos 'Lora' em vez de 'Playfair_Display'
import { Lora, Montserrat } from 'next/font/google';
import '@/styles/globals.css';

// MUDANÇA 2: Configuramos a 'Lora'
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora', // Novo nome da variável
  weight: ['400', '700'], // Pesos para Título e Logo
});

// A Montserrat continua igual
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // MUDANÇA 3: Aplicamos a variável '--font-lora'
    <main className={`${lora.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}