import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";

const MenuSlide = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const scrollRef = useRef();
  const animationValue = useRef(new Animated.Value(0)).current;

  const handleScroll = (event) => {
    if (event && !isSelected) {
      const { contentOffset } = event.nativeEvent;
      const contentWidth = event.nativeEvent.contentSize.width;
      const layoutWidth = event.nativeEvent.layoutMeasurement.width;
      let index = 0;
      index = Math.floor(
        (contentOffset.x / (contentWidth - 90)) * children.length
      );
      Animated.timing(animationValue, {
        toValue: index * 80,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setSelectedIndex(index);
    }
  };

  const handlePress = (index) => {
    setIsSelected(true);
    setTimeout(() => setIsSelected(false), 400);
    setSelectedIndex(index);
    console.log(index);
    Animated.timing(animationValue, {
      toValue: index * 80,
      duration: 300,
      useNativeDriver: true,
    }).start();

    scrollRef.current.scrollTo({ x: index * 80 });

    // Aqui você pode chamar a função para navegar para a página correspondente
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        bounces={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ width: children.length * 80 + 30 }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            isActive: index === selectedIndex,
            onPress: () => handlePress(index),
          });
        })}
      </ScrollView>
      <Animated.View
        style={[
          { ...styles.menuLine, left: selectedIndex == 0 ? 0 : -80 },
          { transform: [{ translateX: animationValue }] },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  itemSelected: {
    backgroundColor: "#ccc",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  labelSelected: {
    color: "#fff",
  },
  menuLine: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: 80,
    backgroundColor: "black",
  },
});

export default MenuSlide;
