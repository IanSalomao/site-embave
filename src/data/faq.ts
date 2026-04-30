export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Quanto tempo leva para emplacar um veículo novo?',
    answer: 'O processo de emplacamento de um veículo novo costuma levar de 1 a 3 dias úteis, dependendo da documentação e do órgão responsável. Com a EMBAVE, garantimos a máxima agilidade em cada etapa — na maioria dos casos, finalizamos em até 2 dias úteis.',
  },
  {
    id: '2',
    question: 'Quais documentos preciso para transferência de propriedade?',
    answer: 'Para transferência de propriedade são necessários: CRV (Certificado de Registro do Veículo) assinado pelo vendedor, documentos pessoais do comprador (RG e CPF), comprovante de residência atualizado e laudo de vistoria (quando exigido). Nossa equipe orienta cada cliente individualmente sobre o que é necessário para o seu caso específico.',
  },
  {
    id: '3',
    question: 'Vocês atendem em toda a Bahia?',
    answer: 'Sim! Atendemos clientes em toda a Bahia. Nosso escritório fica em Salvador, mas trabalhamos com clientes de Feira de Santana, Camaçari, Lauro de Freitas, Vitória da Conquista, Ilhéus e demais municípios baianos. Todo o atendimento inicial é feito via WhatsApp, facilitando para quem está em qualquer cidade do estado.',
  },
  {
    id: '4',
    question: 'É possível parcelar o IPVA atrasado?',
    answer: 'Sim, o DETRAN-BA oferece programas de parcelamento para débitos de IPVA. A EMBAVE pode auxiliar todo o processo de regularização, desde a consulta dos débitos até o efetivo pagamento e atualização do licenciamento. Entre em contato para verificar as opções disponíveis para o seu veículo.',
  },
  {
    id: '5',
    question: 'Posso fazer todo o processo sem ir ao DETRAN?',
    answer: 'Na grande maioria dos casos, sim! A EMBAVE realiza todos os procedimentos no DETRAN em seu nome. Você apenas nos envia os documentos necessários (por foto/digitalização via WhatsApp) e nós cuidamos do restante. Em casos específicos que exijam sua presença, sempre avisamos com antecedência.',
  },
  {
    id: '6',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX, transferência bancária, boleto e cartão de crédito/débito. As taxas oficiais do DETRAN são pagas diretamente pelo cliente (com orientação nossa), enquanto os honorários da EMBAVE podem ser parcelados. Fale conosco para um orçamento personalizado.',
  },
]
