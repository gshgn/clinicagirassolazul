import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Girassol Azul
        </Link>
        
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/sobre-nos">Sobre Nós</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/equipe">Equipe</Link></li>
            <li><Link href="/artigos">Artigos</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
        
        <Link href="/agendamento" className={styles.ctaButton}>
          Agende uma Consulta
        </Link>
      </div>
    </header>
  );
}