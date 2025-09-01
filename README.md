# Portal da Transparência - Rede de Parceiros

## 📋 Sobre o Projeto

Sistema de gestão e portal da transparência desenvolvido para a Rede de Parceiros, focado na transparência total para os "Parceiros Feitos". O sistema oferece uma visão completa das finanças, clientes e operações da rede.

## 🚀 Melhorias Implementadas

### ✅ Dashboard Principal - "O Olho que Tudo Vê"
- **Barra de Progresso da Meta**: Implementada barra visual para acompanhar o progresso da meta de R$ 30.000,00 para o "Projeto QG - O Santuário"
- **Métricas Dinâmicas**: Todos os valores agora são calculados automaticamente baseados nos dados reais
- **Indicadores de Operação**: Métricas de clientes ativos, atrasados e total da base
- **Cálculos Automáticos**: Receita, custos e lucro calculados em tempo real

### ✅ Relatório Financeiro - "A Engrenagem da Renda"
- **Cálculo Automático de Custos Variáveis**: R$ 14,00 × número de clientes ativos
- **Detalhamento de Despesas**: Separação clara entre custos fixos, variáveis e prestação de contas
- **Resultado Final Dinâmico**: Cálculo automático do lucro destinado ao caixa
- **Formatação Monetária**: Todos os valores formatados em Real brasileiro

### ✅ Página de Clientes
- **Base Expandida**: 150 clientes simulados com dados realistas
- **Filtros Funcionais**: Filtros por status (adimplente/atrasado) e parceiro responsável
- **Indicadores Visuais**: Status visual com cores (verde/vermelho)
- **Métricas Atualizadas**: Contadores dinâmicos baseados nos dados reais

### ✅ Sistema de Dados
- **Estrutura Organizada**: Arquivo `lib/data.ts` com interfaces TypeScript
- **Funções Utilitárias**: Funções para cálculos automáticos e filtragem
- **Dados Simulados**: Base de 150 clientes com distribuição realística
- **Cálculos Consistentes**: Todas as métricas calculadas a partir da mesma fonte

## 🛠️ Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS**: Estilização moderna e responsiva
- **Shadcn/UI**: Componentes de interface profissionais
- **Lucide React**: Ícones modernos e consistentes

## 📊 Estrutura de Dados

### Clientes
- 150 clientes simulados
- Status: adimplente/atrasado (distribuição 80/20)
- Parceiros responsáveis: Gustavo, Ana, João
- Valor padrão: R$ 50,00 por mensalidade

### Despesas
- **Custos Variáveis**: R$ 14,00 por cliente ativo (IPTV)
- **Custos Fixos**: Aluguel (R$ 800,00), Internet (R$ 150,00)
- **Prestação de Contas**: Gasolina, troca de controles, etc.

### Métricas Calculadas
- **Receita Mensal**: Clientes ativos × R$ 50,00
- **Custo Total**: Variáveis + Fixos + Prestação de Contas
- **Lucro Líquido**: Receita - Custo Total

## 🎯 Meta do Bar Sede

- **Objetivo**: R$ 30.000,00
- **Valor Atual**: R$ 15.750,00 (52,5% da meta)
- **Faltam**: R$ 14.250,00
- **Progresso Visual**: Barra de progresso no dashboard

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar o sistema:**
   ```
   http://localhost:3000
   ```

## 📱 Funcionalidades

### Dashboard
- Visão geral das métricas financeiras
- Barra de progresso da meta do Bar Sede
- Indicadores de operação (clientes ativos/atrasados)

### Relatório Financeiro
- Detalhamento completo de receitas e despesas
- Cálculos automáticos de custos variáveis
- Resultado final com lucro destinado ao caixa

### Gestão de Clientes
- Lista completa de clientes
- Filtros por status e parceiro responsável
- Indicadores visuais de status de pagamento

## 🔮 Próximas Implementações

- [ ] Sistema de autenticação
- [ ] Banco de dados PostgreSQL
- [ ] API Routes para operações CRUD
- [ ] Gráficos de evolução mensal
- [ ] Sistema de notificações
- [ ] Relatórios em PDF

## 📝 Notas Técnicas

- Todos os dados são simulados para demonstração
- Cálculos baseados na especificação fornecida
- Interface responsiva para desktop e mobile
- Código organizado com TypeScript e componentes reutilizáveis

---

**Desenvolvido para a Rede de Parceiros - "A confiança é o alicerce da Rede"**

