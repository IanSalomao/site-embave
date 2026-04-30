export interface Testimonial {
  id: string
  name: string
  role: string
  text: string
  image: string
  stars: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Carolina',
    role: 'Salvador, BA',
    text: 'Resolveram em 2 dias o que eu vinha tentando há semanas. Atendimento excelente! Super indico para todos que precisam resolver documentação de veículo sem dor de cabeça.',
    image: '/images/cliente_01.jpg',
    stars: 5,
  },
  {
    id: '2',
    name: 'Marcos Pereira',
    role: 'Lauro de Freitas, BA',
    text: 'Já é a terceira vez que uso os serviços da EMBAVE. Confiança total, sempre rápidos e sem complicação. São os melhores despachantes da Bahia, sem dúvida.',
    image: '/images/cliente_02.jpg',
    stars: 5,
  },
  {
    id: '3',
    name: 'Construtora Horizonte LTDA',
    role: 'Cliente Empresarial',
    text: 'Como empresa, precisava emplacar uma frota nova. A EMBAVE cuidou de tudo, do começo ao fim. Profissionalismo e eficiência em cada etapa do processo.',
    image: '/images/cliente_03.jpg',
    stars: 5,
  },
  {
    id: '4',
    name: 'Patrícia Santos',
    role: 'Feira de Santana, BA',
    text: 'Precisava regularizar o IPVA atrasado e achei que seria um pesadelo. A equipe da EMBAVE simplificou tudo. Resolvido em menos de uma semana!',
    image: '/images/cliente_01.jpg',
    stars: 5,
  },
  {
    id: '5',
    name: 'Ricardo Almeida',
    role: 'Salvador, BA',
    text: 'Transferência de propriedade feita sem estresse. Eles orientaram sobre todos os documentos necessários e o processo correu impecável. Recomendo muito!',
    image: '/images/cliente_02.jpg',
    stars: 5,
  },
]
