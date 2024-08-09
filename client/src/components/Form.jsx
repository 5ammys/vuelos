import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function Form({title,btn,callback}) {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm();

  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    const timeArrive = new Date();
    const [hours, minutes] = data.timeArrive.split(':');
    timeArrive.setHours(hours);
    timeArrive.setMinutes(minutes);
    timeArrive.setSeconds(0);

    const formData = { ...data, timeArrive };

    callback(formData);
    Swal.fire({
      title: '¡Formulario enviado!',
      text: 'Tus datos han sido enviados correctamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      console.log('SweetAlert cerrado, navegando a /main');
      // Navegar después de que el usuario cierre la alerta
      navigate('/main');
    }).catch((error) => {
      console.error('Error con SweetAlert:', error);
    });
  };
  
  return ( 
    <section className='bg-white h-screen'>
      <div className='ml-10'>
      <h1 className='py-5 text-5xl'>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <h3 className='mt-4 font-medium'>Horario Llegada</h3>
        <input className='mt-2 border-2 rounded-sm border-slate-400' type='time' {...register('timeArrive',{required:true})} />
        {errors.timeArrive && <span className='text-red-500 ml-5'>Este campo es requerido</span>}
        
        <h3 className='mt-4 font-medium'>Numero de Vuelo</h3>
        <input className='mt-2 border-2 rounded-sm border-slate-400' type="text"{...register('flightNumber',{required:true})} />
        {errors.flightNumber && <span className='text-red-500 ml-5'>Este campo es requerido</span>}

        <h3 className='mt-4 font-medium'>Línea Aerea</h3>
        <input className='mt-2 border-2 rounded-sm border-slate-400' {...register('airlineName',{required:true})} />
        {errors.airlineName && <span className='text-red-500 ml-5'>Este campo es requerido</span>}

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