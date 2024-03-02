/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
import axios from 'axios';
import { API_KEY } from '../utilis/constants';

interface City {
  id: number;
  name: string;
  sys: {
    country: string;
  };
}

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({visible, onClose}) => {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const searchCities = async () => {
    setLoading(true);
    setNotFound(false);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&appid=${API_KEY}`,
      );
      setSearchResults(response.data.list);
      if (response.data.list.length === 0) {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({item}: {item: City}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onSelectCity(item.name)}>
      <Text>
        {item.name}, {item.sys.country}
      </Text>
    </TouchableOpacity>
  );

  const onSelectCity = (cityName: string) => {
    console.log('Selected city:', cityName);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search for a city"
          onChangeText={setQuery}
          value={query}
          onSubmitEditing={searchCities}
        />
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : notFound ? (
          <View style={styles.notFoundContainer}>
            <Text>No cities found</Text>
          </View>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.list}
          />
        )}
        <Button onPress={onClose} textColor={'black'}>Close</Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchModal;
