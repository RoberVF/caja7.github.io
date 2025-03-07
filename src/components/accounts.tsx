import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const accountData = [
  { name: "Ene", balance: 5200 },
  { name: "Feb", balance: 5800 },
  { name: "Mar", balance: 5400 },
  { name: "Abr", balance: 6200 },
  { name: "May", balance: 6800 },
  { name: "Jun", balance: 7500 },
]

export function Accounts() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cuenta Corriente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€7,500.00</div>
            <p className="text-xs text-muted-foreground">ES12 3456 7890 1234 5678</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cuenta de Ahorros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€12,345.67</div>
            <p className="text-xs text-muted-foreground">ES98 7654 3210 9876 5432</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Balance de Cuenta Corriente</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={accountData}>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `€${value}`}
              />
              <Tooltip 
                formatter={(value) => [`€${value}`, 'Balance']}
                labelFormatter={(label) => `${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="balance" 
                stroke="#adfa1d" 
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M6 12h12"></path>
                  <path d="M12 18V6"></path>
                </svg>
              </div>
              <span className="text-xs">Nuevo Pago</span>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m19 13-5 5-5-5"></path>
                  <path d="m19 7-5 5-5-5"></path>
                </svg>
              </div>
              <span className="text-xs">Transferir</span>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <span className="text-xs">Tarjetas</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
