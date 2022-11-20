// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/page/main/components/Home/Home.jsx";
import MyOrder from "./src/page/main/components/MyOrder/MyOrder.jsx";
import Product from "./src/page/main/components/Product/Product.jsx";
import Product_Categories from "./src/page/main/components/Product_Categories/Product_Categories.jsx";
import Product_Detail from "./src/page/main/components/Product_Detail/Product_Detail.jsx";
import Profile from "./src/page/main/components/Profile/Profile.jsx";
import Search from "./src/page/main/components/Search/Search.jsx";
import Shopping_Cart from "./src/page/main/components/Shopping_Cart/Shopping_Cart.jsx";
import Wishlists from "./src/page/main/components/Wishlists/Wishlists.jsx";
import GetStart from "./src/page/auth/components/GetStart/GetStart.jsx";
import Login from "./src/page/auth/components/Login/Login.jsx";
import Register from "./src/page/auth/components/Register/Register.jsx";
import Tabbarbottom from "./src/page/main/components/Tabbarbottom/Tabbarbottom.js";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStart" screenOptions={
        {
          headerShown:false,
        }
      }>
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tabbarbottom" component={Tabbarbottom} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
