import { DashboardLayout } from "@/components/dashboard-layout"
import { MetricCard } from "@/components/metric-card"
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-balance">Painel da Rede - O Olho que Tudo Vê</h1>
          <p className="text-muted-foreground">Visão geral dos indicadores financeiros de Setembro/2025</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard
            title="Receita Bruta"
            value="R$ 7.500,00"
            description="Total arrecadado no mês"
            icon={<DollarSign className="h-6 w-6" />}
            trend={{ value: "+12%", isPositive: true }}
            className="border-l-4 border-l-primary"
          />

          <MetricCard
            title="Custos Totais"
            value="R$ 2.100,00"
            description="Fixos, variáveis e prestações"
            icon={<TrendingDown className="h-6 w-6" />}
            trend={{ value: "-5%", isPositive: true }}
            className="border-l-4 border-l-chart-2"
          />

          <MetricCard
            title="Lucro Líquido"
            value="R$ 5.400,00"
            description="Resultado final do mês"
            icon={<TrendingUp className="h-6 w-6" />}
            trend={{ value: "+18%", isPositive: true }}
            className="border-l-4 border-l-accent bg-primary/5"
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
