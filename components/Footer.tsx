import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

// O tipo aceita 'variant' (para o "Sanduíche Premium")
type FooterProps = {
  variant?: 'default' | 'inverted';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Esta linha aplica o TEMA (Cor)
  const footerClasses = `${styles.footer} ${variant === 'inverted' ? styles.invertedFooter : ''}`;

  return (
    // 'footerClasses' aplica o TEMA (Cor) e o Padding
    <footer className={footerClasses}>
      
      {/* 'footerContainer' aplica o LAYOUT (o grid 3x1) */}
      <div className={styles.footerContainer}>
        
        {/* Coluna 1: Marca (Esquerda) */}
        <div className={styles.brandColumn}>
          <Link href="/#inicio" className={styles.footerLogo}>
            <Image
              src="/images/logo-icon.png"
              alt="Ícone da Clínica Girassol Azul"
              width={32}
              height={32}
              className={styles.logoIcon}
            />
            <span>CLÍNICA GIRASSOL AZUL</span>
          </Link>
          <p className={styles.copyright}>
            © {currentYear} Girassol Azul Clínica Multiprofissional<br />
            Todos os direitos reservados.
          </p>
        </div>
        
        {/* Coluna 2: Diretores Técnicos (Central) */}
        <div className={styles.legalColumn}>
          <h3 className={styles.columnTitle}>Diretores Técnicos</h3>
          <p className={styles.infoText}>
            <strong>Médico:</strong> Dr(a). [Nome] | CRM-RS: [XXXXXX]
          </p>
          <p className={styles.infoText}>
            <strong>Psicólogo:</strong> Psic. [Nome] | CRP-RS: [XXXXXX]
          </p>
        </div>

        {/* Coluna 3: Legal (Direita) */}
        <div className={styles.linksColumn}>
          <h3 className={styles.columnTitle}>Legal</h3>
          <p className={styles.infoTextCnpj}>
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
          <p className={styles.legalLinks}>
            <Link href="/politica-de-privacidade">Política de Privacidade</Link>
            <span> | </span>
            <Link href="/termos-de-uso">Termos de Uso</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}