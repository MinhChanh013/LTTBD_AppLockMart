import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './../Home/Home';
import MyOrder from './../MyOrder/MyOrder';
import Shopping_Cart from './../Shopping_Cart/Shopping_Cart';
import Wishlists from '../Wishlists/Wishlists';
import Profile from '../Profile/Profile';

const Tab = createBottomTabNavigator();
export default function Tabbarbottom() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{
        height:80
      },
      
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{

        tabBarIcon:({focused}) => (
          <Image source={require("../../../../../assets/Home.png")} style={{
            tintColor:focused ? "#fc823d":"gray"
          }} />
        )
      }}
      
      />
      <Tab.Screen name="MyOrder" component={MyOrder}options={{
        tabBarIcon:({focused}) => (
          <Image source={require("../../../../../assets/Combined_Shape.png")} style={{
            tintColor:focused ? "#fc823d":"gray"
          }} />
        )
      }}/>
      <Tab.Screen name="Shopping_Cart" component={Shopping_Cart} options={{
        tabBarIcon:() => (
         <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#fc823d",borderRadius:12,width:39,height:39}}>
            <Image source={require("../../../../../assets/Buy.png")}/>
          </View>
        )
      }}
      
      />
      <Tab.Screen name="Wishlists" component={Wishlists} options={{
        tabBarIcon:({focused}) => (
          <Image source={require("../../../../../assets/Stroke_1.png")} style={{
            tintColor:focused ? "#fc823d":"gray"
          }} />
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:({focused}) => (
          <Image source={require("../../../../../assets/Profile.png")} style={{
            tintColor:focused ? "#fc823d":"gray"
          }} />
        )
      }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    container : {
       flex:1
    }
})