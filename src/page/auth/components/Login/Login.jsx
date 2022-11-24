import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react';
import COLORSS from '../const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InputAuth } from '../Input/InputAuth';
import { PrimaryButton } from '../Button/Button';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../../../../config';


export default function Login() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('')

  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigation.navigate('Tabbarbottom');
    } catch (error) {
      alert(error.message)
    }
  }

  const changePassWord =  () => {
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      alert("Password reset email sent")
    }).catch((error) => {
      alert(error)
    })
  }

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
          <View style={{ marginTop: 20 }}>
            <View style={[style.inputContainer, isFocused && { borderWidth: 1, borderColor: COLORSS.primary }]}>
              <Icon name="email" size={28} />
              <TextInput
                style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
                placeholder="Email"
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View style={[style.inputContainer, isFocused1 && { borderWidth: 1, borderColor: COLORSS.primary }]}>
              <Icon name="lock" size={28} />
              <TextInput
                style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
                placeholder="PassWord"
                onBlur={() => setIsFocused1(false)}
                onFocus={() => setIsFocused1(true)}
                onChangeText={(password) => setPassWord(password)}
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <Icon name='remove-red-eye' size={28} style={[{ color: COLORSS.grey }, isFocused1 && { color: COLORSS.primary }]} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 50 }}>
            <PrimaryButton onPress={() => loginUser(email, password)} title={"Sign in"} />
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
            <TouchableOpacity onPress={() => changePassWord()}>
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

const style = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#e8ebf2',
    alignItems: 'center',
    paddingHorizontal: 20
  },
})


