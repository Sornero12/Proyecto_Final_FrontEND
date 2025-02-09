import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">Proyecto Aerolinea</h1>
      <p className="text-md text-slate-400">
        Este proyecto perteneciente a Helen Rentería y Alexis Facundo,
        contiene un CRUD donde se puede registrar, 
        logear y descargar los datos ingresados en un pdf. 
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Empecemos
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
