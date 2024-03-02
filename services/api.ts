/* eslint-disable prettier/prettier */
import axios from 'axios';
import { ICity } from '../types/interfaces/city';
import { IWeather } from '../types/interfaces/weather';
import cities from 'cities.json';

async function GetWeatherInfo(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    let w: IWeather;
    w = await axios.get(url).then((res) => {
        return { ...res.data };
    });

    return w;
}

async function FindCity(query: string): Promise<ICity[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results: ICity[] = [];

            if (query === '' || query === undefined) {
                resolve(results);
            }

            for (const item of Object.values(cities)) {
                if (item.name.startsWith(query)) {
                    results.push(item);
                    if (results.length >= 5) {
                        break;
                    }
                }
            }
            resolve(results);
        }, 0);
    });
}

export { GetWeatherInfo, FindCity };