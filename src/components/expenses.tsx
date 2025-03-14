import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts"

const expenseData = [
  { name: "Vivienda", value: 850, color: "#adfa1d" },
  { name: "Alimentación", value: 400, color: "#8884d8" },
  { name: "Transporte", value: 200, color: "#82ca9d" },
  { name: "Ocio", value: 150, color: "#ffc658" },
  { name: "Servicios", value: 120, color: "#ff8042" },
]

// const monthlyExpenses = [
//   { month: "Ene", amount: 1650 },
//   { month: "Feb", amount: 1720 },
//   { month: "Mar", amount: 1580 },
//   { month: "Abr", amount: 1720 },
//   { month: "May", amount: 1820 },
//   { month: "Jun", amount: 1720 },
// ]

export function Expenses() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Gastos por Categoría</CardTitle>
          <CardDescription>Junio 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`€${value}`, 'Gasto']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gasto Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€1,720.00</div>
            <p className="text-xs text-muted-foreground">+5% respecto al mes anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mayor Gasto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Vivienda</div>
            <p className="text-xs text-muted-foreground">€850.00 (49% del total)</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Desglose de Gastos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenseData.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span>{category.name}</span>
                </div>
                <span className="font-medium">€{category.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
