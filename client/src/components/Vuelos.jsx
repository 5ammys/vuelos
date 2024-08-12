import { useEffect } from "react";
import { useFly } from "../context/vuelos.context";

function Vuelos() {
  // Obtener datos y función de contexto
  const {
    vuelos,
    getVuelos
  } = useFly();

  // Efecto para cargar los datos de los vuelos al montar el componente
  useEffect(() => {
    getVuelos();
  }, []);

  return (
    <main className="bg-white h-screen">
      {/* Título de la página */}
      <h1 className="ml-10 py-5 text-5xl">Próximos Vuelos</h1>

      <div className="flex justify-center mt-5">
        {/* Tabla para mostrar los detalles de los vuelos */}
        <table className="table-auto border-spacing-x-20">
          <thead>
            <tr>
              {/* Encabezados de las columnas */}
              <th className="pr-20">Horario de Llegada</th>
              <th className="pr-20">Vuelo</th>
              <th className="pr-48">Línea Aérea</th>
              <th className="pr-8">Demorado</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderizar cada vuelo en una fila de la tabla */}
            {vuelos.map((vuelo, index) => {
              // Formatear la hora de llegada
              const actualTime = new Date(vuelo.timeArrive);
              const hours = actualTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <tr key={vuelo.flightNumber} className={index % 2 === 0 ? 'bg-gray-300' : ''}>
                  <td className="pr-5">{hours}</td>
                  <td className="pr-5">{vuelo.flightNumber}</td>
                  <td className="pr-5">{vuelo.airlineName}</td>
                  <td className="pr-5">
                    {vuelo.isDelayed ? <div className="text-red-600">Si</div> : 'No'}
                  </td>
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
