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
  
  const saveVuelo = async (data) => {
    try {
      const res = await saveFly(data);
      
    } catch (err) {
      
    }
  }

  const modVuelo = async (vuelo) => {
    try {
      const res = await updateFly(vuelo); 
      
    } catch (error) {
      
    }
  }

  const deleteVuelo = async (id) => {
    try {
      
      const res = await deleteFly(id);
    } catch (error) {
      
    }
  }

  const getVuelos = async () => {
    try {
      const res = await getFlies();
      setVuelos(res.data);
    } catch (error) {

      
    }
  }

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