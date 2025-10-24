/* Em seu pages/_app.tsx, importe as fontes:
import { Playfair_Display, Montserrat } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

// E no seu _app.tsx, no componente principal:
// <main className={`${playfair.variable} ${montserrat.variable}`}>
//   <Component {...pageProps} />
// </main>
*/

/* E então, em styles/globals.css */
:root {
  /* Cores */
  --color-primary-blue: #0D2B4F;  /* Azul Petróleo Escuro */
  --color-accent-gold: #FFB800;   /* Dourado/Mostarda "Girassol" */
  --color-text-dark: #333333;
  --color-text-light: #FAFAFA;
  --color-white: #FFFFFF;
  --color-border-light: #EAEAEA;

  /* Fontes */
  --font-serif: var(--font-playfair), Georgia, serif;
  --font-sans: var(--font-montserrat), Arial, sans-serif;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: var(--font-sans);
  color: var(--color-text-dark);
  background-color: var(--color-white);
}

a {
  color: inherit;
  text-decoration: none;
}