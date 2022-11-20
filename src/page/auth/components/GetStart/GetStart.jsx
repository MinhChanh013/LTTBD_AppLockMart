import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { PrimaryButton } from '../Button/Button'

export default function GetStart({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ height: 400, backgroundColor: '#F66E48', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
        <Image style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          borderRadius: 300 / 2
        }} source={require('../../../../../assets/GetStartedImage.png')} />
      </View>
      <View style={styles.textContent}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
            Best Quality and Fast Delivery!
          </Text>
          <Text style={{ marginTop: 20, fontSize: 14, textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.currentIndicator} />
        </View>
        <PrimaryButton title={"Get Started"}  onPress={() => navigation.navigate("Login")} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingBottom: 40,
    marginTop:18
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: '#F66E48',
    marginHorizontal: 5,
  },
  indicator:{
    height:12,
    width:20,
    borderRadius:6,
    backgroundColor: '#ccc',
    marginHorizontal:5,
  },
})