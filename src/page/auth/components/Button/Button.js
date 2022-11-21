import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import COLORSS from '../const/color';


const PrimaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORSS.primary,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: COLORSS.white,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform:'uppercase'
  },
});

export { PrimaryButton };