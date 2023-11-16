import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/500" }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Florianopolis, Santa Catarina</Text>
        <View style={{display: 'flex', flexDirection: 'row',}}>
          <Ionicons name={'star'} size={18} color={'black'} />
          <Text style={styles.rating}>4.76</Text>
        </View>
      </View>
      <Text style={styles.description}>Estúdio Profissional</Text>
      <Text style={styles.date}>23-26 Dez</Text>
      <Text style={styles.price}>R$ 120/hora</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    flex: 1
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginRight: 10,
  },
  rating: {
    marginLeft: 6,
    fontSize: 16,
    color: "black",
    fontWeight: "regular",
  },
  description: {
    marginVertical: 5,
  },
  date: {
    marginVertical: 5,
  },
  price: {
    fontWeight: "bold",
  },
});

export default Post;
