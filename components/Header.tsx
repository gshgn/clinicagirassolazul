import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

// 1. O Header agora aceita a prop 'activeSection'
type HeaderProps = {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // 2. Função "helper" para verificar se a seção está ativa
  // (Isso limpa o nosso código JSX)
  const getLinkClass = (id: string) => {
    return activeSection === id ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* 3. Atualizamos o link para /#inicio (para corresponder ao sensor) */}
        <Link 
          href="/#inicio" 
          className={styles.logoContainer} // A linha .active não será aplicada ao logo
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
            {/* 4. Aplique a classe ativa em cada 'li' */}
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
        
        <Link href="/#agendamento" className={styles.ctaButton}>
          Agende uma consulta
        </Link>

        {/* --- O menu móvel permanece o mesmo --- */}
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