/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Button, Searchbar } from 'react-native-paper';
import { FindCity } from '../services/api';
import { ICity } from '../types/interfaces/city';
import IOIcon from 'react-native-vector-icons/Ionicons';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  selectCity: (val: string) => Promise<void>;
}

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClose, selectCity }) => {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ICity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  const searchCities = async () => {
    setLoading(true);
    setNotFound(false);
    try {
      const response = await FindCity(query);
      setSearchResults(response);
      if (response.length === 0) {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }: { item: ICity }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onSelectCity(item.name)}>
      <IOIcon name="location" size={20} color={'gray'} style={{ margin: 6, marginLeft: 0 }} />
      <View>
        <Text style={{ fontWeight: '900' }}>
          {item.name}
        </Text>
        <Text>
          {item.country}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const onSelectCity = async (cityName: string) => {
    await selectCity(cityName).then(() => {
      onClose();
    });
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search for a city"
          onChangeText={(text: string) => {
            setQuery(text);
            if (text !== undefined) {
              searchCities();
            }
          }}
          value={query}
          onClearIconPress={() => {
            setQuery('');
            setSearchResults([]);
          }}
        />
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : notFound ? (
          <View style={styles.notFoundContainer}>
            <Text>No cities found</Text>
          </View>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item, i) => i.toString()}
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
    flexDirection: 'row',
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
