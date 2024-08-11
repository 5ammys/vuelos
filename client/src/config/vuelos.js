import axiosInstance from './axios.js'

export const saveFly = fly => axiosInstance.post('/flight',fly)
export const updateFly = fly => axiosInstance.put(`/flight/${fly.id}`,fly)
export const deleteFly = id => axiosInstance.delete(`/flight/${id}`)
export const getFlies = () => axiosInstance.get('/flights')