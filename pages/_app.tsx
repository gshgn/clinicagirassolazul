import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Lora, Montserrat } from 'next/font/google';
import Modal from 'react-modal'; 
import '@/styles/globals.css'; // A linha vital

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
    <main className={`${lora.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}