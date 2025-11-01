import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

// O tipo aceita a prop 'activeSection' (para o Scrollspy)
type HeaderProps = {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Função "helper" para o Scrollspy
  const getLinkClass = (id: string) => {
    return activeSection === id ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <Link 
          href="/#inicio" 
          className={styles.logoContainer}
          onClick={closeMenu}
        >
          <Image
            src="/images/logo-icon.png"
            alt="Ícone da Clínica Girassol Azul"
            width={300}
            height={300}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>
            CLÍNICA GIRASSOL AZUL
          </span>
        </Link>
        
        <nav className={styles.nav}>
          <ul>
            <li className={getLinkClass('sobre-nos')}>
              <Link href="/#sobre-nos">SOBRE NÓS</Link>
            </li>
            <li className={getLinkClass('equipe')}>
              <Link href="/#equipe">EQUIPE</Link>
            </li>
            <li className={getLinkClass('servicos')}>
              <Link href="/#servicos">SERVIÇOS</Link>
            </li>
            <li className={getLinkClass('noticias')}>
              <Link href="/#noticias">NOTÍCIAS</Link>
            </li>
          </ul>
        </nav>
        
        {/* --- MUDANÇA 1 (Desktop CTA) --- */}
        <Link href="/#agendamento" className={styles.ctaButton}>
          Agende sua consulta
        </Link>

        {/* --- O menu móvel --- */}
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
                {/* --- MUDANÇA 2 (Mobile CTA) --- */}
                <Link href="/#agendamento" className={styles.mobileCtaButton} onClick={closeMenu}>
                  Agende sua consulta
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}