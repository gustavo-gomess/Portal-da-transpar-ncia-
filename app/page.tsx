import { DashboardLayout } from "@/components/dashboard-layout"
import { MetricCard } from "@/components/metric-card"
import { ProgressBar } from "@/components/progress-bar"
import { TrendingUp, TrendingDown, DollarSign, Users, UserCheck, UserX } from "lucide-react"
import { 
  getClientesAtivos, 
  getClientesAtrasados, 
  getReceitaMensal, 
  getCustoVariavel, 
  getCustosFixos, 
  getPrestacaoContas, 
  getLucroMensal,
  META_BAR_SEDE,
  VALOR_ACUMULADO_BAR,
  clientes
} from "@/lib/data"

export default function Dashboard() {
  const clientesAtivos = getClientesAtivos()
  const clientesAtrasados = getClientesAtrasados()
  const receitaMensal = getReceitaMensal(9, 2025)
  const custoTotal = getCustoVariavel() + getCustosFixos() + getPrestacaoContas()
  const lucroMensal = getLucroMensal()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-balance">Painel da Rede - O Olho que Tudo Vê</h1>
          <p className="text-muted-foreground">Visão geral dos indicadores financeiros de Setembro/2025</p>
        </div>

        {/* Meta do Bar Sede */}
        <ProgressBar
          current={VALOR_ACUMULADO_BAR}
          target={META_BAR_SEDE}
          title="Projeto QG - O Santuário"
          subtitle="Meta para aquisição do Bar Sede"
        />

        {/* Métricas Financeiras */}
        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard
            title="Receita Bruta"
            value={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(receitaMensal)}
            description="Total arrecadado no mês"
            icon={<DollarSign className="h-6 w-6" />}
            trend={{ value: "+12%", isPositive: true }}
            className="border-l-4 border-l-primary"
          />

          <MetricCard
            title="Custos Totais"
            value={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(custoTotal)}
            description="Fixos, variáveis e prestações"
            icon={<TrendingDown className="h-6 w-6" />}
            trend={{ value: "-5%", isPositive: true }}
            className="border-l-4 border-l-chart-2"
          />

          <MetricCard
            title="Lucro Líquido"
            value={new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(lucroMensal)}
            description="Resultado final do mês"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: "+18%", isPositive: true }}
            className="border-l-4 border-l-accent bg-primary/5"
          />
        </div>

        {/* Métricas da Operação */}
        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard
            title="Total de Clientes"
            value={clientes.length.toString()}
            description="Base total de clientes"
            icon={<Users className="h-6 w-6" />}
            className="border-l-4 border-l-blue-500"
          />

          <MetricCard
            title="Clientes Ativos"
            value={clientesAtivos.length.toString()}
            description="Pagamentos em dia"
            icon={<UserCheck className="h-6 w-6" />}
            trend={{ value: `${((clientesAtivos.length / clientes.length) * 100).toFixed(1)}%`, isPositive: true }}
            className="border-l-4 border-l-emerald-500"
          />

          <MetricCard
            title="Pagamentos Atrasados"
            value={clientesAtrasados.length.toString()}
            description="Necessitam atenção"
            icon={<UserX className="h-6 w-6" />}
            trend={{ value: `${((clientesAtrasados.length / clientes.length) * 100).toFixed(1)}%`, isPositive: false }}
            className="border-l-4 border-l-red-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Evolução Mensal</h3>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Gráfico de evolução será implementado aqui
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Distribuição de Custos</h3>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Gráfico de distribuição será implementado aqui
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
