import { useEffect, useState } from "react";
import { useFly } from "../context/vuelos.context";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Baja() {
  const [selected,setIsSelected] = useState(null);

  const {
    vuelos,
    getVuelos,
    deleteVuelo
  } = useFly();

  const navigate = useNavigate()

  useEffect(() => {
    getVuelos();
  }, [])

  const handleDelete = () => {
    if (selected) {
      deleteVuelo(selected);
      Swal.fire({
        title: '¡Eliminado!',
        text: 'El vuelo fue eliminado correctamente.',
        icon: 'success',
        position:'bottom-end',
        showConfirmButton:false,
        timer:2000,
        toast:true
      }).then(() => {
        navigate('/main');
      });
    }
  };

  return ( 
    <section className="bg-white h-screen overflow-hidden">
      <h1 className="ml-10 py-5 text-5xl">Baja</h1>
      <select value={selected}
        onChange={e=> setIsSelected(e.target.value)}
        className="ml-12"
      >
        <option value="">Seleccionar Vuelo</option>
        {
          vuelos.map((vuelo)=>{
            return(
              <option value={vuelo.flightNumber} key={vuelo.flightNumber} >
                {vuelo.flightNumber} - {vuelo.airlineName}
              </option>
            )
          })
        }
      </select>      
      
      <button onClick={handleDelete}
        className="text-white ml-5 mt-5 px-3 py-2 rounded-sm hover:bg-indigo-600 bg-indigo-700"
      >Eliminar</button>
    </section>
   );
}

export default Baja;