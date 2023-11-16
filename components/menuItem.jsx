import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class MenuItem extends React.Component {
  render() {
    const { iconName, label, isActive, onPress, } = this.props;
 
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, isActive && styles.activeMenuItem]}>
        <Ionicons name={iconName} size={22} color={isActive ? '#6332FF': '#717171'} />
        <Text style={[styles.text, isActive && styles.activeMenuItemLabel]}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontFamily: 'manrope-regular',
    fontSize: 12,
    marginTop: 5,
    fontWeight: '500',
    textAlign: 'center',
    color:'#8F969E'
  },
  activeMenuItemLabel: {
    color: '#6332FF',
    fontFamily: 'manrope-bold',
  },
});

export default MenuItem;
