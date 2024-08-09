import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FlyProvider,useFly } from './context/vuelos.context.jsx';
import Layout from './components/Layout.jsx'
import Form from './components/Form.jsx';
import Vuelos from './components/Vuelos.jsx';
import Baja from './components/Baja.jsx';

function App() {
  return (
    <FlyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="main" element={<Vuelos />} />
            <Route path="alta" element={<AltaForm />}/>
            <Route path="baja" element={<Baja />} />
            <Route path="modificacion" element={<ModificacionForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FlyProvider>
  )
}

function AltaForm() {
  const { saveVuelo } = useFly();
  return <Form title="Alta" btn="Guardar" callback={saveVuelo} />;
}

function ModificacionForm() {
  const { modVuelo } = useFly();
  return <Form title="Modificar" btn="Editar" callback={modVuelo} />;
}
export default App;
