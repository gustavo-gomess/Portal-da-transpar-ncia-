// Dados simulados para o Portal da Transparência
export interface Cliente {
  id: number
  nome: string
  status: 'adimplente' | 'atrasado'
  ultimoPagamento: string
  parceiroResponsavel: string
  valorMensalidade: number
}

export interface Pagamento {
  id: number
  clienteId: number
  valor: number
  dataPagamento: string
  mesesPagos: number
}

export interface Despesa {
  id: number
  descricao: string
  valor: number
  data: string
  tipo: 'fixo' | 'variavel' | 'prestacao'
}

export interface Parceiro {
  id: number
  nome: string
  email: string
  nivel: 'Parceiro Feito' | 'Parceiro Iniciado'
}

// Dados simulados
export const clientes: Cliente[] = [
  {
    id: 1,
    nome: "Carlos Alberto",
    status: "adimplente",
    ultimoPagamento: "01/09/2025",
    parceiroResponsavel: "Gustavo",
    valorMensalidade: 50
  },
  {
    id: 2,
    nome: "Maria Santos",
    status: "adimplente",
    ultimoPagamento: "28/08/2025",
    parceiroResponsavel: "Ana",
    valorMensalidade: 50
  },
  {
    id: 3,
    nome: "Pedro Costa",
    status: "atrasado",
    ultimoPagamento: "15/08/2025",
    parceiroResponsavel: "João",
    valorMensalidade: 50
  },
  {
    id: 4,
    nome: "Ana Oliveira",
    status: "adimplente",
    ultimoPagamento: "30/08/2025",
    parceiroResponsavel: "Gustavo",
    valorMensalidade: 50
  },
  {
    id: 5,
    nome: "José Silva",
    status: "atrasado",
    ultimoPagamento: "10/08/2025",
    parceiroResponsavel: "Ana",
    valorMensalidade: 50
  },
  {
    id: 6,
    nome: "Fernanda Lima",
    status: "adimplente",
    ultimoPagamento: "02/09/2025",
    parceiroResponsavel: "João",
    valorMensalidade: 50
  },
  // Adicionando mais clientes para atingir 150
  ...Array.from({ length: 144 }, (_, i) => ({
    id: i + 7,
    nome: `Cliente ${i + 7}`,
    status: Math.random() > 0.2 ? 'adimplente' as const : 'atrasado' as const,
    ultimoPagamento: new Date(2025, 7, Math.floor(Math.random() * 30) + 1).toLocaleDateString('pt-BR'),
    parceiroResponsavel: ['Gustavo', 'Ana', 'João'][Math.floor(Math.random() * 3)],
    valorMensalidade: 50
  }))
]

export const pagamentos: Pagamento[] = [
  {
    id: 1,
    clienteId: 1,
    valor: 50,
    dataPagamento: "2025-09-01",
    mesesPagos: 1
  },
  {
    id: 2,
    clienteId: 2,
    valor: 50,
    dataPagamento: "2025-08-28",
    mesesPagos: 1
  },
  // Simulando pagamentos para todos os clientes adimplentes
  ...clientes
    .filter(c => c.status === 'adimplente')
    .map((cliente, index) => ({
      id: index + 3,
      clienteId: cliente.id,
      valor: cliente.valorMensalidade,
      dataPagamento: "2025-09-01",
      mesesPagos: 1
    }))
]

export const despesas: Despesa[] = [
  {
    id: 1,
    descricao: "Custos IPTV",
    valor: 2100,
    data: "2025-09-01",
    tipo: "variavel"
  },
  {
    id: 2,
    descricao: "Aluguel do escritório",
    valor: 800,
    data: "2025-09-01",
    tipo: "fixo"
  },
  {
    id: 3,
    descricao: "Internet",
    valor: 150,
    data: "2025-09-01",
    tipo: "fixo"
  },
  {
    id: 4,
    descricao: "Gasolina",
    valor: 200,
    data: "2025-09-05",
    tipo: "prestacao"
  },
  {
    id: 5,
    descricao: "Troca de controle",
    valor: 80,
    data: "2025-09-10",
    tipo: "prestacao"
  }
]

export const parceiros: Parceiro[] = [
  {
    id: 1,
    nome: "Gustavo",
    email: "gustavo@rede.com",
    nivel: "Parceiro Feito"
  },
  {
    id: 2,
    nome: "Ana",
    email: "ana@rede.com",
    nivel: "Parceiro Feito"
  },
  {
    id: 3,
    nome: "João",
    email: "joao@rede.com",
    nivel: "Parceiro Feito"
  }
]

// Funções utilitárias
export function getClientesAtivos(): Cliente[] {
  return clientes.filter(c => c.status === 'adimplente')
}

export function getClientesAtrasados(): Cliente[] {
  return clientes.filter(c => c.status === 'atrasado')
}

export function getReceitaMensal(mes: number, ano: number): number {
  const clientesAtivos = getClientesAtivos()
  return clientesAtivos.reduce((total, cliente) => total + cliente.valorMensalidade, 0)
}

export function getCustoVariavel(): number {
  const clientesAtivos = getClientesAtivos()
  return clientesAtivos.length * 14 // R$ 14 por cliente
}

export function getCustosFixos(): number {
  return despesas
    .filter(d => d.tipo === 'fixo')
    .reduce((total, despesa) => total + despesa.valor, 0)
}

export function getPrestacaoContas(): number {
  return despesas
    .filter(d => d.tipo === 'prestacao')
    .reduce((total, despesa) => total + despesa.valor, 0)
}

export function getLucroMensal(): number {
  const receita = getReceitaMensal(9, 2025)
  const custoTotal = getCustoVariavel() + getCustosFixos() + getPrestacaoContas()
  return receita - custoTotal
}

// Meta do Bar Sede
export const META_BAR_SEDE = 30000
export const VALOR_ACUMULADO_BAR = 15750 // Valor simulado já acumulado

