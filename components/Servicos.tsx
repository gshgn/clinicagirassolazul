import React from 'react';
import Image from 'next/image';
import styles from './Servicos.module.css';
import { useInView } from 'react-intersection-observer'; // O Sensor
import { useEffect } from 'react';

// 1. DADOS (Placeholders para um grid 3x3 = 9 serviços)
const services = [
  {
    title: 'Avaliação Neuropsicológica',
    description: 'Mapeamento detalhado das funções cognitivas para diagnóstico preciso (TEA, TDAH, etc).',
    imageUrl: '/images/servico-placeholder.jpg', // Usaremos um placeholder genérico
  },
  {
    title: 'Terapia ABA',
    description: 'Intervenção intensiva baseada em Análise do Comportamento Aplicada para desenvolvimento de habilidades.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Nutrologia Pediátrica',
    description: 'Abordagem médica focada na seletividade alimentar e otimização nutricional para o neurodesenvolvimento.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Fonoaudiologia',
    description: 'Especializada em comunicação alternativa (PECS, PROMPT), distúrbios de fala, linguagem e deglutição.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Terapia Ocupacional (T.O.)',
    description: 'Foco em Integração Sensorial de Ayres, habilidades motoras finas, autonomia e atividades de vida diária (AVDs).',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Aconselhamento Jurídico',
    description: 'Suporte legal especializado em Direito da Saúde para garantir o cumprimento de tratamentos por planos de saúde.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Psicoterapia (TCC)',
    description: 'Terapia Cognitivo-Comportamental para manejo de ansiedade, depressão e comorbidades.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Intervenção Precoce',
    description: 'Modelo Denver de intervenção multidisciplinar para crianças de 12 a 48 meses.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
  {
    title: 'Grupos de Habilidades Sociais',
    description: 'Treinamento de habilidades sociais (THS) em pequenos grupos para crianças e adolescentes.',
    imageUrl: '/images/servico-placeholder.jpg',
  },
];

// 2. Propriedades (para o sensor)
type ServicosProps = {
  setActiveSection: (id: string) => void;
}

export default function Servicos({ setActiveSection }: ServicosProps) {
  // 3. Configuração do Sensor (10% de limiar)
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      setActiveSection('servicos'); // Avisa: "A seção 'serviços' está ativa"
    }
  }, [inView, setActiveSection]);

  return (
    <section id="servicos" ref={ref} className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>SERVIÇOS</h2>
      
      {/* 4. O Grid 3x3 */}
      <div className={styles.gridContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image
                src={service.imageUrl}
                alt={`Imagem ilustrativa de ${service.title}`}
                width={600} // Usaremos 600x400 (proporção 3:2)
                height={400}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              {/* O botão que (futuramente) abrirá o Modal */}
              <button className={styles.cardButton}>
                Saiba Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}