import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Menu(props) {
  const { children, border = false} = props;
  const { navigate } = useNavigation();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPressMenuItem = (index, screen) => {
    setActiveIndex(index);
    navigate(screen ?? 'Home');
  };

  return (
    <View style={[styles.container, !border && styles.containerNoBorder]}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isActive: activeIndex === index,
          onPress: () => onPressMenuItem(index, child.props.screen),
        });
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    shadowColor: '#9f9f9f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  containerNoBorder: {
    borderColor: 'transparent',
    borderBottomColor: '#dddddd',
    shadowColor: 'transparent',
  },
});

export default Menu;
