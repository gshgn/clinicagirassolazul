import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {/* MUDANÇA 1: Texto do Logo */}
          CLÍNICA GIRASSOL AZUL
        </Link>
        
        <nav className={styles.nav}>
          {/* MUDANÇA 2: Itens de Navegação */}
          <ul>
            <li><Link href="/#sobre-nos">SOBRE NÓS</Link></li>
            <li><Link href="/#equipe">EQUIPE</Link></li>
            <li><Link href="/equipe">EQUIPE</Link></li>
            <li><Link href="/artigos">NOTÍCIAS</Link></li>
            {/* O link "Contato" foi removido daqui */}
          </ul>
        </nav>
        
        <Link href="/agendamento" className={styles.ctaButton}>
          {/* MUDANÇA 3: Texto do Botão */}
          Agende uma consulta
        </Link>
      </div>
    </header>
  );
}