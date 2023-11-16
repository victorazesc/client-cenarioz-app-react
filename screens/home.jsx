import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import SearchBar from "../components/searchBar";
import Menu from "../components/menu";
import MenuItem from "../components/menuItem";
import MenuItemTop from "../components/menuItemTop";
import Post from "../components/post";
import RoundedButton from "../components/roundedButton";
import Drawer from "react-native-drawer";
import Favorites from "./favoritos";
import MenuScroll from "../components/menuScroll";
import MenuSlide from "../components/menuSlide";

const PRODUCTS = [
  { id: 1, name: "Produto 1", price: "R$ 10,00" },
  { id: 2, name: "Produto 2", price: "R$ 20,00" },
  { id: 3, name: "Produto 3", price: "R$ 30,00" },
  { id: 4, name: "Produto 4", price: "R$ 40,00" },
  { id: 5, name: "Produto 5", price: "R$ 50,00" },
  { id: 6, name: "Produto 6", price: "R$ 60,00" },
  { id: 7, name: "Produto 7", price: "R$ 70,00" },
  { id: 8, name: "Produto 8", price: "R$ 80,00" },
  { id: 9, name: "Produto 8", price: "R$ 80,00" },
  { id: 10, name: "Produto 8", price: "R$ 80,00" },
  { id: 11, name: "Produto 8", price: "R$ 80,00" },
  { id: 12, name: "Produto 8", price: "R$ 80,00" },
  { id: 13, name: "Produto 8", price: "R$ 80,00" },
];

const Home = () => {
  const renderProduct = ({ item }) => {
    return <Post />;
  };

  return (
    <View style={styles.container}>
      <View>
        <SearchBar />
        <View style={{ height: 100 }}>
          <MenuSlide>
          <MenuItemTop label="Top!" iconName="star-outline" />
            <MenuItemTop label="Produção" iconName="film-outline" selected />
            <MenuItemTop label="Fotografia" iconName="camera-outline" />
            <MenuItemTop label="Gravação" iconName="mic-outline" />
            <MenuItemTop label="Festas" iconName="wine-outline" />
          </MenuSlide>
        </View>

        {/* <MenuScroll>
        <MenuItemTop label="Top!" iconName="star-outline" />
          <MenuItemTop label="Produção" iconName="film-outline" selected />
          <MenuItemTop label="Fotografia" iconName="camera-outline" />
          <MenuItemTop label="Gravação" iconName="mic-outline" />
          <MenuItemTop label="Festas" iconName="wine-outline" />
        </MenuScroll> */}
      </View>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
      <View
        style={{
          position: "absolute",
          alignContent: "center",
          alignSelf: "center",
          bottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RoundedButton
          iconName={"ios-location"}
          iconSize={22}
          buttonSize={50}
          backgroundColor={"black"}
          color={"white"}
          borderColor="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  searchBar: {
    justifyContent: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    backfaceVisibility: "hidden",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  productContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
  },
  menuBar: {
    height: 60,
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  menuItem: {
    fontSize: 16,
    color: "#666",
  },
});

export default Home;
