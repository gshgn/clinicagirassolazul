import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Lora, Montserrat } from 'next/font/google';
import Modal from 'react-modal'; 
// --- AS LINHAS RESTAURADAS (Ação 267) ---
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// ----------------------------------------
import '@/styles/globals.css'; 

Modal.setAppElement('#__next'); 

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
    <div className={`${lora.variable} ${montserrat.variable} app-wrapper`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}