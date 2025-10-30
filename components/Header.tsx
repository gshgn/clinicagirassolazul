import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Link href="/" className={styles.logoContainer} onClick={closeMenu}>
          <Image
            src="/images/logo-icon.png"
            alt="Ícone da Clínica Girassol Azul"
            width={300}  /* MUDANÇA: Tamanho REAL do seu arquivo de origem */
            height={300} /* MUDANÇA: Tamanho REAL do seu arquivo de origem */
            className={styles.logoIcon} /* O CSS vai forçar o 32px */
          />
          <span className={styles.logoText}>
            CLÍNICA GIRASSOL AZUL
          </span>
        </Link>
        
        {/* --- O RESTO DO HEADER (Desktop Nav) --- */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/#sobre-nos">SOBRE NÓS</Link></li>
            <li><Link href="/#equipe">EQUIPE</Link></li>
            <li><Link href="/#servicos">SERVIÇOS</Link></li>
            <li><Link href="/#noticias">NOTÍCIAS</Link></li>
          </ul>
        </nav>
        
        <Link href="/#agendamento" className={styles.ctaButton}>
          Agende uma consulta
        </Link>

        {/* --- O RESTO DO HEADER (Mobile Nav) --- */}
        <button 
          className={`${styles.hamburgerButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <div className={styles.hamburgerLines}></div>
        </button>

        <div className={`${styles.mobileNavPanel} ${isMenuOpen ? styles.open : ''}`}>
          <nav>
            <ul className={styles.mobileNavLinks}>
              <li><Link href="/#sobre-nos" onClick={closeMenu}>SOBRE NÓS</Link></li>
              <li><Link href="/#equipe" onClick={closeMenu}>EQUIPE</Link></li>
              <li><Link href="/#servicos" onClick={closeMenu}>SERVIÇOS</Link></li>
              <li><Link href="/#noticias" onClick={closeMenu}>NOTÍCIAS</Link></li>
              <li>
                <Link href="/#agendamento" className={styles.mobileCtaButton} onClick={closeMenu}>
                  Agende uma consulta
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}