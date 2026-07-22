import axios from 'axios'

const baseUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&'
const api_key=import.meta.env.VITE_API_KEY

const getWeatherLocation = (lat, lng) => {
    const request = axios.get(`${baseUrl}lat=${lat}&lon=${lng}&APPID=${api_key}`)
    return request.then(response => response.data)
}

export default {
    getWeatherLocation
}