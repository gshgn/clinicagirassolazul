import React from 'react';
import styles from './Contato.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type ContatoProps = {
  setActiveSection: (id: string) => void;
}

export default function Contato({ setActiveSection }: ContatoProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      setActiveSection('agendamento'); 
    }
  }, [inView, setActiveSection]);

  return (
    <section id="agendamento" ref={ref} className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Coluna 1: Informações e CTA */}
        <div className={styles.infoPanel}>
          <h2 className={styles.sectionTitle}>Agende sua consulta</h2>
          <p className={styles.subTitle}>
            Pronto para iniciar sua jornada? Sem burocracia, utilize nosso 
            sistema de agendamento online para marcar sua avaliação inicial, 
            cadastrar seus dados e efetuar o pagamento com praticidade.
          </p>
          
          <a 
            href="https://URL_DO_SEU_SISTEMA_DE_PAGAMENTO_AQUI" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            AGENDAMENTO ONLINE AUTOMÁTICO
          </a>
          
          <div className={styles.divider}></div>
          
          <h3 className={styles.contactHeader}>Nossos contatos</h3>
          <p className={styles.contactInfo}>
            <strong>Email:</strong> contato@clinicagirassolazul.com.br
          </p>
          <p className={styles.contactInfo}>
            <strong>Telefone/WhatsApp:</strong> (XX) 9XXXX-XXXX
          </p>
          <p className={styles.contactInfo}>
            <strong>Endereço:</strong> Rua General Bacelar (Calçadão), Número 378, 
            Sala 303 - Edifício Antares - Bairro Centro, Rio Grande, RS - CEP 96200-370
          </p>
          <p className={styles.contactInfo}>
            <strong>Instagram:</strong> @clinicagirassolazul
          </p>
        </div>
        
        {/* Coluna 2: O Mapa */}
        <div className={styles.mapPanel}>
          
          {/* ESTE É O SEU IFRAME (Ação 193)
            Note que 'width', 'height' e 'style' foram removidos 
            e 'className' foi adicionado. 
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.47312426325!2d-52.10026256740094!3d-32.03142354231026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119d1ae63f5a1d%3A0xb2b5dc7be4ed7418!2sEdificio%20Antares!5e1!3m2!1spt-BR!2sbr!4v1762024750453!5m2!1spt-BR!2sbr" 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapFrame}
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}