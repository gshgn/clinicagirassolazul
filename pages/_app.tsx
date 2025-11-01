import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Lora, Montserrat } from 'next/font/google';
import Modal from 'react-modal'; 

// 1. IMPORTE O CSS BASE DO SWIPER
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 'swiper/css/effect-coverflow'; // <-- A LINHA FOI REMOVIDA

import '@/styles/globals.css'; 

Modal.setAppElement('#__next'); 

// (As suas fontes permanecem as mesmas)
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '700'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lora.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}