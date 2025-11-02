import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

// 1. O Header agora aceita 'variant' e 'activeSection'
type HeaderProps = {
  activeSection: string;
  variant?: 'default' | 'inverted'; // 'default' é branco, 'inverted' é azul
}

export default function Header({ activeSection, variant = 'default' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Função "helper" para o Scrollspy
  const getLinkClass = (id: string) => {
    return activeSection === id ? styles.active : '';
  };

  // 2. Lógica da Variante: Decide qual classe CSS aplicar
  const headerClasses = `${styles.header} ${variant === 'inverted' ? styles.invertedHeader : ''}`;

  return (
    <header className={headerClasses}> {/* 3. Aplica a classe da variante */}
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
        
        {/* 4. Lógica da Variante: Esconde os links se for "inverted" (Subpágina) */}
        <nav className={`${styles.nav} ${variant === 'inverted' ? styles.navHidden : ''}`}>
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
            <li className={getLinkClass('artigos')}>
              <Link href="/#artigos">ARTIGOS</Link>
            </li>
          </ul>
        </nav>
        
        <Link href="/#agendamento" className={styles.ctaButton}>
          Agende sua consulta
        </Link>

        {/* 5. Lógica da Variante: Esconde o hambúrguer se for "inverted" */}
        <button 
          className={`${styles.hamburgerButton} ${isMenuOpen ? styles.open : ''} ${variant === 'inverted' ? styles.navHidden : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <div className={styles.hamburgerLines}></div>
        </button>

        {/* (O painel móvel não precisa de lógica, pois o botão que o abre está escondido) */}
        <div className={`${styles.mobileNavPanel} ${isMenuOpen ? styles.open : ''}`}>
          {/* ... (links do menu móvel) ... */}
          <nav>
            <ul className={styles.mobileNavLinks}>
              <li><Link href="/#sobre-nos" onClick={closeMenu}>SOBRE NÓS</Link></li>
              <li><Link href="/#equipe" onClick={closeMenu}>EQUIPE</Link></li>
              <li><Link href="/#servicos" onClick={closeMenu}>SERVIÇOS</Link></li>
              <li><Link href="/#artigos" onClick={closeMenu}>ARTIGOS</Link></li>
              <li>
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