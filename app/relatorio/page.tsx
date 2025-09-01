import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Plus, Minus } from "lucide-react"
import { 
  getReceitaMensal, 
  getCustoVariavel, 
  getCustosFixos, 
  getPrestacaoContas, 
  getLucroMensal,
  getClientesAtivos,
  despesas
} from "@/lib/data"

export default function RelatorioFinanceiro() {
  const receitaMensal = getReceitaMensal(9, 2025)
  const custoVariavel = getCustoVariavel()
  const custosFixos = getCustosFixos()
  const prestacaoContas = getPrestacaoContas()
  const custoTotal = custoVariavel + custosFixos + prestacaoContas
  const lucroMensal = getLucroMensal()
  const clientesAtivos = getClientesAtivos()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header com seletor de período */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-balance">Detalhes Financeiros</h1>
            <p className="text-muted-foreground">A Engrenagem da Renda</p>
          </div>
          <Select defaultValue="2025-09">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-09">Setembro/2025</SelectItem>
              <SelectItem value="2025-08">Agosto/2025</SelectItem>
              <SelectItem value="2025-07">Julho/2025</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grid de duas colunas */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Coluna da Esquerda: Receitas */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Plus className="h-5 w-5" />
                (+) Entradas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-primary">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(receitaMensal)}
              </div>
              <p className="text-sm text-muted-foreground">Total de Pagamentos Recebidos</p>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pagamentos de mensalidades</span>
                  <span className="font-semibold">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(receitaMensal)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">
                  {clientesAtivos.length} clientes ativos × R$ 50,00
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Coluna da Direita: Despesas */}
          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Minus className="h-5 w-5" />
                (-) Saídas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold text-destructive">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(custoTotal)}
              </div>
              <p className="text-sm text-muted-foreground">Total de Despesas</p>

              <div className="space-y-3 pt-4 border-t">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Custos Variáveis (IPTV)</span>
                    <span className="font-semibold">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(custoVariavel)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground ml-4">
                    R$ 14,00 × {clientesAtivos.length} clientes
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Custos Fixos</span>
                    <span className="font-semibold">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(custosFixos)}
                    </span>
                  </div>
                  {despesas.filter(d => d.tipo === 'fixo').map((despesa) => (
                    <p key={despesa.id} className="text-xs text-muted-foreground ml-4">
                      {despesa.descricao}: {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(despesa.valor)}
                    </p>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Prestação de Contas</span>
                    <span className="font-semibold">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(prestacaoContas)}
                    </span>
                  </div>
                  {despesas.filter(d => d.tipo === 'prestacao').map((despesa) => (
                    <p key={despesa.id} className="text-xs text-muted-foreground ml-4">
                      {despesa.descricao}: {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(despesa.valor)}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rodapé: Resultado Final */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-xl">Resultado Final</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Receita Bruta</p>
                <p className="text-2xl font-bold text-primary">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(receitaMensal)}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Custos Totais</p>
                <p className="text-2xl font-bold text-destructive">
                  - {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(custoTotal)}
                </p>
              </div>

              <div className="sm:col-span-1">
                <div className="border-t-2 border-dashed border-muted-foreground/30 pt-2">
                  <p className="text-sm text-muted-foreground">Lucro Destinado ao Caixa</p>
                  <div className="flex items-center justify-center gap-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    <p className="text-3xl font-bold text-accent">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(lucroMensal)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
