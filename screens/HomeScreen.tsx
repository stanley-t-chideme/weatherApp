/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { } from 'react';
import { Dimensions, Image } from 'react-native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { } from '@react-navigation/native';
import { List, Text } from 'react-native-paper';
import { IWeather } from '../types/interfaces/weather';
import { GetWeatherInfo } from '../services/api';
import { KelvinToCelsius } from '../utilis/helpers';
//import FaIcon from 'react-native-vector-icons/FontAwesome';
import Fa6Icon from 'react-native-vector-icons/FontAwesome6';
import { WeatherCard } from '../components/InfoCard';
import { SCREEN_HEIGHT } from '../utilis/constants';



const styles = StyleSheet.create({
  mainConainer: {
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 50,
    height: SCREEN_HEIGHT / 2.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {},
});

function HomeScreen(): React.JSX.Element {
  const [weatherInfo, setWeatherInfo] = React.useState<IWeather | null>();

  React.useEffect(() => {
    GetWeatherInfo('Harare').then((val) => {
      setWeatherInfo(val);
    });
  }, []);

  return <SafeAreaView >
    <View style={styles.container}>
      {/* <Header />*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text variant="headlineMedium">{weatherInfo?.name}</Text>
      </View>
      <Text style={{ textTransform: "capitalize" }}>{weatherInfo?.weather[0].description}</Text>
      <Text variant="displayLarge" style={{ marginVertical: 10 }}>{KelvinToCelsius(weatherInfo?.main.temp!)}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: `https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png` }} width={60} height={60} style={{ padding: 0 }} />
        <Text>{weatherInfo?.weather[0].main}</Text>
      </View>
      <View style={{ width: '100%', flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20, paddingVertical: 0 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text variant='labelSmall' style={{ textTransform: "uppercase" }}>{`Low`}</Text>
          <Text variant='headlineSmall'>{`${KelvinToCelsius(weatherInfo?.main.temp_min!)}`}</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text variant='labelSmall' style={{ textTransform: "uppercase" }}>{`High`}</Text>
          <Text variant='headlineSmall'>{`${KelvinToCelsius(weatherInfo?.main.temp_max!)}`}</Text>
        </View>
      </View>
    </View>


    <View style={{ flexDirection: "row", padding: 10, gap: 20 }}>
      <View style={{ backgroundColor: "#3b3b39", padding: 20, borderRadius: 20, elevation: 10, flex: 1, height: SCREEN_HEIGHT * 0.2 }}>
        <WeatherCard label={'Speed'} value={weatherInfo?.wind.speed!} metric={'m/s'} icon={<Fa6Icon name='wind' size={40} color={"white"} />} />
        <WeatherCard label={'Humidity'} value={weatherInfo?.main.humidity!} metric={'%'} icon={<Fa6Icon name='white' size={40} color={"white"} />} />
      </View>

    </View>

    <List.Section style={{ backgroundColor: "#3b3b39", flexGrow: 1, height: "100%" }}>
      <List.Item title={"Atmospheric pressure"} description={weatherInfo?.main.sea_level} titleStyle={{ color: "white" }} contentStyle={{}}  />
    </List.Section>

  </SafeAreaView>;
}

export default HomeScreen;
