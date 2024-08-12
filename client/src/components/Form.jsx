import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Form({ title, btn, callback }) {

  // Inicialización de hooks
  // `useForm` gestiona el estado y la validación del formulario.
  // `useNavigate` permite redirigir al usuario a otra ruta.
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // La función onSubmit se ejecuta al enviar el formulario, procesa los datos y llama al callback.
  const onSubmit = async (data) => {
    // Convierte la hora ingresada en un objeto Date.
    const timeArrive = new Date();
    const [hours, minutes] = data.timeArrive.split(':');
    timeArrive.setHours(hours);
    timeArrive.setMinutes(minutes);

    // Combina los datos procesados y los pasa al callback.
    const formData = { ...data, timeArrive };
    callback(formData);
    
    // Redirige al usuario a la página principal después del envío.
    navigate('/main');
  }

  return (
    <section className='bg-white h-screen'>
      <div className='ml-10'>
        <h1 className='py-5 text-5xl'>{title}</h1>

        {/* El formulario maneja la validación y el envío usando react-hook-form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Input para seleccionar la hora, validación para campo requerido */}
          <h3 className='mt-4 font-medium'>Horario Llegada</h3>
          <input 
            className='mt-2 border-2 rounded-sm border-slate-400 w-72 text-base' 
            type='time' 
            {...register('timeArrive', { required: true })} 
          />
          {errors.timeArrive && <span className='text-red-500 ml-5 text-base'>Requerido</span>}

          {/* Input con validación de formato y campo requerido del Número de Vuelo */}
          <h3 className='mt-4 font-medium'>Número de Vuelo</h3>
          <input 
            className='mt-2 border-2 rounded-sm border-slate-400 w-72 text-base' 
            placeholder='Ej.: AU 3742' 
            type="text" 
            {...register('flightNumber', { 
              required: 'Requerido', 
              pattern: { value: /^[A-Z]{2} \d{4}$/, message: 'Formato "AZ 9999"' }
            })} 
          />
          {errors.flightNumber && <span className='text-red-500 ml-5 text-base'>{errors.flightNumber.message}</span>}
        
          {/* Input para la línea aérea, validación para campo requerido */}
          <h3 className='mt-4 font-medium'>Línea Aerea</h3>
          <input 
            className='mt-2 border-2 rounded-sm border-slate-400 w-72 text-base' 
            placeholder='Ej.: Latam' 
            {...register('airlineName', { required: true })} 
          />
          {errors.airlineName && <span className='text-red-500 ml-5 text-base'>Requerido</span>}

          {/* Checkbox para indicar si el vuelo está demorado */}
          <h3 className='mt-2 font-medium'>Demorado</h3>
          <input 
            className='mt-2 border-2 border-black' 
            type="checkbox" 
            {...register('isDelayed')} 
          />
          
          {/* Botón para enviar el formulario */}
          <p>
            <input 
              className='text-white mt-5 px-3 py-2 rounded-sm hover:bg-indigo-600 bg-indigo-700' 
              type="submit" 
              value={btn} 
            />
          </p>
        </form>
      </div>
    </section>
  );
}

export default Form;
