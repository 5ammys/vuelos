import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FlyProvider } from './context/vuelos.context.jsx';
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
            <Route path="alta" element={
              <Form title={"Alta"} btn={"Guardar"} />
              } />
            <Route path="modificacion" element={
              <Form title={"Editar"} btn={"Editar"} />
              } />
            <Route path="baja" element={<Baja />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FlyProvider>
  )
}

export default App;
