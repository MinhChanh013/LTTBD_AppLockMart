import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';
import COLORSS from '../const/color';
import { InputAuth } from '../Input/InputAuth';
import { PrimaryButton } from '../Button/Button';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORSS.white }}>
      <View style={{ width: '100%', height: 250, backgroundColor: COLORSS.primary, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>
          LOKMART
        </Text>
        <Text style={{ color: COLORSS.white, letterSpacing: 4, fontSize: 18, textTransform: 'uppercase' }}>
          grocery app
        </Text>
      </View>
      <View>
        <View style={{ paddingHorizontal: 30, marginTop: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Create your account</Text>
          <InputAuth titlePlaceHolder={"UserName"} />
          <InputAuth isEmail titlePlaceHolder={"Email Adress"} />
          <InputAuth isPassWord titlePlaceHolder={"PassWord"} />
          <View style={{ marginTop: 40 }}>
            <PrimaryButton onPress={() => navigation.navigate("Tabbarbottom")} title={"Register"} />
          </View>
          <View style={{marginTop:20, flexDirection:'row'}}>
            <BouncyCheckbox
              size={20}
              fillColor={COLORSS.primary}
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#4eac6d" }}
              innerIconStyle={{ borderWidth: 2 }}
            />
            <Text style={{fontSize:16, color:COLORSS.grey, fontWeight:'bold', width:'100%', paddingHorizontal:10}}>
              By tapping "Sign Up" you accept our <Text style={style.textCheck}>terms</Text> and <Text style={style.textCheck}>condition</Text>
            </Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
            <Text style={{ color: COLORSS.grey }}>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: COLORSS.primary, fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  textCheck: {
    fontWeight:'bold',
    fontSize:15,
    color:COLORSS.primary
  }
})

