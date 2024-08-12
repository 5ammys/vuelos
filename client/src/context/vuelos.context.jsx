import { createContext, useContext, useState } from "react";
import { deleteFly, getFlies, saveFly, updateFly } from "../config/vuelos";

// Crear un contexto para los vuelos
export const FlyContext = createContext();

// Custom hook para usar el contexto de vuelos
export const useFly = () => {
  const context = useContext(FlyContext);
  if (!context) {
    throw new Error('useFly debe ser usado con un Provider');
  }
  return context;
}

// Proveedor del contexto de vuelos
// Cabe destacar, que si bien, deberia usarse trycatch para manejar las funciones asincronicas
// En este caso, el manejo de errores se lo encarga vuelos.js por medio del interceptor de axios

export const FlyProvider = ({ children }) => {
  // Estado para almacenar los vuelos
  const [vuelos, setVuelos] = useState([]);

  // Función para guardar un nuevo vuelo
  const saveVuelo = async (data) => {
     await saveFly(data);
  }

  // Función para modificar un vuelo existente
  const modVuelo = async (vuelo) => {
    await updateFly(vuelo);
  }

  // Función para eliminar un vuelo
  const deleteVuelo = async (id) => {
    await deleteFly(id);
  }

  // Función para obtener la lista de vuelos
  const getVuelos = async () => {
    const res = await getFlies();
    setVuelos(res.data); // Actualiza el estado con los datos obtenidos
  }

  // Proporcionar el estado y funciones a los componentes hijos
  return (
    <FlyContext.Provider
      value={{
        vuelos,
        saveVuelo,
        modVuelo,
        deleteVuelo,
        getVuelos,
      }}>
      {children}
    </FlyContext.Provider>
  )
}
