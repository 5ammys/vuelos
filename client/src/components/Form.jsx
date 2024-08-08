import { useForm } from 'react-hook-form'
import { useFly } from '../context/vuelos.context';

function Form({title,btn,callback}) {


  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm();

  
  return ( 
    <>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(callback)}>
        <h3>Horario Llegada</h3>
        <input type="time" />
        <h3>Vuelo</h3>
        <input type="text" />
        <h3>Línea Aerea</h3>
        <input type="text" />
        <h3>Demorado</h3>
        <input type="checkbox" />
        <input type="submit" value={btn} />
      </form>
    </> 
  );
}

export default Form;