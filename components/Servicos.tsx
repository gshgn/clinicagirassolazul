import React from 'react';
import Image from 'next/image';
import styles from './Servicos.module.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// --- 1. DEFINIÇÃO DE TIPO (O que é um "Serviço") ---
// Agora inclui o 'modalContent'
export type Service = {
  title: string;
  description: string;
  imageUrl: string;
  modalContent: React.ReactNode; // O conteúdo rico para o modal
};

// --- 2. DADOS ATUALIZADOS (com 'modalContent' de exemplo) ---
const services: Service[] = [
  {
    title: 'Avaliação Neuropsicológica',
    description: 'Mapeamento detalhado das funções cognitivas para diagnóstico preciso (TEA, TDAH, etc).',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: (
      <>
        <h2>Avaliação Neuropsicológica</h2>
        <p>A avaliação neuropsicológica é um processo investigativo detalhado, essencial para o diagnóstico preciso de transtornos do neurodesenvolvimento. Utilizamos baterias de testes padrão-ouro (como WISC, WAIS, ADOS-2) para mapear as funções cognitivas, executivas, de linguagem e de memória do paciente.</p>
        <p>Este processo é fundamental não apenas para identificar défices, mas também para descobrir potencialidades, guiando um plano terapêutico verdadeiramente individualizado.</p>
      </>
    )
  },
  {
    title: 'Terapia ABA',
    description: 'Intervenção intensiva baseada em Análise do Comportamento Aplicada para desenvolvimento de habilidades.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: (
      <>
        <h2>Terapia ABA (Análise do Comportamento Aplicada)</h2>
        <p>Nossa intervenção é baseada nos princípios da ABA, considerada a prática com maior nível de evidência científica para o tratamento do autismo. Focamos no desenvolvimento de habilidades sociais, de comunicação e de autonomia, sempre de forma lúdica e reforçadora.</p>
      </>
    )
  },
  {
    title: 'Nutrologia Pediátrica',
    description: 'Abordagem médica focada na seletividade alimentar e otimização nutricional para o neurodesenvolvimento.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: (
      <>
        <h2>Nutrologia Pediátrica</h2>
        <p>Muitos transtornos do neurodesenvolvimento estão associados a questões gastrointestinais e seletividade alimentar. A Dra. Luciana Lages lidera nossa frente de nutrologia, focada na investigação de alergias, deficiências nutricionais e na otimização da dieta como pilar para o desenvolvimento cognitivo e físico.</p>
      </>
    )
  },
  {
    title: 'Fonoaudiologia',
    description: 'Especializada em comunicação alternativa (PECS, PROMPT), distúrbios de fala, linguagem e deglutição.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: ( <> <h2>Fonoaudiologia</h2> <p>Detalhes sobre Fonoaudiologia...</p> </> )
  },
  {
    title: 'Terapia Ocupacional (T.O.)',
    description: 'Foco em Integração Sensorial de Ayres, habilidades motoras finas, autonomia e atividades de vida diária (AVDs).',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: ( <> <h2>Terapia Ocupacional (T.O.)</h2> <p>Detalhes sobre Terapia Ocupacional...</p> </> )
  },
  {
    title: 'Aconselhamento Jurídico',
    description: 'Suporte legal especializado em Direito da Saúde para garantir o cumprimento de tratamentos por planos de saúde.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: ( <> <h2>Aconselhamento Jurídico</h2> <p>Detalhes sobre Aconselhamento Jurídico...</p> </> )
  },
  {
    title: 'Psicoterapia (TCC)',
    description: 'Terapia Cognitivo-Comportamental para manejo de ansiedade, depressão e comorbidades.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: ( <> <h2>Psicoterapia (TCC)</h2> <p>Detalhes sobre Psicoterapia...</p> </> )
  },
  {
    title: 'Intervenção Precoce',
    description: 'Modelo Denver de intervenção multidisciplinar para crianças de 12 a 48 meses.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: ( <> <h2>Intervenção Precoce (Modelo Denver)</h2> <p>Detalhes sobre Intervenção Precoce...</p> </> )
  },
  {
    title: 'Grupos de Habilidades Sociais',
    description: 'Treinamento de habilidades sociais (THS) em pequenos grupos para crianças e adolescentes.',
    imageUrl: '/images/servico-placeholder.jpg',
    modalContent: ( <> <h2>Grupos de Habilidades Sociais</h2> <p>Detalhes sobre Grupos de Habilidades Sociais...</p> </> )
  },
];


// 3. Propriedades (Sensor + Função de Clique)
type ServicosProps = {
  setActiveSection: (id: string) => void;
  // A função que o "cérebro" nos passa para abrir o modal
  onServiceClick: (service: Service) => void; 
}

export default function Servicos({ setActiveSection, onServiceClick }: ServicosProps) {
  // Configuração do Sensor (igual a antes)
  const { ref, inView } = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      setActiveSection('servicos');
    }
  }, [inView, setActiveSection]);

  return (
    <section id="servicos" ref={ref} className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>SERVIÇOS</h2>
      
      <div className={styles.gridContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image
                src={service.imageUrl}
                alt={`Imagem ilustrativa de ${service.title}`}
                width={600}
                height={400}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              
              {/* 4. O BOTÃO AGORA CHAMA A FUNÇÃO onServiceClick */}
              <button 
                className={styles.cardButton}
                onClick={() => onServiceClick(service)} // <-- A MÁGICA
              >
                Saiba Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}