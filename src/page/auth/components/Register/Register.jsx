import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React, { Component, useState } from 'react';
import COLORSS from '../const/color';
import { InputAuth } from '../Input/InputAuth';
import { PrimaryButton } from '../Button/Button';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { firebase } from '../../../../../config';

export default function Register({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [userName, setUserName] = useState('');

  const Registration = async (email, password, userName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://vegetableapp-93081.firebaseapp.com/',
      }).then(() => {
        alert('Verification email sent')
      }).catch((error) => {
        alert(error.message)
      }).then(() => {
        firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid)
          .set({
            userName,
            email
          })
      }).catch((error) => {
        alert(error.message)
      })
    }).catch((error) => {
      alert(error.message)
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
          <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Create your account</Text>
          <View style={[style.inputContainer, isFocused && { borderWidth: 1, borderColor: COLORSS.primary }]}>
            <Icon name="supervisor-account" size={28} />
            <TextInput
              style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
              placeholder="UserName"
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              onChangeText={(userName) => setUserName(userName)}
              autoCorrect={false}
            />
          </View>
          <View style={[style.inputContainer, isFocused1 && { borderWidth: 1, borderColor: COLORSS.primary }]}>
            <Icon name="email" size={28} />
            <TextInput
              style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
              placeholder="Email"
              onBlur={() => setIsFocused1(false)}
              onFocus={() => setIsFocused1(true)}
              autoCorrect={false}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={[style.inputContainer, isFocused2 && { borderWidth: 1, borderColor: COLORSS.primary }]}>
            <Icon name="lock" size={28} />
            <TextInput
              style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
              placeholder="PassWord"
              onBlur={() => setIsFocused2(false)}
              onFocus={() => setIsFocused2(true)}
              autoCorrect={false}
              onChangeText={(password) => setPassWord(password)}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Icon name='remove-red-eye' size={28} style={[{ color: COLORSS.grey }, isFocused2 && { color: COLORSS.primary }]} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 40 }}>
            <PrimaryButton onPress={() => Registration(email, password, userName)} title={"Register"} />
          </View>
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <BouncyCheckbox
              size={20}
              fillColor={COLORSS.primary}
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#4eac6d" }}
              innerIconStyle={{ borderWidth: 2 }}
            />
            <Text style={{ fontSize: 16, color: COLORSS.grey, fontWeight: 'bold', width: '100%', paddingHorizontal: 10 }}>
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
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORSS.primary
  },
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


