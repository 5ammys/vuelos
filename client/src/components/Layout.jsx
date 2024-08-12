import { Outlet, Link } from "react-router-dom";

function Layout() {
  // Sección: Estructura principal
  // `Layout` define la estructura general de la página, incluyendo la barra de navegación y el área principal de contenido.

  return (
    <div className="bg-slate-100 flex flex-col h-screen">
      
      {/* Sección: Barra de navegación */}
      {/* Contiene enlaces a diferentes rutas de la aplicación */}
      <nav>
        <ul className="flex bg-black text-slate-400 text-2xl">
          <li className="m-2 ml-32 hover:text-white ease-in duration-200">
            <Link to='/main'>Vuelos</Link>
          </li>
          <li className="m-2 hover:text-white ease-in duration-150">
            <Link to='/alta'>Alta</Link>
          </li>
          <li className="m-2 hover:text-white ease-in duration-150">
            <Link to='/modificacion'>Modificación</Link>
          </li>
          <li className="m-2 hover:text-white ease-in duration-150">
            <Link to='/baja'>Baja</Link>
          </li>
        </ul>
      </nav>

      {/* Outlet renderiza el componente con Contenido dinámico, correspondiente a la ruta seleccionada */}
      <main className="mx-28 text-xl flex-grow overflow-hidden">
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
