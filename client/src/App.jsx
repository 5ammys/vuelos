import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlyProvider, useFly } from './context/vuelos.context.jsx';
import Layout from './components/Layout.jsx';
import Form from './components/Form.jsx';
import Vuelos from './components/Vuelos.jsx';
import Baja from './components/Baja.jsx';

function App() {
  // Sección: Configuración del enrutamiento y contexto
  // FlyProvider envuelve la aplicación para proporcionar acceso global al estado de vuelos.
  // BrowserRouter gestiona el enrutamiento del lado del cliente.

  return (
    <FlyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*Definición de rutas anidadas dentro del layout principal */}
            <Route exact path="main" element={<Vuelos />} />
            <Route path="alta" element={<AltaForm />} />
            <Route path="baja" element={<Baja />} />
            <Route path="modificacion" element={<ModificacionForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FlyProvider>
  );
}

// Sección: Formularios de alta y modificación
// Estas funciones generan componentes de formulario reutilizando el componente `Form`.
// Cada uno pasa una función de callback específica (`saveVuelo` o `modVuelo`) para manejar la lógica de guardado o modificación.

function AltaForm() {
  const { saveVuelo } = useFly();
  return <Form title="Alta" btn="Guardar" callback={saveVuelo} />;
}

function ModificacionForm() {
  const { modVuelo } = useFly();
  return <Form title="Modificar" btn="Editar" callback={modVuelo} />;
}

export default App;
