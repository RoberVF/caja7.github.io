import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const budgets = [
  {
    id: 1,
    category: "Alimentación",
    budgeted: 500,
    spent: 400,
    remaining: 100,
    percentage: 80,
  },
  {
    id: 2,
    category: "Transporte",
    budgeted: 250,
    spent: 200,
    remaining: 50,
    percentage: 80,
  },
  {
    id: 3,
    category: "Ocio",
    budgeted: 200,
    spent: 150,
    remaining: 50,
    percentage: 75,
  },
  {
    id: 4,
    category: "Servicios",
    budgeted: 150,
    spent: 120,
    remaining: 30,
    percentage: 80,
  },
  {
    id: 5,
    category: "Ropa",
    budgeted: 100,
    spent: 35,
    remaining: 65,
    percentage: 35,
  },
]

const savingsGoals = [
  {
    id: 1,
    name: "Vacaciones",
    target: 2000,
    current: 1200,
    percentage: 60,
    date: "Dic 2025",
  },
  {
    id: 2,
    name: "Nuevo Ordenador",
    target: 1500,
    current: 750,
    percentage: 50,
    date: "Oct 2025",
  },
]

export function Budget() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Resumen de Presupuesto</CardTitle>
          <CardDescription>Junio 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Presupuesto Total</span>
              <span className="text-sm font-medium">€1,200 / €2,000</span>
            </div>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground text-right">60% utilizado</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Presupuestos por Categoría</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgets.map((budget) => (
              <div key={budget.id} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{budget.category}</span>
                  <span className="text-sm">
                    €{budget.spent} <span className="text-muted-foreground">/ €{budget.budgeted}</span>
                  </span>
                </div>
                <Progress
                  value={budget.percentage}
                  className="h-2"
                  // Cambia el color según el porcentaje de uso
                  style={
                    {
                      backgroundColor: budget.percentage > 90 ? "#fecaca" : "#e5e7eb",
                      "--tw-progress-fill":
                        budget.percentage > 90 ? "#ef4444" : budget.percentage > 75 ? "#f59e0b" : "#adfa1d",
                    } as React.CSSProperties
                  }
                />
                <p className="text-xs text-muted-foreground">€{budget.remaining} restantes</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Objetivos de Ahorro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {savingsGoals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <span className="text-sm font-medium">{goal.name}</span>
                    <p className="text-xs text-muted-foreground">Meta: {goal.date}</p>
                  </div>
                  <span className="text-sm">
                    €{goal.current} <span className="text-muted-foreground">/ €{goal.target}</span>
                  </span>
                </div>
                <Progress value={goal.percentage} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">{goal.percentage}% completado</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Consejo Financiero</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Estás gastando menos en "Ropa" de lo presupuestado. Considera transferir parte de ese presupuesto a tu
            objetivo de ahorro "Vacaciones" para alcanzarlo más rápido.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

