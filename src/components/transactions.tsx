import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: 1,
    description: "Supermercado Mercadona",
    amount: -85.42,
    date: "25 Jun 2025",
    category: "Alimentación",
    icon: "🛒",
  },
  {
    id: 2,
    description: "Nómina Empresa XYZ",
    amount: 2450.0,
    date: "24 Jun 2025",
    category: "Ingresos",
    icon: "💼",
  },
  {
    id: 3,
    description: "Netflix",
    amount: -12.99,
    date: "22 Jun 2025",
    category: "Entretenimiento",
    icon: "🎬",
  },
  {
    id: 4,
    description: "Restaurante El Rincón",
    amount: -45.5,
    date: "20 Jun 2025",
    category: "Restaurantes",
    icon: "🍽️",
  },
  {
    id: 5,
    description: "Transferencia a María",
    amount: -200.0,
    date: "18 Jun 2025",
    category: "Transferencias",
    icon: "📤",
  },
  {
    id: 6,
    description: "Iberdrola Electricidad",
    amount: -78.35,
    date: "15 Jun 2025",
    category: "Servicios",
    icon: "⚡",
  },
]

export function Transactions() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Movimientos Recientes</CardTitle>
          <CardDescription>Últimas transacciones de tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <span className="text-lg">{transaction.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${transaction.amount > 0 ? "text-green-600" : ""}`}>
                    {transaction.amount > 0 ? "+" : ""}€{Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {transaction.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ingresos (Jun)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+2,450.00€</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gastos (Jun)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-1,720.00€</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Filtrar Transacciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer">
              Todos
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Ingresos
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Gastos
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Transferencias
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Alimentación
            </Badge>
            <Badge variant="outline" className="cursor-pointer">
              Servicios
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

