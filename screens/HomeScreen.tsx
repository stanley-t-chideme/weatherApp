/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { IWeather } from '../types/interfaces/weather';
import { GetWeatherInfo } from '../services/api';
import { KelvinToCelsius, KelvinToFahrenheit } from '../utilis/helpers';
import IOIcon from 'react-native-vector-icons/Ionicons';
import Fa6Icon from 'react-native-vector-icons/FontAwesome6';
import { WeatherCard } from '../components/WeatherCard';
import { DEGREE, SCREEN_HEIGHT } from '../utilis/constants';
import { ETemperatureMetrics } from '../types/enums/temperature';
import { Footer } from '../components/Footer';
import { Toggle } from '../components/Toggle';
import SearchModal from '../components/SearchModal';



const styles = StyleSheet.create({
  mainConainer: {
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    height: SCREEN_HEIGHT * 0.9,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  divider: {
    backgroundColor: 'white',
    width: 0.5,
    height: '80%',
    borderRadius: 10,
  },
  weatherCardsContainer: {
    flexDirection: 'row', alignSelf:
      'flex-end',
    marginVertical: 10,
    marginHorizontal: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#3b3b39',
  },
  headerContainer: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 10,
    left: 10,
  },
  text: {},
});



function HomeScreen(): React.JSX.Element {
  const [weatherInfo, setWeatherInfo] = React.useState<IWeather | null>();
  const [metric, setMetric] = React.useState<ETemperatureMetrics>(ETemperatureMetrics.CELCIUS);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);

  const generateTemperatureString = () => {
    return metric === ETemperatureMetrics.CELCIUS ? `${KelvinToCelsius(weatherInfo?.main.temp!)}${DEGREE}C` : `${KelvinToFahrenheit(weatherInfo?.main.temp!)}${DEGREE}F`;
  };

  React.useEffect(() => {
    GetWeatherInfo('Harare').then((val) => {
      setWeatherInfo(val);
    });
  }, []);

  return <SafeAreaView >
    <View style={styles.container}>
      {/* <Header />*/}
      <View style={styles.headerContainer}>
        <View style={{}}>
          <TouchableHighlight onPress={() => setShowSearch(true)} style={{ backgroundColor: 'black', borderRadius: 20, padding: 2, elevation: 10, borderWidth: 1 }}>
            <IOIcon name="location" size={30} color={'white'} />
          </TouchableHighlight>
        </View>
        <View style={{}}>
          <Toggle value={metric} options={{
            left: {
              value: ETemperatureMetrics.CELCIUS,
              label: `${DEGREE}C`,
            },
            right: {
              value: ETemperatureMetrics.FARENHEIGHTS,
              label: `${DEGREE}F`,
            },
          }}
            onChange={(val: ETemperatureMetrics) => {
              setMetric(val);
            }}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text variant="headlineSmall" style={{ marginVertical: 20, fontWeight: '600', letterSpacing: 2 }}>{`${new Date().toDateString()}`}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text variant="headlineMedium">{`${weatherInfo?.name}, ${weatherInfo?.sys.country}`}</Text>
        </View>
        <Text style={{ textTransform: 'capitalize' }}>{weatherInfo?.weather[0].description}</Text>
        <Text variant="displayLarge" style={{ marginVertical: 10 }}>{generateTemperatureString()}</Text>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png` }} width={120} height={120} style={{ padding: 0 }} />
          <Text variant="headlineLarge">{weatherInfo?.weather[0].main}</Text>
        </View>
      </View>

      <View style={styles.weatherCardsContainer}>
        <WeatherCard
          label={'Speed'}
          value={weatherInfo?.wind.speed!}
          metric={'m/s'}
          icon={<Fa6Icon name="wind" size={30} color={'white'} />}
        />
        <View style={styles.divider} />
        <WeatherCard
          label={'Humidity'}
          value={weatherInfo?.main.humidity!}
          metric={'%'}
          icon={<Fa6Icon name="water" size={30} color={'white'} />}
        />
        <View style={styles.divider} />
        <WeatherCard
          label={'Feels Like'}
          value={
            metric === ETemperatureMetrics.CELCIUS ?
              KelvinToCelsius(weatherInfo?.main.feels_like!) : KelvinToFahrenheit(weatherInfo?.main.feels_like!)
          }
          metric={
            metric === ETemperatureMetrics.CELCIUS ?
              `${DEGREE}C` : `${DEGREE}F`
          }
          icon={
            <IOIcon name="thermometer" size={30} color={'white'} />
          } />
      </View>
    </View>

    <Footer />
    <SearchModal visible={showSearch} onClose={() => { setShowSearch(false); }} />
  </SafeAreaView>;
}

export default HomeScreen;
