import React, { useState, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';

const MenuScroll = ({children}) => {
  const [activeItem, setActiveItem] = useState(0);
  const [sc, setsc] = useState(0);
  const scrollRef = useRef();
  const animationValue = useRef(new Animated.Value(0)).current;

  const handlePressItem = (index) => {
  
    setActiveItem(index);
    Animated.timing(animationValue, {
      toValue: index === 1 ? 180 : index === 0 ? 90 : index * 90,
      duration: 300,
      useNativeDriver: true,
    }).start();
    scrollRef.current.scrollTo({ x: index === 1 ? 0 : index === 0 ? 0 : index * 90});
  };

  const jj = () => {
    console.log("oiii")
  }

  return (
    <View style={styles.menuContainer}>
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        onScroll={jj()}
        scrollEnabled={true}
        
      >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isActive: activeItem === index,
          onPress: () => handlePressItem(index),
        });
      })}

        {/* <TouchableOpacity style={styles.menuItem} onPress={() => handlePressItem(0)}>
          <Text style={[styles.menuText, activeItem === 0 && styles.activeText]}>Chalés</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePressItem(1)}>
          <Text style={[styles.menuText, activeItem === 1 && styles.activeText]}>Praias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePressItem(2)}>
          <Text style={[styles.menuText, activeItem === 2 && styles.activeText]}>Lojas</Text>
        </TouchableOpacity> */}
      </ScrollView>
      <Animated.View style={[styles.menuLine, { transform: [{ translateX: animationValue }] }]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  menuItem: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  menuText: {
    color: '#999999',
    fontSize: 16,
  },
  activeText: {
    color: 'red',
    fontWeight: 'bold',
  },
  menuLine: {
    position: 'absolute',
    bottom: 0,
    left: -90,
    height: 2,
    width: 90,
    backgroundColor: 'black',
  },
});

export default MenuScroll;
