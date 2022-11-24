import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import COLORSS from '../const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';


const InputAuth = ({ titlePlaceHolder, isPassWord, isEmail }, props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [errUserName, setErrUserName] = useState("");
  return (
    isEmail ? (<>
      <View style={[style.inputContainer, isFocused && { borderWidth: 1, borderColor: COLORSS.primary }]}>
        <Icon name="email" size={28} />
        <TextInput
          {...props}
          style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
          placeholder={titlePlaceHolder}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChangeText={(text) => {
            if (text === "") {
              setErrUserName("*Email không được bỏ trống")
            } else {
              setErrUserName("")
            }
          }}
        />
      </View>
    </>
    )
      :
      (
        isPassWord ?
          (<View style={[style.inputContainer, isFocused && { borderWidth: 1, borderColor: COLORSS.primary }]}>
            <Icon name="lock" size={28} />
            <TextInput
              {...props}
              style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
              placeholder={titlePlaceHolder}
              onBlur={() => setIsFocused(false)}
              onFocus={() => setIsFocused(true)}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Icon name='remove-red-eye' size={28} style={[{ color: COLORSS.grey }, isFocused && { color: COLORSS.primary }]} />
            </TouchableOpacity>
          </View>)
          :
          (
            <View style={[style.inputContainer, isFocused && { borderWidth: 1, borderColor: COLORSS.primary }]}>
              <Icon name="supervisor-account" size={28} />
              <TextInput
                {...props}
                style={{ flex: 1, marginLeft: 10, fontSize: 18 }}
                placeholder={titlePlaceHolder}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
              />
            </View>
          )
      )


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

export { InputAuth };