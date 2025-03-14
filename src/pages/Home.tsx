import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Página de Inicio</h1>
      <Link
        to="/dashboard"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Ir al Dashboard
      </Link>
    </div>
  );
}
