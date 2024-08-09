import { useEffect } from "react";
import { useFly } from "../context/vuelos.context";


function Vuelos() {
  const {
    vuelos,
    getVuelos
  } = useFly();

  useEffect(() => {
    getVuelos();
  }, [])
  return (
    <main className="bg-white h-screen">
  <h1 className="ml-10 py-5 text-5xl">Próximos Vuelos</h1>
  <div className="flex justify-center mt-5">
    <table className="table-auto border-spacing-x-20">
      <thead>
        <tr>
          <th className=" pr-28">Horario de Llegada</th>
          <th className=" pr-20">Vuelo</th>
          <th className=" pr-36">Línea Aérea</th>
          <th className=" pr-8">Demorado</th>
        </tr>
      </thead>
      <tbody >
        {vuelos.map((vuelo,index) => {
          const actualTime = new Date(vuelo.timeArrive);
          const hours = actualTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return (
            <tr key={vuelo.flightNumber} className={index % 2 === 0 ? 'bg-gray-300' : ''} >
              <td className=" pr-5 ">{hours}</td>
              <td className=" pr-5 ">{vuelo.flightNumber}</td>
              <td className=" pr-5 ">{vuelo.airlineName}</td>
              <td className=" pr-5 ">{vuelo.isDelayed ? 'Sí' : 'No'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</main>

  );
}
export default Vuelos;