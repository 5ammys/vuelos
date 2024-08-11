import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Form({ title, btn, callback }) {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const timeArrive = new Date();
    const [hours, minutes] = data.timeArrive.split(':');
    timeArrive.setHours(hours);
    timeArrive.setMinutes(minutes);
    timeArrive.setSeconds(0);

    const formData = { ...data, timeArrive };
    
    callback(formData);
    
    navigate('/main')
  }
  return (
    <section className='bg-white h-screen'>
      <div className='ml-10'>
        <h1 className='py-5 text-5xl'>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <h3 className='mt-4 font-medium'>Horario Llegada</h3>
          <input className='mt-2 border-2 rounded-sm border-slate-400 w-72 text-base' type='time' {...register('timeArrive', { required: true })} />
          {errors.timeArrive && <span className=' text-red-500 ml-5 text-base'>El horario de llegada es requerido</span>}

          <h3 className='mt-4 font-medium'>Numero de Vuelo</h3>
          <input className='mt-2 border-2 rounded-sm border-slate-400 w-72 text-base'placeholder='Numero de vuelo p.ej.: AU 3742' type="text"
          {...register('flightNumber', { required: 'El vuelo es requerido', pattern:{
              value:/^[A-Z]{2} \d{4}$/,
              message: 'El formato de debe ser como "AZ 99999"'
             }})} />
          {(errors.flightNumber &&
          <span className='text-red-500 ml-5 text-base'>
            {errors.flightNumber.message}
            </span>)}
        
          <h3 className='mt-4 font-medium'>Línea Aerea</h3>
          <input className='mt-2 border-2 rounded-sm border-slate-400 w-72 text-base' placeholder='Línea Aerea p.ej.: Latam' {
            ...register('airlineName',
             { required: true})}
          />
          {errors.airlineName && <span className='text-red-500 ml-5 text-base'>La línea aerea es requerida</span>  }
        

          <h3 className='mt-2 font-medium'>Demorado</h3>
          <input className='mt-2 border-2 border-black' type="checkbox"{...register('isDelayed')} />

          <p>
            <input className='text-white mt-5 px-3 py-2 rounded-sm hover:bg-indigo-600 bg-indigo-700' type="submit" value={btn} />
          </p>
        </form>
      </div>
    </section>
  );
}
export default Form;