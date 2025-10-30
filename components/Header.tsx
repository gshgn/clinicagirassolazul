import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          CLÍNICA GIRASSOL AZUL
        </Link>
        
        <nav className={styles.nav}>
          <ul>
            {/* Links de âncora na ordem solicitada */}
            <li><Link href="/#sobre-nos">SOBRE NÓS</Link></li>
            <li><Link href="/#equipe">EQUIPE</Link></li>
            <li><Link href="/#servicos">SERVIÇOS</Link></li>
            <li><Link href="/#noticias">NOTÍCIAS</Link></li>
          </ul>
        </nav>
        
        {/* O CTA principal agora também é um link de âncora */}
        <Link href="/#agendamento" className={styles.ctaButton}>
          Agende uma consulta
        </Link>
      </div>
    </header>
  );
}