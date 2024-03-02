/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

const SCREEN_HEIGHT: number = Dimensions.get('window').height;
const DEGREE: string = '°';
const API_KEY = '5ea82879d34125448dacff5373bcc3aa'; //TODO: Move the API key to the .env file for security reasons
const DEFAULT_CITY = 'Germiston';

export { SCREEN_HEIGHT, DEGREE, API_KEY, DEFAULT_CITY };
