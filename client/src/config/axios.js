import axios from 'axios';
import Swal from 'sweetalert2';

// Crear una instancia de axios
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api', // Reemplaza con la URL base de tu API
    timeout: 10000, // Tiempo de espera para las solicitudes
    withCredentials: true //Se habilitan las credenciales
});

// Interceptor para manejar errores
axiosInstance.interceptors.response.use(
    response => {
        // Si la respuesta es exitosa, la devolvemos tal cual
        // Se crea un array con las direcciones a las cuales
        // si se desplegará una alerta
        const rutas = ['/flight/undefined','/flight']
        // Se valida la ruta y si está incluida en el array
        // se desplega el SweetAlert2
        if (rutas.includes(response.config.url)) {
            Swal.fire({
                title: '¡Formulario enviado!',
                text: 'Tus datos han sido enviados correctamente.',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
        return response;
    },
    error => {
        // Si hay un error, lo capturamos en una constante
        const errorMsg = error.response?.data?.error || 'Ocurrió un error inesperado';

        // Mostrar el error usando SweetAlert2
        Swal.fire({
            title: 'Error',
            text: errorMsg,
            icon: 'error',
            confirmButtonText: 'OK'
        });

        //Se rechaza la promesa para propagar el error
        return Promise.reject(error);
    }
);

export default axiosInstance;
