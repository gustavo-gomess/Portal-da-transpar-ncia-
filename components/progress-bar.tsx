"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, TrendingUp } from "lucide-react"

interface ProgressBarProps {
  current: number
  target: number
  title: string
  subtitle?: string
}

export function ProgressBar({ current, target, title, subtitle }: ProgressBarProps) {
  const percentage = Math.min((current / target) * 100, 100)
  const remaining = Math.max(target - current, 0)

  return (
    <Card className="border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-primary/5">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-accent">
          <Target className="h-5 w-5" />
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Progresso</span>
            <span className="text-sm font-bold">{percentage.toFixed(1)}%</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-2 border-t">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Valor Atual</p>
            <p className="text-xl font-bold text-primary">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(current)}
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Faltam</p>
            <p className="text-xl font-bold text-accent">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(remaining)}
            </p>
          </div>
        </div>
        
        <div className="text-center pt-2 border-t">
          <p className="text-sm text-muted-foreground">Meta Final</p>
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <p className="text-2xl font-bold text-accent">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(target)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

