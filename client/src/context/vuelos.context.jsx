import { createContext, useContext,useState } from "react";
import { saveFly, updateFly } from "../config/vuelos";

export const FlyContext = createContext();
 
export const useFly = () => {
  const context = useContext(FlyContext);
  if(!context) {
    throw new Error('useFly debe ser usado con un Provider');
  }
}

export const FlyProvider = ({children}) => {
  const [vuelos,setVuelos] = useState([]);
  const [errors,setErrors] = useState([]);
  
  const altaVuelo = async () => {
    try {
      const res = await saveFly()
      setVuelos(res.data);
    } catch (error) {
      setErrors(error.response.data)
    }
  }

  const modVuelo = async (vuelo) => {
    try {
      const res = await updateFly(vuelo);
      
    } catch (error) {
      setErrors(error.response.data)
    }


  }

  return (
    <FlyContext.Provider
    value={{
      vuelos,
      errors,
      altaVuelo,
      modVuelo
    }}>
      {children}
    </FlyContext.Provider>
  )
}