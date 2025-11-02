import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Lora, Montserrat } from 'next/font/google';
import Modal from 'react-modal'; 
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
  // A classe 'main' foi removida. Vamos deixar o CSS de 'globals.css' controlar o layout.
  return (
    <div className={`${lora.variable} ${montserrat.variable} app-wrapper`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}