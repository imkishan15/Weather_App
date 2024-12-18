import axios from 'axios'

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='11ffd0a02799967366caafb01746790d';

export const fetchWeather=async(query)=>{
    const {data} =await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}