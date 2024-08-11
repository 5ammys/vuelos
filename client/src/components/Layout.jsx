import { Outlet,Link } from "react-router-dom";

function Layout() {
  return ( 
    <div className="bg-slate-100 flex flex-col h-screen">
      
      <nav>
        <ul className="flex bg-black text-slate-400 text-2xl ">
          <li className="m-2 ml-32 hover:text-white ease-in duration-200">
            <Link to='/main'>
              Vuelos
            </Link>
          </li>
          <li className="m-2 hover:text-white ease-in duration-150">
            <Link to='/alta'>
              Alta
            </Link>
          </li>
          <li className="m-2 hover:text-white ease-in duration-150">
            <Link to='/modificacion'>
              Modificacion
            </Link>
          </li>
          <li className="m-2 hover:text-white ease-in duration-150">
          <Link to='/baja'>
            Baja
          </Link>
          </li>
        </ul>
      </nav>

      <main className="mx-28 text-xl flex-grow overflow-hidden">
        <Outlet />
      </main>

    </div>
   );
}

export default Layout;