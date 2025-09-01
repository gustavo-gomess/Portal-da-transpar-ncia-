"use client"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserCheck, UserX } from "lucide-react"
import { useState } from "react"

const clientes = [
  {
    id: 1,
    nome: "Carlos Alberto",
    status: "adimplente",
    ultimoPagamento: "01/09/2025",
    parceiroResponsavel: "Gustavo",
  },
  { id: 2, nome: "Maria Santos", status: "adimplente", ultimoPagamento: "28/08/2025", parceiroResponsavel: "Ana" },
  { id: 3, nome: "Pedro Costa", status: "atrasado", ultimoPagamento: "15/08/2025", parceiroResponsavel: "João" },
  { id: 4, nome: "Ana Oliveira", status: "adimplente", ultimoPagamento: "30/08/2025", parceiroResponsavel: "Gustavo" },
  { id: 5, nome: "José Silva", status: "atrasado", ultimoPagamento: "10/08/2025", parceiroResponsavel: "Ana" },
  { id: 6, nome: "Fernanda Lima", status: "adimplente", ultimoPagamento: "02/09/2025", parceiroResponsavel: "João" },
]

const parceiros = ["Todos", "Gustavo", "Ana", "João"]

export default function Clientes() {
  const [filtroStatus, setFiltroStatus] = useState("Todos")
  const [filtroParceiro, setFiltroParceiro] = useState("Todos")

  const clientesAdimplentes = clientes.filter((c) => c.status === "adimplente").length
  const clientesAtrasados = clientes.filter((c) => c.status === "atrasado").length

  const clientesFiltrados = clientes.filter((cliente) => {
    const statusMatch = filtroStatus === "Todos" || cliente.status === filtroStatus.toLowerCase()
    const parceiroMatch = filtroParceiro === "Todos" || cliente.parceiroResponsavel === filtroParceiro
    return statusMatch && parceiroMatch
  })

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-balance">Nossos Clientes</h1>
          <p className="text-muted-foreground">A Base da Rede</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clientes.length}</div>
              <p className="text-xs text-muted-foreground">Base total de clientes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Adimplentes</CardTitle>
              <UserCheck className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">{clientesAdimplentes}</div>
              <p className="text-xs text-muted-foreground">Pagamentos em dia</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atrasados</CardTitle>
              <UserX className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{clientesAtrasados}</div>
              <p className="text-xs text-muted-foreground">Necessitam atenção</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Status filters */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Status:</span>
                {["Todos", "Adimplentes", "Atrasados"].map((status) => (
                  <Button
                    key={status}
                    variant={filtroStatus === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFiltroStatus(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>

              {/* Partner filters */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-muted-foreground">Parceiro:</span>
                {parceiros.map((parceiro) => (
                  <Button
                    key={parceiro}
                    variant={filtroParceiro === parceiro ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFiltroParceiro(parceiro)}
                  >
                    {parceiro}
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-md border mt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Nome do Cliente
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Último Pagamento
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                        Parceiro Responsável
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientesFiltrados.map((cliente) => (
                      <tr key={cliente.id} className="border-b transition-colors hover:bg-muted/50">
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                cliente.status === "adimplente" ? "bg-emerald-500" : "bg-red-500"
                              }`}
                            />
                          </div>
                        </td>
                        <td className="p-4 align-middle font-medium">{cliente.nome}</td>
                        <td className="p-4 align-middle text-sm">{cliente.ultimoPagamento}</td>
                        <td className="p-4 align-middle text-sm font-medium">{cliente.parceiroResponsavel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
