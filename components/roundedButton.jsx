import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class RoundedButton extends React.Component {
  render() {
    const { iconName, label, isActive, iconSize, color, buttonSize, backgroundColor, borderColor = '#DDDDDD' } = this.props;
    return (
      <TouchableOpacity style={{...styles.filterButton, width: buttonSize, height: buttonSize, backgroundColor, borderColor }}>
        <Ionicons
          name={iconName}
          size={iconSize}
          color={color}
        />
      </TouchableOpacity>
    );
  }
}

const styles = {
  filterButton: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 100,
    padding: 12,
    shadowColor: '#9f9f9f',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    overflow: 'hidden'
  },
};