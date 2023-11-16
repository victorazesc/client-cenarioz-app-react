import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import SearchBar from "../components/searchBar";
import Menu from "../components/menu";
import MenuItem from "../components/menuItem";
import MenuItemTop from "../components/menuItemTop";
import Post from "../components/post";
import RoundedButton from "../components/roundedButton";

const Favorites = () => {

  return (
    <View style={styles.container}>
              <Text style={styles.title}>{'Favoritos'}</Text>
              <Text style={styles.subtitle}>{'Crie sua Primeira lista de favoritos'}</Text>
              <Text style={styles.description}>{'Ao buscar, toque duas vezes na publicaçao para salvar seus lugares prediletos em uma lista de favoritos'}</Text>


  
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    fontFamily: 'manrope-regular',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 35,
    marginBottom: 50
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 12
  },
  description: {
    fontSize: 16,
  }

})

export default Favorites;

