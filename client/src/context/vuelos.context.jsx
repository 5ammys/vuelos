import { createContext, useContext,useState } from "react";
import { deleteFly, getFlies, saveFly, updateFly } from "../config/vuelos";

export const FlyContext = createContext();
 
export const useFly = () => {
  const context = useContext(FlyContext);
  if(!context) {
    throw new Error('useFly debe ser usado con un Provider');
  }
  return context;
}

export const FlyProvider = ({children}) => {
  const [vuelos,setVuelos] = useState([]);
  const [errors,setErrors] = useState([]);
  
  const saveVuelo = async (data) => {
    try {
      const res = await saveFly(data)
    } catch (error) {
      console.log(data)
      setErrors(error.response.data)
    }
  }

  const modVuelo = async (vuelo) => {
    try {
      const res = await updateFly(vuelo); 
      getVuelos();
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  const deleteVuelo = async (id) => {
    try {
      const res = await deleteFly(id);
      getVuelos();
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  const getVuelos = async () => {
    try {
      const res = await getFlies();
      setVuelos(res.data);
    } catch (error) {
      setErrors(error.response)
    }
  }

  return (
    <FlyContext.Provider
    value={{
      vuelos,
      errors,
      saveVuelo,
      modVuelo,
      deleteVuelo,
      getVuelos
    }}>
      {children}
    </FlyContext.Provider>
  )
}