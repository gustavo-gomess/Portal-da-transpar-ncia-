import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  trend?: {
    value: string
    isPositive: boolean
  }
  className?: string
}

export function MetricCard({ title, value, description, icon, trend, className }: MetricCardProps) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-balance">{value}</div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-muted-foreground">{description}</p>
          {trend && (
            <span className={cn("text-xs font-medium", trend.isPositive ? "text-primary" : "text-destructive")}>
              {trend.value}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
