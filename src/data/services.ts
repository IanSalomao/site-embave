import { Car, ArrowRightLeft, FileText, Receipt, CreditCard } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  image: string
  whatsappMessage: string
}

export const services: Service[] = [
  {
    id: 'emplacamento',
    icon: Car,
    title: 'Emplacamento de Veículos',
    description: 'Primeiro emplacamento de veículos novos ou usados com total segurança e agilidade.',
    image: '/images/servico_emplacamento.jpg',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre Emplacamento de Veículos.',
  },
  {
    id: 'transferencia',
    icon: ArrowRightLeft,
    title: 'Transferência de Propriedade',
    description: 'Processo completo de transferência veicular com toda documentação necessária.',
    image: '/images/servico_transferencia.jpg',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre Transferência de Propriedade.',
  },
  {
    id: 'licenciamento',
    icon: FileText,
    title: 'Licenciamento Anual',
    description: 'Renovação do licenciamento do seu veículo de forma rápida e sem complicações.',
    image: '/images/servico_licenciamento.jpg',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre Licenciamento Anual.',
  },
  {
    id: 'ipva',
    icon: Receipt,
    title: 'Regularização de IPVA',
    description: 'Auxílio na regularização de débitos de IPVA e taxas atrasadas.',
    image: '/images/servico_ipva.jpg',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre Regularização de IPVA.',
  },
  {
    id: 'cnh',
    icon: CreditCard,
    title: 'Serviços de CNH',
    description: 'Renovação, segunda via e outros serviços relacionados à habilitação.',
    image: '/images/servico_cnh.jpg',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de informações sobre Serviços de CNH.',
  },
]
