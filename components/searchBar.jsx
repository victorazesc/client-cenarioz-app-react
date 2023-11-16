import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RoundedButton from './roundedButton';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchIcon}>
        <FontAwesome name="search" size={16} color="black" />
      </View>
      <View style={styles.searchBarContent}>
        <Text style={styles.searchBarTitle}>O que você está planejando?</Text>
        <Text style={styles.searchBarSubtitle}>Produção - Gravação - Evento</Text>
      </View>
      <RoundedButton style={{position: 'relative'}}iconName={'options'} iconSize={16} color={'black'}></RoundedButton>
    </View>
  );
};

const styles = {
  searchBar: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 36,
    margin: 10,
    marginBottom: 0,
    shadowColor: '#9f9f9f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // Adiciona sombra simulada no iOS
    // height: 'fit-content',
    // width: '-webkit-fill-available'
  },
  searchIcon: {
    marginRight: 16,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 100,
    padding: 12,
  },
  searchBarContent: {
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'manrope-regular',
  },
  searchBarTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#333333',
    marginBottom: 4,
  },
  searchBarSubtitle: {
    fontSize: 12,
    color: '#A1A1A1',
  },
  filterButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 100,
    padding: 12,
  },
};

export default SearchBar;
