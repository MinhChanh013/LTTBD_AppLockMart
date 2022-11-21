import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react';
import COLORSS from '../const/color';
import { InputAuth } from '../Input/InputAuth';
import { PrimaryButton } from '../Button/Button';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function Login({ navigation }) {

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
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Welcome back</Text>
          <Text style={{ fontSize: 16, color: COLORSS.grey }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <View style={{marginTop:20}}>
            <InputAuth titlePlaceHolder={"Vui lòng nhập username"} />
            <InputAuth isPassWord titlePlaceHolder={"Mật khẩu"} />
          </View>

          <View style={{ marginTop: 50 }}>
            <PrimaryButton onPress={() => navigation.navigate("Tabbarbottom")} title={"Sign in"} />
          </View>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <BouncyCheckbox
              size={16}
              text="Keep Sign In"
              fillColor={COLORSS.primary}
              unfillColor="#FFFFFF"
              textStyle={{
                textDecorationLine: "none",
                marginLeft: -10,
                fontSize: 16,
                fontWeight: 'bold',
              }}
              iconStyle={{ borderColor: "#4eac6d" }}
              innerIconStyle={{ borderWidth: 2 }}
            />
            <TouchableOpacity>
              <Text style={{ fontWeight: 'bold', fontSize: 14, textDecorationLine: 'underline', color: COLORSS.primary }}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
            <Text style={{ color: COLORSS.grey }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: COLORSS.primary, fontWeight: 'bold' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


