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
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen
          name="Product_Categories"
          component={Product_Categories}
        />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Product_Detail" component={Product_Detail} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Shopping_Cart" component={Shopping_Cart} />
        <Stack.Screen name="Wishlists" component={Wishlists} />
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
