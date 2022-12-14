// In App.js in a new project

import React, { useState, useEffect } from "react";
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
import { firebase } from "./config.js";
const Stack = createNativeStackNavigator();
import store from "./store/index";
import { Provider } from "react-redux";
import ProductOfCategories from "./src/page/main/components/ProductOfCategories/ProductOfCategories.jsx";

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <Stack.Navigator
        initialRouteName="GetStart"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="Tabbarbottom" component={Tabbarbottom} /> */}
      </Stack.Navigator>
    );
  }
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Tabbarbottom" component={Tabbarbottom} />

        <Stack.Screen
          name="ProductOfCategories"
          component={ProductOfCategories}
        />
        <Stack.Screen name="Product_Detail" component={Product_Detail} />
        <Stack.Screen name="Shopping_Cart" component={Shopping_Cart} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen
          name="Product_Categories"
          component={Product_Categories}
        />
      </Stack.Navigator>
      {/* </NavigationContainer> */}
    </Provider>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
