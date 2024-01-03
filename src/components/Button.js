import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from '../layout/layout';
const Button = ({title, onPress}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: color.primary,
    width: '70%',
    height: '40%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: color.primary,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 1,
    
  },
  text: {
    color: color.highlight,
    fontFamily: 'ProductSans-Bold',
    fontSize: 20,
    fontWeight: '700',
    padding: 5,
  },
});
export default Button;
