import axios from "axios";

const myAPI = '9301fa1d112843ef881111538251104';
const baseUrl = 'https://api.weatherapi.com/v1';


export const useGetWeatherData = () => {

    const getWeatherData = async (city:string) => {
        const response = await axios.get(baseUrl+`/forecast.json?key=${myAPI}&q=${city}`)
        console.log('response.data: ',response.data);
        
        console.log('response.data.current: ', response.data.current.cloud);
        console.log('response.data.forecast.forecastday[0]: ',response.data.forecast.forecastday[0]);
        console.log('response.data.current: ',response.data.current);
        
        return {forecast:response.data.forecast.forecastday[0],
            current:response.data.current,
            location:response.data.location
        }
    }

    return {getWeatherData}
}