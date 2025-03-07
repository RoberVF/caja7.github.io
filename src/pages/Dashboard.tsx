import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accounts } from "../components/accounts"
import { Expenses } from "../components/expenses"
import { Transactions } from "../components/transactions"
import { Budget } from "../components/budget"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-lg md:max-w-2xl lg:max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Caja7</h1>
      <Tabs defaultValue="accounts" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="accounts">Cuentas</TabsTrigger>
          <TabsTrigger value="expenses">Gastos</TabsTrigger>
          <TabsTrigger value="transactions">Movimientos</TabsTrigger>
          <TabsTrigger value="budget">Presupuesto</TabsTrigger>
        </TabsList>
        <TabsContent value="accounts">
          <Accounts />
        </TabsContent>
        <TabsContent value="expenses">
          <Expenses />
        </TabsContent>
        <TabsContent value="transactions">
          <Transactions />
        </TabsContent>
        <TabsContent value="budget">
          <Budget />
        </TabsContent>
      </Tabs>
    </div>
  )
}

