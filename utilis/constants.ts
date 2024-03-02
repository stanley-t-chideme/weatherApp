/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';
import { IWeather } from '../types/interfaces/weather';

const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const DEGREE: string = '°';
const API_KEY = '5ea82879d34125448dacff5373bcc3aa';
const PLACEHOLDER_INFO: IWeather = {
    coord: {
        lon: 0,
        lat: 0,
    },
    weather: [
        {
            id: 0,
            main: '-',
            description: '-',
            icon: '-',
        },
    ],
    base: '-',
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },
    rain: {
        '1h': 0,
    },
    clouds: {
        all: 0,
    },
    dt: 0,
    sys: {
        type: 0,
        id: 0,
        country: '-',
        sunrise: 0,
        sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: '-',
    cod: 0,
};

w = {
    coord: {
        lon: 10.99,
        lat: 44.34,
    },
    weather: [
        {
            id: 501,
            main: 'Rain',
            description: 'moderate rain',
            icon: '10d',
        },
    ],
    base: 'stations',
    main: {
        temp: 298.48,
        feels_like: 298.74,
        temp_min: 297.56,
        temp_max: 300.05,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
    },
    visibility: 10000,
    wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
    },
    rain: {
        '1h': 3.16,
    },
    clouds: {
        all: 100,
    },
    dt: 1661870592,
    sys: {
        type: 2,
        id: 2075663,
        country: 'IT',
        sunrise: 1661834187,
        sunset: 1661882248,
    },
    timezone: 7200,
    id: 3163858,
    name: 'Zocca',
    cod: 200,
};

export { SCREEN_HEIGHT, DEGREE, API_KEY, PLACEHOLDER_INFO };
