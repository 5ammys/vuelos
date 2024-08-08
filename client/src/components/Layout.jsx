import { Outlet,Link } from "react-router-dom";

function Layout() {
  return ( 
    <>
      <nav>
        <ul>
          <li className="enlaces">
            <Link to='/main'>
              Vuelos
            </Link>
          </li>
          <li className="enlaces">
            <Link to='/alta'>
              Alta
            </Link>
          </li>
          <li className="enlaces">
            <Link to='/modificacion'>
              Modificacion
            </Link>
          </li>
          <li className="enlaces">
          <Link to='/baja'>
            Baja
          </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
   );
}

export default Layout;